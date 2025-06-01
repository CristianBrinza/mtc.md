import React, { useState } from 'react';
import styles from './FaqQAV2.module.css';
import Icon from '../Icon.tsx';

interface FaqQAProps {
  children: React.ReactNode;
  question: string;
}

const FaqQAV2: React.FC<FaqQAProps> = ({
  children,
  question,
  // Set default value if style_type is not provided
}) => {
  const [activeFAQ, setActiveFAQ] = useState(false);
  const toggleFAQ = () => {
    setActiveFAQ(!activeFAQ);
  };

  return (
    <div className={styles.FaqQA}>
      <div className={styles.FaqQA_title} onClick={toggleFAQ}>
        <div>{question}</div>
        <div className={styles.FaqQA_title_svg_block}>
          <Icon
            className={`${styles.FaqQA_title_svg} ${
              activeFAQ ? styles.FaqQA_title_svg_rotated : ''
            }`}
            type="plus"
            // color="#B7B7B7"
          />
        </div>
      </div>
      <div
        className={`${styles.FaqQA_inside} ${
          activeFAQ ? styles.FaqQA_inside_show : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FaqQAV2;
