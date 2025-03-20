import React, { useState } from 'react';
import styles from './FaqQA.module.css';
import Icon from '../Icon.tsx';

interface FaqQAProps {
  children: React.ReactNode;
  question: string;
}

const FaqQA: React.FC<FaqQAProps> = ({ children, question }) => {
  const [activeFAQ, setActiveFAQ] = useState(false);
  const toggleFAQ = () => {
    setActiveFAQ(!activeFAQ);
  };
  const FaqQAStyle: React.CSSProperties = {};

  return (
    <div className={styles.FaqQA} style={FaqQAStyle}>
      <div className={styles.FaqQA_title} onClick={toggleFAQ}>
        <div>{question}</div>
        <Icon type="plus" />
      </div>
      <div
        className={`${styles.FaqQA_inside} ${activeFAQ ? styles.FaqQA_inside_show : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FaqQA;
