import React, { useState } from 'react';
import styles from './Videos.module.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
// import Button from '../Button.tsx';
import Icon from '../Icon.tsx';

interface videosItem {
  url_ro?: string;
  url_ru?: string;
  url_en?: string;
  title_ro?: string;
  title_ru?: string;
  title_en?: string;
}

interface videosProps {
  items: videosItem[];
}

const Videos: React.FC<videosProps> = ({ items }) => {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1491,
        settings: {
          slidesToShow: 3,
        },
      },
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  const getURLByLanguage = (item: videosItem): string => {
    switch (i18n.language) {
      case 'ro':
        return item.url_ro || '';
      case 'ru':
        return item.url_ru || '';
      case 'en':
      default:
        return item.url_en || '';
    }
  };

  const getTitileByLanguage = (item: videosItem): string => {
    switch (i18n.language) {
      case 'ro':
        return item.title_ro || '';
      case 'ru':
        return item.title_ru || '';
      case 'en':
      default:
        return item.title_en || '';
    }
  };

  const getEmbedUrl = (videoId?: string): string => {
    if (!videoId) return '';
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const [showVideoIndex, setShowVideoIndex] = useState<number | null>(null);

  return (
    <div className={styles.videos}>
      <div className={styles.video_title_block}>
        <div className={`title title_3 ${styles.videos_title}`}>
          {t('general.videos')}
        </div>
        <a href={'https://www.youtube.com/@Moldtelecom-official'}>
          {t('general.see_all')}
          <Icon className={styles.videos_title_svg} type={'arrow_right'} />
        </a>
      </div>

      <Slider {...settings} className={styles.videos_carousell}>
        {items.map((item, index) => {
          const videoId = getURLByLanguage(item);
          const videoTitle = getTitileByLanguage(item);
          return (
            <div key={index} className={styles.videos_carousell_inside}>
              <div
                className={styles.videos_carousell_inside_btn}
                onClick={() => setShowVideoIndex(index)}
              >
                &nbsp;
              </div>
              <img
                className={styles.videos_carousell_iframe}
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video"
              />
              {/*<iframe*/}
              {/*  className={styles.videos_carousell_iframe}*/}
              {/*  src={getEmbedUrl(videoId)}*/}
              {/*  title={`YouTube video player ${index}`}*/}
              {/*  frameBorder="0"*/}
              {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
              {/*  referrerPolicy="strict-origin-when-cross-origin"*/}
              {/*  allowFullScreen*/}
              {/*></iframe>*/}

              <div className={styles.videos_img_title}>{videoTitle}</div>
            </div>
          );
        })}
      </Slider>

      {/*<div className={styles.videos_btn}>*/}
      {/*  <Button*/}
      {/*    to="https://www.youtube.com/@Moldtelecom-official"*/}
      {/*    bgcolor={'var(--theme_primary_color_blue_3)'}*/}
      {/*    border={'transparent'}*/}
      {/*    hover_border={'var(--theme_primary_color_blue_3)'}*/}
      {/*    hover_bgcolor={'var(--theme_primary_color_blue_3)'}*/}
      {/*    icon={'arrow_right'}*/}
      {/*  >*/}
      {/*    Vezi toate*/}
      {/*  </Button>*/}
      {/*</div>*/}

      {showVideoIndex !== null && (
        <div
          className={`${styles.videos_popup} ${styles.videos_popup_show}`}
          onClick={() => setShowVideoIndex(null)}
        >
          <iframe
            className={styles.videos_carousell_iframe_popup}
            src={getEmbedUrl(getURLByLanguage(items[showVideoIndex]))}
            title={`YouTube video player ${showVideoIndex}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Videos;
