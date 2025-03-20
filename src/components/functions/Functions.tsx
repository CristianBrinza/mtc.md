import React from 'react';
import styles from './Functions.module.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './Functions.css';

interface FunctionsProps {
  title?: string;
  style_type?: string;
}

const Functions: React.FC<FunctionsProps> = ({ title, style_type }) => {
  const FunctionsStyle: React.CSSProperties = {
    background:
      style_type === 'gray'
        ? 'var(--theme_primary_color_light_gray)'
        : style_type === 'blue'
          ? 'var(--theme_primary_color_blue)'
          : 'var(--theme_primary_color_light_gray)',
  };

  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.functions}>
      {title && (
        <div className={`title ${styles.functions_title}`}>{title}</div>
      )}
      <div className={styles.functions_inside} style={FunctionsStyle}>
        <Slider {...settings} className="functions_carousell">
          <div className={styles.functions_carousell_inside}>ll</div>
          <div className={styles.functions_carousell_inside}>ll</div>
          <div className={styles.functions_carousell_inside}>ll</div>
          <div className={styles.functions_carousell_inside}>ll</div>
        </Slider>
      </div>
    </div>
  );
};

export default Functions;
