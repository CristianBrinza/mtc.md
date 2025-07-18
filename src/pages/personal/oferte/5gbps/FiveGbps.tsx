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
            src={`/images/landings/90296512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
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
            Performanță constantă pe multiple dispozitive, fără pierderi de
            viteză sau instabilitate.
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
            Performanță impresionanta pentru gaming competitiv și streaming
            4K/8K fără întreruperi.
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
            Conexiune ultra-fiabilă pentru gaming, productivitate, conferințe
            video și aplicații critice.
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
          <b>Cloud</b> și inovatie.
        </div>
      </div>
      <div className={styles.what}>

        <div className={styles.what_right}>
          <div className={styles.what_title}>
            De ce ai nevoie de 2.1 Gbps ?
          </div>
          Explorează tehnologia care redefinește viitorul
          <br />
          Viteză maxima, latență ultra‑mică și stabilitate rock‑solid – deja
          validat de profesioniști și pregătit să susțină simultan streaming{' '}
          <b>8K impecabil</b>, <b>gaming hardcore</b>, <b>backup instant</b>,{' '}
          <b>Cloud</b> și inovatie.
        </div>
        <img
          src="/images/landings/88618812.webp"
          alt="Moldtelecom"
          className={styles.what_img}
        />
      </div>

      <div className={`title_3 ${styles.domenii}`}>Descoperă abonamentele</div>
      <Slider {...settings} className={styles.abonaments}>
        <div className={styles.abonaments_block}>
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
                    <span>590 {t('lei_luna')}</span>
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
          <div className={styles.abonaments_block_inside}>
            <div className={styles.abonaments_block_inside_pretitle}>
              Fibră optică + Wi-Fi Mesh
            </div>
            <div className={styles.abonaments_block_inside_title}>5.5 Gbps</div>

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
                <span className={styles.abonaments_block_inside_subtitle_small}>
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
                    <span>790 {t('lei_luna')}</span>
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
      </Slider>
      <div className={styles.roaming_btns}>
        <Button
          to={`https://www.moldtelecom.md/${t('lang')}/personal/Abonamente_Telefonie_Mobila`}
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
          to={`https://mtc.md/my-mtc`}
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
            <li>
              Conectarea la serviciul de Internet fix este gratuită, iar
              contractul va fi semnat pe o perioadă de 24 de luni.
            </li>
            <li>
              Planurile tarifare de Internet fix sunt disponibile pentru
              conectările noi sau la reperfectare pentru abonați existenți cu
              contract expirat.
            </li>
            <li>
              Vitezele sunt indicate în valori maxime. Viteza obținută de client
              acasă depinde de un șir de factori care nu pot fi controlați de
              compania Moldtelecom.
            </li>
            <li>
              Planul tarifar de Internet selectat de abonat poate fi conectat în
              limita posibilităților tehnice.
            </li>
            <li>
              Oferta promoțională include reduceri de până la 50% la abonamentul
              de Internet fix în primele 24 de luni, în funcție de planul
              tarifar selectat. După perioada de 24 de luni, se va aplica
              tariful standard conform planului în vigoare.
            </li>
            <li>
              La rezilierea serviciului de Internet fix înainte de expirarea
              perioadei contractuale, se vor aplica plăți cu titlu de
              prejudiciu.
            </li>
            <li>
              Oferta promoțională se comercializează în anumite localități.
            </li>
          </ul>
        </DetailsBlock>
      </Details>

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
      <FaqV2 max_faq={6}>
        <FaqQAV2
          id_faq="112482310"
          question={'Care e diferența dintre XGS-PON și GPON?'}
        >
          XGS‑PON reprezintă soluția de ultimă generație pentru cei care vor mai
          mult de la conexiunea de internet: până la 10 Gbps, latență extrem de
          scăzută și stabilitate de care te poți baza chiar și în cele mai
          exigente aplicații. Este proiectat pentru un stil de viață permanent
          conectat, putând susține simultan videoconferințe de înaltă calitate,
          aplicații cloud complexe, sesiuni de gaming online fără întreruperi,
          automatizări inteligente pentru casă și streaming 8K ultra-HD fără
          compromisuri.
          <br /> <br />
          În schimb, GPON rămâne în continuare standardul folosit de mulți
          furnizori, dar cu un profil asimetric care limitează semnificativ
          viteza de upload. Aceasta poate deveni o problemă atunci când toți
          membrii familiei sunt conectați în același timp, mai ales la streaming
          video în direct, sincronizări de backup în cloud sau lucrul de acasă
          care necesită transfer rapid de fișiere.
        </FaqQAV2>
      </FaqV2>
      <Footer disclaimer={true} />
    </>
  );
}
