import React, { useEffect, useState } from 'react';
import styles from './BuyForm.module.css';
import Input from '../input/Input';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

interface BuyFormProps {
  config: string;
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

export default function BuyForm({
  config,
  tag,
  service,
  onSuccess,
  onError,
}: BuyFormProps) {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');
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
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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
    }
  };

  return (
    <form
      action="https://dev3.moldtelecom.md/new_comanda_marketing/"
      method="post"
      className={styles.popup_form}
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
        color="var(--theme_primary_color_blue_4)"
        bgcolor="var(--theme_primary_color_blue_3)"
        border="var(--theme_primary_color_blue_3)"
        hover_border="var(--theme_primary_color_blue_2)"
        hover_bgcolor="var(--theme_primary_color_blue_2)"
        icon="arrow_right"
        type="submit"
      >
        {t('order_now')}
      </Button>
      <input type="hidden" name="lang" value={t('lang')} />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="service" value={service} />
      <input type="hidden" name="tag" value={tag} />
      <input type="hidden" name="info" value={config} />
      <input type="hidden" name="recaptcha_response" />
    </form>
  );
}
