import React, { useState, useEffect } from 'react';
import styles from './ShopCard.module.css';
import Icon from '../Icon.tsx';
import { useTranslation } from 'react-i18next';

interface ShopCardProps {
  image?: string;
  price: number;
  old_price?: number;
  reducere?: string;
  title: string;
  subtitle?: string;
  characteristics?: string;
  device_id: number;
}

const STORAGE_KEY = 'likedDevices';

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
  device_id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isLikeHovered, setIsLikeHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isCompareHovered, setIsCompareHovered] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const { t } = useTranslation();

  // On component mount, check if this item is Compare by reading localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const CompareList: number[] = stored ? JSON.parse(stored) : [];
    if (CompareList.includes(device_id)) {
      setIsCompare(true);
    }
  }, [device_id]);

  // Handle the Compare button click: add or remove the device_id from localStorage
  const handleCompareClick = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const CompareList: number[] = stored ? JSON.parse(stored) : [];
    if (!isCompare) {
      CompareList.push(device_id);
      setIsCompare(true);
    } else {
      const updatedList = CompareList.filter(id => id !== device_id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      setIsCompare(false);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CompareList));
  };

  // On component mount, check if this item is Compare by reading localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const likedList: number[] = stored ? JSON.parse(stored) : [];
    if (likedList.includes(device_id)) {
      setIsLiked(true);
    }
  }, [device_id]);

  // Handle the like button click: add or remove the device_id from localStorage
  const handleLikeClick = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const likedList: number[] = stored ? JSON.parse(stored) : [];
    if (!isLiked) {
      likedList.push(device_id);
      setIsLiked(true);
    } else {
      const updatedList = likedList.filter(id => id !== device_id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      setIsLiked(false);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likedList));
  };

  return (
    <div
      id={device_id.toString()}
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
                {old_price === 1 ? t('general.leu') : t('general.lei')}
              </span>
              <div className={styles.ShopCard_old_price_line}>&nbsp;</div>
            </div>
            {reducere &&
              (reducere.includes('%') ? (
                <div className={styles.ShopCard_old_price_sale}>{reducere}</div>
              ) : (
                <div className={styles.ShopCard_old_price_sale}>
                  {reducere}{' '}
                  {Number(reducere) === 1 ? t('general.leu') : t('general.lei')}
                </div>
              ))}
          </div>
        ) : (
          <div className={styles.ShopCard_old_price}>&nbsp;</div>
        )}

        <div className={styles.ShopCard_price}>
          {formatPrice(price)}{' '}
          <span className={styles.ShopCard_price_small}>
            {price === 1 ? 'leu' : 'lei'}
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
        className={`${styles.ShopCard_like} ${isHovered ? styles.ShopCard_like_show : ''} ${
          isLiked ? styles.isliked : ''
        }`}
        onMouseEnter={() => setIsLikeHovered(true)}
        onMouseLeave={() => setIsLikeHovered(false)}
        onClick={handleLikeClick}
      >
        {isLiked ? (
          <Icon
            type="heart_fill"
            color={
              isLikeHovered
                ? 'var(--theme_primary_color_red_2)'
                : 'var(--theme_primary_color_dark_gray)'
            }
          />
        ) : (
          <Icon
            type="heart"
            color={
              isLikeHovered ? 'var(--theme_primary_color_red_2)' : undefined
            }
          />
        )}
      </div>

      <div
        className={`${styles.ShopCard_compare} ${isHovered ? styles.ShopCard_compare_show : ''} ${
          isCompare ? styles.isCompare : ''
        }`}
        onMouseEnter={() => setIsCompareHovered(true)}
        onMouseLeave={() => setIsCompareHovered(false)}
        onClick={handleCompareClick}
      >
        {isCompare ? (
          <Icon type="compare" color="var(--theme_primary_color_dark_gray)" />
        ) : (
          <Icon
            type="compare"
            color={
              isCompareHovered ? 'var(--theme_primary_color_blue_2)' : undefined
            }
          />
        )}
      </div>
    </div>
  );
};

export default ShopCard;
