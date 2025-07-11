// Input.tsx
import React, { FC } from 'react';
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
  style?: React.CSSProperties;
  max?: string;
  color?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
  icon,
  name,
  style,
  required = false,
  className = '',
  type = 'text',
  min,
  max,
  color = 'var(--theme_primary_color_blue_2)',
}) => {
  const inputStyle: React.CSSProperties = {
    border: `1px solid ${color}`,
    ...style,
  };
  return (
    <div className={`${styles.costume_input_block} ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
        className={styles.costume_input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        min={min}
        max={max}
      />
      {icon && (
        <Icon className={styles.costume_input_svg} type={icon} color={color} />
      )}
    </div>
  );
};

export default Input;
