import styles from './Review.module.css'
import Button from '../Button.tsx';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Popup from '../Popup/Popup.tsx';
import Icon from '../Icon.tsx';
import Input from '../input/Input.tsx';

interface ReviewProps {
  service: string
}

export default function Review({ service }: ReviewProps) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [improvement, setImprovement] = useState<string>('');
  const [email, setEmail] = useState<string>('');              // ← new state
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const openPopup = () => {
    setShowPopup(true);
    setSubmitted(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    setRating(0);
    setImprovement('');
    setEmail('');                                            // ← clear email too
    setSubmitted(false);
  };

  const choseStars = (value: number) => setRating(value);
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setImprovement(e.target.value);

  const handleSubmit = (): void => {
    if (!formRef.current) return;
    const formEl = formRef.current;
    const ratingInput = formEl.elements.namedItem(
      'entry.766145240'
    ) as HTMLInputElement;
    const commentInput = formEl.elements.namedItem(
      'entry.125673189'
    ) as HTMLTextAreaElement;

    ratingInput.value = rating.toString();
    // ← build a single string with email, service and comment
    commentInput.value = `email – ${email}, service – ${service}, comment – ${improvement}`;

    formEl.submit();
    setSubmitted(true);
  };

  return (
    <>
      <div className={styles.review}>
        <div className={`${styles.review_title} title_3`}>
          Lasă o recenzie
        {/*<span> <br/> Spune-ne mai multe despre</span>*/}
        </div>
        <Button
          onClick={openPopup}
          color="var(--theme_primary_color_blue_4)"
          bgcolor="var(--theme_primary_color_blue_3)"
          border="var(--theme_primary_color_blue_3)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          icon="arrow_right"
        >
          {''}
        </Button>

      </div>

      <Popup id="feedback-popup" isVisible={showPopup} onClose={closePopup} width="800px">
        <iframe name="hidden_iframe" style={{ display: 'none' }} />

        <form
          ref={formRef}
          action="https://docs.google.com/forms/d/e/1FAIpQLSfqtUvGPJzI-T77VdgRXu47Zo0ev3wtZahmc6H-ibknUdWftw/formResponse"
          method="POST"
          target="hidden_iframe"
        >
          <input type="hidden" name="entry.766145240" value="" />
          <textarea name="entry.125673189" style={{ display: 'none' }} />

          <div className={styles.feedback_title}>{t('feedback.title')}</div>
          <span style={{ color: '#2f2f2f', display:'none' }}>{service}</span>

          <div className={styles.FeedbackMenu_stars}>
            {[1, 2, 3, 4, 5].map(star => (
              <Icon
                key={star}
                onClick={() => choseStars(star)}
                type={star <= rating ? 'star_fill' : 'star'}
                color={star <= rating ? '#3a3a3a' : '#939393'}
              />
            ))}
          </div>

          <span style={{ color: '#2f2f2f' }}>{t('feedback.comment')}</span>
          <textarea
            value={improvement}
            onChange={handleTextChange}
            placeholder="Părerea ta este foarte importantă pentru noi. Te rugăm să ne oferi detalii despre experiența ta."
            className={styles.feedback_textarea}
          />




          <div className={styles.feedback_btns}>
            <Input
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className={styles.feedback_input}
              placeholder="e-mail / telefon"
              icon="user"
              required
            />
            <Button
              type="button"
              disabled={submitted}
              color="var(--theme_primary_color_blue_4)"
              bgcolor="var(--theme_primary_color_blue_3)"
              border="var(--theme_primary_color_blue_3)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              icon="arrow_right"
              onClick={handleSubmit}
            >
              {t('feedback.submit')}
            </Button>
          </div>

          <div className={styles.popup_discalmer}>

            Prin trimiterea feedback‑ului, îmi dau acordul ca acesta să fie folosit pentru îmbunătăţirea serviciilor.
          </div>

          {submitted && (
            <div style={{ marginTop: 12, color: 'green' }}>Sent successfully</div>
          )}
        </form>
      </Popup>
    </>
  );
}
