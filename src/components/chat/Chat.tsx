import React, { useState } from 'react';
import styles from './Chat.module.css';

const Chat: React.FC = () => {

  const [activeOverlay, setActiveOverlay] = useState(false);

  return (
    <>
      <div className={`${styles.chat_overlay} ${activeOverlay && styles.chat_overlay_active}`} onClick={ ()=> setActiveOverlay(!activeOverlay)}>
        &nbsp;
      </div>
      <div className={styles.chat_icon} onClick={ ()=> setActiveOverlay(!activeOverlay)}>
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="70" height="70" rx="35" fill="#adbbff" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.75 20.4167C43.8042 20.4167 50.3333 26.9459 50.3333 35C50.3333 43.0542 43.8042 49.5833 35.75 49.5833C33.0131 49.5833 30.4583 48.8315 28.2737 47.5242C27.7898 47.2346 27.2093 47.1535 26.6647 47.2994L22.2622 48.479L23.4429 44.0725C23.5887 43.5285 23.508 42.9485 23.2192 42.4652C21.916 40.2829 21.1667 37.7321 21.1667 35C21.1667 26.9459 27.6959 20.4167 35.75 20.4167ZM54.5 35C54.5 24.6447 46.1054 16.25 35.75 16.25C25.3947 16.25 17 24.6447 17 35C17 38.1833 17.7949 41.1862 19.1981 43.8158L17.3036 50.886C17.1109 51.605 17.3165 52.3721 17.8428 52.8985C18.3691 53.4248 19.1362 53.6304 19.8551 53.4377L26.9203 51.5446C29.5532 52.9523 32.561 53.75 35.75 53.75C46.1054 53.75 54.5 45.3554 54.5 35Z"
            fill="#fff"
            stroke="#F7F7F7"
            stroke-width="0.7"
          />
        </svg>
        <div className={styles.chat_icon_circle}>&nbsp;</div>
        <div className={styles.chat_icon_animated_circle}>&nbsp;</div>
      </div>
    </>
  );
};

export default Chat;
