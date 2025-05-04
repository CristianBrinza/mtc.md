// src/components/Recaptcha.tsx
import React, { useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

export const Recaptcha: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const wrap = wrapperRef.current!;
    // climb up to nearest <form>
    formRef.current = wrap.closest('form');
    if (!formRef.current) {
      console.warn('Recaptcha: no parent <form> found');
      return;
    }
    formRef.current.addEventListener('submit', handleIntercept);
    return () => {
      formRef.current?.removeEventListener('submit', handleIntercept);
    };
  }, []);

  const handleIntercept = async (e: Event) => {
    e.preventDefault();
    if (!recaptchaRef.current) return;
    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      // inject or update hidden field
      let hid = formRef.current!.querySelector<HTMLInputElement>(
        'input[name="recaptchaToken"]'
      );
      if (!hid) {
        hid = document.createElement('input');
        hid.type = 'hidden';
        hid.name = 'recaptchaToken';
        formRef.current!.append(hid);
      }
      hid.value = token;
      // now submit for real
      formRef.current!.submit();
    } catch (err) {
      console.error('Recaptcha failed', err);
    }
  };

  return (
    <div ref={wrapperRef} style={{ display: 'none' }}>
      <ReCAPTCHA sitekey={SITE_KEY} size="invisible" ref={recaptchaRef} />
    </div>
  );
};
