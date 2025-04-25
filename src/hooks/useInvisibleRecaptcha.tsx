// src/hooks/useInvisibleRecaptcha.ts
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

type RecaptchaExecute = () => Promise<string>

export function useInvisibleRecaptcha(siteKey: string): {
  executeRecaptcha: RecaptchaExecute
  Recaptcha: React.FC
} {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const executeRecaptcha: RecaptchaExecute = async () => {
    if (!recaptchaRef.current) {
      throw new Error('reCAPTCHA not yet ready')
    }
    const token = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()
    return token
  }

  const Recaptcha: React.FC = () => (
    <ReCAPTCHA
      sitekey={siteKey}
      size="invisible"
      ref={recaptchaRef}
      badge="bottomright"
      onErrored={() => console.error('reCAPTCHA error')}
      onExpired={() => {
        console.warn('reCAPTCHA expired, resetting')
        recaptchaRef.current?.reset()
      }}
    />
  )

  return { executeRecaptcha, Recaptcha }
}
