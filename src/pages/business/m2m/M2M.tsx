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
import { useState } from 'react';
import Popup from '../../../components/Popup/Popup.tsx';
// import CostumeFunctions from '../../../components/functions/CostumeFunctions.tsx';
import Icon from '../../../components/Icon.tsx';

export default function M2M() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.bussines_m2m.title'),
    description: t('pages.bussines_m2m.description'),
    keywords: t('pages.bussines_m2m.keywords'),
  };
  const breadcrumbItems = [
    { label: t('bussines_m2m.breadcrumb.business'), url: 'https://www.moldtelecom.md/ro/business' },
    { label: t('bussines_m2m.breadcrumb.m2m') },
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
          arrows: false,
        },
      },
    ],
  };
  const settings_2 = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
      { breakpoint: 705, settings: { slidesToShow: 1 } },
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
            alt={t('bussines_m2m.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/58774032${t('lang')}.png`}
            alt={t('bussines_m2m.hero.alt')}
          />
        </div>
      </Hero>

      <div className={styles.beneficii}>
        <div className={styles.beneficii_card}>
          <Icon type={'watch'} size={'36px'} color={'#adbbff'} />
          <div
            className={styles.beneficii_card_title}
            dangerouslySetInnerHTML={{
              __html: t('bussines_m2m.benefits.cards.0.title'),
            }}
          ></div>
          {t('bussines_m2m.benefits.cards.0.text')}
        </div>
        <div className={styles.beneficii_card}>
          <Icon type={'devices'} size={'36px'} color={'#adbbff'} />
          <div
            className={styles.beneficii_card_title}
            dangerouslySetInnerHTML={{
              __html: t('bussines_m2m.benefits.cards.1.title'),
            }}
          ></div>
          {t('bussines_m2m.benefits.cards.1.text')}
        </div>
        <div className={styles.beneficii_card}>
          <Icon type={'repair'} size={'36px'} color={'#adbbff'} />
          <div
            className={styles.beneficii_card_title}
            dangerouslySetInnerHTML={{
              __html: t('bussines_m2m.benefits.cards.2.title'),
            }}
          ></div>
          {t('bussines_m2m.benefits.cards.2.text')}
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.about_img_block}>
          <img
            src="/images/landings/16170083.webp"
            alt="SIM"
            className={styles.about_img}
          />
        </div>

        <div className={styles.about_text}>
          <div className={`title_3 ${styles.about_title}`}>{t('bussines_m2m.about.title')}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: t('bussines_m2m.about.text'),
            }}
          ></span>
        </div>
      </div>
      {/*<CostumeFunctions*/}
      {/*  style_type="blue"*/}
      {/*  costume={[*/}
      {/*    {*/}
      {/*      id: 'custom0',*/}
      {/*      icon: 'speed',*/}
      {/*      title: 'Monitorizare şi mentenanţă',*/}
      {/*      text: 'Diagnostică și control la distanță a proceselor și dispozitivelor ',*/}
      {/*      popupId: 'customPopup1',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      id: 'custom1',*/}
      {/*      icon: 'money',*/}
      {/*      title: 'Reducerea costurilor',*/}
      {/*      text: 'Scăderea costurilor cu energia, mentenanța și forța de muncă',*/}
      {/*      popupId: 'customPopup1',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      id: 'custom2',*/}
      {/*      icon: 'ai',*/}
      {/*      title: 'Automatizare și eficiență',*/}
      {/*      text: 'Automatizarea proceselor și optimizarea resurselor ',*/}
      {/*      popupId: 'customPopup1',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      id: 'custom3',*/}
      {/*      icon: 'car',*/}
      {/*      title: 'Mobilitate',*/}
      {/*      text: 'Monitorizarea și controlul dispozitivelor indiferent de locație',*/}
      {/*      popupId: 'customPopup1',*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}

      <div className={styles.m2m_full_block}>
        <div className={styles.m2m_full_block_inside}>
          <div className="title_3">{t('bussines_m2m.plans.title')}</div>
          <Slider {...settings} className={styles.wifi_carousell}>
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <div className={styles.wifi_carousell_block_inside_title}>
                  {/*{t('m2m.carousel.routers.0.title')}*/}
                  M2M 29
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  {t('bussines_m2m.plans.desc')}
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
                    {t('bussines_m2m.carousel.order_now')}
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    29
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {` ${t('bussines_m2m.carousel.price_unit')}`}
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
                  {t('bussines_m2m.plans.desc')}
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
                    {t('bussines_m2m.carousel.order_now')}
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    49
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {` ${t('bussines_m2m.carousel.price_unit')}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Details>
        <DetailsBlock title={t('bussines_m2m.details.blocks.0.title')}>
          <ul>
            {(
              t('bussines_m2m.details.blocks.0.items', { returnObjects: true }) as string[]
            ).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <br />
        </DetailsBlock>
        <DetailsBlock title={t('bussines_m2m.details.blocks.1.title')}>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>{t('bussines_m2m.details.blocks.1.headers.nr')}</th>
                <th rowSpan={2}>{t('bussines_m2m.details.blocks.1.headers.name')}</th>
                <th colSpan={2}>{t('bussines_m2m.details.blocks.1.headers.sms')}</th>
                <th rowSpan={2}>{t('bussines_m2m.details.blocks.1.headers.traffic')}</th>
              </tr>
              <tr>
                <th>{t('bussines_m2m.details.blocks.1.headers.sms_mtc')}</th>
                <th>{t('bussines_m2m.details.blocks.1.headers.sms_other')}</th>
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

      <div className={`title_3 ${styles.domenii}`}>{t('bussines_m2m.domains.title')}</div>
      <Slider {...settings_2} className={styles.domenii_carousell}>
        <div className={styles.domenii_carousell_block}>
          <div
            className={`${styles.domenii_carousell_inside} ${styles.domenii_carousell_inside_1}`}
          >
            <div className={styles.domenii_carousell_inside_title}>
              {t('bussines_m2m.domains.items.0.title')}
            </div>
            <div className={styles.domenii_carousell_inside_text}>
              {t('bussines_m2m.domains.items.0.text')}
            </div>
          </div>
        </div>
        <div className={styles.domenii_carousell_block}>
          <div
            className={`${styles.domenii_carousell_inside} ${styles.domenii_carousell_inside_2}`}
          >
            <div className={styles.domenii_carousell_inside_title}>
              {t('bussines_m2m.domains.items.1.title')}
            </div>
            <div className={styles.domenii_carousell_inside_text}>
              {t('bussines_m2m.domains.items.1.text')}
            </div>
          </div>
        </div>
        <div className={styles.domenii_carousell_block}>
          <div
            className={`${styles.domenii_carousell_inside} ${styles.domenii_carousell_inside_3}`}
          >
            <div className={styles.domenii_carousell_inside_title}>
              {t('bussines_m2m.domains.items.2.title')}
            </div>
            <div className={styles.domenii_carousell_inside_text}>
              {t('bussines_m2m.domains.items.2.text')}
            </div>
          </div>
        </div>
        <div className={styles.domenii_carousell_block}>
          <div
            className={`${styles.domenii_carousell_inside} ${styles.domenii_carousell_inside_4}`}
          >
            <div className={styles.domenii_carousell_inside_title}>
              {t('bussines_m2m.domains.items.3.title')}
            </div>
            <div className={styles.domenii_carousell_inside_text}>
              {t('bussines_m2m.domains.items.3.text')}
            </div>
          </div>
        </div>
        <div className={styles.domenii_carousell_block}>
          <div
            className={`${styles.domenii_carousell_inside} ${styles.domenii_carousell_inside_5}`}
          >
            <div className={styles.domenii_carousell_inside_title}>
              {t('bussines_m2m.domains.items.4.title')}
            </div>
            <div className={styles.domenii_carousell_inside_text}>
              {t('bussines_m2m.domains.items.4.text')}
            </div>
          </div>
        </div>
        <div className={styles.domenii_carousell_block}>
          <div
            className={`${styles.domenii_carousell_inside} ${styles.domenii_carousell_inside_6}`}
          >
            <div className={styles.domenii_carousell_inside_title}>
              {t('bussines_m2m.domains.items.5.title')}
            </div>
            <div className={styles.domenii_carousell_inside_text}>
              {t('bussines_m2m.domains.items.5.text')}
            </div>
          </div>
        </div>
      </Slider>

      <div className={styles.solicita}>
        <Button
          onClick={() => setShowPopupFunction('aaa')}
          color="var(--theme_primary_color_blue_4)"
          bgcolor="var(--theme_primary_color_blue_3)"
          border="var(--theme_primary_color_blue_3)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          // color="#fff"
          // bgcolor="var(--theme_primary_color_blue_2)"
          // border="var(--theme_primary_color_blue_2)"
          // hover_border="var(--theme_primary_color_blue_4)"
          // hover_bgcolor="var(--theme_primary_color_blue_4)"
          // hover_color="#fff"
          icon="arrow_right"
        >
          {t('bussines_m2m.offer')}
        </Button>
      </div>

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 id_faq={'196489385'} question={t('bussines_m2m.faq.q1')}>
          <div className="mtc_evolution_qa_hiden">
            {t('bussines_m2m.faq.a1')}
          </div>
        </FaqQAV2>

        <FaqQAV2 id_faq={'196489380'} question={t('bussines_m2m.faq.q2')}>
          <div className="mtc_evolution_qa_hiden">
            {t('bussines_m2m.faq.a2')}
          </div>
        </FaqQAV2>

        <FaqQAV2 id_faq={'196489381'} question={t('bussines_m2m.faq.q3')}>
          <div className="mtc_evolution_qa_hiden">
            {t('bussines_m2m.faq.a3')}
          </div>
        </FaqQAV2>

        <FaqQAV2 id_faq={'196489382'} question={t('bussines_m2m.faq.q4')}>
          <div className="mtc_evolution_qa_hiden">
            {t('bussines_m2m.faq.a4')}
          </div>
        </FaqQAV2>

        <FaqQAV2 id_faq={'196489383'} question={t('bussines_m2m.faq.q5')}>
          <div className="mtc_evolution_qa_hiden">
            {t('bussines_m2m.faq.a5')}
          </div>
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
          <span className={styles.popup_div_title}>{t('bussines_m2m.popup.title')}</span>
          {t('bussines_m2m.popup.text')}
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
