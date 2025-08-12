import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './OnlyNet.module.css';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import Icon from '../../../../components/Icon.tsx';
import Button from '../../../../components/Button.tsx';
import Slider from 'react-slick';
import React, { useEffect, useMemo, useState } from 'react';
import Toggle from '../../../../components/toggle/Toggle.tsx';
import Popup from '../../../../components/Popup/Popup.tsx';
import Details, {
  DetailsBlock,
} from '../../../../components/details/Details.tsx';
import Functions from '../../../../components/functions/Functions.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import BuyForm from '../../../../components/buy_form/BuyForm.tsx';
import { trackEvent } from '../../../../initAnalytics.ts';
declare global {
  interface Window {
    regiuni: Record<string, Record<string, unknown[]>>;
  }
}
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

type ConfigType = '1' | '2' | '3';

export default function OnlyNet() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.only_net.title'),
    description: t('pages.only_net.description'),
    keywords: t('pages.only_net.keywords'),
  };
  const breadcrumbItems = [
    { label: t('navbar.promo'), url: ' ' },
    { label: t('only_net.breadcrumb.internet') },
  ];

  const [activeConfig, setActiveConfig] = useState<ConfigType>('1');

  // whether user has explicitly chosen
  const DEFAULT_REGION = 'Mun. Chișinău';
  const DEFAULT_CITY = 'or. Chișinău';
  const [regio, setRegio] = useState<string>(
    () => localStorage.getItem('city') || DEFAULT_CITY
  );
  const [isRegio, setIsRegio] = useState<boolean>(true);
  const [regions, setRegions] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selRegion, setSelRegion] = useState<string>('');
  const [selCity, setSelCity] = useState<string>('');

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
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // populate <select> on mount
  // load external regions_ro.js & then populate selects
  useEffect(() => {
    const SCRIPT_SRC = 'https://www.moldtelecom.md/js/regions_ro.js';
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;

    script.onload = () => {
      const obj = window.regiuni;
      const allRegions = Object.keys(obj);

      // 1️⃣ pick a starting region
      const storedR = localStorage.getItem('region');
      const initialRegion = storedR && obj[storedR] ? storedR : DEFAULT_REGION;
      setSelRegion(initialRegion);
      setRegions(allRegions);

      // 2️⃣ build its city list
      // const validCities = Object.entries(obj[initialRegion])
      //   .filter(([, arr]) => arr.length > 0)
      //   .map(([city]) => city);
      // setCities(validCities);

      const validCities = Object.keys(obj[initialRegion]);

      // const validCities =Object.entries(window.regiuni[r])
      //   .filter(([, arr]) => arr.length > 0)
      //   .map(([city]) => city)
      // const validCities = Object.keys(window.regiuni[r]);

      setCities(validCities);

      // 3️⃣ pick a starting city
      const storedC = localStorage.getItem('city');
      const initialCity =
        storedC && validCities.includes(storedC) ? storedC : DEFAULT_CITY;
      setSelCity(initialCity);
      // console.log(isRegio)

      // 4️⃣ update the display
      setRegio(initialCity);
      // setIsRegio(true);
      setIsRegio((obj[initialRegion][initialCity] || []).length > 0);
      // console.log(isRegio);
    };

    script.onerror = () => {
      console.error(`failed to load ${SCRIPT_SRC}`);
    };

    document.head.appendChild(script);
    return () => void document.head.removeChild(script);
  }, []);

  useEffect(() => {
    console.log(`isRegio updated → ${isRegio}`);
    if (isRegio == false) {
      setActiveConfig('2');
    } else {
      setActiveConfig('1');
    }
  }, [isRegio]);

  // when user picks a region
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const r = e.target.value;
    setSelRegion(r);
    // setCities(
    //   Object.entries(window.regiuni[r])
    //     .filter(([, arr]) => arr.length > 0)
    //     .map(([city]) => city)
    // );
    const allCities = Object.keys(window.regiuni[r]);
    setCities(allCities);
    // reset city selection to first valid city
    // const firstCity =
    //   Object.keys(window.regiuni[r]).find(
    //     c => window.regiuni[r][c].length > 0
    //   ) || '';
    const firstCity = allCities[0] || '';
    setSelCity(firstCity);

    localStorage.setItem('region', r);
    localStorage.setItem('city', firstCity);
    const covered = (window.regiuni?.[r]?.[firstCity] || []).length > 0;
    setRegio(firstCity);
    setIsRegio(covered);
  };

  // when user picks a city
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelCity(e.target.value);
    // const covered = (window.regiuni[selRegion][e.target.value] || []).length > 0;
    // setIsRegio(covered);
    //
    // console.log(`City changed → region=${selRegion}, city=${e.target.value}, isRegio=${covered}`);
    localStorage.setItem('city', e.target.value);
    setRegio(e.target.value);
    const covered =
      (window.regiuni?.[selRegion]?.[e.target.value] || []).length > 0;
    setIsRegio(covered);
    setActivePopup(null);
  };
  const [popupType, setPopupType] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [activePopupConfig, setActivePopupConfig] = useState<string>('');
  const [activePopupSubConfig, setActivePopupSubConfig] = useState<string>('');
  const [activeBuyConfig, setActiveBuyConfig] = useState<string>('');
  const handlePopupClose = () => {
    setActivePopup(null);
    setSubmitted(false);
    setError(false);
    setPopupType(false);
  };

  const [activeMesh_1, setActiveMesh_1] = useState<boolean>(false);
  const [activeSafeweb_1, setActiveSafeweb_1] = useState<boolean>(false);
  const [activeTelephone_1, setActiveTelephone_1] = useState<boolean>(false);

  function calculateTotal_1(
    config: ConfigType,
    mesh: boolean,
    safeweb: boolean,
    telephone: boolean
  ): number {
    const base = config === '1' ? 130 : 230;
    const meshVal = mesh ? 49 : 0;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    return base + meshVal + safeVal + telVal;
  }

  const total_1 = useMemo(
    () =>
      calculateTotal_1(
        activeConfig,
        activeMesh_1,
        activeSafeweb_1,
        activeTelephone_1
      ),
    [activeConfig, activeMesh_1, activeSafeweb_1, activeTelephone_1]
  );

  // and now your “other” total, for whichever config ≠ '1':
  const altConfig_1 = activeConfig !== '1' ? activeConfig : ('2' as ConfigType);
  const total_1_1 = useMemo(
    () =>
      calculateTotal_1(
        altConfig_1,
        activeMesh_1,
        activeSafeweb_1,
        activeTelephone_1
      ),
    [altConfig_1, activeMesh_1, activeSafeweb_1, activeTelephone_1]
  );

  const [activeMesh_2, setActiveMesh_2] = useState<boolean>(false);
  const [activeSafeweb_2, setActiveSafeweb_2] = useState<boolean>(false);
  const [activeTelephone_2, setActiveTelephone_2] = useState<boolean>(false);

  function calculateTotal_2(
    config: ConfigType,
    mesh: boolean,
    safeweb: boolean,
    telephone: boolean
  ): number {
    const base = config === '1' ? 150 : 250;
    const meshVal = mesh ? 49 : 0;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    return base + meshVal + safeVal + telVal;
  }

  const total_2 = useMemo(
    () =>
      calculateTotal_2(
        activeConfig,
        activeMesh_2,
        activeSafeweb_2,
        activeTelephone_2
      ),
    [activeConfig, activeMesh_2, activeSafeweb_2, activeTelephone_2]
  );

  // and now your “other” total, for whichever config ≠ '1':
  const altConfig_2 = activeConfig !== '1' ? activeConfig : ('2' as ConfigType);
  const total_2_2 = useMemo(
    () =>
      calculateTotal_2(
        altConfig_2,
        activeMesh_2,
        activeSafeweb_2,
        activeTelephone_2
      ),
    [altConfig_2, activeMesh_2, activeSafeweb_2, activeTelephone_2]
  );

  const [activeMesh_3, setActiveMesh_3] = useState<boolean>(false);
  const [activeSafeweb_3, setActiveSafeweb_3] = useState<boolean>(false);
  const [activeTelephone_3, setActiveTelephone_3] = useState<boolean>(false);

  function calculateTotal_3(
    config: ConfigType,
    mesh: boolean,
    safeweb: boolean,
    telephone: boolean
  ): number {
    const base = config === '1' ? 200 : 300;
    const meshVal = mesh ? 49 : 0;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    return base + meshVal + safeVal + telVal;
  }

  const total_3 = useMemo(
    () =>
      calculateTotal_3(
        activeConfig,
        activeMesh_3,
        activeSafeweb_3,
        activeTelephone_3
      ),
    [activeConfig, activeMesh_3, activeSafeweb_3, activeTelephone_3]
  );

  // and now your “other” total, for whichever config ≠ '1':
  const altConfig_3 = activeConfig !== '1' ? activeConfig : ('2' as ConfigType);
  const total_3_3 = useMemo(
    () =>
      calculateTotal_3(
        altConfig_3,
        activeMesh_3,
        activeSafeweb_3,
        activeTelephone_3
      ),
    [altConfig_3, activeMesh_3, activeSafeweb_3, activeTelephone_3]
  );

  const [activeSafeweb_4, setActiveSafeweb_4] = useState<boolean>(false);
  const [activeTelephone_4, setActiveTelephone_4] = useState<boolean>(false);

  function calculateTotal_4(
    config: ConfigType,
    safeweb: boolean,
    telephone: boolean
  ): number {
    const base = config === '1' ? 299 : 599;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    return base + safeVal + telVal;
  }

  const total_4 = useMemo(
    () =>
      calculateTotal_4(
        activeConfig,

        activeSafeweb_4,
        activeTelephone_4
      ),
    [activeConfig, activeSafeweb_4, activeTelephone_4]
  );

  // and now your “other” total, for whichever config ≠ '1':
  const altConfig_4 = activeConfig !== '1' ? activeConfig : ('2' as ConfigType);
  const total_4_4 = useMemo(
    () => calculateTotal_4(altConfig_4, activeSafeweb_4, activeTelephone_4),
    [altConfig_4, activeSafeweb_4, activeTelephone_4]
  );

  const [activeSafeweb_5, setActiveSafeweb_5] = useState<boolean>(false);
  const [activeTelephone_5, setActiveTelephone_5] = useState<boolean>(false);

  function calculateTotal_5(
    config: ConfigType,
    safeweb: boolean,
    telephone: boolean
  ): number {
    const base = config === '1' ? 499 : 799;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    return base + safeVal + telVal;
  }

  const total_5 = useMemo(
    () => calculateTotal_5(activeConfig, activeSafeweb_5, activeTelephone_5),
    [activeConfig, activeSafeweb_5, activeTelephone_5]
  );

  // and now your “other” total, for whichever config ≠ '1':
  const altConfig_5 = activeConfig !== '1' ? activeConfig : ('2' as ConfigType);
  const total_5_5 = useMemo(
    () =>
      calculateTotal_5(
        altConfig_5,

        activeSafeweb_5,
        activeTelephone_5
      ),
    [altConfig_5, activeSafeweb_5, activeTelephone_5]
  );

  const setPopup = (id: string, name: string, subname: string) => {
    if (id == '0') {
      trackEvent('double_device_buy', `${name} ${subname}`);
    }
    setActivePopup('1934567');
    setActivePopupConfig(name);
    setActivePopupSubConfig(subname);
    setActiveBuyConfig(
      id === '1'
        ? `[${isRegio ? 'regio' : 'non-regio'}] (Internet) Double – ${name} ${subname} , ${activeMesh_1 ? '+ Wi‑Fi Mesh, ' : ''}${activeSafeweb_1 ? '+ Safe‑Web, ' : ''}${activeTelephone_1 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
        : id === '2'
          ? `[${isRegio ? 'regio' : 'non-regio'}] (Internet) Double – ${name} ${subname} , ${activeMesh_2 ? '+ Wi‑Fi Mesh, ' : ''}${activeSafeweb_2 ? '+ Safe‑Web, ' : ''}${activeTelephone_2 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
          : id === '3'
            ? `[${isRegio ? 'regio' : 'non-regio'}] (Internet) Double – ${name} ${subname} , ${activeMesh_3 ? '+ Wi‑Fi Mesh, ' : ''}${activeSafeweb_3 ? '+ Safe‑Web, ' : ''}${activeTelephone_3 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
            : id === '4'
              ? `[${isRegio ? 'regio' : 'non-regio'}] (Internet) Double – ${name} ${subname} , ${activeSafeweb_4 ? '+ Safe‑Web, ' : ''}${activeTelephone_4 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
              : id === '5'
                ? `[${isRegio ? 'regio' : 'non-regio'}] (Internet) Double – ${name} ${subname} , ${activeSafeweb_5 ? '+ Safe‑Web, ' : ''}${activeTelephone_5 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
                : ''
    );
  };

  const trackToggle =
    (event: string, setter: (checked: boolean) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.checked);
      trackEvent(event);
    };

  return (
    <>
      <SEO {...seo} />
      <div className={styles.regio}>
        <span>
          <span>{t('combo_home.promo_text')}</span>
          &nbsp;
          <span>
            (
            <span
              onClick={() => setActivePopup('1110116')}
              className={styles.regio_select}
            >
              {regio}
            </span>
            ).
          </span>
        </span>
      </div>
      <Navbar />

      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/69074312${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/79074311${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title_3 ${styles.title_main}`}>
        <span>{t('combo_home.choose_best_subscription')}</span>
      </div>

      <Slider {...settings} className={styles.abonaments}>
        {(activeConfig == '1' || !isRegio) && (
          <div className={styles.abonaments_block}>
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
                {t('only_net.breadcrumb.internet')}
              </div>
              <div className={styles.abonaments_block_inside_title}>
                300 Mbps
              </div>

              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_icon}>
                  <Icon
                    type={'modem'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                {t('combo_home.router_wifi6_included')}
              </div>
              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_toggle}>
                  {/*<Icon*/}
                  {/*  type={'empty'}*/}
                  {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                  {/*/>*/}
                  <Toggle
                    checked={activeMesh_1}
                    onChange={trackToggle(
                      'double_mesh_toggle',
                      setActiveMesh_1
                    )}
                  />
                </div>
                <span>
                  x1 <b>Mesh Wi-Fi</b>
                  {/*inclus*/}{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (49 {t('combo_home.lei_luna')})
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
                  <Toggle
                    checked={activeSafeweb_1}
                    onChange={trackToggle(
                      'double_safeweb_toggle',
                      setActiveSafeweb_1
                    )}
                  />
                </div>
                <span>
                  <b>Safe-Web</b>
                  {/*inclus*/}{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (15 {t('combo_home.lei_luna')})
                  </span>
                </span>
                <InfoIcon onClick={() => setActivePopup('1280112')} />
              </div>
              <div className={styles.abonaments_block_inside_line}></div>
              <div
                className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
              >
                <div className={styles.abonaments_block_inside_subtitle_toggle}>
                  <Toggle
                    checked={activeTelephone_1}
                    onChange={trackToggle(
                      'double_telephone_toggle',
                      setActiveTelephone_1
                    )}
                  />
                </div>
                <span>
                  <b>{t('combo_home.telefonie_fixa')}</b>
                  {/*inclus*/}{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (10 {t('combo_home.lei_luna')})
                  </span>
                </span>
                <InfoIcon onClick={() => setActivePopup('1280119')} />
              </div>

              {activeConfig != '1' && (
                <div className={styles.regio_spacer}>&nbsp;</div>
              )}

              <div className={styles.wifi_carousell_block_inside_btns}>
                {activeConfig == '1' ? (
                  <div className={styles.tm_carousell_block_row_tags}>
                    <div className={styles.tm_carousell_block_row_tag}>
                      {t('only_net.discount_100_2_years')}
                    </div>
                  </div>
                ) : (
                  ` `
                )}
                <div className={styles.mobile_carousell_price}>
                  <div>
                    <div>{total_1}</div>
                  </div>
                  <div>
                    <div className={styles.mobile_carousell_price_valuta}>
                      {t('lei_luna')}
                    </div>
                    <div className={styles.mobile_carousell_price_old}>
                      <span>
                        {' '}
                        {activeConfig == '1'
                          ? `${total_1_1} ${t('lei_luna')}`
                          : ` `}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                id="combo_buy+1"
                onClick={() =>
                  setPopup('1', t('only_net.breadcrumb.internet'), `(300Mbps)`)
                }
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
        )}
        {(activeConfig === '1' || activeConfig === '2') && (
          <div className={styles.abonaments_block}>
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
                {t('only_net.breadcrumb.internet')}
              </div>
              <div className={styles.abonaments_block_inside_title}>
                500 Mbps
              </div>

              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_icon}>
                  <Icon
                    type={'modem'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                {t('combo_home.router_wifi6_included')}
              </div>
              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_toggle}>
                  {/*<Icon*/}
                  {/*  type={'empty'}*/}
                  {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                  {/*/>*/}
                  <Toggle
                    checked={activeMesh_2}
                    onChange={trackToggle(
                      'double_mesh_toggle',
                      setActiveMesh_2
                    )}
                  />
                </div>
                <span>
                  x1 <b>Mesh Wi-Fi</b>
                  {/*inclus*/}{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (49 {t('combo_home.lei_luna')})
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
                  <Toggle
                    checked={activeSafeweb_2}
                    onChange={trackToggle(
                      'double_safeweb_toggle',
                      setActiveSafeweb_2
                    )}
                  />
                </div>
                <span>
                  <b>Safe-Web</b>
                  {/*inclus*/}{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (15 {t('combo_home.lei_luna')})
                  </span>
                </span>
                <InfoIcon onClick={() => setActivePopup('1280112')} />
              </div>

              <div className={styles.abonaments_block_inside_line}></div>

              <div
                className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
              >
                <div className={styles.abonaments_block_inside_subtitle_toggle}>
                  <Toggle
                    checked={activeTelephone_2}
                    onChange={trackToggle(
                      'double_telephone_toggle',
                      setActiveTelephone_2
                    )}
                  />
                </div>
                <span>
                  <b>{t('combo_home.telefonie_fixa')}</b>
                  {/*inclus*/}{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (10 {t('combo_home.lei_luna')})
                  </span>
                </span>
                <InfoIcon onClick={() => setActivePopup('1280119')} />
              </div>
              {activeConfig != '1' && (
                <div className={styles.regio_spacer}>&nbsp;</div>
              )}

              <div className={styles.wifi_carousell_block_inside_btns}>
                {activeConfig == '1' ? (
                  <div className={styles.tm_carousell_block_row_tags}>
                    <div className={styles.tm_carousell_block_row_tag}>
                      {t('only_net.discount_100_2_years')}
                    </div>
                  </div>
                ) : (
                  ` `
                )}
                <div className={styles.mobile_carousell_price}>
                  <div>
                    <div>{total_2}</div>
                  </div>
                  <div>
                    <div className={styles.mobile_carousell_price_valuta}>
                      {t('lei_luna')}
                    </div>
                    <div className={styles.mobile_carousell_price_old}>
                      <span>
                        {' '}
                        {activeConfig == '1'
                          ? `${total_2_2} ${t('lei_luna')}`
                          : ` `}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                id="combo_buy+2"
                onClick={() =>
                  setPopup('2', t('only_net.breadcrumb.internet'), `(500Mbps)`)
                }
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
        )}
        <div className={styles.abonaments_block}>
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
              {t('only_net.breadcrumb.internet')}
            </div>
            <div className={styles.abonaments_block_inside_title}>
              1000 Mbps
            </div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('combo_home.router_wifi6_included')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle
                  checked={activeMesh_3}
                  onChange={trackToggle('double_mesh_toggle', setActiveMesh_3)}
                />
              </div>
              <span>
                x1 <b>Mesh Wi-Fi</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (49 {t('combo_home.lei_luna')})
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
                <Toggle
                  checked={activeSafeweb_3}
                  onChange={trackToggle(
                    'double_safeweb_toggle',
                    setActiveSafeweb_3
                  )}
                />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle
                  checked={activeTelephone_3}
                  onChange={trackToggle(
                    'double_telephone_toggle',
                    setActiveTelephone_3
                  )}
                />
              </div>
              <span>
                <b>{t('combo_home.telefonie_fixa')}</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280119')} />
            </div>

            {activeConfig != '1' && (
              <div className={styles.regio_spacer}>&nbsp;</div>
            )}

            <div className={styles.wifi_carousell_block_inside_btns}>
              {activeConfig == '1' ? (
                <div className={styles.tm_carousell_block_row_tags}>
                  <div className={styles.tm_carousell_block_row_tag}>
                    {t('only_net.discount_100_2_years')}
                  </div>
                </div>
              ) : (
                ` `
              )}
              <div className={styles.mobile_carousell_price}>
                <div>
                  <div>{total_3}</div>
                </div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>
                      {' '}
                      {activeConfig == '1'
                        ? `${total_3_3} ${t('lei_luna')}`
                        : ` `}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              id="combo_buy+3"
              onClick={() =>
                setPopup('3', t('only_net.breadcrumb.internet'), `(1000Mbps)`)
              }
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
        <div className={styles.abonaments_block}>
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
              {t('only_net.breadcrumb.internet')}
            </div>
            <div className={styles.abonaments_block_inside_title}>2.1 Gbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('combo_home.router_wifi6_included')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'wifi'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
                {/*<Toggle*/}
                {/*  checked={activeMesh_4}*/}
                {/*  onChange={trackToggle('double_mesh_toggle', setActiveMesh_4)}*/}
                {/*/>*/}
              </div>
              <span>
                x1 <b>Mesh Wi-Fi</b> {t('combo_home.inclus')}{' '}
                <span
                  className={styles.abonaments_block_inside_subtitle_small}
                  style={{ textDecoration: 'line-through' }}
                >
                  (49 {t('combo_home.lei_luna')})
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
                <Toggle
                  checked={activeSafeweb_4}
                  onChange={trackToggle(
                    'double_safeweb_toggle',
                    setActiveSafeweb_4
                  )}
                />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle
                  checked={activeTelephone_4}
                  onChange={trackToggle(
                    'double_telephone_toggle',
                    setActiveTelephone_4
                  )}
                />
              </div>
              <span>
                <b>{t('combo_home.telefonie_fixa')}</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280119')} />
            </div>

            {activeConfig != '1' && (
              <div className={styles.regio_spacer}>&nbsp;</div>
            )}

            <div className={styles.wifi_carousell_block_inside_btns}>
              {activeConfig == '1' ? (
                <div className={styles.tm_carousell_block_row_tags}>
                  <div className={styles.tm_carousell_block_row_tag}>
                    {t('only_net.discount_300_2_years')}
                  </div>
                </div>
              ) : (
                ` `
              )}
              <div className={styles.mobile_carousell_price}>
                <div>
                  <div>{total_4}</div>
                </div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>
                      {' '}
                      {activeConfig == '1'
                        ? `${total_4_4} ${t('lei_luna')}`
                        : ` `}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              id="combo_buy+4"
              onClick={() =>
                setPopup('4', t('only_net.breadcrumb.internet'), `(2.1Gbps)`)
              }
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
        <div className={styles.abonaments_block}>
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
              {t('only_net.breadcrumb.internet')}
            </div>
            <div className={styles.abonaments_block_inside_title}>5.5 Gbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('combo_home.router_wifi6_included')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'wifi'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
                {/*<Toggle*/}
                {/*  checked={activeMesh_4}*/}
                {/*  onChange={trackToggle('double_mesh_toggle', setActiveMesh_4)}*/}
                {/*/>*/}
              </div>
              <span>
                x2 <b>Mesh Wi-Fi</b> {t('combo_home.inclus')}{' '}
                <span
                  className={styles.abonaments_block_inside_subtitle_small}
                  style={{ textDecoration: 'line-through' }}
                >
                  (49 {t('combo_home.lei_luna')})
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
                <Toggle
                  checked={activeSafeweb_5}
                  onChange={trackToggle(
                    'double_safeweb_toggle',
                    setActiveSafeweb_5
                  )}
                />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle
                  checked={activeTelephone_5}
                  onChange={trackToggle(
                    'double_telephone_toggle',
                    setActiveTelephone_5
                  )}
                />
              </div>
              <span>
                <b>{t('combo_home.telefonie_fixa')}</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280119')} />
            </div>

            {activeConfig != '1' && (
              <div className={styles.regio_spacer}>&nbsp;</div>
            )}
            <div className={styles.wifi_carousell_block_inside_btns}>
              {activeConfig == '1' ? (
                <div className={styles.tm_carousell_block_row_tags}>
                  <div className={styles.tm_carousell_block_row_tag}>
                    {t('only_net.discount_300_2_years')}
                  </div>
                </div>
              ) : (
                ` `
              )}
              <div className={styles.mobile_carousell_price}>
                <div>
                  <div>{total_5}</div>
                </div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>
                      {' '}
                      {activeConfig == '1'
                        ? `${total_5_5} ${t('lei_luna')}`
                        : ` `}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              id="combo_buy+5"
              onClick={() =>
                setPopup('5', t('only_net.breadcrumb.internet'), `(5.5Gbps)`)
              }
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
      </Slider>

      <Details trackPrefix="double">
        <DetailsBlock title={t('combo_home.conditii_1.title')}>
          <ul>
            <li>{t('only_net.conditii_1.item_1')}</li>
            <li>{t('only_net.conditii_1.item_2')}</li>
            <li>{t('only_net.conditii_1.item_3')}</li>
            <ul>
              <li>{t('only_net.conditii_1.item_4')}</li>
              <li>{t('only_net.conditii_1.item_5')}</li>
            </ul>
            <li>{t('only_net.conditii_1.item_6')}</li>
            <li>{t('only_net.conditii_1.item_7')}</li>
            <li>{t('only_net.conditii_1.item_8')}</li>
            <li>{t('only_net.conditii_1.item_9')}</li>
            <li>{t('only_net.conditii_1.item_10')}</li>
            <li>{t('only_net.conditii_1.item_11')}</li>
          </ul>
        </DetailsBlock>
      </Details>

      <Functions
        style_type={'blue'}
        title={'general.recommended_options'}
        functions={[
          'Megogo',
          'Ivi',
          'Premier',
          'MtcTv',
          'Arhiva',
          'PlusTV',
          'Adult',
          'Junior',
        ]}
      />
      <MyApp style_type={'blue_white'} className={styles.myapp} />

      <FaqV2 max_faq={5}>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089314"
          question={t('combo_home.faq.install_duration_question')}
        >
          {t('combo_home.faq.install_duration_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089315"
          question={t('combo_home.faq.availability_check_question')}
        >
          {t('combo_home.faq.availability_check_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089316"
          question={t('combo_home.faq.activate_new_offer_question')}
        >
          {t('combo_home.faq.activate_new_offer_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089317"
          question={t('combo_home.faq.bill_payment_deadline_question')}
        >
          {t('combo_home.faq.bill_payment_deadline_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089318"
          question={t('combo_home.faq.late_payment_consequences_question')}
        >
          {t('combo_home.faq.late_payment_consequences_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089319"
          question={t('combo_home.faq.manage_subscription_remotely_question')}
        >
          {t('combo_home.faq.manage_subscription_remotely_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089320"
          question={t('combo_home.faq.pause_services_question')}
        >
          {t('combo_home.faq.pause_services_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089321"
          question={t('combo_home.faq.change_package_question')}
        >
          {t('combo_home.faq.change_package_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089322"
          question={t('combo_home.faq.move_address_question')}
        >
          {t('combo_home.faq.move_address_answer')}
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="double"
          id_faq="112089323"
          question={t('combo_home.faq.transfer_subscription_question')}
        >
          {t('combo_home.faq.transfer_subscription_answer')}
        </FaqQAV2>
      </FaqV2>

      {/* Wi-Fi Mesh */}
      <Popup
        id="1280110"
        width="1000px"
        isVisible={activePopup === '1280110'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.popup_mesh.title')}</b>
        <p>{t('double.popup_mesh.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_mesh.why_title')}
        </b>
        <ul>
          <li>{t('double.popup_mesh.list.0')}</li>
          <li>{t('double.popup_mesh.list.1')}</li>
          <li>{t('double.popup_mesh.list.2')}</li>
        </ul>

        <Details className={styles.popup_more_detalii}>
          <DetailsBlock title={t('double.popup_tvgo.conditions_title')}>
            <ul>
              <li>{t('double.popup_mesh.conditions.0')}</li>
              <li>{t('double.popup_mesh.conditions.1')}</li>
              <li>{t('double.popup_mesh.conditions.2')}</li>
              <li>{t('double.popup_mesh.conditions.3')}</li>
              <li>{t('double.popup_mesh.conditions.4')}</li>
              <li>{t('double.popup_mesh.conditions.5')}</li>
              <li>{t('double.popup_mesh.conditions.6')}</li>
              <li>{t('double.popup_mesh.conditions.7')}</li>
            </ul>
          </DetailsBlock>
        </Details>

        <Button
          id="combo_wifi_plus+learn_more"
          to={`https://new.moldtelecom.md/${t('lang')}/wifi-plus`}
          color="#fff"
          bgcolor="var(--theme_primary_color_blue_4)"
          border="var(--theme_primary_color_blue_4)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="var(--theme_primary_color_blue_4)"
          icon="arrow_right"
          className={styles.popup_more_btn}
        >
          {t('double.learn_more')}
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
        <b className={styles.popup_title_1}>
          {t('double.popup_premier.title')}
        </b>
        <p>{t('double.popup_premier.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_premier.features_title')}
        </b>
        <ul>
          <li>{t('double.popup_premier.features.0')}</li>
          <li>{t('double.popup_premier.features.1')}</li>
          <li>{t('double.popup_premier.features.2')}</li>
          <li>{t('double.popup_premier.features.3')}</li>
        </ul>

        <div className={styles.abonaments_block_inside_line}></div>

        <b className={styles.popup_title_1}>
          {t('double.popup_univers.title')}
        </b>
        <p>{t('double.popup_univers.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_univers.features_title')}
        </b>
        <ul>
          <li>{t('double.popup_univers.features.0')}</li>
          <li>{t('double.popup_univers.features.1')}</li>
          <li>{t('double.popup_univers.features.1_1')}</li>
          <li>{t('double.popup_univers.features.2')}</li>
          <li>{t('double.popup_univers.features.3')}</li>
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
        <b className={styles.popup_title_1}>
          {t('double.popup_safeweb.title')}
        </b>
        <p>{t('double.popup_safeweb.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_safeweb.why_title')}
        </b>
        <ul>
          <li>{t('double.popup_safeweb.list.0')}</li>
          <li>{t('double.popup_safeweb.list.1')}</li>
          <li>{t('double.popup_safeweb.list.2')}</li>
        </ul>
        <Button
          id="combo_safe_web+learn_more"
          color="#fff"
          bgcolor="var(--theme_primary_color_blue_4)"
          border="var(--theme_primary_color_blue_4)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="var(--theme_primary_color_blue_4)"
          icon="arrow_right"
          className={styles.popup_more_btn}
          to={`https://www.moldtelecom.md/${t('lang')}/personal/safe-web`}
        >
          {t('double.learn_more')}
        </Button>
      </Popup>

      <Popup
        id="1280113"
        width="1000px"
        isVisible={activePopup === '1280113'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.popup_tvgo.title')}</b>
        <p>{t('double.popup_tvgo.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_tvgo.conditions_title')}
        </b>
        <ul>
          <li>{t('double.popup_tvgo.conditions.0')}</li>
          <li>{t('double.popup_tvgo.conditions.1')}</li>
          <li>{t('double.popup_tvgo.conditions.2')}</li>
          <li>{t('double.popup_tvgo.conditions.3')}</li>
          <li>{t('double.popup_tvgo.conditions.4')}</li>
          <li>{t('double.popup_tvgo.conditions.5')}</li>
          <li>{t('double.popup_tvgo.conditions.6')}</li>
          <li>
            {t('double.popup_tvgo.conditions.7')}
            <ul>
              <li>{t('double.popup_tvgo.conditions.7_list.0')}</li>
              <li>{t('double.popup_tvgo.conditions.7_list.1')}</li>
            </ul>
          </li>
          <li>{t('double.popup_tvgo.conditions.8')}</li>
          <li>{t('double.popup_tvgo.conditions.9')}</li>
        </ul>

        <div className={styles.popup_btns_info}>
          <Button
            id="combo_tvgo+learn_more"
            to={`https://www.moldtelecom.md/${t('lang')}/personal/moldtelecom-tv-go`}
            color="#fff"
            bgcolor="var(--theme_primary_color_blue_4)"
            border="var(--theme_primary_color_blue_4)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_4)"
            icon="arrow_right"
            className={styles.popup_more_btn}
          >
            {t('double.learn_more')}
          </Button>
          <Button
            id="combo_tvgo+watch_now"
            to={'https://edge.multiscreen.moldtelecom.md/web/mold/#ro/login'}
            color="var(--theme_primary_color_blue_4)"
            bgcolor="transparent"
            border="var(--theme_primary_color_blue_4)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_4)"
            icon="arrow_right"
            className={styles.popup_more_btn}
          >
            {t('double.watch_now')}
          </Button>
        </div>
      </Popup>
      <Popup
        id="1280116"
        width="1000px"
        isVisible={activePopup === '1280116'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.popup_arhiva.title')}</b>
        <p>{t('double.popup_arhiva.text')}</p>

        <b>{t('double.popup_arhiva.activation_title')}</b>
        {t('double.popup_arhiva.activation_text')}
      </Popup>
      <Popup
        id="1280117"
        width="1000px"
        isVisible={activePopup === '1280117'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>
          {t('double.popup_options.title')}
        </b>
        <br />
        <div className={styles.popup_subtitle_1}>
          {t('double.popup_options.subtitle')}
        </div>

        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.adult.title')}
            </div>
            {t('double.popup_options.adult.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.adult.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.junior.title')}
            </div>
            {t('double.popup_options.junior.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.junior.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.tvextra.title')}
            </div>
            {t('double.popup_options.tvextra.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.tvextra.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.arhiva.title')}
            </div>
            {t('double.popup_options.arhiva.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.arhiva.price')}
          </div>
        </div>
        <div className={styles.popup_subtitle_1}>
          {' '}
          <br />
          {t('double.popup_options.cinema_title')}
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.megogo.title')}
            </div>
            {t('double.popup_options.megogo.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.megogo.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.premier.title')}
            </div>
            {t('double.popup_options.premier.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.premier.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.ivi.title')}
            </div>
            {t('double.popup_options.ivi.text')}
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.ivi.price')}
          </div>
        </div>
        {/*<div className={styles.row_popup_options}>*/}
        {/*  <div>*/}
        {/*    <div className={styles.row_popup_options_title}>Moldtelecom TV</div>*/}
        {/*    O aplicație care permite să accesezi pe orice dispozitiv toate canalele din grila Moldtelecom.*/}
        {/*  </div>*/}
        {/*  <div className={styles.row_popup_options_title_price}>30 lei</div>*/}
        {/*</div>*/}
      </Popup>

      <Popup
        id="1110116"
        width="400px"
        isVisible={activePopup === '1110116'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <div className={`title_3 ${styles.popup_regio_title}`}>
          {t('combo_home.location_select')}
        </div>

        <div className={styles.popup_regio_selects}>
          <select
            value={selRegion}
            className={styles.popup_regio_select}
            onChange={handleRegionChange}
          >
            {regions.map(r => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <select
            value={selCity}
            className={styles.popup_regio_select}
            onChange={handleCityChange}
          >
            {cities.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </Popup>
      <Popup
        id="1280119"
        width="1000px"
        isVisible={activePopup === '1280119'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.tf.title')}</b>
        {t('double.tf.text')} <br />
        <br />
        {t('double.tf.include')}
        <ul>
          <li> {t('double.tf.list.0')} </li>
          <li>{t('double.tf.list.1')} </li>
          <li> {t('double.tf.list.2')}</li>
        </ul>
        <div className={styles.popup_btns_info}>
          <Button
            id="combo_fix+learn_more"
            to={`https://www.moldtelecom.md/${t('lang')}/personal/Abonamente-telefonie-fixa`}
            color="#fff"
            bgcolor="var(--theme_primary_color_blue_4)"
            border="var(--theme_primary_color_blue_4)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_4)"
            icon="arrow_right"
            className={styles.popup_more_btn}
          >
            {t('double.learn_more')}
          </Button>
        </div>
      </Popup>

      <Footer disclaimer={true} />
      <Popup
        id="1934567"
        width="550px"
        isVisible={activePopup === '1934567'}
        onClose={handlePopupClose}
        className={styles.popupBuy}
        key={activePopup ?? 'popup-closed'}
      >
        {/*<div className={styles.popup_div_title}>*/}
        {/*  Mulțumim că ai ales Moldtelecom*/}
        {/*</div>*/}
        {error ? (
          <div className={styles.buy_popup_error}>
            <Icon
              type={'repair'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span
              dangerouslySetInnerHTML={{ __html: t('double.request_error') }}
            />
          </div>
        ) : submitted ? (
          <div className={styles.buy_popup_success}>
            <Icon
              type={'tick'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span
              dangerouslySetInnerHTML={{ __html: t('double.request_success') }}
            />
          </div>
        ) : (
          <div className={styles.buy_popup}>
            {popupType == true ? (
              <div>{t('double.device_chosen')}</div>
            ) : (
              <div>{t('double.subscription_chosen')}</div>
            )}
            <div className={styles.selected_popup_subcription}>
              <div className={styles.popup_selected}>
                {activePopupConfig}&nbsp;<span>{activePopupSubConfig}</span>
              </div>
            </div>

            <BuyForm
              config={activeBuyConfig}
              tag={'double'}
              service={'campain[double_2025_b2s], place[abonament]'}
              onSuccess={() => {
                setSubmitted(true);
                setError(false);
              }}
              onError={() => {
                setError(true);
              }}
            />
            <div
              className={styles.popup_discalmer}
              dangerouslySetInnerHTML={{
                __html: t('double.request_disclaimer'),
              }}
            />
          </div>
        )}
      </Popup>
    </>
  );
}
