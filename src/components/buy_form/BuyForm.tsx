import React, { useEffect, useRef, useState } from 'react';
import styles from './BuyForm.module.css';
import Input from '../input/Input';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

interface BuyFormProps {
  config: string;
  className?: string;
  coustumeBtn?: string;
  tag: string;
  service: string;
  onSuccess?: () => void;
  onError?: () => void;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

// Simple UUID generator
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function BuyForm({
  config,
  tag,
  service,
  onSuccess,
  onError,
  className,
  coustumeBtn,
}: BuyFormProps) {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false); // ← new
  const startTimeRef = useRef<number>(Date.now());
  const infoRef = useRef<HTMLInputElement>(null);
  const scrollDepthRef = useRef(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const clickCountRef = useRef(0);
  const errorCountRef = useRef(0);
  const [sessionId, setSessionId] = useState('');
  const [pageViews, setPageViews] = useState(0);
  const siteKey =
    import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
    '6LchGPEhAAAAAMDKsieZ9yCLdtGOMYho5UnJdsKU';

  useEffect(() => {
    setSource(window.location.href);
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.body.appendChild(script);
    }
    // Session ID
    let sid = sessionStorage.getItem('session_id');
    if (!sid) {
      sid = generateUUID();
      sessionStorage.setItem('session_id', sid);
    }
    setSessionId(sid);

    // Page views
    const pv = Number(sessionStorage.getItem('page_views') || '0') + 1;
    sessionStorage.setItem('page_views', pv.toString());
    setPageViews(pv);

    // Scroll depth tracking
    const onScroll = () => {
      const depth = Math.round(
        ((window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight) *
          100
      );
      if (depth > scrollDepthRef.current) {
        scrollDepthRef.current = depth;
        setScrollDepth(depth);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return; // ← prevent re-submit
    setLoading(true); // ← start loading

    const form = e.currentTarget;
    const data = new FormData(form);
    const elapsedSec = Math.round((Date.now() - startTimeRef.current) / 1000);

    const now = new Date();
    const dateString = now.toLocaleString('ro-RO', {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const fullInfo = ` ${config}, 
      lang - ${t('lang')}, 
      date - ${dateString}, 
      time on the page - ${elapsedSec} seconds, 
      connection_type - ${(navigator as any).connection?.effectiveType || 'not found'}, 
      user_agent- ${navigator.userAgent} , 
      session_id - ${sessionId}, 
      page_views - ${pageViews.toString()}, 
      order_clicks - ${clickCountRef.current.toString()}, 
      error_count - ${errorCountRef.current.toString()}, 
      scroll_depth - ${scrollDepth.toString()}
      `;

    // update hidden input value
    if (infoRef.current) {
      infoRef.current.value = fullInfo;
    }
    data.set('info', fullInfo);

    let token = '';
    if (window.grecaptcha) {
      try {
        token = await window.grecaptcha.execute(siteKey, { action: tag });
      } catch {
        // silently ignore recaptcha errors
      }
    }
    data.set('recaptcha_response', token);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
      });

      if (!res.ok) {
        onError?.();
        return;
      }

      const result: { success: boolean; response: string } = await res.json();
      const parsed = JSON.parse(result.response);

      if (result.success && parsed.score > 0.6) {
        onSuccess?.();
      } else {
        onError?.();
      }
    } catch {
      onError?.();
    } finally {
      setLoading(false); // ← stop loading
    }
  };

  return (
    <form
      // action="https://dev3.moldtelecom.md/new_comanda_marketing/"
      action="https://www.moldtelecom.md/new_comanda_marketing/"
      method="post"
      className={`${styles.popup_form} ${className}`}
      onSubmit={handleSubmit}
    >
      <Input
        type="tel"
        inputMode="numeric"
        maxLength={9}
        name="phone"
        pattern="[0]{1}[2,6,7]{1}[0-9]{7}"
        placeholder="0 ( - - ) - - -  - - - *"
        required
        value={phone}
        onChange={e => /^\d*$/.test(e.target.value) && setPhone(e.target.value)}
        icon="call"
      />
      <Button
        loading={loading} // ← pass loading
        disabled={loading} // ← disable while loading
        color="var(--theme_primary_color_blue_4)"
        bgcolor="var(--theme_primary_color_blue_3)"
        border="var(--theme_primary_color_blue_3)"
        hover_border="var(--theme_primary_color_blue_2)"
        hover_bgcolor="var(--theme_primary_color_blue_2)"
        icon="arrow_right"
        type="submit"
      >
        {coustumeBtn ? coustumeBtn : t('order_now')}
      </Button>
      <input type="hidden" name="lang" value={t('lang')} />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="service" value={tag} />
      <input type="hidden" name="tag" value={service} />
      <input type="hidden" name="info" ref={infoRef} value="" />
      <input type="hidden" name="recaptcha_response" />
    </form>
  );
}
