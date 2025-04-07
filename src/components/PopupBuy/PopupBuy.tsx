import React, { useEffect, useRef, useState } from 'react';
import styles from './PopupBuy.module.css';
import Icon from '../Icon.tsx';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

interface PopupProps {
  id: string;
  width?: string;
  isVisible: boolean;
  onClose: () => void;
  title: string;
  config: string;
}

interface PromoBlock {
  image_ro: string;
  image_ru: string;
  image_en: string;
}

const PopupBuy: React.FC<PopupProps> = ({
  id,
  isVisible,
  onClose,
  width = '800px',
  title,
  config,
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  const advertising = [
    {
      image_ro: '/images/landings/15174519.png',
      image_ru: '/images/landings/15174519.png',
      image_en: '/images/landings/15174519.png',
      to: '/',
    },
    {
      image_ro: '/images/landings/95274512.png',
      image_ru: '/images/landings/95274512.png',
      image_en: '/images/landings/95274512.png',
      to: '/',
    },
    {
      image_ro: '/images/landings/35544076.png',
      image_ru: '/images/landings/35544076.png',
      image_en: '/images/landings/35544076.png',
      to: '/triple',
    },
    {
      image_ro: '/images/landings/95574312.png',
      image_ru: '/images/landings/95574312.png',
      image_en: '/images/landings/95574312.png',
      to: '/mobile',
    },
    {
      image_ro: '/images/landings/45274567.png',
      image_ru: '/images/landings/45274567.png',
      image_en: '/images/landings/45274567.png',
      to: '/',
    },
  ];
  useEffect(() => {
    if (isVisible && popupRef.current) {
      const popupInside = popupRef.current.querySelector(
        `.${styles.popupBlockInside}`
      ) as HTMLDivElement;

      if (popupInside) {
        popupRef.current.style.alignItems =
          popupInside.offsetHeight > window.innerHeight * 0.9
            ? 'flex-start'
            : 'center';
      }
    }
  }, [isVisible]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { i18n } = useTranslation();

  const getImageByLanguage = (img: PromoBlock): string => {
    switch (i18n.language) {
      case 'ro':
        return img.image_ro;
      case 'ru':
        return img.image_ru;
      case 'en':
      default:
        return img.image_en;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      void oldIndex;
      setCurrentPromoIndex(newIndex);
      setProgressKey(prev => prev + 1); // Reset progress bar on card change
    },
  };
  const [progressKey, setProgressKey] = useState(0);
  const [, setCurrentPromoIndex] = useState(0);

  return (
    <div
      className={`${styles.popupBlock} ${isVisible ? styles.popupBlockShow : ''}`}
      id={`popup_block_${id}`}
      style={{ display: isVisible ? 'flex' : 'none' }}
      onClick={handleOutsideClick}
      ref={popupRef}
    >
      <div className={styles.popupBlockInside} style={{ maxWidth: width }}>
        <div className={styles.popupCloseButton} onClick={onClose}>
          <Icon type="close" color="#1D1D1F" />
        </div>

        <Slider {...settings} className={styles.popupOptionSubmenuAdd}>
          {advertising.map((promoItem, promoIndex) => (
            <div>
              <div
                key={promoIndex}
                className={styles.popupOptionSubmenuAddInside}
                style={{
                  backgroundImage: `url(${getImageByLanguage(promoItem)})`,
                }}
              >
                &nbsp;
                <div className={styles.popupOptionSubmenuAddInside_load}>
                  <div
                    key={progressKey}
                    className={styles.popupOptionSubmenuAddInside_load_inside}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {title}
        <br />
        {config}
      </div>
    </div>
  );
};

export default PopupBuy;
