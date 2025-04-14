import React, { useEffect, useState } from 'react';
import styles from './CornerBanner.module.css';
import Icon from '../Icon.tsx';
import Button from '../Button.tsx';
import { useNavigate } from 'react-router-dom';

const CornerBanner: React.FC = () => {
  const [isShown, setIsShown] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const wasClosed = localStorage.getItem('cornerBannerClosed') === 'true';
    if (wasClosed) {
      setIsShown(false);
    }
  }, []);

  const handleClose = () => {
    setIsShown(false);
    localStorage.setItem('cornerBannerClosed', 'true');
  };

  const goToOffer = () => {
    navigate('/triple');
    handleClose();
  };

  if (!isShown) return null;

  return (
    <div className={styles.corner_banner}>
      <div className={styles.corner_banner_inside}>
        <img
          className={styles.corner_banner_img}
          src="/images/landings/95174539.png"
          alt="Moldtelecom"
        />
        <div className={styles.corner_banner_close}>
          <Icon type="close" color="white" onClick={handleClose} />
        </div>

        <div className={styles.corner_banner_text}>
          <div className={styles.corner_banner_text_title}>
            Descoperă <br />
            cele mai tari reduceri
          </div>
          <div className={styles.corner_banner_text_content}>
            Bucurate de reducerile de <b>-35%</b> <br />
            Si alege <b>GRATUIT</b> un numar frumos care te reprezinta.
          </div>
          <Button
            onClick={goToOffer}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Mai multe detalii
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CornerBanner;
