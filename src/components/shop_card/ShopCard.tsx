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
  tag?: string;
  subtag?: string;
  tag_color?: string;
  tag_text_color?: string;
  device_id: number;
  buy?: () => Promise<void> | void;
  style_type?: string;
  show_like?: boolean;
  color?: string;
  colors?: string[];
  show_comapre?: boolean;
  link?: string;
}

const STORAGE_KEY_LIKE = 'likedDevices';
const STORAGE_KEY_COMPARE = 'comapreDevices';

// Format price function to use space as a thousands separator
const formatPrice = (price: number) => {
  return price.toLocaleString('ro-RO').replace(/\./g, ' '); // Ensures space instead of dot
};
// === Color options (implicit) + util ===
const DEFAULT_COLOR_OPTIONS = [
  { name: 'black', hex: '#000000' },
  { name: 'purple', hex: '#EAA0D0' },
  { name: 'white', hex: '#ffffff' },
  { name: 'Desert Titanium', hex: '#E5D3C2' },
];
const colorNameToHex = (
  name: string,
  options: { name: string; hex: string }[] = DEFAULT_COLOR_OPTIONS
) => {
  const found = options.find(o => o.name.toLowerCase() === name.toLowerCase());
  // fallback: dacă nu găsim în map, lăsăm string-ul (poate fi css valid, ex. "red")
  return found ? found.hex : name;
};

const ShopCard: React.FC<ShopCardProps> = ({
  image,
  price,
  old_price,
  reducere,
  title,
  subtitle,
  characteristics,
  tag,
  subtag,
  tag_color,
  tag_text_color,
  device_id,
  buy,
  style_type,
  link,
  color,
  colors,
  show_comapre = true,
  show_like = true,
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
    const stored = localStorage.getItem(STORAGE_KEY_COMPARE);
    const CompareList: number[] = stored ? JSON.parse(stored) : [];
    if (CompareList.includes(device_id)) {
      setIsCompare(true);
    }
  }, [device_id]);

  // Handle the Compare button click: add or remove the device_id from localStorage
  const handleCompareClick = () => {
    const stored = localStorage.getItem(STORAGE_KEY_COMPARE);
    const CompareList: number[] = stored ? JSON.parse(stored) : [];
    if (!isCompare) {
      CompareList.push(device_id);
      setIsCompare(true);
    } else {
      const updatedList = CompareList.filter(id => id !== device_id);
      localStorage.setItem(STORAGE_KEY_COMPARE, JSON.stringify(updatedList));
      setIsCompare(false);
      return;
    }
    localStorage.setItem(STORAGE_KEY_COMPARE, JSON.stringify(CompareList));
  };

  // On component mount, check if this item is Compare by reading localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY_LIKE);
    const likedList: number[] = stored ? JSON.parse(stored) : [];
    if (likedList.includes(device_id)) {
      setIsLiked(true);
    }
  }, [device_id]);

  // Handle the like button click: add or remove the device_id from localStorage
  const handleLikeClick = () => {
    const stored = localStorage.getItem(STORAGE_KEY_LIKE);
    const likedList: number[] = stored ? JSON.parse(stored) : [];
    if (!isLiked) {
      likedList.push(device_id);
      setIsLiked(true);
    } else {
      const updatedList = likedList.filter(id => id !== device_id);
      localStorage.setItem(STORAGE_KEY_LIKE, JSON.stringify(updatedList));
      setIsLiked(false);
      return;
    }
    localStorage.setItem(STORAGE_KEY_LIKE, JSON.stringify(likedList));
  };

  const handleClick = () => {
    if (buy) buy();
  };

  return (
    <div
      id={device_id.toString()}
      className={`${styles.ShopCard} ShopCard ${style_type === 'gray' && styles.ShopCard_gray}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tag && (
        <div
          className={`${styles.ShopCard_tag} ${subtag && styles.ShopCard_tag_big}`}
          style={{
            // opacity: 0,
            background: tag_color
              ? tag_color
              : 'var(--theme_primary_color_gray',
            color: tag_text_color
              ? tag_text_color
              : 'var(--theme_primary_color_black)',
          }}
        >
          {subtag && (
            <>
              <div className={styles.ShopCard_subtag}>{subtag} </div>
            </>
          )}
          {tag}
        </div>
      )}
      <img className={styles.ShopCard_img} src={image} alt="Device" />
      {color && (
        <div className={styles.colors_block}>
          <div
            className={styles.color_block}
            style={{ backgroundColor: colorNameToHex(color) }}
          ></div>
          {colors && colors.length > 0 && (
            <>
              {colors.map((c, index) => (
                <div
                  key={index}
                  className={styles.color_block}
                  style={{ backgroundColor: colorNameToHex(c) }}
                />
              ))}
            </>
          )}
        </div>
      )}
      <div className={styles.ShopCard_inside}>
        <div className={styles.ShopCard_top}>
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
                  &nbsp;
                </div>
              ))}
          </div>
        ) : (
          <div className={styles.ShopCard_old_price}>&nbsp;</div>
        )}

        <div className={styles.ShopCard_price}>
          {formatPrice(price)}{' '}
          <span className={styles.ShopCard_price_small}>
            {price === 1 ? t('general.leu') : t('general.lei')}
          </span>
        </div>
      </div>

      <div
        className={`${styles.ShopCard_cart}`}
        onMouseEnter={() => setIsCartHovered(true)}
        onMouseLeave={() => setIsCartHovered(false)}
        onClick={() => (link ? (window.location.href = link) : handleClick())}
      >
        <Icon
          type="cart"
          color={
            isCartHovered ? 'var(--theme_primary_color_blue_2)' : undefined
          }
        />
      </div>

      {show_like == true && (
        <div
          className={`${styles.ShopCard_like} ${isHovered ? styles.ShopCard_like_show : ''} ${
            isLiked ? styles.isliked : ''
          }`}
          onMouseEnter={() => setIsLikeHovered(true)}
          onMouseLeave={() => setIsLikeHovered(false)}
          onClick={handleLikeClick}
        >
          <Icon
            type={
              isLikeHovered
                ? 'heart_fill'
                : isLiked && isHovered
                  ? 'heart_fill'
                  : 'heart'
            }
            color={
              isLikeHovered
                ? 'var(--theme_primary_color_red_2)'
                : isLiked
                  ? isHovered
                    ? 'var(--theme_primary_color_red_2)'
                    : 'var(--theme_primary_color_gray)'
                  : 'var(--theme_primary_color_black)'
            }
          />
          {/*{isLiked ? (*/}
          {/*  <Icon*/}
          {/*    type="heart_fill"*/}
          {/*    color={*/}
          {/*      isLikeHovered*/}
          {/*        ? 'var(--theme_primary_color_red_2)'*/}
          {/*        : 'var(--theme_primary_color_gray)'*/}
          {/*    }*/}
          {/*  />*/}
          {/*) : (*/}
          {/*  <Icon*/}
          {/*    type="heart"*/}
          {/*    color={*/}
          {/*      isLikeHovered ? 'var(--theme_primary_color_red_2)' : undefined*/}
          {/*    }*/}
          {/*  />*/}
          {/*)}*/}
        </div>
      )}
      {show_comapre == true && (
        <div
          className={`${styles.ShopCard_compare} ${isHovered ? styles.ShopCard_compare_show : ''} ${
            isCompare ? styles.isCompare : ''
          }`}
          onMouseEnter={() => setIsCompareHovered(true)}
          onMouseLeave={() => setIsCompareHovered(false)}
          onClick={handleCompareClick}
        >
          {isCompare ? (
            <Icon type="compare" color="var(--theme_primary_color_gray)" />
          ) : (
            <Icon
              type="compare"
              color={
                isCompareHovered
                  ? 'var(--theme_primary_color_blue_3)'
                  : undefined
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ShopCard;
