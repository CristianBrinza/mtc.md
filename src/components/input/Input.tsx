// src/components/input/Input.tsx
import { FC, InputHTMLAttributes, CSSProperties } from 'react';
import Icon, { icons } from '../Icon';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** key of the icon to render inside the input (optional) */
  icon?: keyof typeof icons;
  /** border & icon color (defaults to theme blue) */
  color?: string;
  /** additional wrapper class names */
  className?: string;
  /** additional inline styles for the wrapper */
  style?: CSSProperties;
}

const Input: FC<InputProps> = ({
  icon,
  color = 'var(--theme_primary_color_blue_2)',
  className = '',
  style,
  ...rest
}) => {
  const wrapperStyle: CSSProperties = {
    ...style,
  };

  const inputStyle: CSSProperties = {
    border: `1px solid ${color}`,
  };

  return (
    <div
      className={`${styles.costume_input_block} ${className}`}
      style={wrapperStyle}
    >
      <input {...rest} style={inputStyle} className={styles.costume_input} />
      {icon && (
        <Icon className={styles.costume_input_svg} type={icon} color={color} />
      )}
    </div>
  );
};

export default Input;
