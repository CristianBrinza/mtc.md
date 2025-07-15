// src/components/switch/Switch.tsx
import { FC, InputHTMLAttributes } from 'react';
import styles from './Toggle.module.css';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  /** extra wrapper class(es) */
  className?: string;
}

const Toggle: FC<SwitchProps> = ({ className = '', ...rest }) => (
  <label className={`${styles.switch} ${className}`}>
    <input type="checkbox" {...rest} />
    <span className={styles.slider} />
  </label>
);

export default Toggle;
