import { useState } from 'react';

export default function FormTestPage() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <form
      action="https://www.moldtelecom.md/comanda_marketing"
      data-type="thankyou-page-form"
      method="post"
    >
      <input
        type="tel"
        inputMode="numeric"
        maxLength={9}
        name="phone"
        pattern="[0]{1}[2,6,7]{1}[0-9]{7}"
        placeholder="0 ( - - ) - - -  - - -"
        required
        value={phone}
        onChange={handlePhoneChange}
      />

      <button name="btn_submit" type="submit">
        Comandă acum
      </button>

      <input type="hidden" name="lang" value="ro" />
      <input
        type="hidden"
        name="source"
        value="https://www.moldtelecom.md/ro/personal/Promo_Abonamente-TV-Internet"
      />
      <input type="hidden" name="service" value="double" />
      <input
        type="hidden"
        name="recaptcha_response"
        className="recaptchaResponse"
      />
      <input
        type="hidden"
        name="tag"
        value="campain[double_2025_spring], place[calculator]"
      />
      <input
        type="hidden"
        name="info"
        value="double (reducere-abonament) Configurat - 115 + 33 (1 tv) +  + 0 + 0 + 0"
      />
      <input
        type="hidden"
        name="_token"
        value="3zqS1thx5283Dl6XJ786we75Pw1RNr9PhBzHiq8z"
      />
    </form>
  );
}
