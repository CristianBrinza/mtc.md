import React, { useEffect, useState } from 'react'
import styles from './BuyForm.module.css'
import Input from '../input/Input'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

interface BuyFormProps {
  config: string
  tag: string
  service: string
  onSuccess?: () => void
  onError?: () => void
}

declare global {
  interface Window {
    grecaptcha: any
  }
}

export default function BuyForm({ config, tag, service, onSuccess, onError }: BuyFormProps) {
  const { t } = useTranslation()
  const [phone, setPhone] = useState('')
  const [source, setSource] = useState('')
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

  useEffect(() => {
    setSource(window.location.href)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!window.grecaptcha) {
      onError?.()
      return
    }
    try {
      const token = await window.grecaptcha.execute(siteKey, { action: tag })
      const form = e.currentTarget
      const data = new FormData(form)
      data.set('recaptcha_response', token)
      const res = await fetch(form.action, { method: form.method, body: data })
      if (res.ok) onSuccess?.()
      else onError?.()
    } catch {
      onError?.()
    }
  }

  return (
    <form action="https://dev3.moldtelecom.md/new_comanda_marketing/" method="post" className={styles.popup_form} onSubmit={handleSubmit}>
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
      <input type="hidden" name="tag" value={tag} />
      <input type="hidden" name="info" value={config} />
      <input type="hidden" name="recaptcha_response" value="" />
    </form>
  )
}
