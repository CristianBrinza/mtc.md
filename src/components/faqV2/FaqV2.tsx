import React from 'react';
import styles from './FaqV2.module.css';
import Button from '../Button.tsx';
import { useTranslation } from 'react-i18next';

// Make style_type optional by using "?" in the interface.
interface FaqProps {
  children: React.ReactNode;
  max_faq?: number;
  hideButtonAfterClick?: boolean;
}

const FaqV2: React.FC<FaqProps> = ({
  children,
  max_faq = 4,
  hideButtonAfterClick = true,
}) => {
  // Propagate the style_type prop to children.
  const faqArray =
    React.Children.map(children, child => {
      if (React.isValidElement<{}>(child)) {
        return React.cloneElement(child, {});
      }
      return child;
    }) ?? [];

  const FaqStyle: React.CSSProperties = {};

  const [showAll, setShowAll] = React.useState(false);

  const visibleFaqs = showAll ? faqArray : faqArray.slice(0, max_faq);
  const { t } = useTranslation();

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.faqWrap}>
      <div className={styles.faq} style={FaqStyle}>
        <div className={`title_3 ${styles.faq_title}`}>{t('general.more')}</div>
        <div className={styles.faq_inside_right}>
          <div className={styles.faq_inside}>{visibleFaqs}</div>
          {faqArray.length > max_faq && (!hideButtonAfterClick || !showAll) && (
            <Button
              className={styles.faq_btn}
              onClick={toggleShowAll}
              border={'var(--theme_primary_color_gray_1)'}
              bgcolor={'transparent'}
              hover_bgcolor={'var(--theme_primary_color_gray_1)'}
              hover_border="transparent"
            >
              {showAll ? t('general.faq_less') : t('general.faq_more')}
            </Button>
          )}
          {showAll && <div className={styles.faq_after}>&nbsp;</div>}
          {faqArray.length < max_faq && (
            <div className={styles.faq_after}>&nbsp;</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqV2;
