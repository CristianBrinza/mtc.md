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
import { useState } from 'react';
import { t } from 'i18next';

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
    { label: 'Internet', url: ' ' },
    { label: 'Wi-Fi Plus' },
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
      <Breadcrumb items={breadcrumbItems} />
      <Hero color=" #F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/15274512${t('lang')}.png`}
            alt="Moldtelecom"
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/90296512${t('lang')}.png`}
            alt="Moldtelecom"
          />
        </div>
        {/*<div*/}
        {/*  className="hero_small_title"*/}
        {/*  style={{*/}
        {/*    background:*/}
        {/*      'linear-gradient(91deg, rgb(223 74 75) 10.51%, rgb(255 179 0) 76.69%)',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  /!*Porteaza-te la Moldtelecom*!/*/}
        {/*  -35% REDUCERE*/}
        {/*</div>*/}
        {/*<div className="hero_title">*/}
        {/*  Acum ai <br />*/}
        {/*  -35% REDUCERE*/}
        {/*  /!*<span*!/*/}
        {/*  /!*  className="stroked-text_black"*!/*/}
        {/*  /!*  style={{ fontWeight: '700', lineHeight: '1' }}*!/*/}
        {/*  /!*>*!/*/}
        {/*  /!*  -35% REDUCERE*!/*/}
        {/*  /!*</span>*!/*/}
        {/*  <br />*/}
        {/*  timp de 2 ani!*/}
        {/*</div>*/}
        {/*<div className="hero_subtitle">*/}
        {/*  Alege <b> GRATUIT</b> un număr frumos care <br />*/}
        {/*  te reprezintă!*/}
        {/*</div>*/}
      </Hero>

      <CostumeFunctions
        style_type="blue"
        costume={[
          {
            id: 'custom0',
            icon: 'devices',
            title: 'Multi-Dispozitiv',
            text: 'Suportă conectarea a până la 3 echipamente per conexiune de Internet fix.',
            popupId: 'customPopup1',
          },
          {
            id: 'custom1',
            icon: 'home',
            title: 'Acoperire\n' + 'Extinsă',
            text: 'Asigură conexiune stabilă Wi-Fi în fiecare colț al casei tale.',
            popupId: 'customPopup1',
          },
          {
            id: 'custom2',
            icon: 'speed',
            title: 'Viteze\n' + 'Superioare',
            text: 'Navighează și transmite în streaming la viteze rapide, fără întreruperi.',
            popupId: 'customPopup1',
          },
          {
            id: 'custom3',
            icon: 'support',
            title: 'Suport\n' + 'Constant',
            text: 'Beneficiezi de asistență tehnică specializată oricând ai nevoie pentru o experiență fără griji.',
            popupId: 'customPopup1',
          },
          {
            id: 'custom4',
            icon: 'ai',
            title: 'Flexibilitate\n' + 'Totală',
            text: 'Serviciul Wi-Fi PLUS poate fi conectat sau deconectat oricând.',
            popupId: 'customPopup1',
          },
        ]}
      />

      <div className={styles.wifi_plus_full_block}>
        <div className={styles.wifi_plus_full_block_inside}>
          <div className={'title_3'}>
            Umple casa cu Wi‑Fi de ultimă generație
          </div>
          <Slider {...settings} className={styles.wifi_carousell}>
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <img
                  className={styles.wifi_carousell_block_inside_img}
                  src="/images/landings/92204512.png"
                  alt="Moldtelecom"
                />
                <div className={styles.wifi_carousell_block_inside_title}>
                  D-Link <br /> DIR-615
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  Oferă conexiuni ultra-rapide, acoperire extinsă și stabilitate
                  remarcabilă, fluentă și fără întreruperi.
                </div>
                <img
                  className={styles.wifi_carousell_block_inside_certified}
                  src="/images/landings/90294512.png"
                  alt="Moldtelecom"
                />
                <div className={styles.wifi_carousell_block_inside_btns}>
                  <Button
                    to="https://mtc.md/my-mtc"
                    color={'var(--theme_primary_color_blue_4)'}
                    bgcolor={'var(--theme_primary_color_blue_3)'}
                    border={'var(--theme_primary_color_blue_3)'}
                    hover_border={'var(--theme_primary_color_blue_2)'}
                    hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                    icon={'arrow_right'}
                  >
                    Comandă acum
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    20
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {' '}
                      lei/lună
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.wifi_carousell_block}>
              <div className={styles.wifi_carousell_block_inside}>
                <img
                  className={styles.wifi_carousell_block_inside_img}
                  src="/images/landings/95204512.png"
                  alt="Moldtelecom"
                />
                <div className={styles.wifi_carousell_block_inside_title}>
                  HUAWEI <br /> OptiXstar K562e-10
                </div>
                <div className={styles.wifi_carousell_block_inside_subtitle}>
                  Cu un design modern și tehnologie avansată, este alegerea
                  ideală pentru locuințele digitale de astăzi.
                </div>
                <img
                  className={styles.wifi_carousell_block_inside_certified}
                  src="/images/landings/95294512.png"
                  alt="Moldtelecom"
                />
                <div className={styles.wifi_carousell_block_inside_btns}>
                  <Button
                    to="https://mtc.md/my-mtc"
                    color={'var(--theme_primary_color_blue_4)'}
                    bgcolor={'var(--theme_primary_color_blue_3)'}
                    border={'var(--theme_primary_color_blue_3)'}
                    hover_border={'var(--theme_primary_color_blue_2)'}
                    hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                    icon={'arrow_right'}
                  >
                    Comandă acum
                  </Button>
                  <span className={styles.wifi_carousell_block_inside_price}>
                    49
                    <span
                      className={styles.wifi_carousell_block_inside_subprice}
                    >
                      {' '}
                      lei/lună
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div
        className={`${styles.wifi_carousell_btns_detalii_v2} ${styles.wifi_carousell_btns_detalii_v2_first}`}
      >
        {/* Block 0 */}
        <div className={styles.wifi_carousell_btns_detalii_line}>
          <div
            className={styles.wifi_carousell_btns_detalii_line_title}
            onClick={() => toggleBlock(0)}
          >
            Condiții de utilizare
            <ArrowIcon rotated={openBlocks[0] ? true : false} />
          </div>
          <div
            className={`${styles.wifi_carousell_btns_detalii_line_inside} ${
              openBlocks[0]
                ? styles.wifi_carousell_btns_detalii_line_inside_open
                : ''
            }`}
          >
            <ul>
              <li>
                Wi-Fi PLUS este o opțiune adițională la serviciul de Internet
                fix existent, care permite extinderea ariei de acoperire Wi-Fi.
              </li>
              <li>
                Plata pentru serviciul Wi-Fi PLUS se va include în abonamentul
                lunar și se va taxa din momentul activării serviciului, fapt
                confirmat prin livrarea codului OTP de către Titular.
              </li>
              <li>
                Abonamentul lunar se va aplica per fiecare echipament acordat
                pentru extinderea ariei de acoperire Wi-Fi. În cadrul
                serviciului Wi-Fi PLUS pot fi conectate maxim 3 echipamente
                terminale per conexiune Internet fix.
              </li>
              <li>
                Abonatul va utiliza echipamentul oferit de către Furnizor în
                condiții de comodat, pe perioada utilizării serviciului Wi-Fi
                PLUS.
              </li>
              <li>
                Deconectarea serviciului Wi-Fi PLUS va avea loc în momentul
                restituirii echipamentului terminal (cu toate accesoriile
                incluse). În cazul depistării accesoriilor lipsă/defecte,
                Abonatul se obligă să achite contravaloarea acestora, conform
                prețurilor de vânzare stabilite de Furnizor.
              </li>
              <li>
                Furnizorul este în drept de a refuza deconectarea serviciului
                Wi-Fi PLUS în cazul nerestituirii echipamentului sau a
                nerambursării contravalorii acestuia.
              </li>
              <li>
                În cazul nereturnării (pierderii/deteriorării) echipamentului,
                abonatul va restitui plata cu titlu de prejudiciu în mărime de
                300 de lei/echipament (fără TVA) sau  850 de lei/echipament (fără TVA).
              </li>
              <li>
                Conectarea/deconectarea serviciului este posibilă în orice zi a
                perioadei de facturare, fără efectuarea recalculului.
              </li>
            </ul>
          </div>
        </div>


        {/* Block 1 */}
        <div className={styles.wifi_carousell_btns_detalii_line}>
          <div
            className={styles.wifi_carousell_btns_detalii_line_title}
            onClick={() => toggleBlock(1)}
          >
            Comparație
            <ArrowIcon rotated={openBlocks[1] ? true : false} />
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
                  <th>Basic</th>
                  <th>Mesh</th>
                </tr>
              </thead>
              <tr>
                <td>Wifi spectrum</td>
                <td>2,4 Ghz</td>
                <td>2,4/5 Ghz</td>
              </tr>
              <tr>
                <td>Standard</td>
                <td>802.11n (wifi4)</td>
                <td>802.11ax (wifi6)</td>
              </tr>
              <tr>
                <td>Antennas (mode)</td>
                <td>2x2 Mimo</td>
                <td>2x2 Mu-mimo</td>
              </tr>
              <tr>
                <td>Max link-speed</td>
                <td>300</td>
                <td>2400</td>
              </tr>
              <tr>
                <td>Effective max speed</td>
                <td>90/45 Mbps</td>
                <td>700/700 Mbps</td>
              </tr>
              <tr>
                <td>Current connection</td>
                <td>cable (switch)</td>
                <td>wireless (transparent bridge)</td>
              </tr>
              <tr>
                <td>Signal</td>
                <td>normal</td>
                <td>good</td>
              </tr>
              <tr>
                <td>Roaming</td>
                <td>N/A</td>
                <td>802.11 k/v</td>
              </tr>
              <tr>
                <td>Max channel bandwidth</td>
                <td>40 Mhz</td>
                <td>160 Mhz</td>
              </tr>
            </table>
          </div>
        </div>

        {/* Add more blocks below just like above; use toggleBlock(2), openBlocks[2], etc. */}
      </div>

      {/*<div className={styles.wifi_carousell_btns_detalii}>*/}
      {/*  <Button*/}
      {/*    color={'var(--theme_primary_color_blue_4)'}*/}
      {/*    bgcolor={'var(--theme_primary_color_blue_1)'}*/}
      {/*    border={'var(--theme_primary_color_blue_1)'}*/}
      {/*    hover_border={'var(--theme_primary_color_blue_2)'}*/}
      {/*    hover_bgcolor={'var(--theme_primary_color_blue_2)'}*/}
      {/*    icon={'arrow_right'}*/}
      {/*  >*/}
      {/*    Condiții de utilizare*/}

      {/*  </Button>*/}
      {/*  <Button*/}
      {/*    to="https://mtc.md/my-mtc"*/}
      {/*    color={'var(--theme_primary_color_blue_4)'}*/}
      {/*    bgcolor={'var(--theme_primary_color_blue_1)'}*/}
      {/*    border={'var(--theme_primary_color_blue_1)'}*/}
      {/*    hover_border={'var(--theme_primary_color_blue_2)'}*/}
      {/*    hover_bgcolor={'var(--theme_primary_color_blue_2)'}*/}
      {/*    icon={'arrow_right'}*/}
      {/*  >*/}
      {/*    Comparație*/}
      {/*  </Button>*/}
      {/*</div>*/}
      <div
        className={`${styles.wifi_plus_full_block} ${styles.wifi_carousell_full_bg}`}
      >
        <div
          className={`${styles.wifi_plus_full_block_inside} ${styles.wifi_carousell_full_bg_block}`}
        >
          <div className={styles.wifi_plus_full_block_inside_text}>
            <div className={'title_3'}>Ce este Wi-Fi PLUS?</div>
            <br />
            Wi-Fi PLUS este un serviciu care îți oferă un dispozitiv suplimentar
            pentru extinderea semnalului Wi-Fi în zonele casei cu acoperire
            slabă.
            <br />
            <br />
            Prin amplasarea acestuia în locurile unde semnalul Wi-Fi este slab
            sau inexistent, dispozitivul preia semnalul de la routerul principal
            și îl retransmite, asigurând o conexiune stabilă și rapidă în
            întreaga locuință.
          </div>
        </div>
      </div>
      {/*<div*/}
      {/*  className={`${styles.wifi_plus_full_block} ${styles.wifi_carousell_full_bg_3}`}*/}
      {/*>*/}
      {/*  <div*/}
      {/*    className={`${styles.wifi_plus_full_block_inside} ${styles.wifi_carousell_full_bg_block_3}`}*/}
      {/*  >*/}
      {/*    <div className={styles.wifi_plus_full_block_inside_text}>*/}
      {/*      <div className={'title_3'}>De ce să alegi Wi-Fi PLUS?</div>*/}
      {/*      <br />*/}
      {/*      Conectezi multiple dispozitive la aceeași rețea Wi-Fi, fără a fi*/}
      {/*      necesar să introduci repetat parola și fără întreruperi la navigare*/}
      {/*      în timp ce te deplasezi în locuința ta.{' '}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div
        className={`${styles.wifi_plus_full_block} ${styles.wifi_carousell_full_bg_2}`}
      >
        <div
          className={`${styles.wifi_plus_full_block_inside} ${styles.wifi_carousell_full_bg_block_2}`}
        >
          <div className={styles.wifi_plus_full_block_inside_text_2}>
            <div className={'title_3'}>De ce să alegi Wi-Fi PLUS?</div>
            <br />
            Conectezi multiple dispozitive la aceeași rețea Wi-Fi, fără a fi
            necesar să introduci repetat parola și fără întreruperi la navigare
            în timp ce te deplasezi în locuința ta.{' '}
          </div>
        </div>
      </div>
      <FaqV2 max_faq={6}>
        <FaqQAV2 question="Wi-Fi PLUS este compatibil cu orice router?">
          <div>
            Wi-Fi PLUS este proiectat pentru a fi compatibil cu majoritatea
            routerelor moderne. Pentru detalii specifice despre compatibilitate,
            te rugăm să consulți documentația echipamentului sau să contactezi
            Serviciul Suport Clienți.
          </div>
        </FaqQAV2>
        <FaqQAV2 question="Pot deconecta serviciul Wi-Fi PLUS?">
          <div>
            Da, serviciul Wi-Fi PLUS poate fi deconectat în orice moment fără
            penalități. Pentru deconectare, returnează echipamentul în orice
            magazin Moldtelecom.
          </div>
        </FaqQAV2>
        <FaqQAV2 question="Cum sunt facturate costurile pentru Wi-Fi PLUS?">
          <div>
            Facturarea începe de la momentul activării serviciului și costurile
            sunt incluse în factura lunară de Internet fix. Facturarea continuă
            până la deconectarea serviciului.
          </div>
        </FaqQAV2>
      </FaqV2>
      <Footer disclaimer={true} />
    </>
  );
}
