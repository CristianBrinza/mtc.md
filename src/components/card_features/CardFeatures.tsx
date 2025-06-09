import React from 'react';
import styles from './CardFeatures.module.css';
import Button from '../Button.tsx';
// import Icon from '../Icon.tsx';

interface cardProps {
  img: string;
  title: string;
  subtitle: string;
}

const CardFeatures: React.FC<cardProps> = ({ img, title, subtitle }) => {
  // const { t } = useTranslation();

  function formatText(text: string): string {
    const temp = text.replace(/<\/br>/gi, '___BR___');
    return temp.replace(/___BR___/g, '<br/>');
  }

  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={img} alt="Moldtelecom" />
      <div className={styles.card_inside}>
        <div className={styles.card_inside_pretitle}>NEWS</div>
        <div
          className={styles.card_inside_title}
          dangerouslySetInnerHTML={{
            __html: formatText(title),
          }}
        ></div>
        <div className={styles.card_inside_subtitle}>{subtitle}</div>

        <Button
          to="https://mtc.md/my-mtc"
          color={'var(--theme_primary_color_blue_4)'}
          bgcolor={'var(--theme_primary_color_blue_3)'}
          border={'var(--theme_primary_color_blue_3)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          icon={'arrow_right'}
        >
          Mai multe
        </Button>
        {/*<div className={styles.card_inside_btn}>*/}
        {/*  Mai multe <Icon type="arrow_right" color="#3c4043" />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default CardFeatures;
