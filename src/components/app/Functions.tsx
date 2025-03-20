import React from 'react';
import styles from './Functions.module.css';
import { useTranslation } from 'react-i18next';

interface FunctionsProps {
  title?: string;
  style_type?: string;
}

const Functions: React.FC<FunctionsProps> = ({ title, style_type }) => {
  const FunctionsStyle: React.CSSProperties = {
    background:
      style_type === 'gray'
        ? 'var(--theme_primary_color_light_gray)'
        : style_type === 'blue'
          ? 'var(--theme_primary_color_blue)'
          : 'var(--theme_primary_color_light_gray)',
  };

  const { t } = useTranslation();

  return (
    <div className={styles.functions}>
      {title && (
        <div className={`title ${styles.functions_title}`}>{title}</div>
      )}
      <div className={styles.functions_inside} style={FunctionsStyle}>
        ddd
      </div>
    </div>
  );
};

export default Functions;
