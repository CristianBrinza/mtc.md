import React, { useState } from 'react';
import styles from './Faq.module.css';
import Button from '../Button.tsx';
import { useTranslation } from 'react-i18next';

interface FaqProps {
  style_type: '1' | '2';
  children: React.ReactNode;
  max_faq?: number;
  hideButtonAfterClick?: boolean;
}

const Faq: React.FC<FaqProps> = ({
  children,
  style_type,
  max_faq = 4,
  hideButtonAfterClick = true,
}) => {
  const [showAll, setShowAll] = useState(false);
  const faqArray = React.Children.toArray(children);
  const visibleFaqs = showAll ? faqArray : faqArray.slice(0, max_faq);
  const { t } = useTranslation();

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const FaqStyle: React.CSSProperties = {
    background:
      style_type === '1'
        ? 'var(--theme_primary_color_light_gray)'
        : style_type === '2'
          ? 'var(--theme_primary_color_white)'
          : 'var(--theme_primary_color_light_gray)',
  };

  return (
    <div className={styles.faq} style={FaqStyle}>
      <div className={styles.faq_title}>FAQ</div>
      <div className={styles.faq_inside}>{visibleFaqs}</div>
      {faqArray.length > max_faq && (!hideButtonAfterClick || !showAll) && (
        <Button onClick={toggleShowAll}>
          {showAll ? t('general.faq_less') : t('general.faq_more')}
        </Button>
      )}
      {showAll && <div className={styles.faq_after}>&nbsp;</div>}
      {faqArray.length < max_faq && (
        <div className={styles.faq_after}>&nbsp;</div>
      )}
    </div>
  );
};

export default Faq;
