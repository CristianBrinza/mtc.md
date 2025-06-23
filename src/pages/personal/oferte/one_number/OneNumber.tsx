// src/pages/OneNumber/OneNumber.tsx
import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './OneNumber.module.css';
import Footer from '../../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import Button from '../../../../components/Button.tsx';
import CostumeFunctions from '../../../../components/functions/CostumeFunctions.tsx';
import React from 'react';
import Icon from '../../../../components/Icon.tsx';

export default function OneNumber() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    // { label: t('promorazuieste.breadcrumb.app'), url: ' ' },
    // { label: t('promorazuieste.breadcrumb.name') },
    { label: 'Mobil', url: ' ' },
    { label: 'One Number' },
  ];

  const [activeStep, setActiveStep] = React.useState(1);
  const [showVideoIndex, setShowVideoIndex] = React.useState<number | null>(
    null
  );

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
            src={`/images/landings/19074911${t('lang')}.webp`}
            alt={'Moldtelecom'}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/15994522${t('lang')}.webp`}
            alt={'Moldtelecom'}
          />
        </div>
      </Hero>

      <div className={`title_3 ${styles.one_number_title}`}>
        Trăiește-ți viața la maxim
      </div>
      <CostumeFunctions
        style_type="blue"
        costume={[
          {
            id: 'custom0',
            icon: 'comfort',
            title: 'Confort și flexibilitate ',
            text: 'Rămâi conectat mereu, fără a depinde mereu de telefon.',
          },
          {
            id: 'custom0',
            icon: 'security',
            title: 'Siguranță ',
            text: 'Nu rata nici o notificare, chiar și când nu au telefonul la îndemână.',
          },
          {
            id: 'custom0',
            icon: 'smartwatch',
            title: 'Mobilitate ',
            text: 'Libertatea de a comunica oriunde și oricând, direct din smartwatch.',
          },
          {
            id: 'custom0',
            icon: 'money',
            title: 'Eficiență ',
            text: 'Un singur abonament pentru ambele device-uri.',
          },
        ]}
      />

      <div className={styles.activate}>
        <div className={`title_3 ${styles.activate_title}`}>
          Cum activezi One Number?
        </div>

        <div className={styles.activate_how}>
          <img
            className={styles.activate_img}
            src="/images/landings/65979901.webp"
            alt="Moldtelecom"
          />

          <div className={styles.activate_how_explain}>
            <div className={styles.activate_how_explain_top}>
              <div
                className={`${styles.activate_how_explain_top_btn} ${
                  activeStep === 1 ? styles.active : ''
                }`}
                onClick={() => setActiveStep(1)}
              >
                <div className={styles.activate_how_explain_top_btn_top}>
                  <b>
                    1. Activarea <span>One Number</span> pe Smartwatch
                  </b>{' '}
                  (generare eSIM)
                </div>
                <div className={styles.activate_how_explain_top_btn_bottom}>
                  Vezi pașii
                  <Icon type={'arrow_right'} />
                </div>
              </div>

              <div
                className={`${styles.activate_how_explain_top_btn} ${
                  activeStep === 2 ? styles.active : ''
                }`}
                onClick={() => setActiveStep(2)}
              >
                <div className={styles.activate_how_explain_top_btn_top}>
                  <b>2. Activare acum eSIM pe</b> <br /> Samsung Smartwatch
                </div>
                <div className={styles.activate_how_explain_top_btn_bottom}>
                  Vezi pașii
                  <Icon type={'arrow_right'} />
                </div>
              </div>
            </div>

            {activeStep === 1 && (
              <div className={styles.activate_how_explain_bottom_cards}>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    1. Loghează-te în aplicația My Moldtelecom
                  </div>
                  Deschide aplicația și autentifică-te folosind datele tale de
                  acces.
                </div>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    2. Accesează numărul
                  </div>
                  Selectează numărul de telefon dorit și intră în meniul „Mai
                  Multe”, apoi alege „One Number”.
                </div>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    3. Activare One Number
                  </div>
                  Parcurge informațiile generale despre serviciul One Number,
                  apoi selectează „Activează One Number”. Confirmă activarea
                  serviciului și treci peste procesul de validare.
                </div>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    4. Scanează codul QR
                  </div>
                  Pe ecran va apărea un cod QR pe care să-l scanezi pentru a
                  activa One Number pe smartwatch-ul tău.
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className={styles.activate_how_explain_bottom_cards}>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    1. Galaxy Wearable
                  </div>
                  Descarcă și deschide aplicația Galaxy Wearable pe telefon și
                  asociază smartwatch-ul.
                </div>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    2. Setări
                  </div>
                  În aplicație accesează Setări ceas {`>`} Abonamente mobile{' '}
                  {`>`} Utilizare cod.
                </div>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    3. Scanează codul QR
                  </div>
                  Finisează configurarea prin accesarea Efectuat.
                </div>
                <div className={styles.activate_how_explain_bottom}>
                  <div className={styles.activate_how_explain_bottom_title}>
                    4. Efectuat
                  </div>
                  Scanează codul QR al eSIM-ului și urmează instrucțiunile
                  pentru a finaliza configurarea.
                </div>
              </div>
            )}

            <div className={styles.activate_how_explain_bottom_btns}>
              <Button
                to="https://my.moldtelecom.md/my-moldtelecom/"
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                Activează acum
              </Button>
              <Button
                onClick={() => {
                  setShowVideoIndex(0);
                }}
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                icon={'arrow_right'}
              >
                Ghid Video
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.activate_subtext}>
          *După ce ai finalizat toți pașii, verifică dacă ceasul tău este
          conectat la rețeaua mobilă. Poți face acest lucru verificând
          indicatorul de semnal pe ceas. Dacă întâmpini probleme, contactează
          serviciul de suport Moldtelecom la 022 500 500.
        </div>
      </div>

      <div className={styles.one_number_block_1}>
        <div className={styles.one_number_block_1_inside}>
          <div className={`title_3 ${styles.one_number_title_1}`}>
            Ce este <br />
            ONE NUMBER?
          </div>
          <div className={styles.one_number_block_1_inside_text}>
            {/*One Number reprezintă un serviciu nou lansat de Moldtelecom! */}
            <div className={styles.one_number_block_1_inside_text_block}>
              Acum poți utiliza atât telefonul, cât și ceasul inteligent, cu{' '}
              <b>un singur număr de telefon</b> și un <b>singur abonament</b>.
            </div>

            <div className={styles.one_number_block_1_inside_text_block}>
              Această soluție inteligentă îți permite să profiți la maximum de
              timpul tău și să te bucuri de o comunicare mai eficientă.
            </div>
          </div>
          <Button
            to="https://mtc.md/my-mtc"
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Activează acum
          </Button>
        </div>
        <div className={styles.one_number_block_1_inside}>
          <div className={`title_3 ${styles.one_number_title_1}`}>
            Cum funcționează <br />
            ONE NUMBER?
          </div>
          <div className={styles.one_number_block_1_inside_text}>
            Primești apeluri și comunici atât de pe smartphone-ul tău, cât și de
            pe smartwatch-ul asociat.
            <ul>
              <li>
                gestionezi două cartele SIM și eSIM și să folosești un singur
                număr de telefon mobil;
              </li>
              <li>
                comunici de pe ambele dispozitive din contul abonamentului mobil
                existent;
              </li>
            </ul>
          </div>
          <div className={styles.one_number_block_1_inside_subtext}>
            *Înainte de a activa One Number, verifică dacă dispozitivul tău este
            compatibil cu tehnologia eSIM.{' '}
            <a href="">Lista smartwatch-urilor</a> .
          </div>
        </div>
      </div>

      {/*<div className={styles.one_number_block_2_video}>*/}
      {/*  <div className={`title_3 ${styles.one_number_title_2}`}>*/}
      {/*    Cum activezi <br/> serviciul One Number?*/}
      {/*  </div>*/}

      {/*  <iframe*/}
      {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}

      {/*    referrerPolicy="strict-origin-when-cross-origin"*/}
      {/*    src="https://www.youtube.com/embed/KZZeiAHckig"*/}
      {/*    title=""*/}
      {/*  ></iframe>*/}
      {/*</div>*/}

      <MyApp style_type={'blue_white'} />

      <FaqV2 max_faq={7}>
        <FaqQAV2 question={'Pentru cine este disponibil One Number?'}>
          <div>
            Serviciul One Number este disponibil pentru toți clienții care au un
            abonament mobil de la Moldtelecom și sunt deținători de
            smartwatch-uri compatibile cu One Number. Vezi aici lista de ceasuri
            disponibile.
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Este posibilă dezactivarea One Number?'}>
          <div>
            Da, este posibilă dezactivarea opțiunii One Number din aplicația My
            Moldtelecom (opțiunea One Number) și o poți dezactiva oricând
            dorești.
          </div>
        </FaqQAV2>
        <FaqQAV2
          question={
            'Cum procedez dacă smartwatch-ul a fost pierdut sau furat?\n'
          }
        >
          <div>
            În această situație, poți apela la 022 500 500, la Serviciul
            Asistență Clienți, unde vei fi ghidat în soluționarea problemei.
          </div>
        </FaqQAV2>
        <FaqQAV2
          question={'Voi putea folosi SIM-ul suplimentar și în roaming?\n'}
        >
          <div>
            One Number funcționează doar pe teritoriul Republicii Moldova. În
            afara granițelor, va funcționa doar SIM-ul principal. În cazul în
            care încerci să activezi serviciul One Number și este activat
            Roaming-ul, nu se va permite activarea serviciului One Number până
            când nu dezactivezi Roaming-ul.
          </div>
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />

      {showVideoIndex !== null && (
        <div
          className={`${styles.videos_popup} ${styles.videos_popup_show}`}
          onClick={() => setShowVideoIndex(null)}
        >
          <iframe
            className={styles.videos_carousell_iframe_popup}
            src={'https://www.youtube.com/embed/KZZeiAHckig'}
            title="Ghid Video One Number"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
}
