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

export default function FiveGbps() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('wifi_plus.breadcrumb.internet'), url: ' ' },
    { label: '5.5 Gbps' },
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
            src={`/images/landings/89618012${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/88678012${t('lang')}.png`}
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
            color="var(--theme_primary_color_blue_4)"
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
          >
            0(22) 500-500
          </Button>
        </div>
      </Hero>

      <div className={`title_3 ${styles.title_main}`}>
        {' '}
        <span>
          Rețeaua de internet fix{' '}
          <span className={styles.title_3_span}>pe care te poți baza</span>
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
            <div className={styles.why_card_title}>Semnal puternic</div>
            <div className={styles.why_card_text_span}>
              {' '}
              Performanță constantă pe multiple dispozitive, fără pierderi de
              viteză sau instabilitate.
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
              Zero lag, zero buffering
            </div>
            <div className={styles.why_card_text_span}>
              Performanță impresionanta pentru gaming competitiv și streaming
              4K/8K fără întreruperi.
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
              Stabilitate și latență redusă
            </div>
            <div className={styles.why_card_text_span}>
              Conexiune ultra-fiabilă pentru gaming, productivitate, conferințe
              video și aplicații critice.
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
          <div className={styles.what_title}>
            Experimentează viteza supremă pentru o lume fără limite!
          </div>
          Explorează tehnologia care redefinește viitorul
          <br />
          Viteză maxima, latență ultra‑mică și stabilitate rock‑solid – deja
          validat de profesioniști și pregătit să susțină simultan streaming{' '}
          <b>8K impecabil</b>, <b>gaming hardcore</b>, <b>backup instant</b>,{' '}
          <b>Cloud</b> și <b>inovatie</b>.
        </div>
      </div>
      <div className={styles.what}>
        <div className={`${styles.what_right} ${styles.what_right_2}`}>
          <div className={styles.what_title}>De ce ai nevoie de 5.5 Gbps ?</div>
          <div className={styles.what_tsubitle}>
            Performanță maxima, semnal puternic, în fiecare colț al locuinței!
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
              <span>
                Dacă ești <b>gamer</b> sau <b>streamer</b> – <br />
                VR/AR și multiplayer, fără laguri, fără întreruperi
              </span>
            </div>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'home'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span>
                {' '}
                Dacă ai <b>Smart Home</b> și multe dispozitive IoT – <br />
                fără întârzieri, conexiune instantă
              </span>
            </div>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'family'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span>
                Dacă ai <b>familie mare</b> și <b>activă</b> pe Internet –{' '}
                <br />
                joacă simultan și fă streaming în rezoluție 8K
              </span>
            </div>
            <div className={styles.what_list_row}>
              <div className={styles.what_list_icon}>
                <Icon
                  type={'office'}
                  size={'32px'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span>
                Un <b>job remote</b> – <br />
                lucrează fără griji cu aplicații critice
              </span>
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
            Moldtelecom OptiXstar
          </div>

          <div className={styles.modem_inside_text}>
            <b> XGS‑PON</b> & <b>Wi‑Fi6</b>: acces ultra‑broadband, acoperire
            totală și performanță de top pentru voce și date – soluția optică a
            viitorului.
          </div>

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

      <div className={`title_3 ${styles.domenii}`}>Descoperă abonamentele</div>
      <Slider {...settings} className={styles.abonaments}>
        <div id={'abonamente'} className={styles.abonaments_block}>
          <div className={styles.abonaments_block_inside}>
            <div className={styles.abonaments_block_inside_pretitle}>
              Fibră optică + Wi-Fi Mesh
            </div>
            <div className={styles.abonaments_block_inside_title}>2.1 Gbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              Router Wi-Fi 6 inclus
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'empty'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span>
                x1 <b>Mesh Wi-Fi</b> inclus{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (49 lei/luna)
                </span>
              </span>
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.tm_carousell_block_row_tags}>
                <div className={styles.tm_carousell_block_row_tag}>
                  50% reducere pentru 2 ani
                </div>
              </div>
              <div className={styles.mobile_carousell_price}>
                <div>299</div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span>599 {t('lei_luna')}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              // onClick={() => setShowPopupFunction('aaa')}
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
          <div className={styles.roaming_carousell_block_sp}>
            <div className={styles.roaming_carousell_block_sp_title}>NEW</div>
            <div className={styles.abonaments_block_inside}>
              <div className={styles.abonaments_block_inside_pretitle}>
                Fibră optică + Wi-Fi Mesh
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
                Router Wi-Fi 6 inclus
              </div>
              <div className={styles.abonaments_block_inside_subtitle}>
                <div className={styles.abonaments_block_inside_subtitle_icon}>
                  <Icon
                    type={'empty'}
                    color={'var(--theme_primary_color_blue_2)'}
                  />
                </div>
                <span>
                  x2 <b>Mesh Wi-Fi</b> inclus{' '}
                  <span
                    className={styles.abonaments_block_inside_subtitle_small}
                  >
                    (98 lei/luna)
                  </span>
                </span>
              </div>

              <div className={styles.wifi_carousell_block_inside_btns}>
                <div className={styles.tm_carousell_block_row_tags}>
                  <div className={styles.tm_carousell_block_row_tag}>
                    50% reducere pentru 2 ani
                  </div>
                </div>
                <div className={styles.mobile_carousell_price}>
                  <div>499</div>
                  <div>
                    <div className={styles.mobile_carousell_price_valuta}>
                      {t('lei_luna')}
                    </div>
                    <div className={styles.mobile_carousell_price_old}>
                      <span>799 {t('lei_luna')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                // onClick={() => setShowPopupFunction('aaa')}
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
          Promo Abonamente
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
          Vezi caracteristicile
        </Button>
      </div>

      <Details>
        <DetailsBlock title={'Condiții de utilizare Abonamente'}>
          <ul>
            <li>Oferta este valabilă în perioada 21.08.2025–25.11.2025.</li>
            <li>Se adresează atât clienților noi, cât și celor existenți cu contract expirat. Contractul se semnează pe 24 de luni, iar conectarea este gratuită.</li>
            <li>Clienții care aleg abonamente de Internet cu viteze de 2.1 Gbps sau 5.5 Gbps beneficiază de o reducere lunară de 300 lei, valabilă pe toată perioada contractuală.</li>
            <li>Pentru viteza de 2.1 Gbps, oferta include un router performant și un dispozitiv Mesh Wi-Fi, iar pentru viteza de 5.5 Gbps – un router performant și două dispozitive Mesh Wi-Fi. Echipamentele se oferă pe durata contractului și trebuie returnate în cazul rezilierii.</li>
            <li>Vitezele indicate sunt valori maxime. Viteza efectivă disponibilă la adresa clientului depinde de factori tehnici ce nu pot fi controlați de Moldtelecom. Serviciul este disponibil doar în localitățile în care Moldtelecom poate furniza aceste viteze în condiții optime.</li>
            <li>În cazul rezilierii anticipate a serviciului de Internet, înainte de expirarea perioadei contractuale, se va aplica o penalitate conform contractului.</li>
          </ul>
        </DetailsBlock>
      </Details>

      <div className={styles.roaming_warning}>
        <div className={`${styles.roaming_warning_red}`}></div>
        <div className={styles.roaming_warning_inside}>
          Vitezele de 2,1 Gbps și 5,5 Gbps sunt posibile datorită tehnologiei
          XGS-PON — cea mai nouă generație de fibră optică, care permite viteze
          de până la 10 Gbps per port.
          <br />
          {/*<br/>*/}
          Totuși, pentru a beneficia efectiv de aceste viteze, dispozitivele
          terminale de acasă (PC, laptop, tabletă, router) trebuie să suporte
          conexiuni la aceste viteze. În caz contrar, viteza maximă va fi
          limitată de performanța echipamentului propriu.
        </div>
      </div>

      <div className={styles.eco}>
        <div className={styles.eco_card}>
          <div className={styles.eco_icon}>
            <Icon type={'eco'} color={'#82C84F'} size={'68px'} />
          </div>
          <div className={styles.eco_card_text}>
            Rețeaua <b>XGS-PON</b> are o arhitectura pasivă și eficientă, ce
            reduce amprenta de carbon și costurile de energie
          </div>
        </div>
        <div className={styles.eco_card}>
          <div className={styles.eco_icon}>
            <Icon type={'eco_sign'} color={'#82C84F'} size={'68px'} />
          </div>
          <div className={styles.eco_card_text}>
            Acum poți semna contractul cu <b>M‑Sign</b> digital, fără hârtie,
            contribuie la reducerea amprentei de carbon și la un mediu mai
            sustenabil
          </div>
        </div>
      </div>

      <MyApp style_type={'blue_white'} className={styles.myapp} />
      <FaqV2 max_faq={5}>
        <FaqQAV2
          id_faq="112089314"
          question={t('gbps.faq.install_duration_question')}
        >
          {t('gbps.faq.install_duration_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089315"
          question={t('gbps.faq.availability_check_question')}
        >
          {t('gbps.faq.availability_check_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089316"
          question={t('gbps.faq.activate_new_offer_question')}
        >
          {t('gbps.faq.activate_new_offer_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089317"
          question={t('gbps.faq.bill_payment_deadline_question')}
        >
          {t('gbps.faq.bill_payment_deadline_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089318"
          question={t('gbps.faq.late_payment_consequences_question')}
        >
          {t('gbps.faq.late_payment_consequences_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089319"
          question={t('gbps.faq.manage_subscription_remotely_question')}
        >
          {t('gbps.faq.manage_subscription_remotely_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089320"
          question={t('gbps.faq.pause_services_question')}
        >
          {t('gbps.faq.pause_services_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089321"
          question={t('gbps.faq.change_package_question')}
        >
          {t('gbps.faq.change_package_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089322"
          question={t('gbps.faq.move_address_question')}
        >
          {t('gbps.faq.move_address_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089323"
          question={t('gbps.faq.transfer_subscription_question')}
        >
          {t('gbps.faq.transfer_subscription_answer')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />
    </>
  );
}
