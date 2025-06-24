// Input.tsx
import { FC } from 'react';
import Icon, { icons } from '../Icon.tsx';
import styles from './Input.module.css';

interface InputProps {
  placeholder?: string;
  value: string;
  /** now the full DOM event */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  icon?: keyof typeof icons;
  name?: string;
  required?: boolean;
  className?: string;
  type?: string;
  min?: string;
  max?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
  icon,
  name,
  required = false,
  className = '',
  type = 'text',
  min,
  max,
}) => (
  <div className={`${styles.costume_input_block} ${className}`}>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      className={styles.costume_input}
      onChange={onChange}
      onKeyDown={onKeyDown}
      min={min}
      max={max}
    />
    {icon && (
      <Icon
        className={styles.costume_input_svg}
        type={icon}
        color="var(--theme_primary_color_darkest_gray)"
      />
    )}
  </div>
);

export default Input;
