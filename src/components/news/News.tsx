import React from 'react';
import styles from './News.module.css';
import { useTranslation } from 'react-i18next';

interface newsItem {
  url?: string;
  title_ro?: string;
  title_ru?: string;
  title_en?: string;
  img?: string;
}

interface newsProps {
  items: newsItem[];
}

const News: React.FC<newsProps> = ({ items }) => {
  const { t, i18n } = useTranslation();
  const getTitleByLanguage = (item: newsItem): string => {
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

  return (
    <div className={styles.news}>
      <div className={`title ${styles.news_title}`}>{t('general.news')}</div>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles.videos_carousell_inside}>
              {getTitleByLanguage(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
