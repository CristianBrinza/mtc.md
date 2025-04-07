import React from 'react';
import styles from './AbonamentCard.module.css';
import Button from '../Button.tsx';

interface AbonamentCardItem {
  type: string;
  title: string;
  image: string;
  price: string;
  old_price?: string;
  detalii?: string;
  onClick?: () => Promise<void> | void;
  children?: React.ReactNode;
}

const AbonamentCard: React.FC<AbonamentCardItem> = ({
  type,
  title,
  image,
  price,
  old_price,
  onClick,
  children,
}) => {
  function formatText(text: string): string {
    // Step 1: Replace <b> and </b> with placeholders
    const temp = text
      .replace(/<sml>/gi, '___B_OPEN___')
      .replace(/<\/sml>/gi, '___B_CLOSE___');

    return temp
      .replace(/___B_OPEN___/g, '<span class="abonament_card_small_text">')
      .replace(/___B_CLOSE___/g, '</span>');
  }

  return (
    <div className={styles.AbonamentCard}>
      <img className={styles.AbonamentCard_img} src={image} alt="Moldtelecom" />

      <div className={styles.AbonamentCard_inside}>
        <div className={styles.AbonamentCard_type}>{type}</div>
        <div className={styles.AbonamentCard_title}>
          {' '}
          <div
            dangerouslySetInnerHTML={{
              __html: formatText(title),
            }}
          />
        </div>

        <div className={styles.AbonamentCard_children}>{children}</div>
        <div className={styles.AbonamentCard_price}>
          <div>{price}</div>
          <div>
            <div className={styles.AbonamentCard_price_valuta}>lei/lună</div>
            <div className={styles.AbonamentCard_price_old}>
              {old_price ? old_price : <span>&nbsp;</span>}
            </div>
          </div>
        </div>

        <Button
          icon={'arrow_right'}
          hover_bgcolor={'var(--theme_primary_color_blue_3)'}
          hover_border={'var(--theme_primary_color_blue_3)'}
          onClick={onClick}
        >
          <span style={{ fontWeight: '700' }}> Comandă acum</span>
        </Button>
      </div>
    </div>
  );
};

export default AbonamentCard;
