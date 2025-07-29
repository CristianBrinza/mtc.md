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
import Details, { DetailsBlock } from '../../../components/details/Details.tsx';

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
          <div
            className={`${styles.mobile_carousell_block} ${styles.mobile_carousell_block_sp} `}
          >
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
                style={{ background: '#E7EBFF' }}
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
      <Details>
        <DetailsBlock title={'Condiții de utilizare Abonamente'}>
          <ul>
            <li>Tarifele sunt exprimate în MDL și includ TVA.</li>
            <li>
              {' '}
              Vitezele de acces sunt indicate în valori maximale și sunt oferite
              în funcție de parametrii tehnici ai conexiunii.
            </li>
            <li>
              {' '}
              Planul tarifar MaxFiber include o adresă IP publică fixă. Clienții
              pot achiziționa o subrețea suplimentară de adrese IP fixe după
              formula 2x-3 adrese în funcție de posibilitățile tehnice la preț
              de 50 lei lunar pentru fiecare adresă din subrețeaua acordată.
            </li>
            <li>
              {' '}
              Modificarea subrețelei de adrese IP fixe presupune o taxă de 60
              lei/ IP adresă.
            </li>
            <li>
              {' '}
              Conectarea gratuită și router WiFi oferit în comodat gratuit în
              cazul semnării unui contract pe o perioadă minimă contractuală de
              12 luni pentru locațiile conectate la fibră optică de S.A.
              Moldtelecom.
            </li>
            <li>
              {' '}
              Conectarea la serviciul MaxFiber în baza proiectelor individuale
              va fi efectuată prin negocierea pachetelor cu reprezentanții
              Serviciului Vânzări Corporative.
            </li>
            <li>
              Planurile tarifare MaxFiber indicate sunt oferite în condiții și
              parametri standard
            </li>
          </ul>
        </DetailsBlock>
      </Details>

      <div className={styles.call_us}>
        <div className={`${styles.call_us_title} title_3`}>
          Căutați cele mai bune viteze de internet pentru afacerea ta?
        </div>
        Pentru abonamente cu viteze mai mari sau soluții personalizate
        <div>
          <Button
            onClick={() => setShowPopupFunction('aaa')}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Contacteaza-ne
          </Button>
        </div>
      </div>
      <MyApp style_type={'blue_white'} className={styles.myapp} />

      <FaqV2 max_faq={6}>
        <FaqQAV2
          id_faq="117489310"
          question={
            'Ce tipuri de conexiuni la internet oferiți pentru companii?'
          }
        >
          Oferim conexiuni de internet prin fibră optică, conexiuni dedicate
          (business), conexiuni wireless și soluții personalizate în funcție de
          necesitățile organizației.
        </FaqQAV2>
        <FaqQAV2
          id_faq="117489311"
          question={'Ce viteză de internet este potrivită pentru afacerea mea?'}
        >
          Viteza ideală depinde de câți angajați și dispozitive folosesc
          internetul și de activitatea firmei. Dacă folosiți aplicații online,
          videoconferințe sau transferați fișiere mari, aveți nevoie de o
          conexiune mai rapidă. Este important să verificați atât viteza de
          descărcare, cât și cea de încărcare.
          <br />
          👉 Puteți testa viteza actuală a internetului aici:{' '}
          <a href="https://moldtelecom.md/ro/personal/speedtest">
            https://moldtelecom.md/ro/personal/speedtest
          </a>
        </FaqQAV2>
        <FaqQAV2
          id_faq="117489312"
          question={'În cât timp se realizează conectarea?'}
        >
          Conectarea pachetelor de Internet Fix se face în termen de până la 7
          zile lucrătoare, dacă există posibilitate tehnică la adresă. În
          situațiile care necesită lucrări suplimentare, termenul poate fi
          extins până la 30 de zile lucrătoare.
        </FaqQAV2>
        <FaqQAV2
          id_faq="117489313"
          question={
            'Este posibilă conectarea mai multor sedii ale companiei prin aceeași rețea?'
          }
        >
          Da, se poate. Prin soluții precum VPN sau rețele dedicate, toate
          sediile companiei pot fi conectate într-o rețea comună, sigură, cu
          acces partajat la fișiere, servere și alte resurse interne.
        </FaqQAV2>
        <FaqQAV2
          id_faq="117489314"
          question={
            'Pot adăuga servicii suplimentare la pachetul de internet ales?'
          }
        >
          Da. În funcție de nevoile companiei, se pot adăuga: IP-uri
          suplimentare, servicii de securitate cibernetică, firewall avansat,
          soluții de backup, hosting sau chiar telefonie IP integrată.
        </FaqQAV2>
        <FaqQAV2
          id_faq="117489315"
          question={
            'Este posibilă modernizarea sau extinderea conexiunii pe parcurs?'
          }
        >
          Da, pachetele pot fi modificate oricând pe durata contractului, în
          funcție de necesitățile de trafic sau dezvoltarea afacerii
          dumneavoastră.
        </FaqQAV2>
      </FaqV2>

      {/*<Review service={'fibra_b2b'} />*/}
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
              icon="call"
              icon_side={'left'}
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
              icon="call"
              icon_side={'left'}
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
