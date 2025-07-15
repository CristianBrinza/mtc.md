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
    if (/^\d*$/.test(value)) setPhone(value); // allow digits only
  };

  useEffect(() => {
    setSource(window.location.href);

    if (!siteKey) return;
    const populateToken = () => {
      if (window.grecaptcha && recaptchaInput.current) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(siteKey, { action: 'contact' })
            .then((token: string) => {
              recaptchaInput.current!.value = token;
            })
            .catch(console.error);
        });
      }
    };

    if (window.grecaptcha) {
      populateToken();
    } else {
      const scriptEl = document.getElementById('recaptcha-script');
      scriptEl?.addEventListener('load', populateToken);
      return () => {
        scriptEl?.removeEventListener('load', populateToken);
      };
    }
  }, [siteKey]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const doFetch = async (token?: string) => {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      if (token && recaptchaInput.current) {
        recaptchaInput.current.value = token;
        data.set('recaptcha_response', token);
      }

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
          .then((token: string) => {
            // populate the hidden input
            if (recaptchaInput.current) {
              recaptchaInput.current.value = token;
            }
            // now submit
            doFetch(token);
          })
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
        name="recaptcha_response"
        ref={recaptchaInput}
        id="recaptchaResponse"
      />
      <input type="hidden" name="tag" value={tag} />
      <input type="hidden" name="info" value={config} />
      {/*<input type="hidden" name="_token" value={csrfToken} />*/}
    </form>
  );
};

export default BuyForm;
