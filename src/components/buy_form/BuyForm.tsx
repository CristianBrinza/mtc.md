// src/components/BuyForm.tsx
import React, { useEffect, useRef, useState } from 'react';
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
  const recaptchaInput = useRef<HTMLInputElement>(null);

  // grab CSRF token from the page’s meta tag
  const csrfToken =
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content') || '';

  useEffect(() => {
    setSource(window.location.href);
    if (!window.grecaptcha) return;

    const populate = () =>
      window.grecaptcha
        .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'contact' })
        .then((token: string) => {
          if (recaptchaInput.current) recaptchaInput.current.value = token;
        });

    window.grecaptcha.ready(populate);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const send = (token?: string) => {
      if (token) data.set('recaptcha_response', token);
      fetch(form.action, { method: form.method, body: data })
        .then(res => (res.ok ? onSuccess?.() : onError?.()))
        .catch(() => onError?.());
    };

    if (!window.grecaptcha) {
      send();
    } else {
      window.grecaptcha
        .ready(() =>
          window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {
            action: 'submit',
          })
        )
        .then(send)
        .catch(() => onError?.());
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
        onChange={e => /^\d*$/.test(e.target.value) && setPhone(e.target.value)}
        icon="call"
      />
      <Button type="submit" icon="arrow_right">
        Comandă acum
      </Button>

      <input type="hidden" name="_token" value={csrfToken} />
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
    </form>
  );
}
