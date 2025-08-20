import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './FiveGbps.module.css';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import Icon from '../../../../components/Icon.tsx';
import Details, {
  DetailsBlock,
} from '../../../../components/details/Details.tsx';
import Slider from 'react-slick';
import Button from '../../../../components/Button.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import Popup from '../../../../components/Popup/Popup.tsx';
import BuyForm from '../../../../components/buy_form/BuyForm.tsx';
import React, { useEffect, useState } from 'react';
import { trackEvent } from '../../../../initAnalytics.ts';
import SEO from '../../../../components/SEO';

type ConfigType = '1' | '2' | '3';

export default function FiveGbps() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.five_gbps.title'),
    description: t('pages.five_gbps.description'),
    keywords: t('pages.five_gbps.keywords'),
  };
  const [showRegio, setShowRegio] = useState(false);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowRegio(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll(); // în caz că pagina pornește deja scrollată
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [activePopup, setActivePopup] = useState<string | null>(null);
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

  const setPopup = (id: string, name: string, subname: string) => {
    if (id == '0') {
      trackEvent('5gbps_device_buy', `${name} ${subname}`);
    }
    setActivePopup('1934567');
    setActivePopupConfig(name);
    setActivePopupSubConfig(subname);
    setActiveBuyConfig(
      ` (5Gbps landing) Config – ${name} ${subname}  (Oferta Back-2-School 2025)`
    );
    // console.log(
    //   `[${isRegio ? 'regio' : 'non-regio'}] (Internet + TV) Triple – ${name} ${subname} (tip - ${activeTVConfig_1}, nr - ${numberTVConfig_1} tv), ${activeMesh_1 ? '+ Wi‑Fi Mesh, ' : ''}${activeSafeweb_1 ? '+ Safe‑Web, ' : ''}${activeMTC_TV_GO_1 ? '+ Moldtelecom TV GO, ' : ''}${activeTelephone_1 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
    // );
  };

  const breadcrumbItems = [
    { label: t('five_gbps.breadcrumb.internet'), url: ' ' },
    { label: t('five_gbps.breadcrumb.five_gbps') },
  ];

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
  const [activeConfig, setActiveConfig] = useState<ConfigType>('1');

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

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1301,
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
            src={`/images/landings/89618012${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/81671012${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
        <div className={styles.hero_btn}>
          <Button
            onClick={() => {
              const section = document.getElementById('abonamente');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            color="var(--theme_primary_color_blue_6)"
            bgcolor="#fff"
            border="#fff"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_1)"
            icon="arrow_right"
            className={styles.mobile_carousell_block_btn_buy}
          >
            <b>{t('order_now')}</b>
          </Button>
          <Button
            to={'tel:022500500'}
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_1)"
            color="#fff"
            className={styles.btn_hero_secondary}
          >
            0(22) 500-500
          </Button>
        </div>
      </Hero>

      <div className={`title_3 ${styles.title_main}`}>
        <span>
          {t('five_gbps.title_main.text')}{' '}
          <span className={styles.title_3_span}>
            {t('five_gbps.title_main.highlight')}
          </span>
        </span>
      </div>

      <div className={styles.why}>
        <div className={styles.why_card}>
          <Icon
            type={'speed'}
            color={'var(--theme_primary_color_blue_2)'}
            size="48px"
          />
          <div className={styles.why_card_text}>
            <div className={styles.why_card_title}>
              {t('five_gbps.why.signal_title')}
            </div>
            <div className={styles.why_card_text_span}>
              {t('five_gbps.why.signal_text')}
            </div>
          </div>
        </div>
        <div className={styles.why_card}>
          <Icon
            type={'modem'}
            color={'var(--theme_primary_color_blue_2)'}
            size="48px"
          />
          <div className={styles.why_card_text}>
            <div className={styles.why_card_title}>
              {t('five_gbps.why.zero_lag_title')}
            </div>
            <div className={styles.why_card_text_span}>
              {t('five_gbps.why.zero_lag_text')}
            </div>
          </div>
        </div>
        <div className={styles.why_card}>
          <Icon
            type={'connect'}
            color={'var(--theme_primary_color_blue_2)'}
            size="48px"
          />
          <div className={styles.why_card_text}>
            <div className={styles.why_card_title}>
              {t('five_gbps.why.stability_title')}
            </div>
            <div className={styles.why_card_text_span}>
              {t('five_gbps.why.stability_text')}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.what}>
        <img
          src="/images/landings/88618812.webp"
          alt="Moldtelecom"
          className={styles.what_img}
        />
        <div className={styles.what_right}>
          <div className={styles.what_title}>{t('five_gbps.intro.title')}</div>
          <div
            dangerouslySetInnerHTML={{ __html: t('five_gbps.intro.text') }}
          />
        </div>
      </div>
      <div className={styles.what}>
        <div className={`${styles.what_right} ${styles.what_right_2}`}>
          <div className={styles.what_title}>
            {t('five_gbps.why_need.title')}
          </div>
          <div className={styles.what_tsubitle}>
            {t('five_gbps.why_need.subtitle')}
          </div>
          <div className={styles.what_list}>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'gaming'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span
                dangerouslySetInnerHTML={{
                  __html: t('five_gbps.why_need.items.gamer'),
                }}
              />
            </div>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'home'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span
                dangerouslySetInnerHTML={{
                  __html: t('five_gbps.why_need.items.smart_home'),
                }}
              />
            </div>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'family'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span
                dangerouslySetInnerHTML={{
                  __html: t('five_gbps.why_need.items.family'),
                }}
              />
            </div>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'office'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span
                dangerouslySetInnerHTML={{
                  __html: t('five_gbps.why_need.items.remote_job'),
                }}
              />
            </div>
          </div>
        </div>
        <img
          src="/images/landings/88618813.webp"
          alt="Moldtelecom"
          className={styles.what_img}
        />
      </div>

      <div className={styles.modem}>
        <div className={styles.modem_inside}>
          <img
            className={styles.modem_img}
            src="/images/landings/45271083.webp"
            alt="Moldtelecom"
          />
          <div className={`${styles.modem_inside_title} title_3`}>
            {t('five_gbps.modem.title')}
          </div>

          <div
            className={styles.modem_inside_text}
            dangerouslySetInnerHTML={{ __html: t('five_gbps.modem.text') }}
          />

          {/*<div className={styles.modem_inside_list}>*/}
          {/*  <div className={styles.modem_inside_row}>*/}
          {/*    <div  className={styles.modem_inside_icon}>*/}
          {/*      <Icon type={'empty'}/>*/}
          {/*    </div>*/}
          {/*    până la 10 Gbps la nivel tehnologic*/}
          {/*  </div>*/}
          {/*  <div className={styles.modem_inside_row}>*/}
          {/*    <div  className={styles.modem_inside_icon}>*/}
          {/*      <Icon type={'empty'}/>*/}
          {/*    </div>*/}
          {/*    până la 10 Gbps la nivel tehnologic*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className={`title_3 ${styles.domenii}`}>
        {t('five_gbps.discover_subscriptions')}
      </div>
      <Slider {...settings} className={styles.abonaments}>
        <div id={'abonamente'} className={styles.abonaments_block}>
          <div className={styles.abonaments_block_inside}>
            <div className={styles.abonaments_block_inside_pretitle}>
              {t('five_gbps.abonaments.pretitle')}
            </div>
            <div className={styles.abonaments_block_inside_title}>2.1 Gbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('five_gbps.abonaments.features.router')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'empty'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('five_gbps.abonaments.features.mesh', {
                      count: 1,
                    }),
                  }}
                />{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (
                  {t('five_gbps.abonaments.features.mesh_price', { price: 49 })}
                  )
                </span>
              </span>
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div
                  className={styles.tm_carousell_block_row_tag}
                  style={{ opacity: activeConfig === '2' ? '0' : '1' }}
                >
                  {t('five_gbps.abonaments.tag')}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? 299 : 599}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  {activeConfig == '1' && (
                    <div className={styles.mobile_carousell_price_old}>
                      <span>599 {t('lei_luna')}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Button
              color="#fff"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              hover_color="var(--theme_primary_color_blue_4)"
              icon="arrow_right"
              className={styles.mobile_carousell_block_btn_buy}
              onClick={() =>
                setPopup(
                  '1',
                  '2.1Gbps',
                  `(${t('five_gbps.abonaments.pretitle')})`
                )
              }
            >
              {t('order_now')}
            </Button>
          </div>
        </div>
        <div className={styles.abonaments_block}>
          <div className={styles.roaming_carousell_block_sp}>
            <div className={styles.roaming_carousell_block_sp_title}>
              {t('five_gbps.abonaments.new')}
            </div>
            <div className={styles.abonaments_block_inside}>
              <div className={styles.abonaments_block_inside_pretitle}>
                {t('five_gbps.abonaments.pretitle')}
              </div>
              <div className={styles.abonaments_block_inside_title}>
                5.5 Gbps
              </div>

              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_icon}>
                  <Icon
                    type={'modem'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                {t('five_gbps.abonaments.features.router')}
              </div>
              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_icon}>
                  <Icon
                    type={'empty'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('five_gbps.abonaments.features.mesh', {
                        count: 2,
                      }),
                    }}
                  />{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (
                    {t('five_gbps.abonaments.features.mesh_price', {
                      price: 98,
                    })}
                    )
                  </span>
                </span>
              </div>

              <div className={styles.wifi_carousell_block_inside_btns}>
                <div className={styles.tm_carousell_block_row_tags}>
                  <div
                    className={styles.tm_carousell_block_row_tag}
                    style={{ opacity: activeConfig === '2' ? '0' : '1' }}
                  >
                    {t('five_gbps.abonaments.tag')}
                  </div>
                </div>
                <div className={styles.mobile_carousell_price}>
                  <div> {activeConfig == '1' ? 499 : 799}</div>
                  <div>
                    <div className={styles.mobile_carousell_price_valuta}>
                      {t('lei_luna')}
                    </div>
                    {activeConfig == '1' && (
                      <div className={styles.mobile_carousell_price_old}>
                        <span>799 {t('lei_luna')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Button
                color="#fff"
                bgcolor="var(--theme_primary_color_blue_4)"
                border="var(--theme_primary_color_blue_4)"
                hover_border="var(--theme_primary_color_blue_2)"
                hover_bgcolor="var(--theme_primary_color_blue_2)"
                hover_color="var(--theme_primary_color_blue_4)"
                icon="arrow_right"
                className={styles.mobile_carousell_block_btn_buy}
                onClick={() =>
                  setPopup(
                    '1',
                    '5.5Gbps',
                    `(${t('five_gbps.abonaments.pretitle')})`
                  )
                }
              >
                {t('order_now')}
              </Button>
            </div>
          </div>
        </div>
      </Slider>
      <div className={styles.roaming_btns}>
        <Button
          to={`https://www.moldtelecom.md/${t('lang')}/personal/Promo_Abonamente-TV-Internet`}
          color="var(--theme_primary_color_blue_4)"
          bgcolor="var(--theme_primary_color_blue_3)"
          border="var(--theme_primary_color_blue_3)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          icon="arrow_right"
        >
          {t('five_gbps.abonaments.buttons.promo')}
        </Button>
        <Button
          to={`https://www.moldtelecom.md/${t('lang')}/echipamente-wifi`}
          color="var(--theme_primary_color_blue_4)"
          bgcolor="transparent"
          border="var(--theme_primary_color_blue_3)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          icon="arrow_right"
        >
          {t('five_gbps.abonaments.buttons.features')}
        </Button>
      </div>

      <Details>
        <DetailsBlock title={t('five_gbps.details.title')}>
          <ul>
            {(
              t('five_gbps.details.items', { returnObjects: true }) as string[]
            ).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </DetailsBlock>
      </Details>

      <div className={styles.roaming_warning}>
        <div className={`${styles.roaming_warning_red}`}></div>
        <div
          className={styles.roaming_warning_inside}
          dangerouslySetInnerHTML={{ __html: t('five_gbps.warning') }}
        />
      </div>

      <div className={styles.eco}>
        <div className={styles.eco_card}>
          <div className={styles.eco_icon}>
            <Icon type={'eco'} color={'#82C84F'} size={'68px'} />
          </div>
          <div
            className={styles.eco_card_text}
            dangerouslySetInnerHTML={{ __html: t('five_gbps.eco.card1') }}
          />
        </div>
        <div className={styles.eco_card}>
          <div className={styles.eco_icon}>
            <Icon type={'eco_sign'} color={'#82C84F'} size={'68px'} />
          </div>
          <div
            className={styles.eco_card_text}
            dangerouslySetInnerHTML={{ __html: t('five_gbps.eco.card2') }}
          />
        </div>
      </div>

      <MyApp style_type={'blue_white'} className={styles.myapp} />
      <FaqV2 max_faq={5}>
        <FaqQAV2
          id_faq="112089314"
          question={t('combo_home.faq.install_duration_question')}
        >
          {t('combo_home.faq.install_duration_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089315"
          question={t('combo_home.faq.availability_check_question')}
        >
          {t('combo_home.faq.availability_check_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089316"
          question={t('combo_home.faq.activate_new_offer_question')}
        >
          {t('combo_home.faq.activate_new_offer_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089317"
          question={t('combo_home.faq.bill_payment_deadline_question')}
        >
          {t('combo_home.faq.bill_payment_deadline_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089318"
          question={t('combo_home.faq.late_payment_consequences_question')}
        >
          {t('combo_home.faq.late_payment_consequences_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089319"
          question={t('combo_home.faq.manage_subscription_remotely_question')}
        >
          {t('combo_home.faq.manage_subscription_remotely_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089320"
          question={t('combo_home.faq.pause_services_question')}
        >
          {t('combo_home.faq.pause_services_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089321"
          question={t('combo_home.faq.change_package_question')}
        >
          {t('combo_home.faq.change_package_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089322"
          question={t('combo_home.faq.move_address_question')}
        >
          {t('combo_home.faq.move_address_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089323"
          question={t('combo_home.faq.transfer_subscription_question')}
        >
          {t('combo_home.faq.transfer_subscription_answer')}
        </FaqQAV2>
      </FaqV2>

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

      <div className={styles.regio_block_mobile} hidden={!showRegio}>
        {t('combo_home.regiunea')} ({' '}
        <span
          onClick={() => setActivePopup('1110116')}
          className={styles.regio_select}
        >
          {regio}
        </span>{' '}
        )
      </div>

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
    </>
  );
}
