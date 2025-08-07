import React, { useState, useEffect } from 'react';
import styles from './FaqQAV2.module.css';
import Icon from '../Icon.tsx';
import { trackEvent } from '../../initAnalytics.ts';

interface FaqQAProps {
  children: React.ReactNode;
  question: string;
  id_faq: string;
  trackPrefix?: string;
}

const FaqQAV2: React.FC<FaqQAProps> = ({
  children,
  question,
  id_faq,
  trackPrefix = 'combo',
}) => {
  const [activeFAQ, setActiveFAQ] = useState(false);
  const [count, setCount] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  // Fetch initial count on mount
  useEffect(() => {
    fetch(`https://www.moldtelecom.md/api/marketing_requests/${id_faq}`)
      .then(res => res.json())
      .then(data => {
        if (typeof data.count === 'number') {
          setCount(data.count);
        }
      })
      .catch(err => console.error('Error fetching FAQ count:', err));
  }, [id_faq]);

  const toggleFAQ = () => {
    setActiveFAQ(prev => !prev);

    trackEvent(`${trackPrefix} faq${id_faq}`);

    // Only send increment once per page load
    if (!hasClicked) {
      fetch('https://www.moldtelecom.md/api/marketing_statistics_counter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: id_faq }),
      })
        .then(res => {
          if (res.ok) {
            setCount(prev => prev + 1);
            setHasClicked(true);
          } else {
            console.error('Failed to increment FAQ count');
          }
        })
        .catch(err => console.error('Error incrementing FAQ count:', err));
    }
  };

  return (
    <div className={styles.FaqQA}>
      <div className={styles.FaqQA_title} onClick={toggleFAQ}>
        <div>{question}</div>
        <div className={styles.FaqQA_title_right}>
          <span className={styles.count}>
            <Icon type="watch" size={'12px'} color={'#969696'} />
            {count}
          </span>
          <div className={styles.FaqQA_title_svg_block}>
            <Icon
              className={`${styles.FaqQA_title_svg} ${
                activeFAQ ? styles.FaqQA_title_svg_rotated : ''
              }`}
              type="plus"
            />
          </div>
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
