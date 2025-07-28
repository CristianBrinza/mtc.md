import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './Double.module.css';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import Icon from '../../../../components/Icon.tsx';
import Button from '../../../../components/Button.tsx';
import Slider from 'react-slick';
import React, { useState } from 'react';
import Toggle from '../../../../components/toggle/Toggle.tsx';
import Popup from '../../../../components/Popup/Popup.tsx';

const InfoIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <svg
    onClick={onClick}
    className={styles.info_icon}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8" stroke="black" stroke-opacity="0.2" />
    <line
      x1="10.75"
      y1="10.75"
      x2="10.75"
      y2="14.25"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M10.75 7.75L10.75 8"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

export default function Double() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: 'Promo', url: ' ' },
    { label: 'Internet + TV' },
  ];
  const [activeConfig, setActiveConfig] = useState<string>('1');

  const [activeTVConfig_1, setActiveTVConfig_1] = useState<string>('1');
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1800,
          arrows: false,
        },
      },
    ],
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
            src={`/images/landings/82688012${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/88678012${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title_3 ${styles.title_main}`}>
        {' '}
        <span>Alege cel mai avantajos abonament</span>
      </div>

      <div className={styles.config}>
        <div
          onClick={() => setActiveConfig('1')}
          className={`${styles.config_block} ${styles.config_block_1}  ${styles.config_block_first} ${activeConfig == '1' && styles.config_block_active}`}
        >
          Reducere pachet
        </div>
        {/*<div className={`${styles.config_block} ${styles.config_block_2}  `}>*/}
        {/*  Smart TV / Tableta*/}
        {/*</div>*/}
        <div
          onClick={() => setActiveConfig('2')}
          className={`${styles.config_block} ${styles.config_block_3}  ${styles.config_block_last} ${activeConfig == '2' && styles.config_block_active}`}
        >
          Gaming set
        </div>
      </div>
      <Slider {...settings} className={styles.abonaments}>
        <div id={'abonamente'} className={styles.abonaments_block}>
          <div className={styles.abonaments_block_inside}>
            {/*<div className={styles.mobile_carousell_tags}>*/}
            {/*  /!*<div className={styles.mobile_carousell_tag}>*!/*/}
            {/*  /!*  New*!/*/}
            {/*  /!*</div>*!/*/}
            {/*  <div*/}
            {/*    className={styles.mobile_carousell_tag}*/}
            {/*    style={{ background: '#E7EBFF' }}*/}
            {/*  >*/}
            {/*    Budget*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.abonaments_block_inside_pretitle}>
              Internet + TV
            </div>
            <div className={styles.abonaments_block_inside_title}>300 Mbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              Router Wi-Fi 6 inclus
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle />
              </div>
              <span>
                x1 <b>Mesh Wi-Fi</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (49 lei/luna)
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280110')} />
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 lei/luna)
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>
            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_title} ${styles.abonaments_block_inside_title_tv} `}
            >
              <span>Premier TV</span>
              <Icon
                className={styles.abonaments_block_inside_title_tv_svg}
                type={'change'}
                size={'18px'}
                color={'var(--theme_primary_color_blue_2)'}
              />
              <InfoIcon onClick={() => setActivePopup('1280111')} />
            </div>
            <div className={styles.abonaments_block_inside_tv_canale}>
              <span> 121 canale HD, 73 canale SD, 4 radio </span>
            </div>

            <div className={styles.tv_config}>
              <div className={styles.tv_config_left}>
                <div className={styles.tv_config_left_1}>-</div>
                <div className={styles.tv_config_left_2}>1 TV</div>
                <div className={styles.tv_config_left_3}>+</div>
              </div>
              <div className={styles.tv_config_right}>
                <div
                  onClick={() => setActiveTVConfig_1('1')}
                  className={`${styles.tv_config_right_1} ${activeTVConfig_1 == '1' && styles.tv_config_right_active}`}
                >
                  Smart TV
                </div>
                <div
                  onClick={() => setActiveTVConfig_1('2')}
                  className={`${styles.tv_config_right_2} ${activeTVConfig_1 == '2' && styles.tv_config_right_active}`}
                >
                  TV Box
                </div>
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle />
              </div>
              <span>
                <b>Moldtelecom TV GO</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  1 lună gratuit
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280113')} />
            </div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 lei/luna)
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle />
              </div>
              <span>
                <b>Telefonie fixă</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 lei/luna)
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280113')} />
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div className={styles.tm_carousell_block_row_tag}>
                  50% reducere pentru 2 ani
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>299</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>590 {t('lei_luna')}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              // onClick={() => setShowPopupFunction('aaa')}
              color="#fff"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              hover_color="var(--theme_primary_color_blue_4)"
              icon="arrow_right"
              className={styles.mobile_carousell_block_btn_buy}
            >
              {t('order_now')}
            </Button>
          </div>
        </div>
        <div className={styles.abonaments_block}></div>
        <div className={styles.abonaments_block}></div>
      </Slider>

      {/* Wi-Fi PLUS */}
      <Popup
        id="1280110"
        width="1000px"
        isVisible={activePopup === '1280110'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>Ce este Wi-Fi PLUS?</b>
        <p>
          Wi-Fi PLUS extinde semnalul routerului principal în zonele unde
          acoperirea este slabă, preluând și retransmițând wireless pentru o
          conexiune stabilă și rapidă în toată locuința.
        </p>
        <b className={styles.popup_title_1}>De ce să alegi Wi-Fi PLUS?</b>
        <ul>
          <li>Acoperire uniformă în fiecare colț al casei</li>
          <li>Conectezi toate dispozitivele fără să reintroduci parola</li>
          <li>Fără buffer sau drop-out în timpul streaming-ului</li>
        </ul>
        <Button
          color="#fff"
          bgcolor="var(--theme_primary_color_blue_4)"
          border="var(--theme_primary_color_blue_4)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="var(--theme_primary_color_blue_4)"
          icon="arrow_right"
          className={styles.popup_more_btn}
        >
          Află mai mult
        </Button>
      </Popup>

      {/* Premier TV */}
      <Popup
        id="1280111"
        width="1000px"
        isVisible={activePopup === '1280111'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>Ce este Premier TV?</b>
        <p>
          Premier TV este serviciul digital de televiziune Moldtelecom, care îți
          oferă zeci de canale HD, SD şi posturi radio, plus funcționalități
          avansate de DVR și replay.
        </p>
        <b className={styles.popup_title_1}>Caracteristici principale:</b>
        <ul>
          <li>121 canale HD, 73 SD și 4 posturi radio</li>
          <li>Înregistrare emisiuni și redare până la 7 zile înapoi</li>
          <li>Pauză și reluare live TV</li>
          <li>Switch rapid între limbi și subtitrări</li>
        </ul>
      </Popup>

      {/* Safe-Web */}
      <Popup
        id="1280112"
        width="1000px"
        isVisible={activePopup === '1280112'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>Ce este Safe-Web?</b>
        <p>
          Safe-Web este serviciul de securitate pe internet de la Moldtelecom,
          care filtrează și blochează site-urile malițioase, phishing și
          conținut inadecvat, păstrându-ți casa și dispozitivele în siguranță.
        </p>
        <b className={styles.popup_title_1}>De ce să alegi Safe-Web?</b>
        <ul>
          <li>
            Protecție în timp real contra virușilor și site-urilor de tip
            phishing
          </li>
          <li>Filtrare parentală configurabilă</li>
          <li>Raport de securitate lunar pentru activitatea online</li>
        </ul>
        <Button
          color="#fff"
          bgcolor="var(--theme_primary_color_blue_4)"
          border="var(--theme_primary_color_blue_4)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="var(--theme_primary_color_blue_4)"
          icon="arrow_right"
          className={styles.popup_more_btn}
        >
          Află mai mult
        </Button>
      </Popup>

      <Popup
        id="1280113"
        width="1000px"
        isVisible={activePopup === '1280113'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>Ce este Moldtelecom TV?</b>
      </Popup>

      <Footer disclaimer={true} />
    </>
  );
}
