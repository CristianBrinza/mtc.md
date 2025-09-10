// src/pages/OneNumber/OneNumber.tsx

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';

import styles from './SecuritateDigitala.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import SEO from '../../../components/SEO';
import FaqQAV2 from '../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../components/faqV2/FaqV2.tsx';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Button from '../../../components/Button.tsx';
import Details, { DetailsBlock } from '../../../components/details/Details.tsx';
import Slider from 'react-slick';
import Popup from '../../../components/Popup/Popup.tsx';
import { useState } from 'react';

export default function SecuritateDigitala() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const settings_subs = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  const settings_solutions = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 1800,
          arrows: true,
        },
      },
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  const settings_activate = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 1800,
          arrows: true,
        },
      },
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  const { t } = useTranslation();
  const breadcrumbItems = [
    {
      label: 'Safe-Web',
      url: ' https://www.moldtelecom.md/ro/personal/safe-web',
    },
    { label: 'Securitrate Digitala' },
  ];
  const seo = {
    title: t('pages.securitatea_digitala.title'),
    description: t('pages.securitatea_digitala.description'),
    keywords: t('pages.securitatea_digitala.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar className={styles.navbar} />
      <Chat />
      <Feedback />
      <div className={styles.top}>
        <Breadcrumb items={breadcrumbItems} />

        <div className={styles.hero}>
          <div className={styles.hero_left}>
            <div className={styles.hero_tag}>
              1 lună&nbsp;<span className={styles.hero_tag_1}>|</span>&nbsp;
              <span className={styles.hero_tag_2}>GRATUIT</span>
            </div>
            <div className={styles.hero_title}>
              Protecție 100% cu Securitatea Digitală
            </div>
            <div className={styles.hero_subtitle}>
              Soluția all-in-one, unică în Moldova, care te protejează împotriva
              amenințărilor online și îți oferă control total asupra
              conținutului accesat pe internet.
            </div>

            <Button
              onClick={() => {
                scrollToId('subs');
              }}
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'var(--theme_primary_color_blue_3)'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              icon={'arrow_right'}
            >
              Activează acum
            </Button>
          </div>

          <img
            src="/images/landings/10174119.webp"
            alt="Moldtelecom"
            className={styles.hero_img}
          />
        </div>

        <div className={styles.certificate}>
          <div className={styles.certificate_left}>
            <img
              src="/images/landings/10174219.webp"
              alt="Moldtelecom"
              className={styles.certificate_img}
            />
            <div className={styles.certificate_text}>
              <span>
                <b>Securitatea Digitală,</b> face parte din inițiativa{' '}
                <b>DNS4EU</b>
              </span>{' '}
              <br />
              <span className={styles.certificate_text_small}>
                (un proiect al Comisiei Europene care oferă infrastructură
                securizată, protecție si confidențialitate.)
              </span>
            </div>
          </div>
          <Button
            onClick={() => {
              setActivePopup('1016567');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            mai multe
          </Button>
        </div>
      </div>
      <div className={styles.gradient_end}></div>

      <div className={`${styles.solutions_title} title_3`}>
        Situație cunoscută?
      </div>

      <Slider {...settings_solutions} className={styles.solutions_carousell}>
        <div className={styles.solutions_card}>
          <img
            className={styles.solutions_card_img}
            src="/images/landings/79864619.webp"
            alt="Moldtelecom"
          />
          <div className={styles.solutions_card_inside}>
            <div className={styles.solutions_card_inside_title}>
              Furtul conturilor și parolelor
            </div>
            <div className={styles.solutions_card_inside_text}>
              Ți se poate întâmpla să primești un link care pare sigur, dar te
              duce pe o pagină falsă ce îți fură parolele și accesul la
              conturile tale.
            </div>

            <Button
              onClick={() => {
                setActivePopup('1016563');
              }}
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'transparent'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              icon={'arrow_right'}
            >
              Citeste mai mult
            </Button>
          </div>
        </div>
        <div className={styles.solutions_card}>
          <img
            className={styles.solutions_card_img}
            src="/images/landings/79864621.webp"
            alt="Moldtelecom"
          />
          <div className={styles.solutions_card_inside}>
            <div className={styles.solutions_card_inside_title}>
              Amenințări digitale ascunse
            </div>
            <div className={styles.solutions_card_inside_text}>
              Poți descărca o aplicație aparent inofensivă, care îți infectează
              telefonul cu viruși și programe periculoase.
            </div>

            <Button
              onClick={() => {
                setActivePopup('1016564');
              }}
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'transparent'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              icon={'arrow_right'}
            >
              Citeste mai mult
            </Button>
          </div>
        </div>
        <div className={styles.solutions_card}>
          <img
            className={styles.solutions_card_img}
            src="/images/landings/79864621.webp"
            alt="Moldtelecom"
          />
          <div className={styles.solutions_card_inside}>
            <div className={styles.solutions_card_inside_title}>
              Conținut periculos pentru copii
            </div>
            <div className={styles.solutions_card_inside_text}>
              Copiii tăi pot ajunge pe site-uri cu materiale violente, ilegale
              sau nepotrivite, fără ca tu să știi.
            </div>

            <Button
              onClick={() => {
                setActivePopup('1016565');
              }}
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'transparent'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              icon={'arrow_right'}
            >
              Citeste mai mult
            </Button>
          </div>
        </div>
        <div className={styles.solutions_card}>
          <img
            className={styles.solutions_card_img}
            src="/images/landings/79864620.webp"
            alt="Moldtelecom"
          />
          <div className={styles.solutions_card_inside}>
            <div className={styles.solutions_card_inside_title}>
              Furtul identității și datelor bancare
            </div>
            <div className={styles.solutions_card_inside_text}>
              Datele tale personale și cardurile bancare pot fi furate și
              folosite în fraude online, dacă nu ești protejat.
            </div>

            <Button
              onClick={() => {
                setActivePopup('1016566');
              }}
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'transparent'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              icon={'arrow_right'}
            >
              Citeste mai mult
            </Button>
          </div>
        </div>
      </Slider>

      <div className={styles.why}>
        <div className={styles.why_title}>Cel mai sigur operator!</div>
        <div className={styles.why_blocks}>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <b>Blochează phishing-ul și site-urile false</b>
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              Previne <b>criptomining-ul</b> ascuns
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              Filtrează <b>spam-ul</b> și <b>reclamele intruzive</b>
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <b>Limita</b> accesului la <b>aplicații</b> și{' '}
              <b>oprirea notificărilor</b>
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <b>Fără monetizare a datelor </b>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.what}>
        <img
          src="/images/landings/15484119.webp"
          alt="Moldtelecom"
          className={styles.what_img}
        />
        <div className={styles.what_right}>
          <div className={styles.what_title}>
            Ce este <span>M-Security</span>?
          </div>
          <div>
            Securitatea Digitală este soluția <b>all-in-one</b> care, te{' '}
            <b>protejează online</b>, <b>blocheaza publicitatea</b>,{' '}
            <b>spam-ul</b> și <b>notificarile cu reclame</b>, monitorizeaza
            parolele, carduri, documente, scanează{' '}
            <b>internetul și darknet-ul</b> pentru a depista scurgerile de date,
            și îți oferă instrumente avansate pentru a gestiona accesul la
            aplicații și conținut
            <br />
            <br />
            Serviciul <b>funcționează automat</b>, analizează linkurile și
            paginile vizitate și blochează atacurile cibernetice, site-urile
            false și tentativele de furt de date.
          </div>
        </div>
      </div>

      <div className={`${styles.subs_title} title_3`}>
        Protejați-vă dispozitivul de amenințările online
      </div>

      <div id="subs">
        <Slider {...settings_subs} className={styles.subs_carousell}>
          <div className={styles.subs_card}>
            <div className={styles.subs_card_free}>1 lună GRATUIT</div>

            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.3034 7.44824H23.6992C19.2119 7.44824 15.5742 11.0859 15.5742 15.5732V49.4274C15.5742 53.9147 19.2119 57.5524 23.6992 57.5524H41.3034C45.7907 57.5524 49.4284 53.9147 49.4284 49.4274V15.5732C49.4284 11.0859 45.7907 7.44824 41.3034 7.44824Z"
                stroke="#ADBBFF"
                stroke-width="6.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.793 48.0732H35.2096"
                stroke="#ADBBFF"
                stroke-width="6.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className={styles.subs_card_title}>
              Securitate pe internet pentru telefonul tău
            </div>

            <div className={styles.subs_text}>
              Protejează-ți smartphone-ul de amenințările online
            </div>

            <div className={styles.subs_card_bottom}>
              <Button
                onClick={() => {
                  scrollToId('activate_title');
                }}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                Activează acum
              </Button>
              <div className={styles.subs_card_bottom_price}>
                10 <span>lei/lună</span>
              </div>
            </div>
          </div>
          <div className={styles.subs_card}>
            <div className={styles.subs_card_free}>1 lună GRATUIT</div>

            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 27.7492C37.8178 27.7492 38.602 28.074 39.1803 28.6523C39.7585 29.2305 40.0834 30.0148 40.0834 30.8325V43.1658H58.5834C60.2189 43.1658 61.7874 43.8155 62.9438 44.972C64.1003 46.1285 64.75 47.697 64.75 49.3325V58.5825C64.75 60.218 64.1003 61.7865 62.9438 62.943C61.7874 64.0995 60.2189 64.7492 58.5834 64.7492H15.4167C13.7812 64.7492 12.2127 64.0995 11.0562 62.943C9.89972 61.7865 9.25002 60.218 9.25002 58.5825V49.3325C9.25002 47.697 9.89972 46.1285 11.0562 44.972C12.2127 43.8155 13.7812 43.1658 15.4167 43.1658H33.9167V30.8325C33.9167 30.0148 34.2415 29.2305 34.8198 28.6523C35.398 28.074 36.1823 27.7492 37 27.7492ZM58.5834 49.3325H15.4167V58.5825H58.5834V49.3325ZM20.5412 12.2061C21.1538 12.7472 21.5266 13.5094 21.5775 14.3252C21.6283 15.141 21.3532 15.9437 20.8125 16.5567C17.3279 20.4949 15.4082 25.574 15.4167 30.8325C15.4167 31.7493 15.4722 32.6496 15.5832 33.5335C15.6641 34.3346 15.4285 35.1355 14.9267 35.7651C14.425 36.3947 13.6968 36.8031 12.8979 36.903C12.099 37.0028 11.2927 36.7862 10.6514 36.2995C10.0101 35.8128 9.5846 35.0945 9.46586 34.2982C9.32163 33.1486 9.24955 31.9911 9.25002 30.8325C9.24143 24.0719 11.7094 17.5422 16.1875 12.4774C16.4555 12.1736 16.7807 11.9256 17.1446 11.7475C17.5084 11.5694 17.9038 11.4648 18.3081 11.4396C18.7124 11.4144 19.1178 11.4691 19.5009 11.6007C19.8841 11.7322 20.2376 11.9379 20.5412 12.2061ZM57.8125 12.4774C62.2907 17.5422 64.7586 24.0719 64.75 30.8325C64.75 32.0042 64.6781 33.1594 64.5342 34.2982C64.4929 34.7071 64.3702 35.1037 64.1734 35.4646C63.9766 35.8255 63.7096 36.1433 63.3881 36.3995C63.0667 36.6557 62.6972 36.845 62.3015 36.9563C61.9059 37.0677 61.4919 37.0988 61.084 37.0478C60.6762 36.9968 60.2826 36.8648 59.9265 36.6595C59.5704 36.4542 59.2589 36.1797 59.0104 35.8523C58.7619 35.5249 58.5814 35.1511 58.4794 34.7529C58.3775 34.3546 58.3562 33.9401 58.4169 33.5335C58.5258 32.6496 58.5813 31.7493 58.5834 30.8325C58.5919 25.574 56.6721 20.4949 53.1875 16.5567C52.9197 16.253 52.7143 15.8995 52.583 15.5165C52.4518 15.1334 52.3973 14.7282 52.4226 14.3241C52.4738 13.5079 52.8471 12.7455 53.4604 12.2046C53.7641 11.9367 54.1175 11.7313 54.5006 11.6001C54.8837 11.4688 55.2888 11.4143 55.693 11.4396C56.5092 11.4908 57.2716 11.8641 57.8125 12.4774ZM29.7912 20.3615C30.095 20.6295 30.343 20.9547 30.5211 21.3186C30.6992 21.6824 30.8038 22.0778 30.829 22.4821C30.8542 22.8864 30.7995 23.2918 30.668 23.6749C30.5364 24.0581 30.3307 24.4116 30.0625 24.7152C29.1939 25.6996 28.5448 26.8575 28.1583 28.1122C27.7718 29.3668 27.6568 30.6893 27.8209 31.9918C27.9019 32.7929 27.6663 33.5938 27.1645 34.2234C26.6627 34.8531 25.9346 35.2614 25.1357 35.3613C24.3368 35.4612 23.5305 35.2446 22.8892 34.7578C22.2478 34.2711 21.8223 33.5528 21.7036 32.7565C21.4308 30.587 21.6227 28.3842 22.2665 26.2945C22.9102 24.2048 23.9912 22.2759 25.4375 20.6359C25.9781 20.0237 26.7395 19.651 27.5545 19.5996C28.3696 19.5481 29.1718 19.8222 29.785 20.3615H29.7912ZM48.5625 20.6328C50.0127 22.271 51.096 24.2002 51.74 26.2911C52.384 28.382 52.5737 30.5863 52.2964 32.7565C52.1777 33.5528 51.7522 34.2711 51.1109 34.7578C50.4696 35.2446 49.6633 35.4612 48.8644 35.3613C48.0655 35.2614 47.3373 34.8531 46.8356 34.2234C46.3338 33.5938 46.0982 32.7929 46.1791 31.9918C46.3437 30.6896 46.2291 29.3672 45.8432 28.1125C45.4572 26.8579 44.8087 25.6998 43.9406 24.7152C43.6714 24.4119 43.4647 24.0585 43.3323 23.6751C43.1999 23.2918 43.1444 22.8862 43.169 22.4814C43.1936 22.0766 43.2978 21.6807 43.4757 21.3162C43.6535 20.9518 43.9016 20.626 44.2055 20.3575C44.5094 20.089 44.8634 19.8832 45.247 19.7517C45.6306 19.6202 46.0364 19.5657 46.4411 19.5913C46.8459 19.6169 47.2416 19.722 47.6056 19.9007C47.9696 20.0795 48.2948 20.3283 48.5625 20.6328Z"
                fill="#ADBBFF"
              />
            </svg>

            <div
              className={styles.subs_card_title}
              style={{ maxWidth: '204px' }}
            >
              Securitate pe internet pentru acasă
            </div>

            <div className={styles.subs_text} style={{ maxWidth: '285px' }}>
              Oferă protecție pentru toate dispozitivele conectate la rețeaua
              Wi-Fi de acasă a Moldtelecom
            </div>

            <div className={styles.subs_card_bottom}>
              <Button
                onClick={() => {
                  scrollToId('activate_title');
                }}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                Activează acum
              </Button>
              <div className={styles.subs_card_bottom_price}>
                10 <span>lei/lună</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <Details trackPrefix="msecurity">
        <DetailsBlock title={'Condiții de utilizare'}>test</DetailsBlock>
      </Details>

      <div className={styles.activate}>
        <div className={styles.activate_title} id="activate_title">
          Cum sa activezi <span>M-Security</span>?
        </div>

        <Slider {...settings_activate} className={styles.activate_carousell}>
          <div className={styles.activate_card}>
            <svg
              className={styles.activate_card_numner}
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="52" height="52" rx="26" fill="#DFE4FD" />
              <path
                d="M22.8066 20.8V17.962H28.1086V34H24.9406V20.8H22.8066Z"
                fill="#2F3043"
              />
            </svg>
            <div className={styles.activate_card_inside}>
              <img src="/images/landings/15884619.webp" alt="Moldtelecom" />

              <span>
                {' '}
                <b>Descarcă aplicatia</b> <br />
                din App Store sau Google Play
              </span>
            </div>
          </div>
          <div className={styles.activate_card}>
            <svg
              className={styles.activate_card_numner}
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="52" height="52" rx="26" fill="#DFE4FD" />
              <path
                d="M21.8176 30.524C23.2256 29.3507 24.3476 28.3753 25.1836 27.598C26.0196 26.806 26.7163 25.9847 27.2736 25.134C27.8309 24.2833 28.1096 23.4473 28.1096 22.626C28.1096 21.878 27.9336 21.2913 27.5816 20.866C27.2296 20.4407 26.6869 20.228 25.9536 20.228C25.2203 20.228 24.6556 20.4773 24.2596 20.976C23.8636 21.46 23.6583 22.1273 23.6436 22.978H20.6516C20.7103 21.218 21.2309 19.8833 22.2136 18.974C23.2109 18.0647 24.4723 17.61 25.9976 17.61C27.6696 17.61 28.9529 18.0573 29.8476 18.952C30.7423 19.832 31.1896 20.998 31.1896 22.45C31.1896 23.594 30.8816 24.6867 30.2656 25.728C29.6496 26.7693 28.9456 27.6787 28.1536 28.456C27.3616 29.2187 26.3276 30.1427 25.0516 31.228H31.5416V33.78H20.6736V31.492L21.8176 30.524Z"
                fill="#2F3043"
              />
            </svg>

            <div className={styles.activate_card_inside}>
              <img src="/images/landings/15824619.webp" alt="Moldtelecom" />

              <span>
                {' '}
                <b>Logează-te →</b> apasă pe <br />
                “My Account” în meniul de jos
              </span>
            </div>
          </div>
          <div className={styles.activate_card}>
            <svg
              className={styles.activate_card_numner}
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="52" height="52" rx="26" fill="#DFE4FD" />
              <path
                d="M20.625 22.186C20.6984 20.7193 21.2117 19.59 22.165 18.798C23.133 17.9913 24.4017 17.588 25.971 17.588C27.0417 17.588 27.9584 17.7787 28.721 18.16C29.4837 18.5267 30.0557 19.0327 30.437 19.678C30.833 20.3087 31.031 21.0273 31.031 21.834C31.031 22.758 30.789 23.5427 30.305 24.188C29.8357 24.8187 29.271 25.244 28.611 25.464V25.552C29.4617 25.816 30.1217 26.2853 30.591 26.96C31.075 27.6347 31.317 28.5 31.317 29.556C31.317 30.436 31.1117 31.2207 30.701 31.91C30.305 32.5993 29.711 33.142 28.919 33.538C28.1417 33.9193 27.203 34.11 26.103 34.11C24.4457 34.11 23.0964 33.692 22.055 32.856C21.0137 32.02 20.4637 30.788 20.405 29.16H23.397C23.4264 29.8787 23.6684 30.458 24.123 30.898C24.5924 31.3233 25.2304 31.536 26.037 31.536C26.785 31.536 27.357 31.3307 27.753 30.92C28.1637 30.4947 28.369 29.952 28.369 29.292C28.369 28.412 28.0904 27.7813 27.533 27.4C26.9757 27.0187 26.1104 26.828 24.937 26.828H24.299V24.298H24.937C27.0197 24.298 28.061 23.6013 28.061 22.208C28.061 21.5773 27.8704 21.086 27.489 20.734C27.1224 20.382 26.587 20.206 25.883 20.206C25.1937 20.206 24.6584 20.3967 24.277 20.778C23.9104 21.1447 23.6977 21.614 23.639 22.186H20.625Z"
                fill="#2F3043"
              />
            </svg>

            <div className={styles.activate_card_inside}>
              <img src="/images/landings/15834619.webp" alt="Moldtelecom" />

              <span>
                {' '}
                Dă scroll in jos → apasă pe meniul <br />"
                <b>Options and services</b>"
              </span>
            </div>
          </div>
          <div className={styles.activate_card}>
            <svg
              className={styles.activate_card_numner}
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="52" height="52" rx="26" fill="#DFE4FD" />
              <path
                d="M19.7615 30.876V28.456L26.9555 18.16H30.5415V28.192H32.4775V30.876H30.5415V34H27.4615V30.876H19.7615ZM27.6595 21.46L23.1495 28.192H27.6595V21.46Z"
                fill="#2F3043"
              />
            </svg>

            <div className={styles.activate_card_inside}>
              <img src="/images/landings/15864619.webp" alt="Moldtelecom" />

              <span>
                {' '}
                <b>Activează</b> și configurează <br />
                opțiunea
              </span>
            </div>
          </div>
        </Slider>
        <div className={styles.activate_btns}>
          <Button
            to={'https://mtc.md/my-mtc'}
            icon_side={'left'}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'google_play'}
          >
            Google Play
          </Button>
          <Button
            to={'https://mtc.md/my-mtc'}
            icon_side={'left'}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'apple'}
          >
            App Store
          </Button>
        </div>
      </div>
      <div className={styles.call}>
        <span className={styles.call_text}>
          Dacă mai ai întrebari nu ezita să ne aplelezi
        </span>
        <Button
          to={'tel:022 500 500'}
          icon_side={'left'}
          color={'var(--theme_primary_color_blue_4)'}
          bgcolor={'var(--theme_primary_color_blue_3)'}
          border={'var(--theme_primary_color_blue_3)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          icon={'call'}
        >
          <b> 022 500 500</b>
        </Button>
      </div>
      <FaqV2 max_faq={5}>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089901"
          question={'Ce este serviciul „Securitatea Digitală”?'}
        >
          „Securitatea Digitală” vă protejează dispozitivul și datele personale
          de diverse amenințări online: spam, programe malware (troieni, viruși,
          viermi), atacuri de tip phishing, rețele botnet, site-uri compromise
          și alte riscuri din Internet.
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089902"
          question={'Cine poate beneficia de serviciul „Securitatea Digitală”?'}
        >
          Serviciul este disponibil pentru abonații de <b>Telefonie Mobilă</b>{' '}
          și pentru abonații de Servicii de <b>Internet / Internet + IPTV</b>.
          <ul>
            <li>
              În cazul abonaților de Telefonie Mobilă, protecția este activă pe
              dispozitivul care utilizează numărul de telefon pentru care a fost
              activat serviciul.
            </li>
            <li>
              În cazul abonaților de Servicii de Internet / Internet + IPTV,
              toate dispozitivele conectate la rețeaua clientului – fie prin
              cablu, fie prin Wi-Fi – vor fi protejate automat de „Securitatea
              Digitală”.
            </li>
          </ul>
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089903"
          question={'Ce este „Protecția datelor personale”?'}
        >
          „Protecția datelor personale” monitorizează posibile scurgeri pentru
          peste 65 de tipuri de informații: numere de carduri bancare, parole,
          mesaje text, documente și alte date confidențiale. De asemenea,
          funcția permite protejarea numărului de telefon, a adresei de e-mail
          și a conturilor asociate, asigurând un nivel suplimentar de securitate
          pentru informațiile dvs. personale.
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089904"
          question={'Ce este „Blocarea aplicațiilor”?'}
        >
          Funcția permite restricționarea accesului anumitor aplicații pe
          dispozitiv și blocarea notificărilor nedorite.
        </FaqQAV2>
        {/*  <FaqQAV2*/}
        {/*    trackPrefix="securitatea_digitala"*/}
        {/*    id_faq="192089905"*/}
        {/*    question={''}*/}
        {/*  >*/}

        {/*  </FaqQAV2>*/}
        {/*  <FaqQAV2*/}
        {/*    trackPrefix="securitatea_digitala"*/}
        {/*    id_faq="192089906"*/}
        {/*    question={''}*/}
        {/*  >*/}

        {/*  </FaqQAV2>*/}
        {/*  <FaqQAV2*/}
        {/*  trackPrefix="securitatea_digitala"*/}
        {/*  id_faq="192089907"*/}
        {/*  question={''}*/}
        {/*>*/}

        {/*</FaqQAV2>*/}
        {/*  <FaqQAV2*/}
        {/*  trackPrefix="securitatea_digitala"*/}
        {/*  id_faq="192089908"*/}
        {/*  question={''}*/}
        {/*>*/}

        {/*</FaqQAV2>*/}
      </FaqV2>

      <Footer disclaimer={true} />

      <Popup
        id="1016567"
        width="1000px"
        isVisible={activePopup === '1016567'}
        onClose={() => setActivePopup(null)}
        key="popup-1016567"
      >
        Moldtelecom, prin serviciul <b>Securitatea Digitală</b>, face parte din
        inițiativa DNS4EU – un proiect al Comisiei Europene care oferă o
        alternativă sigură și de încredere la rezolvatoarele publice dominante
        (precum Google sau Cloudflare).
        <br /> <br />
        <b>DNS4EU</b> garantează:
        <ul>
          <li>
            🔐 Securitate și confidențialitate – protecția datelor personale la
            cel mai înalt nivel.
          </li>
          <li>
            {' '}
            🌐 Suveranitate digitală europeană – datele sunt procesate și
            stocate în interiorul Uniunii Europene.
          </li>
          <li>
            {' '}
            🚫 Fără monetizare a datelor – confidențialitatea utilizatorilor
            este prioritate absolută.
          </li>
        </ul>
        👉 Astfel, <b>Securitatea Digitală</b> nu doar că te protejează local,
        dar este și parte a unei infrastructuri europene moderne, construită
        pentru un internet sigur și de încredere.
      </Popup>

      <Popup
        id="1016563"
        width="1000px"
        isVisible={activePopup === '1016563'}
        onClose={() => setActivePopup(null)}
        key="popup-1016563"
      >
        ---
      </Popup>
      <Popup
        id="1016564"
        width="1000px"
        isVisible={activePopup === '1016564'}
        onClose={() => setActivePopup(null)}
        key="popup-1016564"
      >
        ---
      </Popup>
      <Popup
        id="1016565"
        width="1000px"
        isVisible={activePopup === '1016565'}
        onClose={() => setActivePopup(null)}
        key="popup-1016565"
      >
        ---
      </Popup>
      <Popup
        id="1016566"
        width="1000px"
        isVisible={activePopup === '1016566'}
        onClose={() => setActivePopup(null)}
        key="popup-1016566"
      >
        ---
      </Popup>
    </>
  );
}
