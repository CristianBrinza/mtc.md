import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './GpsTrack.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import SEO from '../../../components/SEO';
import NavbarBusiness from '../../../components/navbar/NavbarBusiness.tsx';

import Button from '../../../components/Button.tsx';
import { useState } from 'react';
import Popup from '../../../components/Popup/Popup.tsx';

export default function GpsTrack() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.bussines_gps.title'),
    description: t('pages.bussines_m2m.description'),
    keywords: t('pages.bussines_gps.keywords'),
  };
  const breadcrumbItems = [
    {
      label: t('bussines_gps.breadcrumb.business'),
      url: 'https://www.moldtelecom.md/ro/business',
    },
    { label: t('bussines_gps.breadcrumb.gps') },
  ];

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const closePopup = (packet: string) => {
    setShowPopup(false);
    console.log(packet);
  };

  const setShowPopupFunction = (packet: string) => {
    setShowPopup(true);
    console.log(packet);
  };

  const [activeCard, setActiveCard] = useState<string>('68178083');

  return (
    <>
      <SEO {...seo} />
      <NavbarBusiness />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/17774012${t('lang')}.webp`}
            alt={t('bussines_gps.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/14774012${t('lang')}.webp`}
            alt={t('bussines_gps.hero.alt')}
          />
        </div>
      </Hero>

      <div className={styles.about_block}>
        <div className={styles.about}>
          <div className={styles.about_img_block}>
            <img
              src="/images/landings/18170083.webp"
              alt="SIM"
              className={styles.about_img}
            />
          </div>

          <div className={styles.about_text}>
            <div className={`title_3 ${styles.about_title}`}>
              Ce este GPS Track?
            </div>
            <span>
              GPS Track este soluția completă de management al flotelor auto,
              care oferă monitorizare și control în timp real al vehiculelor.
              <br /> <br />
              Prin platforma web MTrack, companiile pot urmări traseele, timpul
              de staționare, viteza și pot primi alerte personalizate, pentru o
              administrare eficientă, transparentă și optimizată a parcului
              auto. Ideală pentru firme din logistică, transport, construcții și
              instituții publice.
            </span>
          </div>
        </div>
      </div>

      <div className={`title_3 ${styles.why_title}`}>
        De ce să alegi MTrack?
      </div>

      <div className={styles.why}>
        <div className={styles.why_left}>
          <div
            className={`${styles.why_card} ${activeCard === '68178083' ? styles.active : ''}`}
            onClick={() => setActiveCard('68178083')}
          >
            <div className={styles.why_card_title}>
              Monitorizare GPS 24/7 în timp real
            </div>
            Urmărești vehiculele flotei non-stop, de pe orice dispozitiv, pentru
            control complet și reacții rapide.
          </div>
          <div
            className={`${styles.why_card} ${activeCard === '68178084' ? styles.active : ''}`}
            onClick={() => setActiveCard('68178084')}
          >
            <div className={styles.why_card_title}>
              Rapoarte detaliate și istoric extins
            </div>
            Primești analize clare despre trasee, staționări și distanțe, cu
            acces la date din ultimul an.
          </div>
          <div
            className={`${styles.why_card} ${activeCard === '68178085' ? styles.active : ''}`}
            onClick={() => setActiveCard('68178085')}
          >
            <div className={styles.why_card_title}>
              Alerte inteligente complet configurabile
            </div>
            Activezi notificări pentru viteză, rute greșite sau folosire ilegală
            – totul setat după nevoile tale.
          </div>
          <div
            className={`${styles.why_card} ${activeCard === '68178086' ? styles.active : ''}`}
            onClick={() => setActiveCard('68178086')}
          >
            <div className={styles.why_card_title}>
              Funcționează și cu dispozitive existente
            </div>
            Nu este necesar hardware nou – MTrack e compatibil cu echipamente
            GPS deja instalate în flotă.
          </div>
        </div>
        <img
          className={styles.why_img}
          src={`/images/landings/${activeCard}.webp`}
          alt="gps"
        />
      </div>

      <div className={styles.download}>
        <div className={styles.download_img_block}>
          <img
            className={styles.download_img}
            src="/images/landings/58178023.webp"
            alt="GPS"
          />
        </div>
        <div className={styles.download_right}>
          <div className={`title_3 ${styles.download_right_title}`}>
            Alege GPS Track
          </div>
          <div className={styles.download_right_text}>
            pentru a transforma modul în care îți administrezi parcul auto –
            simplu, sigur și eficient.
          </div>

          <Button
            onClick={() => setShowPopupFunction('aaa')}
            color="var(--theme_primary_color_blue_4)"
            bgcolor="var(--theme_primary_color_blue_3)"
            border="var(--theme_primary_color_blue_3)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            icon="arrow_right"
          >
            {t('bussines_m2m.carousel.order_now')}
          </Button>
        </div>
      </div>

      <Footer disclaimer={true} />
      <Popup
        id="1284768"
        isVisible={showPopup}
        onClose={() => closePopup('')}
        width={'800px'}
      >
        <div className={styles.popup_div}>
          <span className={styles.popup_div_title}>
            {t('bussines_m2m.popup.title')}
          </span>
          {t('bussines_m2m.popup.text')}
          <div className={styles.popup_btns}>
            <Button
              to={'tel:022570570'}
              color="var(--theme_primary_color_white)"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              icon="arrow_right"
            >
              0(22) 570-570
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
}
