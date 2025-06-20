// src/pages/PromoRazuieste/PromoRazuieste.tsx
import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './PromoRazuieste.module.css';
import Footer from '../../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Button from '../../../../components/Button.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import { useState } from 'react';
import Popup from '../../../../components/Popup/Popup.tsx';

export default function PromoRazuieste() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('promorazuieste.breadcrumb.app'), url: ' ' },
    { label: t('promorazuieste.breadcrumb.name') },
  ];

  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('1002600048836');
    } catch (err) {
      console.error('Eroare la copiere:', err);
    }
  };

  return (
    <>
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/15094512${t('lang')}.png`}
            alt={'Moldtelecom'}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/15994522${t('lang')}.png`}
            alt={'Moldtelecom'}
          />
        </div>
      </Hero>

      <div className={styles.promorazuieste}>
        <div className="title_3">{t('promorazuieste.title')}</div>
        <div className={styles.btns}>
          <Button
            to="https://mtc.md/my-mtc"
            color={'#fff'}
            bgcolor={'var(--theme_primary_color_blue_4)'}
            border={'var(--theme_primary_color_blue_4)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {t('promorazuieste.buttons.scratch')}
          </Button>
          <Button
            onClick={() => setShowPopup(true)}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {t('promorazuieste.buttons.rules')}
          </Button>
        </div>

        <div>
          <span className={styles.wincard_title_text}>
            {' '}
            {t('promorazuieste.intro.part1')}
            {'  '}
            <a
              className={styles.promorazuieste_btn}
              href="https://mtc.md/my-mtc"
            >
              My Moldtelecom
            </a>{' '}
            {t('promorazuieste.intro.part2_1')}{' '}
            <b>{t('promorazuieste.intro.part2_2')}</b>
            {t('promorazuieste.intro.part2_3')}
          </span>
          {/*<br /> <br style={{lineHeight: '16px', fontSize:"16px"}} />*/}
          <div style={{ height: '3px' }}></div>
          {t('promorazuieste.intro.part3')}
          {/*<br /> <br className={styles.br_mobile} />*/}
          {/*{t('promorazuieste.intro.part4')}*/}
        </div>
        <br />
        <br />
      </div>

      <div className={styles.promorazuieste}>
        <div className="title_3">{t('promorazuieste.winTitle')}</div>
        <div style={{ display: 'none' }} className={styles.win}>
          <div className={styles.wincard}>
            {t('promorazuieste.wins.100MB.label')} <br />
            <span>{t('promorazuieste.wins.100MB.desc')}</span>
          </div>
          <div
            className={styles.wincard}

            // style={{ background: 'transparent', border: '1px solid var(--theme_primary_color_blue_3)' }}
          >
            {t('promorazuieste.wins.500MB.label')} <br />
            <span>{t('promorazuieste.wins.500MB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ffca3b, #ffeaa2)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6047 1.21528C17.9784 0.99347 18.4434 0.99347 18.8172 1.21528L25.7359 5.32179L32.7517 9.26037C33.1306 9.47311 33.3631 9.87583 33.3579 10.3104L33.2609 18.3555L33.3579 26.4006C33.3631 26.8351 33.1306 27.2378 32.7517 27.4506L25.7359 31.3892L18.8172 35.4957C18.4434 35.7175 17.9784 35.7175 17.6047 35.4957L10.6859 31.3892L3.67021 27.4506C3.29126 27.2378 3.05875 26.8351 3.06399 26.4006L3.16094 18.3555L3.06399 10.3104C3.05875 9.87583 3.29126 9.47311 3.67021 9.26037L10.6859 5.32179L17.6047 1.21528Z"
                fill="#F8CFAD"
              />
              <path
                d="M25.7383 5.32324L32.7539 9.26172C33.1327 9.4745 33.3646 9.87709 33.3594 10.3115L33.2627 18.3564L33.3594 26.4014C33.3646 26.8359 33.1328 27.2394 32.7539 27.4521L25.7383 31.3906L18.8193 35.4971C18.4456 35.7189 17.9802 35.7189 17.6064 35.4971L11.1367 31.6572L23.123 3.77051L25.7383 5.32324Z"
                fill="#F0BD90"
              />
              <path
                d="M17.7757 10.3794C17.9614 10.0275 18.4655 10.0275 18.6511 10.3794L20.7918 14.4367C20.8634 14.5724 20.9939 14.6672 21.1451 14.6934L25.6653 15.4755C26.0574 15.5433 26.2132 16.0227 25.9358 16.3081L22.7386 19.5977C22.6317 19.7078 22.5818 19.8612 22.6037 20.0131L23.2567 24.5537C23.3133 24.9476 22.9055 25.2439 22.5484 25.0683L18.4318 23.0441C18.2941 22.9764 18.1328 22.9764 17.9951 23.0441L13.8784 25.0683C13.5214 25.2439 13.1136 24.9476 13.1702 24.5537L13.8232 20.0131C13.8451 19.8612 13.7952 19.7078 13.6883 19.5977L10.491 16.3081C10.2137 16.0227 10.3695 15.5433 10.7616 15.4755L15.2818 14.6934C15.433 14.6672 15.5635 14.5724 15.6351 14.4367L17.7757 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.1GB.label')} <br />
            <span>{t('promorazuieste.wins.1GB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ff5283, #ffa2ba)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2492 1.21528C17.623 0.99347 18.088 0.99347 18.4617 1.21528L25.3805 5.32179L32.3962 9.26037C32.7751 9.47311 33.0077 9.87583 33.0024 10.3104L32.9055 18.3555L33.0024 26.4006C33.0077 26.8351 32.7751 27.2378 32.3962 27.4506L25.3805 31.3892L18.4617 35.4957C18.088 35.7175 17.623 35.7175 17.2492 35.4957L10.3305 31.3892L3.31474 27.4506C2.93579 27.2378 2.70328 26.8351 2.70852 26.4006L2.80547 18.3555L2.70852 10.3104C2.70328 9.87583 2.93579 9.47311 3.31474 9.26037L10.3305 5.32179L17.2492 1.21528Z"
                fill="#E4E6E5"
              />
              <path
                d="M25.3857 5.32324L32.4014 9.26172C32.7803 9.47446 33.013 9.87697 33.0078 10.3115L32.9111 18.3564L33.0078 26.4014C33.013 26.8359 32.7803 27.2394 32.4014 27.4521L25.3857 31.3906L18.4668 35.4971C18.0932 35.7186 17.6284 35.7187 17.2549 35.4971L10.7812 31.6543L22.7676 3.76855L25.3857 5.32324Z"
                fill="#D2D2D2"
              />
              <path
                d="M17.4164 10.3794C17.602 10.0275 18.1061 10.0275 18.2918 10.3794L20.4324 14.4367C20.504 14.5724 20.6345 14.6672 20.7857 14.6934L25.3059 15.4755C25.698 15.5433 25.8538 16.0227 25.5765 16.3081L22.3793 19.5977C22.2723 19.7078 22.2224 19.8612 22.2443 20.0131L22.8973 24.5537C22.9539 24.9476 22.5461 25.2439 22.1891 25.0683L18.0724 23.0441C17.9347 22.9764 17.7734 22.9764 17.6357 23.0441L13.5191 25.0683C13.162 25.2439 12.7542 24.9476 12.8108 24.5537L13.4638 20.0131C13.4857 19.8612 13.4358 19.7078 13.3289 19.5977L10.1317 16.3081C9.85434 16.0227 10.0101 15.5433 10.4022 15.4755L14.9224 14.6934C15.0736 14.6672 15.2041 14.5724 15.2757 14.4367L17.4164 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.5GB.label')} <br />
            <span>{t('promorazuieste.wins.5GB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #5256ff, #a6a2ff)',
              color: '#fff',
            }}
          >
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8938 1.21528C17.2675 0.99347 17.7325 0.99347 18.1062 1.21528L25.025 5.32179L32.0407 9.26037C32.4197 9.47311 32.6522 9.87583 32.647 10.3104L32.55 18.3555L32.647 26.4006C32.6522 26.8351 32.4197 27.2378 32.0407 27.4506L25.025 31.3892L18.1062 35.4957C17.7325 35.7175 17.2675 35.7175 16.8938 35.4957L9.975 31.3892L2.95927 27.4506C2.58032 27.2378 2.34781 26.8351 2.35305 26.4006L2.45 18.3555L2.35305 10.3104C2.34781 9.87583 2.58032 9.47311 2.95927 9.26037L9.975 5.32179L16.8938 1.21528Z"
                fill="#FFE29B"
              />
              <path
                d="M25.0273 5.32324L32.043 9.26172C32.4217 9.4745 32.6537 9.87709 32.6484 10.3115L32.5518 18.3564L32.6484 26.4014C32.6537 26.8359 32.4219 27.2394 32.043 27.4521L25.0273 31.3906L18.1084 35.4971C17.7347 35.7189 17.2692 35.7189 16.8955 35.4971L10.4258 31.6572L22.4121 3.77051L25.0273 5.32324Z"
                fill="#FFCB53"
              />
              <path
                d="M17.0648 10.3794C17.2505 10.0275 17.7545 10.0275 17.9402 10.3794L20.0809 14.4367C20.1525 14.5724 20.283 14.6672 20.4342 14.6934L24.9544 15.4755C25.3465 15.5433 25.5022 16.0227 25.2249 16.3081L22.0277 19.5977C21.9207 19.7078 21.8709 19.8612 21.8927 20.0131L22.5457 24.5537C22.6024 24.9476 22.1946 25.2439 21.8375 25.0683L17.7209 23.0441C17.5832 22.9764 17.4218 22.9764 17.2841 23.0441L13.1675 25.0683C12.8104 25.2439 12.4026 24.9476 12.4593 24.5537L13.1123 20.0131C13.1341 19.8612 13.0843 19.7078 12.9773 19.5977L9.78011 16.3081C9.50278 16.0227 9.65853 15.5433 10.0506 15.4755L14.5708 14.6934C14.722 14.6672 14.8525 14.5724 14.9242 14.4367L17.0648 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.10GB.label')} <br />
            <span>{t('promorazuieste.wins.10GB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ffca3b, #ffeaa2)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6047 1.21528C17.9784 0.99347 18.4434 0.99347 18.8172 1.21528L25.7359 5.32179L32.7517 9.26037C33.1306 9.47311 33.3631 9.87583 33.3579 10.3104L33.2609 18.3555L33.3579 26.4006C33.3631 26.8351 33.1306 27.2378 32.7517 27.4506L25.7359 31.3892L18.8172 35.4957C18.4434 35.7175 17.9784 35.7175 17.6047 35.4957L10.6859 31.3892L3.67021 27.4506C3.29126 27.2378 3.05875 26.8351 3.06399 26.4006L3.16094 18.3555L3.06399 10.3104C3.05875 9.87583 3.29126 9.47311 3.67021 9.26037L10.6859 5.32179L17.6047 1.21528Z"
                fill="#F8CFAD"
              />
              <path
                d="M25.7383 5.32324L32.7539 9.26172C33.1327 9.4745 33.3646 9.87709 33.3594 10.3115L33.2627 18.3564L33.3594 26.4014C33.3646 26.8359 33.1328 27.2394 32.7539 27.4521L25.7383 31.3906L18.8193 35.4971C18.4456 35.7189 17.9802 35.7189 17.6064 35.4971L11.1367 31.6572L23.123 3.77051L25.7383 5.32324Z"
                fill="#F0BD90"
              />
              <path
                d="M17.7757 10.3794C17.9614 10.0275 18.4655 10.0275 18.6511 10.3794L20.7918 14.4367C20.8634 14.5724 20.9939 14.6672 21.1451 14.6934L25.6653 15.4755C26.0574 15.5433 26.2132 16.0227 25.9358 16.3081L22.7386 19.5977C22.6317 19.7078 22.5818 19.8612 22.6037 20.0131L23.2567 24.5537C23.3133 24.9476 22.9055 25.2439 22.5484 25.0683L18.4318 23.0441C18.2941 22.9764 18.1328 22.9764 17.9951 23.0441L13.8784 25.0683C13.5214 25.2439 13.1136 24.9476 13.1702 24.5537L13.8232 20.0131C13.8451 19.8612 13.7952 19.7078 13.6883 19.5977L10.491 16.3081C10.2137 16.0227 10.3695 15.5433 10.7616 15.4755L15.2818 14.6934C15.433 14.6672 15.5635 14.5724 15.6351 14.4367L17.7757 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.20min.label')} <br />
            <span>{t('promorazuieste.wins.20min.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ff5283, #ffa2ba)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2492 1.21528C17.623 0.99347 18.088 0.99347 18.4617 1.21528L25.3805 5.32179L32.3962 9.26037C32.7751 9.47311 33.0077 9.87583 33.0024 10.3104L32.9055 18.3555L33.0024 26.4006C33.0077 26.8351 32.7751 27.2378 32.3962 27.4506L25.3805 31.3892L18.4617 35.4957C18.088 35.7175 17.623 35.7175 17.2492 35.4957L10.3305 31.3892L3.31474 27.4506C2.93579 27.2378 2.70328 26.8351 2.70852 26.4006L2.80547 18.3555L2.70852 10.3104C2.70328 9.87583 2.93579 9.47311 3.31474 9.26037L10.3305 5.32179L17.2492 1.21528Z"
                fill="#E4E6E5"
              />
              <path
                d="M25.3857 5.32324L32.4014 9.26172C32.7803 9.47446 33.013 9.87697 33.0078 10.3115L32.9111 18.3564L33.0078 26.4014C33.013 26.8359 32.7803 27.2394 32.4014 27.4521L25.3857 31.3906L18.4668 35.4971C18.0932 35.7186 17.6284 35.7187 17.2549 35.4971L10.7812 31.6543L22.7676 3.76855L25.3857 5.32324Z"
                fill="#D2D2D2"
              />
              <path
                d="M17.4164 10.3794C17.602 10.0275 18.1061 10.0275 18.2918 10.3794L20.4324 14.4367C20.504 14.5724 20.6345 14.6672 20.7857 14.6934L25.3059 15.4755C25.698 15.5433 25.8538 16.0227 25.5765 16.3081L22.3793 19.5977C22.2723 19.7078 22.2224 19.8612 22.2443 20.0131L22.8973 24.5537C22.9539 24.9476 22.5461 25.2439 22.1891 25.0683L18.0724 23.0441C17.9347 22.9764 17.7734 22.9764 17.6357 23.0441L13.5191 25.0683C13.162 25.2439 12.7542 24.9476 12.8108 24.5537L13.4638 20.0131C13.4857 19.8612 13.4358 19.7078 13.3289 19.5977L10.1317 16.3081C9.85434 16.0227 10.0101 15.5433 10.4022 15.4755L14.9224 14.6934C15.0736 14.6672 15.2041 14.5724 15.2757 14.4367L17.4164 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.50min.label')} <br />
            <span>{t('promorazuieste.wins.50min.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #5256ff, #a6a2ff)',
              color: '#fff',
            }}
          >
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8938 1.21528C17.2675 0.99347 17.7325 0.99347 18.1062 1.21528L25.025 5.32179L32.0407 9.26037C32.4197 9.47311 32.6522 9.87583 32.647 10.3104L32.55 18.3555L32.647 26.4006C32.6522 26.8351 32.4197 27.2378 32.0407 27.4506L25.025 31.3892L18.1062 35.4957C17.7325 35.7175 17.2675 35.7175 16.8938 35.4957L9.975 31.3892L2.95927 27.4506C2.58032 27.2378 2.34781 26.8351 2.35305 26.4006L2.45 18.3555L2.35305 10.3104C2.34781 9.87583 2.58032 9.47311 2.95927 9.26037L9.975 5.32179L16.8938 1.21528Z"
                fill="#FFE29B"
              />
              <path
                d="M25.0273 5.32324L32.043 9.26172C32.4217 9.4745 32.6537 9.87709 32.6484 10.3115L32.5518 18.3564L32.6484 26.4014C32.6537 26.8359 32.4219 27.2394 32.043 27.4521L25.0273 31.3906L18.1084 35.4971C17.7347 35.7189 17.2692 35.7189 16.8955 35.4971L10.4258 31.6572L22.4121 3.77051L25.0273 5.32324Z"
                fill="#FFCB53"
              />
              <path
                d="M17.0648 10.3794C17.2505 10.0275 17.7545 10.0275 17.9402 10.3794L20.0809 14.4367C20.1525 14.5724 20.283 14.6672 20.4342 14.6934L24.9544 15.4755C25.3465 15.5433 25.5022 16.0227 25.2249 16.3081L22.0277 19.5977C21.9207 19.7078 21.8709 19.8612 21.8927 20.0131L22.5457 24.5537C22.6024 24.9476 22.1946 25.2439 21.8375 25.0683L17.7209 23.0441C17.5832 22.9764 17.4218 22.9764 17.2841 23.0441L13.1675 25.0683C12.8104 25.2439 12.4026 24.9476 12.4593 24.5537L13.1123 20.0131C13.1341 19.8612 13.0843 19.7078 12.9773 19.5977L9.78011 16.3081C9.50278 16.0227 9.65853 15.5433 10.0506 15.4755L14.5708 14.6934C14.722 14.6672 14.8525 14.5724 14.9242 14.4367L17.0648 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.100min.label')} <br />
            <span>{t('promorazuieste.wins.100min.desc')}</span>
          </div>
        </div>
        <div className={styles.win}>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ffca3b, #ffeaa2)',
              color: '#fff',
            }}
          >
            {t('promorazuieste.wins.100MB.label')} <br />
            <span>{t('promorazuieste.wins.100MB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ffca3b, #ffeaa2)',
              color: '#fff',
            }}
            // style={{ background: 'transparent', border: '1px solid var(--theme_primary_color_blue_3)' }}
          >
            {t('promorazuieste.wins.500MB.label')} <br />
            <span>{t('promorazuieste.wins.500MB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ff5283, #ffa2ba)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6047 1.21528C17.9784 0.99347 18.4434 0.99347 18.8172 1.21528L25.7359 5.32179L32.7517 9.26037C33.1306 9.47311 33.3631 9.87583 33.3579 10.3104L33.2609 18.3555L33.3579 26.4006C33.3631 26.8351 33.1306 27.2378 32.7517 27.4506L25.7359 31.3892L18.8172 35.4957C18.4434 35.7175 17.9784 35.7175 17.6047 35.4957L10.6859 31.3892L3.67021 27.4506C3.29126 27.2378 3.05875 26.8351 3.06399 26.4006L3.16094 18.3555L3.06399 10.3104C3.05875 9.87583 3.29126 9.47311 3.67021 9.26037L10.6859 5.32179L17.6047 1.21528Z"
                fill="#F8CFAD"
              />
              <path
                d="M25.7383 5.32324L32.7539 9.26172C33.1327 9.4745 33.3646 9.87709 33.3594 10.3115L33.2627 18.3564L33.3594 26.4014C33.3646 26.8359 33.1328 27.2394 32.7539 27.4521L25.7383 31.3906L18.8193 35.4971C18.4456 35.7189 17.9802 35.7189 17.6064 35.4971L11.1367 31.6572L23.123 3.77051L25.7383 5.32324Z"
                fill="#F0BD90"
              />
              <path
                d="M17.7757 10.3794C17.9614 10.0275 18.4655 10.0275 18.6511 10.3794L20.7918 14.4367C20.8634 14.5724 20.9939 14.6672 21.1451 14.6934L25.6653 15.4755C26.0574 15.5433 26.2132 16.0227 25.9358 16.3081L22.7386 19.5977C22.6317 19.7078 22.5818 19.8612 22.6037 20.0131L23.2567 24.5537C23.3133 24.9476 22.9055 25.2439 22.5484 25.0683L18.4318 23.0441C18.2941 22.9764 18.1328 22.9764 17.9951 23.0441L13.8784 25.0683C13.5214 25.2439 13.1136 24.9476 13.1702 24.5537L13.8232 20.0131C13.8451 19.8612 13.7952 19.7078 13.6883 19.5977L10.491 16.3081C10.2137 16.0227 10.3695 15.5433 10.7616 15.4755L15.2818 14.6934C15.433 14.6672 15.5635 14.5724 15.6351 14.4367L17.7757 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.1GB.label')} <br />
            <span>{t('promorazuieste.wins.1GB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ff5283, #ffa2ba)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2492 1.21528C17.623 0.99347 18.088 0.99347 18.4617 1.21528L25.3805 5.32179L32.3962 9.26037C32.7751 9.47311 33.0077 9.87583 33.0024 10.3104L32.9055 18.3555L33.0024 26.4006C33.0077 26.8351 32.7751 27.2378 32.3962 27.4506L25.3805 31.3892L18.4617 35.4957C18.088 35.7175 17.623 35.7175 17.2492 35.4957L10.3305 31.3892L3.31474 27.4506C2.93579 27.2378 2.70328 26.8351 2.70852 26.4006L2.80547 18.3555L2.70852 10.3104C2.70328 9.87583 2.93579 9.47311 3.31474 9.26037L10.3305 5.32179L17.2492 1.21528Z"
                fill="#E4E6E5"
              />
              <path
                d="M25.3857 5.32324L32.4014 9.26172C32.7803 9.47446 33.013 9.87697 33.0078 10.3115L32.9111 18.3564L33.0078 26.4014C33.013 26.8359 32.7803 27.2394 32.4014 27.4521L25.3857 31.3906L18.4668 35.4971C18.0932 35.7186 17.6284 35.7187 17.2549 35.4971L10.7812 31.6543L22.7676 3.76855L25.3857 5.32324Z"
                fill="#D2D2D2"
              />
              <path
                d="M17.4164 10.3794C17.602 10.0275 18.1061 10.0275 18.2918 10.3794L20.4324 14.4367C20.504 14.5724 20.6345 14.6672 20.7857 14.6934L25.3059 15.4755C25.698 15.5433 25.8538 16.0227 25.5765 16.3081L22.3793 19.5977C22.2723 19.7078 22.2224 19.8612 22.2443 20.0131L22.8973 24.5537C22.9539 24.9476 22.5461 25.2439 22.1891 25.0683L18.0724 23.0441C17.9347 22.9764 17.7734 22.9764 17.6357 23.0441L13.5191 25.0683C13.162 25.2439 12.7542 24.9476 12.8108 24.5537L13.4638 20.0131C13.4857 19.8612 13.4358 19.7078 13.3289 19.5977L10.1317 16.3081C9.85434 16.0227 10.0101 15.5433 10.4022 15.4755L14.9224 14.6934C15.0736 14.6672 15.2041 14.5724 15.2757 14.4367L17.4164 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.5GB.label')} <br />
            <span>{t('promorazuieste.wins.5GB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #ff5283, #ffa2ba)',
              color: '#fff',
            }}
          >
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8938 1.21528C17.2675 0.99347 17.7325 0.99347 18.1062 1.21528L25.025 5.32179L32.0407 9.26037C32.4197 9.47311 32.6522 9.87583 32.647 10.3104L32.55 18.3555L32.647 26.4006C32.6522 26.8351 32.4197 27.2378 32.0407 27.4506L25.025 31.3892L18.1062 35.4957C17.7325 35.7175 17.2675 35.7175 16.8938 35.4957L9.975 31.3892L2.95927 27.4506C2.58032 27.2378 2.34781 26.8351 2.35305 26.4006L2.45 18.3555L2.35305 10.3104C2.34781 9.87583 2.58032 9.47311 2.95927 9.26037L9.975 5.32179L16.8938 1.21528Z"
                fill="#FFE29B"
              />
              <path
                d="M25.0273 5.32324L32.043 9.26172C32.4217 9.4745 32.6537 9.87709 32.6484 10.3115L32.5518 18.3564L32.6484 26.4014C32.6537 26.8359 32.4219 27.2394 32.043 27.4521L25.0273 31.3906L18.1084 35.4971C17.7347 35.7189 17.2692 35.7189 16.8955 35.4971L10.4258 31.6572L22.4121 3.77051L25.0273 5.32324Z"
                fill="#FFCB53"
              />
              <path
                d="M17.0648 10.3794C17.2505 10.0275 17.7545 10.0275 17.9402 10.3794L20.0809 14.4367C20.1525 14.5724 20.283 14.6672 20.4342 14.6934L24.9544 15.4755C25.3465 15.5433 25.5022 16.0227 25.2249 16.3081L22.0277 19.5977C21.9207 19.7078 21.8709 19.8612 21.8927 20.0131L22.5457 24.5537C22.6024 24.9476 22.1946 25.2439 21.8375 25.0683L17.7209 23.0441C17.5832 22.9764 17.4218 22.9764 17.2841 23.0441L13.1675 25.0683C12.8104 25.2439 12.4026 24.9476 12.4593 24.5537L13.1123 20.0131C13.1341 19.8612 13.0843 19.7078 12.9773 19.5977L9.78011 16.3081C9.50278 16.0227 9.65853 15.5433 10.0506 15.4755L14.5708 14.6934C14.722 14.6672 14.8525 14.5724 14.9242 14.4367L17.0648 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.10GB.label')} <br />
            <span>{t('promorazuieste.wins.10GB.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #5256ff, #a6a2ff)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6047 1.21528C17.9784 0.99347 18.4434 0.99347 18.8172 1.21528L25.7359 5.32179L32.7517 9.26037C33.1306 9.47311 33.3631 9.87583 33.3579 10.3104L33.2609 18.3555L33.3579 26.4006C33.3631 26.8351 33.1306 27.2378 32.7517 27.4506L25.7359 31.3892L18.8172 35.4957C18.4434 35.7175 17.9784 35.7175 17.6047 35.4957L10.6859 31.3892L3.67021 27.4506C3.29126 27.2378 3.05875 26.8351 3.06399 26.4006L3.16094 18.3555L3.06399 10.3104C3.05875 9.87583 3.29126 9.47311 3.67021 9.26037L10.6859 5.32179L17.6047 1.21528Z"
                fill="#F8CFAD"
              />
              <path
                d="M25.7383 5.32324L32.7539 9.26172C33.1327 9.4745 33.3646 9.87709 33.3594 10.3115L33.2627 18.3564L33.3594 26.4014C33.3646 26.8359 33.1328 27.2394 32.7539 27.4521L25.7383 31.3906L18.8193 35.4971C18.4456 35.7189 17.9802 35.7189 17.6064 35.4971L11.1367 31.6572L23.123 3.77051L25.7383 5.32324Z"
                fill="#F0BD90"
              />
              <path
                d="M17.7757 10.3794C17.9614 10.0275 18.4655 10.0275 18.6511 10.3794L20.7918 14.4367C20.8634 14.5724 20.9939 14.6672 21.1451 14.6934L25.6653 15.4755C26.0574 15.5433 26.2132 16.0227 25.9358 16.3081L22.7386 19.5977C22.6317 19.7078 22.5818 19.8612 22.6037 20.0131L23.2567 24.5537C23.3133 24.9476 22.9055 25.2439 22.5484 25.0683L18.4318 23.0441C18.2941 22.9764 18.1328 22.9764 17.9951 23.0441L13.8784 25.0683C13.5214 25.2439 13.1136 24.9476 13.1702 24.5537L13.8232 20.0131C13.8451 19.8612 13.7952 19.7078 13.6883 19.5977L10.491 16.3081C10.2137 16.0227 10.3695 15.5433 10.7616 15.4755L15.2818 14.6934C15.433 14.6672 15.5635 14.5724 15.6351 14.4367L17.7757 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.20min.label')} <br />
            <span>{t('promorazuieste.wins.20min.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #5256ff, #a6a2ff)',
              color: '#fff',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2492 1.21528C17.623 0.99347 18.088 0.99347 18.4617 1.21528L25.3805 5.32179L32.3962 9.26037C32.7751 9.47311 33.0077 9.87583 33.0024 10.3104L32.9055 18.3555L33.0024 26.4006C33.0077 26.8351 32.7751 27.2378 32.3962 27.4506L25.3805 31.3892L18.4617 35.4957C18.088 35.7175 17.623 35.7175 17.2492 35.4957L10.3305 31.3892L3.31474 27.4506C2.93579 27.2378 2.70328 26.8351 2.70852 26.4006L2.80547 18.3555L2.70852 10.3104C2.70328 9.87583 2.93579 9.47311 3.31474 9.26037L10.3305 5.32179L17.2492 1.21528Z"
                fill="#E4E6E5"
              />
              <path
                d="M25.3857 5.32324L32.4014 9.26172C32.7803 9.47446 33.013 9.87697 33.0078 10.3115L32.9111 18.3564L33.0078 26.4014C33.013 26.8359 32.7803 27.2394 32.4014 27.4521L25.3857 31.3906L18.4668 35.4971C18.0932 35.7186 17.6284 35.7187 17.2549 35.4971L10.7812 31.6543L22.7676 3.76855L25.3857 5.32324Z"
                fill="#D2D2D2"
              />
              <path
                d="M17.4164 10.3794C17.602 10.0275 18.1061 10.0275 18.2918 10.3794L20.4324 14.4367C20.504 14.5724 20.6345 14.6672 20.7857 14.6934L25.3059 15.4755C25.698 15.5433 25.8538 16.0227 25.5765 16.3081L22.3793 19.5977C22.2723 19.7078 22.2224 19.8612 22.2443 20.0131L22.8973 24.5537C22.9539 24.9476 22.5461 25.2439 22.1891 25.0683L18.0724 23.0441C17.9347 22.9764 17.7734 22.9764 17.6357 23.0441L13.5191 25.0683C13.162 25.2439 12.7542 24.9476 12.8108 24.5537L13.4638 20.0131C13.4857 19.8612 13.4358 19.7078 13.3289 19.5977L10.1317 16.3081C9.85434 16.0227 10.0101 15.5433 10.4022 15.4755L14.9224 14.6934C15.0736 14.6672 15.2041 14.5724 15.2757 14.4367L17.4164 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.50min.label')} <br />
            <span>{t('promorazuieste.wins.50min.desc')}</span>
          </div>
          <div
            className={styles.wincard}
            style={{
              background: 'linear-gradient(135deg, #5256ff, #a6a2ff)',
              color: '#fff',
            }}
          >
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8938 1.21528C17.2675 0.99347 17.7325 0.99347 18.1062 1.21528L25.025 5.32179L32.0407 9.26037C32.4197 9.47311 32.6522 9.87583 32.647 10.3104L32.55 18.3555L32.647 26.4006C32.6522 26.8351 32.4197 27.2378 32.0407 27.4506L25.025 31.3892L18.1062 35.4957C17.7325 35.7175 17.2675 35.7175 16.8938 35.4957L9.975 31.3892L2.95927 27.4506C2.58032 27.2378 2.34781 26.8351 2.35305 26.4006L2.45 18.3555L2.35305 10.3104C2.34781 9.87583 2.58032 9.47311 2.95927 9.26037L9.975 5.32179L16.8938 1.21528Z"
                fill="#FFE29B"
              />
              <path
                d="M25.0273 5.32324L32.043 9.26172C32.4217 9.4745 32.6537 9.87709 32.6484 10.3115L32.5518 18.3564L32.6484 26.4014C32.6537 26.8359 32.4219 27.2394 32.043 27.4521L25.0273 31.3906L18.1084 35.4971C17.7347 35.7189 17.2692 35.7189 16.8955 35.4971L10.4258 31.6572L22.4121 3.77051L25.0273 5.32324Z"
                fill="#FFCB53"
              />
              <path
                d="M17.0648 10.3794C17.2505 10.0275 17.7545 10.0275 17.9402 10.3794L20.0809 14.4367C20.1525 14.5724 20.283 14.6672 20.4342 14.6934L24.9544 15.4755C25.3465 15.5433 25.5022 16.0227 25.2249 16.3081L22.0277 19.5977C21.9207 19.7078 21.8709 19.8612 21.8927 20.0131L22.5457 24.5537C22.6024 24.9476 22.1946 25.2439 21.8375 25.0683L17.7209 23.0441C17.5832 22.9764 17.4218 22.9764 17.2841 23.0441L13.1675 25.0683C12.8104 25.2439 12.4026 24.9476 12.4593 24.5537L13.1123 20.0131C13.1341 19.8612 13.0843 19.7078 12.9773 19.5977L9.78011 16.3081C9.50278 16.0227 9.65853 15.5433 10.0506 15.4755L14.5708 14.6934C14.722 14.6672 14.8525 14.5724 14.9242 14.4367L17.0648 10.3794Z"
                fill="#F9F0E9"
              />
            </svg>
            {t('promorazuieste.wins.100min.label')} <br />
            <span>{t('promorazuieste.wins.100min.desc')}</span>
          </div>
        </div>
        <div className={styles.promorazuieste_down}>
          {t('promorazuieste.activation')}
          <br />
          <span>{t('promorazuieste.period')}</span>
        </div>
      </div>

      <MyApp style_type={'blue_white'} />

      <FaqV2 max_faq={7}>
        <FaqQAV2 question={t('promorazuieste.faq.q1')}>
          {t('promorazuieste.faq.a1')}
        </FaqQAV2>
        <FaqQAV2 question={t('promorazuieste.faq.q2')}>
          <ul
            dangerouslySetInnerHTML={{ __html: t('promorazuieste.faq.a2') }}
          />
        </FaqQAV2>
        <FaqQAV2 question={t('promorazuieste.faq.q3')}>
          {t('promorazuieste.faq.a3')}
        </FaqQAV2>
        <FaqQAV2 question={t('promorazuieste.faq.q4')}>
          {t('promorazuieste.faq.a4')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />

      <Popup
        id="1981718"
        isVisible={showPopup}
        onClose={() => setShowPopup(false)}
        width={'1000px'}
      >
        <div className={styles.popup_div}>
          <span className={styles.popup_div_title}>
            {t('promorazuieste.popup.title')}
          </span>
          <br />
          <br />

          <h3>{t('promorazuieste.popup.section1.title')}</h3>
          <p>
            {t('promorazuieste.popup.section1.p1.part1')}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                handleCopy();
              }}
            >
              {t('promorazuieste.popup.section1.p1.idno')}
            </a>
            {t('promorazuieste.popup.section1.p1.part2')}
            <a href="https://maps.app.goo.gl/kYR2Dmyb9dCwTUui7" target="_blank">
              {t('promorazuieste.popup.section1.p1.address')}
            </a>
            {t('promorazuieste.popup.section1.p1.part3')}
          </p>
          <p>{t('promorazuieste.popup.section1.p2')}</p>
          <p>{t('promorazuieste.popup.section1.p3')}</p>
          <ul>
            <li>
              {t('promorazuieste.popup.section1.li1')}{' '}
              <a href="tel:1181">1181</a>
            </li>
            <li>
              {t('promorazuieste.popup.section1.li2')} <a href="tel:200">200</a>
            </li>
            <li>
              {t('promorazuieste.popup.section1.li3')}{' '}
              <a href="tel:022200200">(022) 200-200</a>
            </li>
            <li>{t('promorazuieste.popup.section1.li4')}</li>
          </ul>

          <h3>{t('promorazuieste.popup.section2.title')}</h3>
          <p>
            {t('promorazuieste.popup.section2.p1_1')}{' '}
            <b>{t('promorazuieste.popup.section2.p1_2')}</b>{' '}
            {t('promorazuieste.popup.section2.p1_3')}
          </p>
          <p>{t('promorazuieste.popup.section2.p2')}</p>
          <p>{t('promorazuieste.popup.section2.p3')}</p>

          <h3>{t('promorazuieste.popup.section3.title')}</h3>
          <p>{t('promorazuieste.popup.section3.p1')}</p>
          <p>{t('promorazuieste.popup.section3.p2')}</p>
          <ul>
            <li>
              {t('promorazuieste.popup.section3.li1_1')}{' '}
              <b>{t('promorazuieste.popup.section3.li1_2')}</b>
            </li>
            <li>
              {t('promorazuieste.popup.section3.li2_1')}{' '}
              <b>{t('promorazuieste.popup.section3.li2_2')}</b>
            </li>
          </ul>
          <p>{t('promorazuieste.popup.section3.p3')}</p>
          <ul>
            <li>
              <b>{t('promorazuieste.popup.section3.li3_1')}</b>{' '}
              {t('promorazuieste.popup.section3.li3_2')}
            </li>
            <li>
              <b>{t('promorazuieste.popup.section3.li4_1')}</b>{' '}
              {t('promorazuieste.popup.section3.li4_2')}
            </li>
            <li>
              <b>{t('promorazuieste.popup.section3.li5_1')}</b>{' '}
              {t('promorazuieste.popup.section3.li5_2')}
            </li>
          </ul>
          <p>{t('promorazuieste.popup.section3.p4')}</p>
          <p>{t('promorazuieste.popup.section3.p5')}</p>

          <h3>{t('promorazuieste.popup.section4.title')}</h3>
          <p>{t('promorazuieste.popup.section4.p1')}</p>
          <p>{t('promorazuieste.popup.section4.p2')}</p>

          <h2>{t('promorazuieste.popup.section5.title')}</h2>
          <p>{t('promorazuieste.popup.section5.p1')}</p>
          <p>{t('promorazuieste.popup.section5.p2')}</p>
          <p>{t('promorazuieste.popup.section5.p3')}</p>

          <h3>{t('promorazuieste.popup.section6.title')}</h3>
          <p>{t('promorazuieste.popup.section6.p1')}</p>
          <p>{t('promorazuieste.popup.section6.p2')}</p>

          <h3>{t('promorazuieste.popup.section7.title')}</h3>
          <p>{t('promorazuieste.popup.section7.p1')}</p>
          <p>{t('promorazuieste.popup.section7.p2')}</p>
        </div>
      </Popup>
    </>
  );
}
