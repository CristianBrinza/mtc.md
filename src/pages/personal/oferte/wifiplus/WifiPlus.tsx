// src/pages/WifiPlus/WifiPlus.tsx
import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './WifiPlus.module.css';
import Footer from '../../../../components/footer/Footer.tsx';
import CostumeFunctions from '../../../../components/functions/CostumeFunctions.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import Slider from 'react-slick';
import Button from '../../../../components/Button.tsx';
import React, { useState } from 'react';
import { t } from 'i18next';
import Popup from '../../../../components/Popup/Popup.tsx';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';

const ArrowIcon: React.FC<{ rotated?: boolean }> = ({ rotated = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={rotated ? styles.rotated : ''}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8.5L12 17.5L21 8.5"
      stroke="#B7B7B7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WifiPlus() {
  const breadcrumbItems = [
    { label: t('wifi_plus.breadcrumb.internet'), url: ' ' },
    { label: t('wifi_plus.breadcrumb.wifi_plus') },
  ];

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const closePopup = (packet:string) => {
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
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
        },
      },
    ],
  };

  const [openBlocks, setOpenBlocks] = useState<boolean[]>([]);

  const toggleBlock = (index: number) => {
    setOpenBlocks(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
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
            src={`/images/landings/15274512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/90296512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <CostumeFunctions
        style_type="blue"
        costume={[
          {
            id: 'custom0',
            icon: 'devices',
            title: t('wifi_plus.functions.multi_device.title'),
            text: t('wifi_plus.functions.multi_device.text'),
            popupId: 'customPopup1',
          },
          {
            id: 'custom1',
            icon: 'home',
            title: t('wifi_plus.functions.extended_coverage.title'),
            text: t('wifi_plus.functions.extended_coverage.text'),
            popupId: 'customPopup1',
          },
          {
            id: 'custom2',
            icon: 'speed',
            title: t('wifi_plus.functions.super_speeds.title'),
            text: t('wifi_plus.functions.super_speeds.text'),
            popupId: 'customPopup1',
          },
          {
            id: 'custom3',
            icon: 'support',
            title: t('wifi_plus.functions.constant_support.title'),
            text: t('wifi_plus.functions.constant_support.text'),
            popupId: 'customPopup1',
          },
          {
            id: 'custom4',
            icon: 'ai',
            title: t('wifi_plus.functions.total_flexibility.title'),
            text: t('wifi_plus.functions.total_flexibility.text'),
            popupId: 'customPopup1',
          },
        ]}
      />

      <div className={styles.wifi_plus_full_block}>
        <div className={styles.wifi_plus_full_block_inside}>
          <div className="title_3">{t('wifi_plus.fill_house')}</div>
          <Slider {...settings} className={styles.wifi_carousell}>
            {/* Router 0 */}
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <img
                  className={styles.wifi_carousell_block_inside_img}
                  src="/images/landings/92204512.png"
                  alt=""
                />
                <div className={styles.wifi_carousell_block_inside_title}>
                  {/*{t('wifi_plus.carousel.routers.0.title')}*/}
                  D-Link <br/>
                  DIR-615
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  {t('wifi_plus.carousel.routers.0.desc')}
                </div>
                <img
                  className={styles.wifi_carousell_block_inside_certified}
                  src="/images/landings/90294512.png"
                  alt=""
                />
                <div className={styles.wifi_carousell_block_inside_btns}>
                  <Button
                    onClick={() => setShowPopupFunction( 'aaa')}
                    color="var(--theme_primary_color_blue_4)"
                    bgcolor="var(--theme_primary_color_blue_3)"
                    border="var(--theme_primary_color_blue_3)"
                    hover_border="var(--theme_primary_color_blue_2)"
                    hover_bgcolor="var(--theme_primary_color_blue_2)"
                    icon="arrow_right"
                  >
                    {t('wifi_plus.carousel.order_now')}
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    {t('wifi_plus.carousel.routers.0.price')}
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {` ${t('wifi_plus.carousel.price_unit')}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* Router 1 */}
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <img
                  className={styles.wifi_carousell_block_inside_img}
                  src="/images/landings/95204512.png"
                  alt=""
                />
                <div className={styles.wifi_carousell_block_inside_title}>
                  {/*{t('wifi_plus.carousel.routers.1.title')}*/}
                  HUAWEI <br/>
                  OptiXstar K562e-10"
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  {t('wifi_plus.carousel.routers.1.desc')}
                </div>
                <img
                  className={styles.wifi_carousell_block_inside_certified}
                  src="/images/landings/95294512.png"
                  alt=""
                />
                <div className={styles.wifi_carousell_block_inside_btns}>
                  <Button
                    onClick={() => setShowPopupFunction( 'aaa')}
                    color="var(--theme_primary_color_blue_4)"
                    bgcolor="var(--theme_primary_color_blue_3)"
                    border="var(--theme_primary_color_blue_3)"
                    hover_border="var(--theme_primary_color_blue_2)"
                    hover_bgcolor="var(--theme_primary_color_blue_2)"
                    icon="arrow_right"
                  >
                    {t('wifi_plus.carousel.order_now')}
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    {t('wifi_plus.carousel.routers.1.price')}
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {` ${t('wifi_plus.carousel.price_unit')}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Details Blocks */}
      <div
        className={`${styles.wifi_carousell_btns_detalii_v2} ${styles.wifi_carousell_btns_detalii_v2_first}`}
      >
        {/* Block 0 */}
        <div className={styles.wifi_carousell_btns_detalii_line}>
          <div
            className={styles.wifi_carousell_btns_detalii_line_title}
            onClick={() => toggleBlock(0)}
          >
            {t('wifi_plus.details.blocks.0.title')}
            <ArrowIcon rotated={!!openBlocks[0]} />
          </div>
          <div
            className={`${styles.wifi_carousell_btns_detalii_line_inside} ${
              openBlocks[0]
                ? styles.wifi_carousell_btns_detalii_line_inside_open
                : ''
            }`}
          >
            <ul>
              {t('wifi_plus.details.blocks.0.items', {
                returnObjects: true,
              }).map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Block 1 */}
        <div className={styles.wifi_carousell_btns_detalii_line}>
          <div
            className={styles.wifi_carousell_btns_detalii_line_title}
            onClick={() => toggleBlock(1)}
          >
            {t('wifi_plus.details.blocks.1.title')}
            <ArrowIcon rotated={!!openBlocks[1]} />
          </div>
          <div
            className={`${styles.wifi_carousell_btns_detalii_line_inside} ${
              openBlocks[1]
                ? styles.wifi_carousell_btns_detalii_line_inside_open
                : ''
            }`}
          >
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>{t('wifi_plus.details.blocks.1.headers.basic')}</th>
                  <th>{t('wifi_plus.details.blocks.1.headers.mesh')}</th>
                </tr>
              </thead>
              <tbody>
                {t('wifi_plus.details.blocks.1.rows', {
                  returnObjects: true,
                }).map((row: any, i: number) => (
                  <tr key={i}>
                    <td>{row.key}</td>
                    <td>{row.basic}</td>
                    <td>{row.mesh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* What is Wi-Fi PLUS */}
      <div
        className={`${styles.wifi_plus_full_block} ${styles.wifi_carousell_full_bg}`}
      >
        <div
          className={`${styles.wifi_plus_full_block_inside} ${styles.wifi_carousell_full_bg_block}`}
        >
          <div className={styles.wifi_plus_full_block_inside_text}>
            <div className="title_3">{t('wifi_plus.what_is.title')}</div>
            <br />
            {t('wifi_plus.what_is.text_1')} <br />
            <br />
            {t('wifi_plus.what_is.text_2')}
          </div>
        </div>
      </div>

      {/* Why choose Wi-Fi PLUS */}
      <div
        className={`${styles.wifi_plus_full_block} ${styles.wifi_carousell_full_bg_2}`}
      >
        <div
          className={`${styles.wifi_plus_full_block_inside} ${styles.wifi_carousell_full_bg_block_2}`}
        >
          <div className={styles.wifi_plus_full_block_inside_text_2}>
            <div className="title_3">{t('wifi_plus.why_choose.title')}</div>
            <br />
            {t('wifi_plus.why_choose.text')}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={t('wifi_plus.faq.q1')}>
          <div>{t('wifi_plus.faq.a1')}</div>
        </FaqQAV2>
        <FaqQAV2 question={t('wifi_plus.faq.q2')}>
          <div>{t('wifi_plus.faq.a2')}</div>
        </FaqQAV2>
        <FaqQAV2 question={t('wifi_plus.faq.q3')}>
          <div>{t('wifi_plus.faq.a3')}</div>
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />

      <Popup id="1284768" isVisible={showPopup} onClose={closePopup} width={'800px'}>
       <div className={styles.popup_div}>
         <span className={styles.popup_div_title}>Mulțumim
că ai ales Moldtelecom</span>
         Serviciul Wi-Fi PLUS poate fi activat prin contactarea Serviciului Suport Clienți sau cerere online.
         <div className={styles.popup_btns}>
           <Button
             to={`https://moldtelecom.md/{t('lang')}/cereri`}
             color="var(--theme_primary_color_white)"
             bgcolor="var(--theme_primary_color_blue_4)"
             border="var(--theme_primary_color_blue_4)"
             hover_border="var(--theme_primary_color_blue_2)"
             hover_bgcolor="var(--theme_primary_color_blue_2)"
             icon="arrow_right"
           >
             {t('wifi_plus.carousel.order_now_cerere')}
           </Button>
           <Button
             to={'tel:022200200'}
             color="var(--theme_primary_color_blue_4)"
             bgcolor="var(--theme_primary_color_blue_3)"
             border="var(--theme_primary_color_blue_3)"
             hover_border="var(--theme_primary_color_blue_2)"
             hover_bgcolor="var(--theme_primary_color_blue_2)"
             icon="arrow_right"
           >
             022 200 200
           </Button>
         </div>
       </div>
      </Popup>

    </>
  );
}
