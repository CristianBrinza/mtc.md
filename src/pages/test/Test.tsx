// src/components/MyForm.tsx
import React from 'react';
import { Recaptcha } from '../../components/Recaptcha';

export const TestPage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // FormData now includes recaptchaToken
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // …
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input name="email" type="email" required />
      </label>

      <label>
        Message
        <textarea name="message" required />
      </label>

      <button type="submit">Send</button>

      {/* ← just this one line for reCAPTCHA */}
      <Recaptcha />
    </form>
  );
};
