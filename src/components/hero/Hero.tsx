import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  color?: string;
  classname?: string;
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ color, children, classname }) => {
  const HeroStyle: React.CSSProperties = {
    background: color,
    // height: '550px',
  };

  return (
    <div className={`${styles.hero} ${classname}`} style={HeroStyle}>
      <div className={styles.hero_inside}>{children}</div>
    </div>
  );
};

export default Hero;
