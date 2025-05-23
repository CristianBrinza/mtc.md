import React from 'react';
import styles from './Functions.module.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Icon, { icons } from '../Icon.tsx';

interface CostumeFunction {
  id: string;
  icon: string;
  title: string;
  text: string;
  popupId?: string;
}

interface FunctionsProps {
  title?: string;
  style_type?: string;
  costume?: CostumeFunction[];
}

const CostumeFunctions: React.FC<FunctionsProps> = ({
  title,
  style_type,
  costume,
}) => {
  const { t } = useTranslation();
  const FunctionsStyle: React.CSSProperties = {
    background:
      style_type === 'gray'
        ? 'var(--theme_primary_color_light_gray)'
        : style_type === 'blue'
          ? 'var(--theme_primary_color_blue_1)'
          : 'var(--theme_primary_color_light_gray)',
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 3 } },
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  const renderFunctionBlock = (
    id: string,
    icon: string,
    title: string,
    description: string
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
          {costume?.map(item =>
            renderFunctionBlock(item.id, item.icon, item.title, item.text)
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CostumeFunctions;
