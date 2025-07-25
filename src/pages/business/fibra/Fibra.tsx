import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './Fibra.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import SEO from '../../../components/SEO';
import NavbarBusiness from '../../../components/navbar/NavbarBusiness.tsx';

import Button from '../../../components/Button.tsx';
import Icon from '../../../components/Icon.tsx';
import Slider from 'react-slick';
import MyApp from '../../../components/app/MyApp.tsx';
import FaqQAV2 from '../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../components/faqV2/FaqV2.tsx';
import Popup from '../../../components/Popup/Popup.tsx';
import { useState } from 'react';

export default function Fibra() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.bussines_fibra.title'),
    description: t('pages.bussines_fibra.description'),
    keywords: t('pages.bussines_gps.keywords'),
  };
  const breadcrumbItems = [
    {
      label: t('bussines_fibra.breadcrumb.internet'),
      url: 'https://www.moldtelecom.md/ro/business',
    },
    { label: t('bussines_fibra.breadcrumb.fibra') },
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
            src={`/images/landings/88688012${t('lang')}.webp`}
            alt={t('bussines_gps.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/14774012${t('lang')}.webp`}
            alt={t('bussines_gps.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title title_3 ${styles.b2b_fibra_title}`}>
        Abonamente internet Fibră
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
                Costume
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              Max Fiber <br />
              <span className={styles.mobile_carousell_subtitle}>
                Personalizat
              </span>
            </div>

            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>--- GB</b> <br /> Trafic internet
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'speed'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>--- Mbps</b> <br />
                  Upload & Downlaod
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'national'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>--- Mbps</b> <br />
                  Resurse nationale
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div
                className={styles.tm_carousell_block_row_tags}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_tag}>
                  t('tm.35_proc')
                </div>
              </div>
              <div
                className={styles.mobile_carousell_price}
                style={{ opacity: '0' }}
              >
                <div>300</div>
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
                onClick={() => setShowPopupFunction('aaa')}
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
            <div className={styles.mobile_carousell_title}>
              Max Fiber <br />
              <span className={styles.mobile_carousell_subtitle}>
                Business 300
              </span>
            </div>

            <div className={styles.tm_carousell_block_rows}>
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
                    type={'speed'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>20 Mbps</b> <br />
                  Upload & Downlaod
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'national'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>50 Mbps</b> <br />
                  Resurse nationale
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div
                className={styles.tm_carousell_block_row_tags}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_tag}>
                  t('tm.35_proc')
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>300</div>
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
                onClick={() => setShowPopupFunction('aaa')}
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
              {/*<div className={styles.mobile_carousell_tag}>*/}
              {/*  New*/}
              {/*</div>*/}
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF', opacity: '0' }}
              >
                Budget
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              Max Fiber <br />
              <span className={styles.mobile_carousell_subtitle}>
                Business 450
              </span>
            </div>

            <div className={styles.tm_carousell_block_rows}>
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
                    type={'speed'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>30 Mbps</b> <br />
                  Upload & Downlaod
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'national'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>50 Mbps</b> <br />
                  Resurse nationale
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div
                className={styles.tm_carousell_block_row_tags}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_tag}>
                  t('tm.35_proc')
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>450</div>
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
                onClick={() => setShowPopupFunction('aaa')}
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
              {/*<div className={styles.mobile_carousell_tag}>*/}
              {/*  New*/}
              {/*</div>*/}
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF', opacity: '0' }}
              >
                Budget
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              Max Fiber <br />
              <span className={styles.mobile_carousell_subtitle}>
                Business 600
              </span>
            </div>

            <div className={styles.tm_carousell_block_rows}>
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
                    type={'speed'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>40 Mbps</b> <br />
                  Upload & Downlaod
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'national'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>100 Mbps</b> <br />
                  Resurse nationale
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div
                className={styles.tm_carousell_block_row_tags}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_tag}>
                  t('tm.35_proc')
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>600</div>
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
                onClick={() => setShowPopupFunction('aaa')}
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
              {/*<div className={styles.mobile_carousell_tag}>*/}
              {/*  New*/}
              {/*</div>*/}
              <div
                className={styles.mobile_carousell_tag}
                style={{ background: '#E7EBFF', opacity: '0' }}
              >
                Top
              </div>
            </div>
            <div className={styles.mobile_carousell_title}>
              Max Fiber <br />
              <span className={styles.mobile_carousell_subtitle}>
                Business 900
              </span>
            </div>

            <div className={styles.tm_carousell_block_rows}>
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
                    type={'speed'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>50 Mbps</b> <br />
                  Upload & Downlaod
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'national'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  <b>100 Mbps</b> <br />
                  Resurse nationale
                </span>
              </div>
            </div>
            <div className={styles.wifi_carousell_block_inside_btns}>
              <div
                className={styles.tm_carousell_block_row_tags}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_tag}>
                  t('tm.35_proc')
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>900</div>
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
                onClick={() => setShowPopupFunction('aaa')}
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

      <MyApp style_type={'blue_white'} className={styles.myapp} />

      <FaqV2 max_faq={6}>
        <FaqQAV2 id_faq="117489310" question={'faq'}>
          test
        </FaqQAV2>
      </FaqV2>
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
          Pentru că în afaceri, viteza nu este o opțiune ci o necesitate, noi o
          garantăm!
          <div className={styles.popup_btns}>
            <Button
              to={'tel:11855'}
              color="var(--theme_primary_color_white)"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              icon="arrow_right"
            >
              11855
            </Button>
            <Button
              to={'tel:022570707'}
              color="var(--theme_primary_color_white)"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              icon="arrow_right"
            >
              0(22) 570-707
            </Button>
          </div>
          <div className={styles.popup_discalmer}>
            {t('bussines_gps.disclaimer')}
          </div>
        </div>
      </Popup>
    </>
  );
}
