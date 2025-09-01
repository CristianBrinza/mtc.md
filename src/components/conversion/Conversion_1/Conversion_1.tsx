import styles from './Conversion_1.module.css';
import Button from '../../Button.tsx';
import { useTranslation } from 'react-i18next';
import Icon from '../../Icon.tsx';

export default function Conversion_1() {
  const { t } = useTranslation();
  return (
    <div className={styles.conversion}>
      <div className={styles.conversion_text}>
        <div className={styles.conversion_text_top}>
          <Icon
            className={styles.conversion_text_top_svg}
            size={'32px'}
            type={'promo'}
            color={'var(--theme_primary_color_blue_2)'}
          />
          {/*<div className={styles.tm_discover_card_inside_top_tag}>*/}
          {/* <Icon type={'gift'} color={'var(--theme_primary_color_blue_3)'} />*/}
          {/*  Promo*/}
          {/*</div>*/}
          <div className={styles.conversion_title}>
            {t('combo_home.totul_triple_1')} <br />
            {t('combo_home.totul_triple_2')}
          </div>
          <div>{t('combo_home.totul_triple_3')}</div>
        </div>
        <Button
          to={`https://www.moldtelecom.md/${t('lang')}/personal/Promo_Abonamente-TV-Internet-Mobil`}
          color={'var(--theme_primary_color_blue_4)'}
          bgcolor={'var(--theme_primary_color_blue_2)'}
          border={'var(--theme_primary_color_blue_2)'}
          hover_border={'var(--theme_primary_color_blue_4)'}
          hover_bgcolor={'var(--theme_primary_color_blue_4)'}
          hover_color={'#fff'}
          icon={'arrow_right'}
          id="tm_go_to_triple"
        >
          Vezi mai multe
        </Button>
      </div>
      <img
        className={styles.conversion_img}
        src="/images/landings/55271183.webp"
        alt="Moldtelecom"
      />
      <img
        className={styles.conversion_img_mob}
        src="/images/landings/55271181.webp"
        alt="Moldtelecom"
      />
    </div>
  );
}
