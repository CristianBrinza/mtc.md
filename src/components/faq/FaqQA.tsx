import React, { useState } from 'react';
import styles from './FaqQA.module.css';
import Icon from '../Icon.tsx';

interface FaqQAProps {
  children: React.ReactNode;
  question: string;
  style_type?: '1' | '2';
}

const FaqQA: React.FC<FaqQAProps> = ({
  children,
  question,
  // Set default value if style_type is not provided
  style_type = '1',
}) => {
  const [activeFAQ, setActiveFAQ] = useState(false);
  const toggleFAQ = () => {
    setActiveFAQ(!activeFAQ);
  };

  return (
    <div className={styles.FaqQA}>
      <div
        className={styles.FaqQA_title}
        onClick={toggleFAQ}
        style={{
          borderTopColor:
            style_type === '1'
              ? 'var(--theme_primary_color_blue_3)'
              : style_type === '2'
                ? 'var(----theme_primary_color_gray)'
                : 'var(--theme_primary_color_gray)',
        }}
      >
        <div>{question}</div>
        <div className={styles.FaqQA_title_svg_block}>
          <Icon
            className={`${styles.FaqQA_title_svg} ${
              activeFAQ ? styles.FaqQA_title_svg_rotated : ''
            }`}
            type="plus"
          />
        </div>
      </div>
      <div
        className={`${styles.FaqQA_inside} ${
          activeFAQ ? styles.FaqQA_inside_show : ''
        }`}
        style={{
          borderBottomColor:
            style_type === '1'
              ? 'var(--theme_primary_color_blue_3)'
              : style_type === '2'
                ? 'var(----theme_primary_color_gray)'
                : 'var(--theme_primary_color_gray)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FaqQA;
