import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './M2M.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import FaqQAV2 from '../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../components/faqV2/FaqV2.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import SEO from '../../../components/SEO';
import NavbarBusiness from '../../../components/navbar/NavbarBusiness.tsx';
import Details, { DetailsBlock } from '../../../components/details/Details.tsx';
import Slider from 'react-slick';
import Button from '../../../components/Button.tsx';
import React, { useState } from 'react';
import Popup from '../../../components/Popup/Popup.tsx';
import CostumeFunctions from '../../../components/functions/CostumeFunctions.tsx';

export default function M2M() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.roaming.title'),
    description: t('pages.roaming.description'),
    keywords: t('pages.roaming.keywords'),
  };
  const breadcrumbItems = [
    { label: 'Business', url: 'https://www.moldtelecom.md/ro/business' },
    { label: 'M2M' },
  ];

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
          autoplaySpeed: 1800,
          arrows: true,
        },
      },
    ],
  };

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const closePopup = (packet: string) => {
    setShowPopup(false);
    console.log(packet);
  };

  const setShowPopupFunction = (packet: string) => {
    setShowPopup(true);
    console.log(packet);
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
            src={`/images/landings/18774032${t('lang')}.webp`}
            alt={t('m2m.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/90296512${t('lang')}.png`}
            alt={t('m2m.hero.alt')}
          />
        </div>
      </Hero>

      <CostumeFunctions
        style_type="blue"
        costume={[
          {
            id: 'custom0',
            icon: 'speed',
            title: 'Monitorizare şi mentenanţă',
            text: 'Diagnostică și control la distanță a proceselor și dispozitivelor ',
            popupId: 'customPopup1',
          },
          {
            id: 'custom1',
            icon: 'money',
            title: 'Reducerea costurilor',
            text: 'Scăderea costurilor cu energia, mentenanța și forța de muncă',
            popupId: 'customPopup1',
          },
          {
            id: 'custom2',
            icon: 'ai',
            title: 'Automatizare și eficiență',
            text: 'Automatizarea proceselor și optimizarea resurselor ',
            popupId: 'customPopup1',
          },
          {
            id: 'custom3',
            icon: 'car',
            title: 'Mobilitate',
            text: 'Monitorizarea și controlul dispozitivelor indiferent de locație',
            popupId: 'customPopup1',
          },
        ]}
      />

      <div className={styles.m2m_full_block}>
        <div className={styles.m2m_full_block_inside}>
          <div className="title_3"> Abonamente M2M</div>
          <Slider {...settings} className={styles.wifi_carousell}>
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <div className={styles.wifi_carousell_block_inside_title}>
                  {/*{t('m2m.carousel.routers.0.title')}*/}
                  M2M 29
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  Trafic inclus la viteză înaltă
                  <br />
                  <span> 500 MB</span>
                </div>

                <div className={styles.wifi_carousell_block_inside_btns}>
                  <Button
                    onClick={() => setShowPopupFunction('aaa')}
                    color="var(--theme_primary_color_blue_4)"
                    bgcolor="var(--theme_primary_color_blue_3)"
                    border="var(--theme_primary_color_blue_3)"
                    hover_border="var(--theme_primary_color_blue_2)"
                    hover_bgcolor="var(--theme_primary_color_blue_2)"
                    icon="arrow_right"
                  >
                    {t('m2m.carousel.order_now')}
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    29
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {` ${t('m2m.carousel.price_unit')}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <div className={styles.wifi_carousell_block_inside_title}>
                  {/*{t('m2m.carousel.routers.0.title')}*/}
                  M2M 49
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  Trafic inclus la viteză înaltă
                  <br />
                  <span> 1024 MB</span>
                </div>

                <div className={styles.wifi_carousell_block_inside_btns}>
                  <Button
                    onClick={() => setShowPopupFunction('aaa')}
                    color="var(--theme_primary_color_blue_4)"
                    bgcolor="var(--theme_primary_color_blue_3)"
                    border="var(--theme_primary_color_blue_3)"
                    hover_border="var(--theme_primary_color_blue_2)"
                    hover_bgcolor="var(--theme_primary_color_blue_2)"
                    icon="arrow_right"
                  >
                    {t('m2m.carousel.order_now')}
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    49
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {` ${t('m2m.carousel.price_unit')}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Details>
        <DetailsBlock title={'Informații abonamente'}>
          <ul>
            <li>Tarifele includ TVA;</li>
            <li>
              Seria de abonamente „M2M Moldtelecom” va avea inclusă, by default,
              opțiunea 4G+;
            </li>
            <li>
              Seria de abonamente „M2M Moldtelecom” este disponibilă pentru
              abonații noi și existenți din categoria I, pentru tehnologiile 3G
              și 4G;
            </li>
            <li>
              Traficul Internet inclus în abonament, dar neconsumat în luna
              curentă, nu se va reporta în luna următoare;
            </li>
            <li>
              Pentru tarifarea traficului Internet se calculează totalul
              traficului de intrare și ieșire, din momentul începerii sesiunii,
              per 100 KB (1 MB = 1024 KB, 1 GB = 1024 MB);
            </li>
            <li>
              Pentru traficul Internet, vitezele estimate de transfer vor fi:
              <ul>
                <li>
                  pentru 3G: capacitate maximă download (descărcare) și până la
                  512 Kbps upload (încărcare), în funcție de opțiunile
                  suplimentare activate;
                </li>
                <li>
                  pentru 4G: capacitate maximă download/upload
                  (descărcare/încărcare).
                </li>
              </ul>
            </li>
            <li>
              La conectare la seria de abonamente „M2M Moldtelecom” se va aplica
              prorata (la plata de abonament și trafic Internet);
            </li>
            <li>
              La deconectare de la seria de abonamente „M2M Moldtelecom” nu se
              va aplica prorata (la plata de abonament);
            </li>
            <li>
              Seria de abonamente „M2M Moldtelecom” va fi valabilă doar pentru
              conturile Postpay, categoria I;
            </li>
            <li>
              Seria de abonamente „M2M Moldtelecom” va fi configurată astfel
              încât abonații să aibă acces doar la traficul de date și SMS
              out/in (voce out/in restricționate).
            </li>
          </ul>
          <br />
        </DetailsBlock>
        <DetailsBlock title={'Tarife extra'}>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>Nr.</th>
                <th rowSpan={2}>Denumirea abonament în sistemul de billing</th>
                <th colSpan={2}>SMS (lei/SMS)</th>
                <th rowSpan={2}>Trafic internet (lei/MB)</th>
              </tr>
              <tr>
                <th>în rețeaua mobilă MTC</th>
                <th>către alți operatori naționali</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>M2M 29</td>
                <td>0,50</td>
                <td>0,50</td>
                <td>0,50</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>M2M 49</td>
                <td>0,50</td>
                <td>0,50</td>
                <td>0,50</td>
              </tr>
            </tbody>
          </table>
        </DetailsBlock>
      </Details>

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={'---?'}>
          <div className="mtc_evolution_qa_hiden">---</div>
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
          <span className={styles.popup_div_title}>{t('wifi_plus.thx')}</span>

          {t('wifi_plus.txt_1')}
          <div className={styles.popup_btns}>
            <Button
              to={'tel:022200200'}
              color="var(--theme_primary_color_white)"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
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
