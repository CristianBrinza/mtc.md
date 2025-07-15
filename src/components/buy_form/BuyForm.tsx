// src/components/BuyForm.tsx
import styles from './BuyForm.module.css';
import Input from '../input/Input';
import Button from '../Button';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { laravelRandom } from '../../utils/laravelCsrf';

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

const BuyForm: React.FC<BuyFormProps> = ({
  config,
  tag,
  service,
  onSuccess,
  onError,
}) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');
  const recaptchaInput = useRef<HTMLInputElement>(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
  // const [csrfToken] = useState(() => laravelRandom());

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setPhone(value);
  };

  useEffect(() => {
    setSource(window.location.href);

    if (!siteKey) {
      console.error('Missing reCAPTCHA site key – skipping script injection.');
      return;
    }

    const scriptId = 'recaptcha-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.onload = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(siteKey, { action: 'contact' })
              .then((token: string) => {
                if (recaptchaInput.current)
                  recaptchaInput.current.value = token;
              });
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [siteKey]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const doFetch = async (token?: string) => {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      if (token && recaptchaInput.current)
        data.set('recaptcha_response', token);

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: data,
        });
        if (res.ok) {
          onSuccess?.();
        } else {
          onError?.();
        }
      } catch {
        onError?.();
      }
    };

    if (!siteKey || !window.grecaptcha) {
      doFetch();
    } else {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, { action: 'submit' })
          .then(doFetch)
          .catch(() => onError?.());
      });
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
        placeholder="0 ( - - ) - - -  - - -"
        required
        value={phone}
        onChange={handlePhoneChange}
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
        Comandă acum
      </Button>

      <input type="hidden" name="lang" value={t('lang')} />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="service" value={service} />
      <input
        type="hidden"
        id="recaptchaResponse"
        name="recaptcha_response"
        ref={recaptchaInput}
      />
      <input type="hidden" name="tag" value={tag} />
      <input type="hidden" name="info" value={config} />
      {/*<input type="hidden" name="_token" value={csrfToken} />*/}
    </form>
  );
};

export default BuyForm;
