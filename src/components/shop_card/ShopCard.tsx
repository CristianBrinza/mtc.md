import React, { useState } from 'react';
import styles from './ShopCard.module.css';
import Icon from '../Icon.tsx';

interface ShopCardProps {
  image?: string;
  price: number;
  old_price?: number;
  reducere?: string;
  title: string;
  subtitle?: string;
  characteristics?: string;
}

// Format price function to use space as a thousands separator
const formatPrice = (price: number) => {
  return price.toLocaleString('ro-RO').replace(/\./g, ' '); // Ensures space instead of dot
};

const ShopCard: React.FC<ShopCardProps> = ({
  image,
  price,
  old_price,
  reducere,
  title,
  subtitle,
  characteristics,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isLikeHovered, setIsLikeHovered] = useState(false);

  return (
    <div
      className={styles.ShopCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className={styles.ShopCard_img} src={image} alt="Device" />
      <div className={styles.ShopCard_inside}>
        <div className={styles.ShopCard_title}>
          {title}
          {subtitle && (
            <span>
              <br />
              {subtitle}
            </span>
          )}
        </div>

        <div className={styles.ShopCard_characteristics}>
          {characteristics && <span>{characteristics}</span>}
        </div>
        {old_price ? (
          <div className={styles.ShopCard_old_price_block}>
            <div className={styles.ShopCard_old_price}>
              {formatPrice(old_price)}{' '}
              <span className={styles.ShopCard_old_price_small}>
                {old_price == 1 ? 'leu' : 'lei'}
              </span>
              <div className={styles.ShopCard_old_price_line}>&nbsp;</div>
            </div>
            {reducere && <div>{reducere}</div>}
          </div>
        ) : (
          <div className={styles.ShopCard_old_price}>&nbsp;</div>
        )}

        <div className={styles.ShopCard_price}>
          {formatPrice(price)}{' '}
          <span className={styles.ShopCard_price_small}>
            {price == 1 ? 'leu' : 'lei'}
          </span>
        </div>
      </div>

      <div
        className={`${styles.ShopCard_cart}`}
        onMouseEnter={() => setIsCartHovered(true)}
        onMouseLeave={() => setIsCartHovered(false)}
      >
        <Icon
          type="cart"
          color={
            isCartHovered ? 'var(--theme_primary_color_blue_2)' : undefined
          }
        />
      </div>
      <div
        className={`${styles.ShopCard_like} ${isHovered ? styles.ShopCard_like_show : ''}`}
        onMouseEnter={() => setIsLikeHovered(true)}
        onMouseLeave={() => setIsLikeHovered(false)}
      >
        <Icon type="like" color={isLikeHovered ? 'red' : undefined} />
      </div>

      <div
        className={`${styles.ShopCard_compare} ${isHovered ? styles.ShopCard_compare_show : ''}`}
      >
        <Icon type="compare" />
      </div>
    </div>
  );
};

export default ShopCard;
