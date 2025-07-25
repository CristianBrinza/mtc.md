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

export default function Mobile() {
  const { t } = useTranslation();
  const [testGratis, setTestGratis] = useState(false);
  const seo = {
    title: t('pages.tm.title'),
    description: t('pages.tm.description'),
    keywords: t('pages.tm.keywords'),
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
    // console.log(type);
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
          onClick={() =>
            goToPage(`https://www.moldtelecom.md/${t('lang')}/personal/Portare`)
          }
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
          onClick={() =>
            goToPage(
              `https://www.moldtelecom.md/${t('lang')}/personal/prepay-cartela`
            )
          }
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
                Budget
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>Start 95</div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
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
                    <b>250 min</b>
                    <br />
                    naționale
                  </span>{' '}
                  +
                  <span>
                    <b>25 min </b>
                    <br /> internaționale
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
                  <b>25 GB</b> <br /> Trafic internet
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
                  <b>25 SMS</b> <br /> naționale
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
              <div className={styles.mobile_carousell_tag}>New</div>
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF' }}
              >
                Top Sales
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>Star 120</div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
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
                    <b>350 min</b>
                    <br />
                    naționale
                  </span>{' '}
                  +
                  <span>
                    <b>35 min </b>
                    <br /> internaționale
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
                  <b>35 GB</b> <br /> Trafic internet
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
                  <b>35 SMS</b> <br /> naționale
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
                Roaming
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>Star 150</div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
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
                    <b>450 min</b>
                    <br />
                    naționale
                  </span>{' '}
                  +
                  <span>
                    <b>45 min </b>
                    <br /> internaționale
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
                  <b>45 GB</b> <br /> Trafic internet
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
                  <b>45 SMS</b> <br /> naționale
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
                Roaming
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>Liberty 190</div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
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
                    <b>850 min</b>
                    <br />
                    naționale
                  </span>{' '}
                  +
                  <span>
                    <b>85 min </b>
                    <br /> internaționale
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
                  <b>85 GB</b> <br /> Trafic internet
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
                  <b>85 SMS</b> <br /> naționale
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
                    Roaming EU
                  </span>{' '}
                  +
                  <span>
                    <b>850 min </b>
                    <br /> Roaming EU
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
              <div className={styles.mobile_carousell_tag}>Top</div>
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF' }}
              >
                Roaming
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>Liberty 250+</div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
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
                    <b>Nelimitat</b>
                    <br />
                    min naționale
                  </span>{' '}
                  +
                  <span>
                    <b>50 min </b>
                    <br /> internaționale
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
                  <b>Nelimitat GB</b> <br /> Trafic internet
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
                  <b>Nelimitat SMS</b> <br /> naționale
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
                    Roaming EU
                  </span>{' '}
                  +
                  <span>
                    <b>Nelimitat </b>
                    <br />
                    min Roaming EU
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
      <Details>
        <DetailsBlock title={t('tm.details.promo.title')}>
          <ul>
            {promoItems.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </DetailsBlock>

        <DetailsBlock title={t('tm.details.conditii.title')}>
          <ul>
            {(activeConfig === '1' ? cond1 : cond2).map((text, i) => (
              <li key={i}>{text}</li>
            ))}
            {common.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
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
          </ul>

          {t('tm.details.warning.warning_dis')}
        </DetailsBlock>
      </Details>

      <Functions
        style_type={'blue'}
        title={'general.recommended_options'}
        functions={['Internet', 'Minute', 'International', 'RoamingUE']}
      />
      <MyApp style_type={'blue_white'} className={styles.myapp} />

      <FaqV2 max_faq={6}>
        <FaqQAV2 id_faq="112489310" question={t('tm.faq.112489310.question')}>
          {t('tm.faq.112489310.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489311" question={t('tm.faq.112489311.question')}>
          {t('tm.faq.112489311.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489312" question={t('tm.faq.112489312.question')}>
          {t('tm.faq.112489312.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489313" question={t('tm.faq.112489313.question')}>
          <span
            dangerouslySetInnerHTML={{
              __html: t('tm.faq.112489313.answer'),
            }}
          />
        </FaqQAV2>

        <FaqQAV2 id_faq="112489314" question={t('tm.faq.112489314.question')}>
          {t('tm.faq.112489314.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489315" question={t('tm.faq.112489315.question')}>
          {t('tm.faq.112489315.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489316" question={t('tm.faq.112489316.question')}>
          {t('tm.faq.112489316.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489317" question={t('tm.faq.112489317.question')}>
          {t('tm.faq.112489317.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489318" question={t('tm.faq.112489318.question')}>
          {t('tm.faq.112489318.answer')}
        </FaqQAV2>

        <FaqQAV2 id_faq="112489319" question={t('tm.faq.112489319.question')}>
          {t('tm.faq.112489319.answer')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />
      <Popup
        id="1280520"
        width="1000px"
        isVisible={activePopup === '1280520'}
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
            <span>
              A apărut o eroare la trimiterea cererii. <br />
              Te rugăm să încerci din nou.
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
              Solicitarea ta a fost trimisă cu succes! <br />
              Un consultant Moldtelecom te va contacta în curând.
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
              <div>Abonamentul ales:</div>
              <div className={styles.selected_popup_subcription}>
                <div className={styles.popup_selected}>{activePopupConfig}</div>

                {activeReducereConfig != '' && (
                  <div className={styles.tm_carousell_block_row_tag}>
                    {activeReducereConfig}
                  </div>
                )}
              </div>

              <div className={styles.popup_optional}>Optional:</div>
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
                <div className={styles.popup_option}>
                  <Toggle
                    checked={testGratis}
                    onChange={() => setTestGratis(prev => !prev)}
                  />
                  <span>
                    {' '}
                    Testeaza o lună <b>GRATUIT</b>
                  </span>
                </div>
              </div>

              <BuyForm
                config={`TM - ${activeConfig === '1' ? 'nu sunt client' : 'sunt client'}, tip sim - ${selected}, testează - ${testGratis}, pachet selectat - ${activePopupConfig} , pret - ${activePriceConfig}, lang - ${t('lang')}`}
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
                După expedierea solicitării vei fi apelat de un consultant
                Moldtelecom. Mulțumim! <br />
                Solicitările parvenite duminică, vor fi procesate luni. |
                Câmpurile marcate cu * sunt obligatorii.
              </div>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
