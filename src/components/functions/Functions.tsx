import React, { useState } from 'react';
import styles from './Functions.module.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Icon, { icons } from '../Icon.tsx';
import Popups from '../Popups/Popups.tsx';

interface FunctionsProps {
  title?: string;
  style_type?: string;
  functions: Array<string>;
}

const Functions: React.FC<FunctionsProps> = ({
  title,
  style_type,
  functions,
}) => {
  const FunctionsStyle: React.CSSProperties = {
    background:
      style_type === 'gray'
        ? 'var(--theme_primary_color_light_gray)'
        : style_type === 'blue'
          ? 'var(--theme_primary_color_blue_1)'
          : 'var(--theme_primary_color_light_gray)',
  };

  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.dataset.id;
    if (id) setHoveredBlock(id);
  };

  const handleMouseLeave = () => {
    setHoveredBlock(null);
  };

  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2800,
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

  const [activePopup, setActivePopup] = useState<string | null>(null);

  const togglePopup = (popup: string) => {
    setActivePopup(activePopup !== popup ? popup : null);
  };

  const renderFunctionBlock = (
    id: string,
    icon: string,
    title: string,
    description: string,
    popup: string
  ) => (
    <div className={styles.functions_carousell_inside} key={id}>
      <div className={styles.functions_carousell_inside_block}>
        <Icon
          color={
            style_type === 'gray'
              ? 'var(--theme_primary_color_dark_gray)'
              : style_type === 'blue'
                ? 'var(--theme_primary_color_blue_2)'
                : 'var(--theme_primary_color_dark_gray)'
          }
          type={icon as keyof typeof icons}
          size="35px"
          className={styles.functions_carousell_inside_block_icon}
        />
        <div
          className={styles.functions_carousell_inside_block_title}
          style={{
            color:
              style_type === 'gray'
                ? 'var(--theme_primary_color_black)'
                : style_type === 'blue'
                  ? 'var(--theme_primary_color_blue_4)'
                  : 'var(--theme_primary_color_black)',
          }}
        >
          {t(title)}
        </div>
        <div className={styles.functions_carousell_inside_block_text}>
          {t(description)}
        </div>
        <div
          className={styles.functions_carousell_inside_block_btn}
          data-id={id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => togglePopup(popup)}
        >
          <span>{t('functions_optional.detalii')}</span>{' '}
          <Icon
            className="LinkButton_arrow"
            type="arrow_right"
            style={{
              transition: 'transform 0.3s ease',
              transform:
                hoveredBlock === id ? 'translateX(4px)' : 'translateX(0)',
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.functions}>
      {title && (
        <div className={`title title_3 ${styles.functions_title}`}>
          {t(`${title}`)}
        </div>
      )}
      <div className={styles.functions_inside} style={FunctionsStyle}>
        <Slider {...settings} className="functions_carousell">
          {functions.includes('Internet') &&
            renderFunctionBlock(
              'Internet', // ID
              'cart', // Icon (must be a valid key from icons)
              'functions_optional.Internet.title',
              'functions_optional.Internet.description',
              'f1'
            )}

          {functions.includes('Minute') &&
            renderFunctionBlock(
              'Minute',
              'call',
              'functions_optional.Minute.title',
              'functions_optional.Minute.description',
              'f2'
            )}

          {functions.includes('International') &&
            renderFunctionBlock(
              'International',
              'internet',
              'functions_optional.International.title',
              'functions_optional.International.description',
              'f3'
            )}

          {functions.includes('RoamingUE') &&
            renderFunctionBlock(
              'RoamingUE',
              'roaming',
              'functions_optional.RoamingUE.title',
              'functions_optional.RoamingUE.description',
              'f5'
            )}
          {functions.includes('Megogo') &&
            renderFunctionBlock(
              'Megogo',
              'megogo',
              'functions_optional.Megogo.title',
              'functions_optional.Megogo.description',
              'f14'
            )}
          {functions.includes('Premier') &&
            renderFunctionBlock(
              'Premier',
              'premier',
              'functions_optional.Premier.title',
              'functions_optional.Premier.description',
              'f15'
            )}
          {functions.includes('Ivi') &&
            renderFunctionBlock(
              'Ivi',
              'ivi',
              'functions_optional.Ivi.title',
              'functions_optional.Ivi.description',
              'f16'
            )}
          {functions.includes('MtcTv') &&
            renderFunctionBlock(
              'MtcTv',
              'mtctv',
              'functions_optional.MtcTv.title',
              'functions_optional.MtcTv.description',
              'f17'
            )}
          {functions.includes('Arhiva') &&
            renderFunctionBlock(
              'Arhiva',
              'arhiva',
              'functions_optional.Arhiva.title',
              'functions_optional.Arhiva.description',
              'f10'
            )}
          {functions.includes('PlusTV') &&
            renderFunctionBlock(
              'PlusTV',
              'tv_plus',
              'functions_optional.PlusTV.title',
              'functions_optional.PlusTV.description',
              'f12'
            )}
          {functions.includes('Adult') &&
            renderFunctionBlock(
              'Adult',
              'plus18',
              'functions_optional.Adult.title',
              'functions_optional.Adult.description',
              'f11'
            )}
          {functions.includes('Junior') &&
            renderFunctionBlock(
              'Junior',
              'junior',
              'functions_optional.Junior.title',
              'functions_optional.Junior.description',
              'f13'
            )}
        </Slider>
      </div>

      <Popups content={activePopup} onClose={() => setActivePopup(null)} />
    </div>
  );
};

export default Functions;
