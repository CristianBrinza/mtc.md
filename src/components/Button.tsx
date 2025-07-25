// components/Button.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon, { icons } from './Icon';

interface ButtonProps {
  bgcolor?: string;
  color?: string;
  border?: string;
  border_radius?: string;
  hover_bgcolor?: string;
  hover_color?: string;
  hover_border?: string;
  children: React.ReactNode;
  onClick?: () => Promise<void> | void;
  to?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
  icon?: string;
  icon_side?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  color,
  bgcolor,
  hover_bgcolor,
  hover_color,
  hover_border,
  border,
  border_radius,
  children,
  onClick,
  to,
  className = '',
  style,
  type = 'button',
  disabled = false,
  id,
  icon,
  icon_side = 'right',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    if (onClick) {
      await onClick(); // Ensure analytics tracking completes
    }

    if (to) {
      if (
        to.startsWith('tel:') ||
        to.startsWith('http://') ||
        to.startsWith('https://') ||
        to.startsWith('www.')
      ) {
        // Handle external links including phone links
        window.location.href = to;
      } else if (!to.startsWith('/files/')) {
        // Handle internal links
        navigate(to);
      }
    }
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered
      ? hover_bgcolor || 'var(--theme_primary_color_dark_gray)'
      : bgcolor || 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: isHovered
      ? hover_border
      : border || 'var(--theme_primary_color_dark_gray)',
    borderRadius: border_radius || '100px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '0px 22px',
    color: isHovered
      ? hover_color || 'var(--theme_primary_color_black)'
      : color || 'var(--theme_primary_color_black)',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: '48px',
    textDecoration: 'none',
    opacity: disabled ? 0.3 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    boxSizing: 'border-box',
    gap: '7px',
    ...style,
  };

  const buttonIconColor = isHovered ? hover_color || color : color;
  const isPhoneLink = to?.startsWith('tel:');
  const isExternalLink = to && (to.startsWith('/files/') || isPhoneLink);

  return isExternalLink ? (
    <a
      id={id}
      href={to}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`mtc_button ${className}`}
      rel="noopener noreferrer"
    >
      {icon && icon_side === 'left' && (
        <Icon type={icon as keyof typeof icons} color={buttonIconColor} />
      )}
      {children}
      {icon && icon_side === 'right' && (
        <Icon
          className="Button_icon"
          type={icon as keyof typeof icons}
          color={buttonIconColor}
        />
      )}
    </a>
  ) : to ? (
    <Link
      id={id}
      to={to}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`mtc_button ${className}`}
    >
      {icon && icon_side === 'left' && (
        <Icon type={icon as keyof typeof icons} color={buttonIconColor} />
      )}
      {children}
      {icon && icon_side === 'right' && (
        <Icon
          className="Button_icon"
          type={icon as keyof typeof icons}
          color={buttonIconColor}
        />
      )}
    </Link>
  ) : (
    <button
      id={id}
      type={type}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`mtc_button ${className}`}
      disabled={disabled}
    >
      {icon && icon_side === 'left' && (
        <Icon type={icon as keyof typeof icons} color={buttonIconColor} />
      )}
      {children}
      {icon && icon_side === 'right' && (
        <Icon
          className="Button_icon"
          type={icon as keyof typeof icons}
          color={buttonIconColor}
        />
      )}
    </button>
  );
};

export default Button;
