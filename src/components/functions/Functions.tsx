import React, { useState } from 'react';
import styles from './Functions.module.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Icon, { icons } from '../Icon.tsx';
import Popup from '../Popup/Popup.tsx';
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
          {title}
        </div>
        <div className={styles.functions_carousell_inside_block_text}>
          {description}
        </div>
        <div
          className={styles.functions_carousell_inside_block_btn}
          data-id={id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => togglePopup(popup)}
        >
          <span>Detalii</span>{' '}
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
              'Internet',
              'Descară date cu viteză mare și vizita web-ul fără griji',
              'f1'
            )}

          {functions.includes('Minute') &&
            renderFunctionBlock(
              'Minute',
              'call',
              'Minute Naționale',
              'Comunică avantajos cu cei din alte rețele',
              'f2'
            )}

          {functions.includes('International') &&
            renderFunctionBlock(
              'International',
              'internet',
              'Internaţional',
              'Minute pentru conexiune mobilă sau fixă din alte țări',
              'f3'
            )}

          {functions.includes('RoamingUE') &&
            renderFunctionBlock(
              'RoamingUE',
              'roaming',
              'Roaming UE',
              'Tarife ca acasă, acum şi peste hotare',
              'f5'
            )}
        </Slider>
      </div>

      <Popup
        id="1281278"
        width="900px"
        isVisible={activePopup === 'menu1'}
        onClose={() => setActivePopup(null)}
      >
        <div className="popup_content">test1</div>
      </Popup>
      <Popup
        id="1281278"
        width="900px"
        isVisible={activePopup === 'menu2'}
        onClose={() => setActivePopup(null)}
      >
        <div className="popup_content">test2</div>
      </Popup>

      <Popups content={activePopup} onClose={() => setActivePopup(null)} />
    </div>
  );
};

export default Functions;
