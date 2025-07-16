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

export default function Mobile() {
  const { t } = useTranslation();
  const [testGratis, setTestGratis] = useState(false);
  const seo = {
    title: t('pages.mobile.title'),
    description: t('pages.mobile.description'),
    keywords: t('pages.mobile.keywords'),
  };
  const breadcrumbItems = [
    { label: 'Promo', url: ' ' },
    { label: 'Telefonie mobila' },
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
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/81074012${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
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
            Abonament
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
            Portare
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
            Prepay
          </div>
          <div className={styles.select_type_card_bottom}></div>
        </div>
      </div>

      <div className={`title title_5 ${styles.title2}`}>
        Alege abonamentul care ți se potrivește cel mai bine
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
          Nu sunt client
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
          Sunt client
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
                  {activeConfig == '1' ? '35% reducere pentru 2 ani' : ''}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? '95' : '95'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    lei/lună
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>&nbsp;</span>
                    {/*<span>120 lei/lună</span>*/}
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
                Comandă acum
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
                  {activeConfig == '1'
                    ? '35% reducere pentru 2 ani'
                    : '35% reducere pentru 2 ani'}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div> {activeConfig == '1' ? '78' : '78'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    lei/lună
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>120 lei/lună</span>
                  </div>
                </div>
              </div>
              <Button
                // onClick={() => setShowPopupFunction('aaa')}
                onClick={() =>
                  handleConfigClick(
                    'star 120',
                    activeConfig == '1' ? '78' : '78',
                    '35% reducere pentru 2 ani'
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
                Comandă acum
              </Button>
            </div>
          </div>
          {activeConfig == '1' && (
            <img
              className={styles.mobile_carousell_block_test}
              src="/images/landings/90971083.webp"
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
                    ? '35% reducere pentru 2 ani'
                    : '-50 lei reducere'}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div> {activeConfig == '1' ? '97.5' : '100'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    lei/lună
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>150 lei/lună</span>
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
                      ? '35% reducere pentru 2 ani'
                      : '-50 lei reducere'
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
                Comandă acum
              </Button>
            </div>
          </div>
          {activeConfig == '1' && (
            <img
              className={styles.mobile_carousell_block_test}
              src="/images/landings/90971083.webp"
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
                    ? '35% reducere pentru 2 ani'
                    : '-75 lei reducere'}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? '123.5' : '115'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    lei/lună
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>190 lei/lună</span>
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
                      ? '35% reducere pentru 2 ani'
                      : '-75 lei reducere'
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
                Comandă acum
              </Button>
            </div>
          </div>
          {activeConfig == '1' && (
            <img
              className={styles.mobile_carousell_block_test}
              src="/images/landings/90971083.webp"
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
                    ? '35% reducere pentru 2 ani'
                    : '-100 lei reducere'}
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>{activeConfig == '1' ? '162.5' : '150'}</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    lei/lună
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>250 lei/lună</span>
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
                      ? '35% reducere pentru 2 ani'
                      : '-100 lei reducere'
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
                Comandă acum
              </Button>
            </div>
          </div>
        </div>
      </Slider>
      <Details>
        <DetailsBlock title={'Promoția „Testează gratuit”'}>
          <ul>
            <li>
              Promoția „Testează gratuit” oferă o reducere de 100% la costul
              abonamentului pentru o perioadă de testare de până la 30 de zile.
            </li>
            <li>
              După perioada de testare, clienții beneficiază de o reducere de
              35% la abonament, până la finalizarea perioadei minime
              contractuale. Perioada minimă contractuală este de 24 de luni,
              inclusiv luna de testare.
            </li>
            <li>
              Oferta este disponibilă exclusiv pentru abonații noi și abonații
              care portează numărul la unul din abonamentele Star 120, Star 150
              și Liberty 190
            </li>
            <li>Promoția este valabilă între 02.05.2025 și 31.07.2025.</li>
          </ul>
        </DetailsBlock>
        <DetailsBlock title={'Condiții de utilizare Abonamente'}>
          <ul>
            {activeConfig == '1' ? (
              <>
                <li>
                  Oferta promoțională constă în acordarea unei reduceri de 35%
                  la plata lunară a abonamentelor Star 120, Star 150,
                  Liberty 190 și Liberty Plus 250, valabilă pe întreaga perioadă
                  contractuală de 24 luni.
                </li>
                <li>
                  Perioada minimă contractuală pentru abonamentul Start 95 este
                  de 6 luni.
                </li>
                <li>
                  Oferta este destinată pentru clienții noi (conectare, portare
                  din altă rețea) sau pentru cei existenți, la reperfectarea
                  contractului sau migrarea de la PrePay.
                </li>
              </>
            ) : (
              <>
                <li>
                  Oferta promo presupune acordarea unei reduceri 50 lei
                  (abonament Star 150), 75 lei (abonament Liberty 190) sau 100
                  lei (abonament Liberty Plus 250) reducere la plata lunară de
                  abonament (în dependență de abonament), în combinație cu
                  serviciul de Internet Fix sau Internet Fix+IPTV și se oferă pe
                  toată durata contractuală la conectarea/deținerea unei linii
                  de Internet Fix sau Internet Fix+IPTV.
                </li>
                <li>
                  {' '}
                  La promoție pot participa abonați toți abonații noi, abonații
                  portați, abonații existenți de telefonie mobilă cu perioada
                  contractuală promoțională expirată și utilizatorii PrePay,
                  care migrează spre abonament.
                </li>
                <li>
                  {' '}
                  Perioada de comercializare a ofertei: 03.03.205 – 25.08.2025
                  (inclusiv)
                </li>
              </>
            )}

            <li>
              Oferta promo include și posibilitatea de a beneficia gratuit de
              serviciul „Alege Număr Frumos”. Oferirea gratuită a serviciului
              „Alege Număr Frumos” este disponibilă pentru categoria „Aur” sau
              „Argint”.
            </li>
            <li>
              Perioada de comercializare a ofertei: 03.03.205 – 25.08.2025
              (inclusiv).
            </li>
            <li>
              Abonații conectați la abonamentele Liberty 190 și Liberty Plus 250
              pot comunica în Roaming UE+SEE din contul minutelor naționale
              incluse în abonament. In plus, abonamentul Liberty 190 oferă 7 GB,
              iar abonamentul Liberty Plus 250 – 10 GB disponibili spre
              utilizare în Roaming în rețeaua operatorilor incluși în grupul
              UE+SEE.
            </li>
            <li>
              Pentru apelurile internaționale, destinațiile spre rețeaua fixă și
              mobilă sunt următoarele țări: Marea Britanie, Franța, Germania,
              Italia, Spania, Romania, Israel, Rusia, Cehia, Ucraina.
            </li>
            <li>
              Abonații conectați la abonamentul ”Liberty Plus 250” sunt obligați
              să evite folosirea abuzivă a serviciilor incluse în abonament.
              Prin ”folosire abuzivă a serviciilor incluse în abonament” se
              înțelege efectuarea de apeluri de ieșire spre „alți operatori
              naționali” și/sau expedierea SMS-urilor spre „alți operatori
              naționali” către mai mult de 200 numere telefonice unice, în
              decursul unei perioade de facturare, și/sau efectuarea, în
              decursul unei perioade de facturare, de apeluri nelimitate spre
              „alți operatori naționali” în volum ce depășește 3000 minute, cu
              condiția că numărul de minute de ieșire spre „alți operatori
              naționali” depășește de cel puțin două ori numărul minutelor de
              intrare dinspre „alți operatori naționali” în aceeași perioadă.
              Abonații care vor fi identificați că au utilizat abuziv serviciile
              incluse în abonamentul ”Liberty Plus 250” vor beneficia în
              continuare de conținutul standard de 1000 Minute și 245 SMS
              naționale la abonamentul respectiv;
            </li>
            <li>
              Viteza la internet se oferă în funcție de posibilitățile tehnice.
            </li>
            <li>
              Traficul Internet va avea viteza de transfer a datelor la
              capacitate maximă download (descarcare) și de până la 512 Kbps
              upload (încarcare), în dependenta de opțiunile suplimentare
              activate – pentru tehnologia 3G, și la capacitate maximă
              download/upload (descarcare/încarcare) – pentru tehnologia 4G.
            </li>
            <li>
              Rezoluțiunea anticipată (inclusiv migrarea spre PrePay, schimbul
              de abonament către unul cu valoare mai mica sau port out) până la
              expirarea perioadei minime contractuale implică achitarea unei
              plăți cu titlu de prejudiciu, conform formulei de calcul: 35% din
              plata de abonament * nr. de luni acordare reducere.
            </li>
          </ul>
        </DetailsBlock>
        <DetailsBlock title={'Condiții speciale serviciului „Roaming Europa”'}>
          <ul>
            <li>
              Tarifarea apelurilor se efectuează per minut din prima secunda de
              apel;
            </li>
            <li>
              Viteza de acces la internet este conform condițiilor de prestare a
              serviciului în vigoare de către operator și în funcție de
              terminalul utilizat;
            </li>
            <li>
              Tarifarea traficului Internet consumat se efectuează din momentul
              începerii sesiunii per 10 KByte (1MB=1024 KB);
            </li>
            <li>
              După consumarea conținutului în Roaming UE, convorbirile și
              traficul internet vor fi taxate conform tarifelor standard în
              Roaming pentru fiecare operator;
            </li>
            <li>
              Abonatul va utiliza conținutul în Roaming UE+SEE cu condiția că va
              avea activ serviciul Roaming;
            </li>
            <li>
              Abonații conectați la abonamentele ”Liberty 190” și ”Liberty Plus
              250” sunt obligați să evite folosirea abuzivă a serviciilor
              Roaming UE+SEE incluse în abonament. Pentru a analiza ”folosirea
              abuzivă a serviciilor Roaming UE+SEE incluse în abonament” se va
              monitoriza, în mod cumulat, pe parcursul a fiecăror patru luni
              consecutive din momentul conectării dacă consumul oricărui
              serviciu în Roaming în Europa este mai mare decât consumul
              respectivului serviciu la nivel naţional;
            </li>
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
          <b>
            Lista operatorilor în rețeaua cărora este disponibil conținutul
            Roaming UE:
          </b>
          <br />
          <TableRoaming />
        </DetailsBlock>
      </Details>

      <Functions
        style_type={'blue'}
        title={'general.recommended_options'}
        functions={['Internet', 'Minute', 'International', 'RoamingUE']}
      />
      <MyApp style_type={'blue_white'} className={styles.myapp} />

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
            <img
              className={styles.buy_popup_img}
              src="/images/landings/22271083.webp"
              alt="Moldtelecom"
            />
            <div>
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
                config={`TM - ${activeConfig === '1' ? 'nu sunt client' : 'sunt client'}, tip - ${selected}, testează- ${testGratis}, pachet selectat- ${activePopupConfig} , pret- ${activePriceConfig}`}
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
