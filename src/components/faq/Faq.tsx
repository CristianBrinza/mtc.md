import React from 'react';
import styles from './Faq.module.css';
import Button from '../Button.tsx';
import { useTranslation } from 'react-i18next';

// Make style_type optional by using "?" in the interface.
interface FaqProps {
  style_type?: '1' | '2' | '3';
  children: React.ReactNode;
  max_faq?: number;
  hideButtonAfterClick?: boolean;
}

const Faq: React.FC<FaqProps> = ({
  children,
  // Default style_type to '1' if not provided
  style_type = '1',
  max_faq = 4,
  hideButtonAfterClick = true,
}) => {
  // Propagate the style_type prop to children.
  const faqArray =
    React.Children.map(children, child => {
      if (React.isValidElement<{ style_type?: '1' | '2' | '3' }>(child)) {
        return React.cloneElement(child, { style_type });
      }
      return child;
    }) ?? [];

  const FaqStyle: React.CSSProperties = {
    background:
      style_type === '1'
        ? 'var(--theme_primary_color_blue_1)'
        : style_type === '2'
          ? 'var(--theme_primary_color_white)'
          : 'var(--theme_primary_color_light_gray)',
  };

  const [showAll, setShowAll] = React.useState(false);

  const visibleFaqs = showAll ? faqArray : faqArray.slice(0, max_faq);
  const { t } = useTranslation();

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.faq} style={FaqStyle}>
      <div className={`title_2 ${styles.faq_title}`}>FAQ</div>
      <div className={styles.faq_inside}>{visibleFaqs}</div>
      {faqArray.length > max_faq && (!hideButtonAfterClick || !showAll) && (
        <Button
          onClick={toggleShowAll}
          border={
            style_type === '1'
              ? 'var(--theme_primary_color_blue_0)'
              : style_type === '2'
                ? 'var(--theme_primary_color_white)'
                : 'var(--theme_primary_color_dark_gray)'
          }
          bgcolor="transparent"
          hover_bgcolor={
            style_type === '1'
              ? 'transparent'
              : style_type === '2'
                ? 'var(--theme_primary_color_gray)'
                : 'var(--theme_primary_color_dark_gray)'
          }
          hover_border={
            style_type === '1'
              ? 'var(--theme_primary_color_blue_2)'
              : style_type === '2'
                ? 'var(--theme_primary_color_white)'
                : 'var(--theme_primary_color_light_gray)'
          }
        >
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
