import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  color?: string;
  image?: string;
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ color, image, children }) => {
  const HeroStyle: React.CSSProperties = {
    background: color,
    height: '450px',
  };

  return (
    <div className={styles.hero} style={HeroStyle}>
      <div className={styles.hero_inside}>{children}</div>
      <img className={styles.hero_img} src={image} alt="Moldtelecom" />
    </div>
  );
};

export default Hero;
