import Navbar from '../../../../components/navbar/Navbar.tsx';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './Mobile.module.css';
import Button from '../../../../components/Button.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import Details, {
  DetailsBlock,
} from '../../../../components/details/Details.tsx';
import Slider from 'react-slick';
import Icon from '../../../../components/Icon.tsx';
import TableRoaming from '../../../../components/Popups/TableRoaming.tsx';
import Functions from '../../../../components/functions/Functions.tsx';
import { useState } from 'react';
import Popup from '../../../../components/Popup/Popup.tsx';
import Toggle from '../../../../components/toggle/Toggle.tsx';
import BuyForm from '../../../../components/buy_form/BuyForm.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import ShopCard from '../../../../components/shop_card/ShopCard.tsx';
import ScrollableWrapper from '../../../../components/Popup/ScrollableWrapper.tsx';
import { trackEvent } from '../../../../initAnalytics.ts';

export default function MobileSchool() {
  const { t } = useTranslation();
  const [testGratis, setTestGratis] = useState(false);
  const seo = {
    title: t('pages.mobile.title'),
    description: t('pages.mobile.description'),
    keywords: t('pages.mobile.keywords'),
  };
  const breadcrumbItems = [
    { label: t('tm.breadcrumb.promo'), url: ' ' },
    { label: t('tm.breadcrumb.mobile') },
  ];
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [activePopupConfig, setActivePopupConfig] = useState<string>('');
  const [activePriceConfig, setActivePriceConfig] = useState<string>('');
  const [activeReducereConfig, setActiveReducereConfig] = useState<string>('');
  const handleConfigClick = (name: string, price: string, reducere: string) => {
    setActivePopupConfig(name);
    setActivePriceConfig(price);
    setActiveReducereConfig(reducere);
    setActivePopup('1280520');
  };
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<'sim' | 'esim'>('sim');

  const handleClick = (type: 'sim' | 'esim') => {
    setSelected(type);
    trackEvent('tm_sim_select', type);
  };
  const [activePopupSubConfig, setActivePopupSubConfig] = useState<string>('');
  const [activeBuyConfig, setActiveBuyConfig] = useState<string>('');
  const setPopup = (name: string, subname: string) => {
    trackEvent('tm_device_buy', `${name} ${subname}`);
    setActivePopup('1934567');
    setActivePopupConfig(name);
    setActivePopupSubConfig(subname);
    setActiveBuyConfig(`(Device - TM)`);
  };

  const settings_discover = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1300,
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
  const settings_devices = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings = {
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

  const [activeConfig, setActiveConfig] = useState<string>('1');

  const goToPage = (link: string) => {
    window.location.href = link;
  };

  const handlePopupClose = () => {
    setActivePopup(null);
    setSubmitted(false);
    setError(false);
    setSelected('sim');
    setTestGratis(false);
  };

  const promoItems = t('tm.details.promo.items', {
    returnObjects: true,
  }) as string[];
  const cond1 = t('tm.details.conditii.itemsConfig1', {
    returnObjects: true,
  }) as string[];
  const cond2 = t('tm.details.conditii.itemsConfigElse', {
    returnObjects: true,
  }) as string[];
  const common = t('tm.details.conditii.commonItems', {
    returnObjects: true,
  }) as string[];
  const roamingItems = t('tm.details.roaming.items', {
    returnObjects: true,
  }) as string[];
  const warning1Items = t('tm.details.warning.items_1', {
    returnObjects: true,
  }) as string[];
  const warning2Items = t('tm.details.warning.items_2', {
    returnObjects: true,
  }) as string[];
  const warning3Items = t('tm.details.warning.items_3', {
    returnObjects: true,
  }) as string[];
  const warning4Items = t('tm.details.warning.items_4', {
    returnObjects: true,
  }) as string[];
  const warning5Items = t('tm.details.warning.items_5', {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/68074012${t('lang')}.webp`}
            alt={t('tm.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/81074012${t('lang')}.webp`}
            alt={t('tm.hero.alt')}
          />
        </div>
      </Hero>

      <div className={styles.select_type}>
        <div
          className={`${styles.select_type_card} ${styles.select_type_card_active}`}
          onClick={() => trackEvent('tm_select_type_abonament')}
        >
          <div className={styles.select_type_card_top}>
            <Icon
              size={'22px'}
              type={'plus'}
              color={'var(--theme_primary_color_blue_2)'}
            />
            {t('tm.abonament')}
          </div>
          <div className={styles.select_type_card_bottom}></div>
        </div>
        <div
          className={styles.select_type_card}
          onClick={() => {
            trackEvent('tm_select_type_portare');
            goToPage(
              `https://www.moldtelecom.md/${t('lang')}/personal/Portare`
            );
          }}
        >
          <div className={styles.select_type_card_top}>
            <Icon
              size={'22px'}
              type={'retry'}
              color={'var(--theme_primary_color_blue_2)'}
            />
            {t('tm.portare')}
          </div>
          <div className={styles.select_type_card_bottom}></div>
        </div>
        <div
          className={styles.select_type_card}
          onClick={() => {
            trackEvent('tm_select_type_prepay');
            goToPage(
              `https://www.moldtelecom.md/${t('lang')}/personal/prepay-cartela`
            );
          }}
        >
          <div className={styles.select_type_card_top}>
            <Icon
              size={'22px'}
              type={'sim'}
              color={'var(--theme_primary_color_blue_2)'}
            />
            {t('tm.prepay')}
          </div>
          <div className={styles.select_type_card_bottom}></div>
        </div>
      </div>

      <div className={`title title_5 ${styles.title2}`}>
        {t('tm.title_choose')}
      </div>

      <div className={`${styles.btns_select}`}>
        <Button
          id="tm_not_client"
          color={'var(--theme_primary_color_blue_4)'}
          bgcolor={
            activeConfig == '1'
              ? 'var(--theme_primary_color_blue_3)'
              : 'transparent'
          }
          border={'var(--theme_primary_color_blue_3)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          onClick={() => {
            setActiveConfig('1');
          }}
        >
          {t('tm.btn_not_client')}
        </Button>
        <Button
          id="tm_client"
          color={'var(--theme_primary_color_blue_4)'}
          bgcolor={
            activeConfig == '2'
              ? 'var(--theme_primary_color_blue_3)'
              : 'transparent'
          }
          border={'var(--theme_primary_color_blue_3)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          onClick={() => {
            setActiveConfig('2');
          }}
        >
          {t('tm.btn_client')}
        </Button>
        {/*<Button*/}
        {/*  color={'var(--theme_primary_color_blue_4)'}*/}
        {/*  bgcolor={'transparent'}*/}
        {/*  border={'var(--theme_primary_color_blue_3)'}*/}
        {/*  hover_border={'var(--theme_primary_color_blue_2)'}*/}
        {/*  hover_bgcolor={'var(--theme_primary_color_blue_2)'}*/}
        {/*  onClick={() => {setActiveConfig('3')}}*/}
        {/*>*/}
        {/* Device*/}
        {/*</Button>*/}
      </div>
      <Slider {...settings} className={styles.mobile_carousell}>
        <div>
          <div className={styles.mobile_carousell_block}>
            <div className={styles.mobile_carousell_tags}>
              {/*<div className={styles.mobile_carousell_tag}>*/}
              {/*  New*/}
              {/*</div>*/}
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF' }}
              >
                {t('tm.tags.budget')}
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              {t('tm.plan_names.start_95')}
            </div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')}</b> <br />
                  {t('tm.min_sms_retea')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>250 {t('tm.min')}</b>
                    <br />
                    {t('tm.nationale')}
                  </span>{' '}
                  +
                  <span>
                    <b>25 {t('tm.min')} </b>
                    <br /> {t('tm.internationale')}
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>25 GB</b> <br /> {t('tm.trafic_internet')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>25 SMS</b> <br /> {t('tm.nationale')}
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div
                className={styles.tm_carousell_block_row_tags}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_tag}>
                  {activeConfig == '1' ? t('tm.35_proc') : ''}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? '95' : '95'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>&nbsp;</span>
                    {/*<span>120  {t('lei_luna')}</span>*/}
                  </div>
                </div>
              </div>
              <Button
                id="tm_start95_order"
                // onClick={() => setShowPopupFunction('aaa')}
                onClick={() =>
                  handleConfigClick(
                    'start 95',
                    activeConfig == '1' ? '95' : '95',
                    ''
                  )
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
        </div>
        <div>
          <div className={styles.mobile_carousell_block}>
            <div className={styles.mobile_carousell_tags}>
              <div className={styles.mobile_carousell_tag}>
                {t('tm.tags.new')}
              </div>
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF' }}
              >
                {t('tm.tags.top_sales')}
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              {t('tm.plan_names.star_120')}
            </div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')}</b> <br />
                  {t('tm.min_sms_retea')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>350 {t('tm.min')}</b>
                    <br />
                    {t('tm.nationale')}
                  </span>{' '}
                  +
                  <span>
                    <b>35 {t('tm.min')} </b>
                    <br /> {t('tm.internationale')}
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>35 GB</b> <br /> {t('tm.trafic_internet')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>35 SMS</b> <br /> {t('tm.nationale')}
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div className={styles.tm_carousell_block_row_tag}>
                  {activeConfig == '1' ? t('tm.35_proc') : t('tm.35_proc')}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div> {activeConfig == '1' ? '78' : '78'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>120 {t('lei_luna')}</span>
                  </div>
                </div>
              </div>
              <Button
                id="tm_star120_order"
                // onClick={() => setShowPopupFunction('aaa')}
                onClick={() =>
                  handleConfigClick(
                    'star 120',
                    activeConfig == '1' ? '78' : '78',
                    t('tm.35_proc')
                  )
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
          {activeConfig == '1' && (
            <img
              className={styles.mobile_carousell_block_test}
              src={`/images/landings/90971083${t('lang')}.webp`}
              alt="Moldtelecom"
            />
          )}
        </div>
        <div>
          <div className={styles.mobile_carousell_block}>
            <div className={styles.mobile_carousell_tags}>
              {/*<div className={styles.mobile_carousell_tag}>*/}
              {/*  New*/}
              {/*</div>*/}
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF', opacity: '0' }}
              >
                {t('tm.tags.roaming')}
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              {t('tm.plan_names.star_150')}
            </div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')}</b> <br />
                  {t('tm.min_sms_retea')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>450 {t('tm.min')}</b>
                    <br />
                    {t('tm.nationale')}
                  </span>{' '}
                  +
                  <span>
                    <b>45 {t('tm.min')} </b>
                    <br /> {t('tm.internationale')}
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>45 GB</b> <br /> {t('tm.trafic_internet')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>45 SMS</b> <br /> {t('tm.nationale')}
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div className={styles.tm_carousell_block_row_tag}>
                  {activeConfig == '1'
                    ? t('tm.35_proc')
                    : `-50 ${t('tm.lei_reducere')}`}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div> {activeConfig == '1' ? '97.5' : '100'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>150 {t('lei_luna')}</span>
                  </div>
                </div>
              </div>
              <Button
                id="tm_star150_order"
                // onClick={() => setShowPopupFunction('aaa')}
                onClick={() =>
                  handleConfigClick(
                    'star 150',
                    activeConfig == '1' ? '97.5' : '100',
                    activeConfig == '1'
                      ? t('tm.35_proc')
                      : `-50 ${t('tm.lei_reducere')}`
                  )
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
          {activeConfig == '1' && (
            <img
              className={styles.mobile_carousell_block_test}
              src={`/images/landings/90971083${t('lang')}.webp`}
              alt="Moldtelecom"
            />
          )}
        </div>
        <div>
          <div className={styles.mobile_carousell_block}>
            <div className={styles.mobile_carousell_tags}>
              {/*<div className={styles.mobile_carousell_tag}>*/}
              {/*  New*/}
              {/*</div>*/}
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF' }}
              >
                {t('tm.tags.roaming')}
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              {t('tm.plan_names.liberty_190')}
            </div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')}</b> <br />
                  {t('tm.min_sms_retea')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>850 {t('tm.min')}</b>
                    <br />
                    {t('tm.nationale')}
                  </span>{' '}
                  +
                  <span>
                    <b>85 {t('tm.min')} </b>
                    <br /> {t('tm.internationale')}
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>85 GB</b> <br /> {t('tm.trafic_internet')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>85 SMS</b> <br /> {t('tm.nationale')}
                </span>
              </div>
              <div
                // ${styles.tm_carousell_block_row_sp}
                className={`${styles.tm_carousell_block_row} 
               
                `}
              >
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'roaming'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>7 GB</b>
                    <br />
                    {t('tm.roaming_eu')}
                  </span>{' '}
                  +
                  <span>
                    <b>850 {t('tm.min')} </b>
                    <br /> {t('tm.roaming_eu')}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div className={styles.tm_carousell_block_row_tag}>
                  {activeConfig == '1'
                    ? t('tm.35_proc')
                    : `-75 ${t('tm.lei_reducere')}`}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? '123.5' : '115'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>190 {t('lei_luna')}</span>
                  </div>
                </div>
              </div>
              <Button
                id="tm_liberty190_order"
                // onClick={() => setShowPopupFunction('aaa')}
                onClick={() =>
                  handleConfigClick(
                    'liberty 190',
                    activeConfig == '1' ? '123.5' : '115',
                    activeConfig == '1'
                      ? t('tm.35_proc')
                      : `-75 ${t('tm.lei_reducere')}`
                  )
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
          {activeConfig == '1' && (
            <img
              className={styles.mobile_carousell_block_test}
              src={`/images/landings/90971083${t('lang')}.webp`}
              alt="Moldtelecom"
            />
          )}
        </div>
        <div>
          <div className={styles.mobile_carousell_block}>
            <div className={styles.mobile_carousell_tags}>
              <div className={styles.mobile_carousell_tag}>
                {t('tm.tags.top')}
              </div>
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF' }}
              >
                {t('tm.tags.roaming')}
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              {t('tm.plan_names.liberty_250_plus')}
            </div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')}</b> <br />
                  {t('tm.min_sms_retea')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>{t('tm.nelimitat')}</b>
                    <br />
                    {t('tm.min_nationale')}
                  </span>{' '}
                  +
                  <span>
                    <b>50 {t('tm.min')} </b>
                    <br /> {t('tm.internationale')}
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')} GB</b> <br /> {t('tm.trafic_internet')}
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>{t('tm.nelimitat')} SMS</b> <br /> {t('tm.nationale')}
                </span>
              </div>
              <div
                // ${styles.tm_carousell_block_row_sp}
                className={`${styles.tm_carousell_block_row} 
               
                `}
              >
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'roaming'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>10 GB</b>
                    <br />
                    {t('tm.roaming_eu')}
                  </span>{' '}
                  +
                  <span>
                    <b>{t('tm.nelimitat')} </b>
                    <br />
                    {t('tm.min_roaming_eu')}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div className={styles.tm_carousell_block_row_tag}>
                  {activeConfig == '1'
                    ? t('tm.35_proc')
                    : `-100 ${t('tm.lei_reducere')}`}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? '162.5' : '150'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>250 {t('lei_luna')}</span>
                  </div>
                </div>
              </div>
              <Button
                id="tm_liberty250plus_order"
                // onClick={() => setShowPopupFunction('aaa')}
                onClick={() =>
                  handleConfigClick(
                    'liberty 250+',
                    activeConfig == '1' ? '162.5' : '150',
                    activeConfig == '1'
                      ? t('tm.35_proc')
                      : `-100 '${t('tm.lei_reducere')}`
                  )
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
        </div>
      </Slider>
      <Details trackPrefix="tm">
        {activeConfig === '1' && (
          <DetailsBlock title={t('tm.details.promo.title')}>
            <ul>
              {promoItems.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </DetailsBlock>
        )}
        <DetailsBlock title={t('tm.details.conditii.title_2')}>
          <ul>
            {(activeConfig === '1' ? cond1 : cond2).map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </DetailsBlock>
        <DetailsBlock title={t('tm.details.conditii.title')}>
          <ul>
            {common.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <b>{t('tm.table.extra_tariff_title')}</b>
          <ScrollableWrapper>
            <table className={`popup_table ${styles.table_popup}`}>
              <thead>
                <th>{t('tm.table.headers.plan')}</th>
                <th>{t('tm.table.headers.call_nat')}</th>
                <th>{t('tm.table.headers.sms_nat')}</th>
                <th>{t('tm.table.headers.sms_int')}</th>
                <th>{t('tm.table.headers.internet')}</th>
              </thead>
              <tbody>
                <tr>
                  <td>{t('tm.plan_names.start_95')}</td>
                  <td>2,00</td>
                  <td>0,50</td>
                  <td>2,00</td>
                  <td>0,20</td>
                </tr>
                <tr>
                  <td>{t('tm.plan_names.star_120')}</td>
                  <td>2,00</td>
                  <td>0,50</td>
                  <td>2,00</td>
                  <td>0,20</td>
                </tr>
                <tr>
                  <td>{t('tm.plan_names.star_150')}</td>
                  <td>2,00</td>
                  <td>0,50</td>
                  <td>2,00</td>
                  <td>0,20</td>
                </tr>
                <tr>
                  <td>{t('tm.plan_names.liberty_190')}</td>
                  <td>2,00</td>
                  <td>0,50</td>
                  <td>2,00</td>
                  <td>0,20</td>
                </tr>
                <tr>
                  <td>{t('tm.plan_names.liberty_plus_250')}</td>
                  <td>2,00</td>
                  <td>0,50</td>
                  <td>2,00</td>
                  <td>
                    0,00<sup>**</sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          {t('tm.table.footnote')}
        </DetailsBlock>

        <DetailsBlock title={t('tm.details.roaming.title')}>
          <ul>
            {roamingItems.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <br />
          <div className={styles.roaming_warning}>
            <div className={`${styles.roaming_warning_red}`}></div>
            <div className={styles.roaming_warning_inside}>
              {t('roaming.warning_1')} <br />
              {t('roaming.warning_2')}
            </div>
          </div>
          <br />
          <b>{t('tm.details.list')}</b>
          <br />
          <br />
          <TableRoaming />
        </DetailsBlock>
        <DetailsBlock title={t('tm.details.warning.title')}>
          <ul>
            {warning1Items.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
            <ul>
              {warning2Items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
            {warning3Items.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
            <ul>
              {warning4Items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
            {warning5Items.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </DetailsBlock>
      </Details>

      <div className={`title_3  ${styles.title2} ${styles.title22}`}>
        {t('combo_home.device_one_leu')}
      </div>

      <div className={`sub_title ${styles.sub_title1}`}>
        {t('combo_home.choose_offer_without_discount')}
      </div>

      <Slider {...settings_devices} className={styles.tm_carousell}>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={727564511}
            image="/images/shop/383535269.webp"
            price={1199}
            old_price={2799}
            reducere="- 600"
            title="OPPO"
            subtitle="A40"
            characteristics='8/256 Gb /5000mAh /6.67"'
            style_type={'gray'}
            show_like={false}
            show_comapre={false}
            buy={() => {
              setPopup('OPPO A40', '+ abonament');
            }}
          />
        </div>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={727564512}
            image="/images/shop/383535265.webp"
            price={2199}
            old_price={3299}
            reducere="- 1100"
            title="OPPO"
            subtitle="A60"
            characteristics='4/128 Gb /5100mAh /6.67"'
            style_type={'gray'}
            show_like={false}
            show_comapre={false}
            buy={() => {
              setPopup('OPPO A60', '+ abonament');
            }}
          />
        </div>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={727564513}
            image="/images/shop/383535262.webp"
            price={3199}
            old_price={4299}
            reducere="- 1100"
            title="OPPO"
            subtitle="A80"
            characteristics="8/256 Gb /5100mAh /50 MP"
            style_type={'gray'}
            show_like={false}
            show_comapre={false}
            buy={() => {
              setPopup('OPPO A80', '+ abonament');
            }}
          />
        </div>
      </Slider>
      <div className={styles.devices_disclailmer}>
        <span>
          {' '}
          <sup>*</sup>
          {t('combo_home.stock_offer')}
        </span>
      </div>

      <div className={styles.conversion}>
       <div className={styles.conversion_text}>
        <div>
          <div className={styles.conversion_title}>
            Totul <br/>
            Internet + TV + Mobil
          </div>
          <div>
            La un preț beton!
          </div>
        </div>
         <Button
           to={`https://www.moldtelecom.md/${t('lang')}/personal/Promo_Abonamente-TV-Internet-Mobil`}
           color={'var(--theme_primary_color_blue_4)'}
           bgcolor={'var(--theme_primary_color_blue_2)'}
           border={'var(--theme_primary_color_blue_2)'}
           hover_border={'var(--theme_primary_color_blue_4)'}
           hover_bgcolor={'var(--theme_primary_color_blue_4)'}
           hover_color={"#fff"}
           icon={'arrow_right'}
         >
           Vezi mai multe
         </Button>
       </div>
        <img className={styles.conversion_img} src="/images/landings/55271183.webp" alt="Moldtelecom" />
      </div>
      <Functions
        style_type={'blue'}
        title={'general.recommended_options'}
        functions={['Internet', 'Minute', 'International', 'RoamingUE']}
      />
      <div className={`title_3  ${styles.title2} ${styles.title222}`}>
        {t('tm.discover.title')}
      </div>
      <Slider {...settings_discover} className={styles.tm_carousell_discover}>
        <div className={styles.tm_discover_inside}>
          <div className={styles.tm_discover_card}>
            <img
              className={styles.tm_discover_img}
              src={`/images/landings/18100123${t('lang')}.webp`}
              alt="Moldtelecom"
            />
            <div className={styles.tm_discover_card_inside}>
              <div className={styles.tm_discover_card_inside_top}>
                <div className={styles.tm_discover_card_inside_top_tag}>
                  {t('tm.discover.card_1.tag')}
                </div>
                <div className={styles.tm_discover_card_title}>
                  {t('tm.discover.card_1.title')}
                </div>
                <div
                  className={styles.tm_discover_card_text}
                  dangerouslySetInnerHTML={{
                    __html: t('tm.discover.card_1.text'),
                  }}
                />
              </div>
              <Button
                onClick={() => setActivePopup('1084567')}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                {t('tm.discover.btn')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.tm_discover_inside}>
          <div className={styles.tm_discover_card}>
            <img
              className={styles.tm_discover_img}
              src={`/images/landings/18100122${t('lang')}.webp`}
              alt="Moldtelecom"
            />
            <div className={styles.tm_discover_card_inside}>
              <div className={styles.tm_discover_card_inside_top}>
                <div className={styles.tm_discover_card_inside_top_tag}>
                  {t('tm.discover.card_2.tag')}
                </div>
                <div className={styles.tm_discover_card_title}>
                  {t('tm.discover.card_2.title')}
                </div>
                <div
                  className={styles.tm_discover_card_text}
                  dangerouslySetInnerHTML={{
                    __html: t('tm.discover.card_2.text'),
                  }}
                />
              </div>
              <Button
                to={`https://www.moldtelecom.md/${t('lang')}/personal/moldtelecom_tv`}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                {t('tm.discover.btn')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.tm_discover_inside}>
          <div className={styles.tm_discover_card}>
            <img
              className={styles.tm_discover_img}
              src={`/images/landings/18100124${t('lang')}.webp`}
              alt="Moldtelecom"
            />
            <div className={styles.tm_discover_card_inside}>
              <div className={styles.tm_discover_card_inside_top}>
                <div className={styles.tm_discover_card_inside_top_tag}>
                  {t('tm.discover.card_3.tag')}
                </div>
                <div className={styles.tm_discover_card_title}>
                  {t('tm.discover.card_3.title')}
                </div>
                <div
                  className={styles.tm_discover_card_text}
                  dangerouslySetInnerHTML={{
                    __html: t('tm.discover.card_3.text'),
                  }}
                />
              </div>
              <Button
                to={`https://www.moldtelecom.md/${t('lang')}/personal/cinema`}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                {t('tm.discover.btn')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.tm_discover_inside}>
          <div className={styles.tm_discover_card}>
            <img
              className={styles.tm_discover_img}
              src={`/images/landings/18100125${t('lang')}.webp`}
              alt="Moldtelecom"
            />
            <div className={styles.tm_discover_card_inside}>
              <div className={styles.tm_discover_card_inside_top}>
                <div className={styles.tm_discover_card_inside_top_tag}>
                  {t('tm.discover.card_4.tag')}
                </div>
                <div className={styles.tm_discover_card_title}>
                  {t('tm.discover.card_4.title')}
                </div>
                <div className={styles.tm_discover_card_text}>
                  {t('tm.discover.card_4.text')}
                </div>
              </div>
              <Button
                to={`https://www.moldtelecom.md/${t('lang')}/personal/one_number`}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                {t('tm.discover.btn')}
              </Button>
            </div>
          </div>
        </div>
      </Slider>

      <MyApp style_type={'blue_white'} className={styles.myapp} />

      <FaqV2 max_faq={6}>
        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489310"
          question={t('tm.faq.112489310.question')}
        >
          {t('tm.faq.112489310.answer')}
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489311"
          question={t('tm.faq.112489311.question')}
        >
          {t('tm.faq.112489311.answer')}
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489312"
          question={t('tm.faq.112489312.question')}
        >
          {t('tm.faq.112489312.answer')}
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489313"
          question={t('tm.faq.112489313.question')}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: t('tm.faq.112489313.answer'),
            }}
          />
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489314"
          question={t('tm.faq.112489314.question')}
        >
          {t('tm.faq.112489314.answer')}
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489315"
          question={t('tm.faq.112489315.question')}
        >
          {t('tm.faq.112489315.answer')}
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489316"
          question={t('tm.faq.112489316.question')}
        >
          {t('tm.faq.112489316.answer')}
        </FaqQAV2>

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489317"
          question={t('tm.faq.112489317.question')}
        >
          {t('tm.faq.112489317.answer')}
        </FaqQAV2>

        {/*<FaqQAV2 id_faq="112489318" question={t('tm.faq.112489318.question')}>*/}
        {/*  {t('tm.faq.112489318.answer')}*/}
        {/*</FaqQAV2>*/}

        <FaqQAV2
          trackPrefix="tm"
          id_faq="112489319"
          question={t('tm.faq.112489319.question')}
        >
          {t('tm.faq.112489319.answer')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />

      <Popup
        id="1084567"
        width="1000px"
        isVisible={activePopup === '1084567'}
        onClose={handlePopupClose}
        // key={activePopup ?? 'popup-closed'}
        key="popup-1084567"
      >
        <ul>
          <li>{t('tm.discover.card_1.l0')}</li>
          <li>{t('tm.discover.card_1.l1')}</li>
          <li>{t('tm.discover.card_1.l2')}</li>
          <li>{t('tm.discover.card_1.l3')}</li>
          <li>{t('tm.discover.card_1.l4')}</li>
        </ul>
      </Popup>
      <Popup
        id="1280520"
        width="1000px"
        isVisible={activePopup === '1280520'}
        onClose={handlePopupClose}
        className={styles.popupBuy}
        // key={activePopup ?? 'popup-closed'}
        key="popup-1280520"
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
            <span>
              {t('tm.popup.error1')} <br />
              {t('tm.popup.error2')}
            </span>
          </div>
        ) : submitted ? (
          <div className={styles.buy_popup_success}>
            <Icon
              type={'tick'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span>
              {t('tm.popup.success1')} <br />
              {t('tm.popup.success2')}
            </span>
          </div>
        ) : (
          <div className={styles.buy_popup}>
            <div className={styles.buy_popup_img_div}>
              {' '}
              <img
                className={styles.buy_popup_img}
                src="/images/landings/22271083.webp"
                alt="Moldtelecom"
              />
            </div>
            <div className={styles.popupBuy_left}>
              <div>{t('tm.popup.chosen')}</div>
              <div className={styles.selected_popup_subcription}>
                <div className={styles.popup_selected}>{activePopupConfig}</div>

                {activeReducereConfig != '' && (
                  <div className={styles.tm_carousell_block_row_tag}>
                    {activeReducereConfig}
                  </div>
                )}
              </div>

              <div className={styles.popup_optional}>
                {t('tm.popup.optional')}
              </div>
              <div className={styles.popup_optional_block}>
                <div className={styles.popup_sim_block}>
                  <div
                    className={`
          ${styles.popup_sim} 
          ${styles.popup_sim_1} 
          ${selected === 'sim' ? styles.popup_sim_active : ''}
        `}
                    onClick={() => handleClick('sim')}
                  >
                    SIM
                  </div>
                  <div
                    className={`
          ${styles.popup_sim} 
          ${styles.popup_sim_2} 
          ${selected === 'esim' ? styles.popup_sim_active : ''}
        `}
                    onClick={() => handleClick('esim')}
                  >
                    eSIM
                  </div>
                </div>
                {activeConfig == '1' && (
                  <div className={styles.popup_option}>
                    <Toggle
                      checked={testGratis}
                      onChange={() => {
                        setTestGratis(prev => !prev);
                        trackEvent('tm_test_gratis_toggle');
                      }}
                    />
                    <span>
                      {' '}
                      {t('tm.popup.test_prefix')}{' '}
                      <b>{t('tm.popup.test_bold')}</b>
                    </span>
                  </div>
                )}
              </div>
              <BuyForm
                config={`TM - ${activeConfig === '1' ? 'nu sunt client' : 'sunt client'}, tip sim - ${selected}, ${activeConfig === '1' ? `testează - ${testGratis}` : ''}, pachet selectat - ${activePopupConfig} , pret - ${activePriceConfig}`}
                tag={'tm'}
                service={'campain[tm_2025_b2s], place[abonament]'}
                onSuccess={() => {
                  setSubmitted(true);
                  setError(false);
                }}
                onError={() => {
                  setError(true);
                }}
              />
              <div className={styles.popup_discalmer}>
                {t('tm.popup.disclaimer1')} <br />
                {t('tm.popup.disclaimer2')} | {t('tm.popup.disclaimer3')}
              </div>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        id="1934567"
        width="550px"
        isVisible={activePopup === '1934567'}
        onClose={handlePopupClose}
        className={styles.popupBuy_device}
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
          <div className={styles.buy_popup_2}>
            <div>{t('double.device_chosen')}</div>
            <div className={styles.selected_popup_subcription}>
              <div className={styles.popup_selected}>
                {activePopupConfig}&nbsp;<span>{activePopupSubConfig}</span>
              </div>
            </div>

            <BuyForm
              config={activeBuyConfig}
              tag={'tm'}
              service={'campain[tm_2025_b2s], place[abonament]'}
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
