// src/pages/OneNumber/OneNumber.tsx

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';

import styles from './SecuritateDigitala.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import SEO from '../../../components/SEO';
import FaqQAV2 from '../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../components/faqV2/FaqV2.tsx';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Button from '../../../components/Button.tsx';
import Details, { DetailsBlock } from '../../../components/details/Details.tsx';

export default function SecuritateDigitala() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    {
      label: 'Safe-Web',
      url: ' https://www.moldtelecom.md/ro/personal/safe-web',
    },
    { label: 'Securitrate Digitala' },
  ];
  const seo = {
    title: t('pages.securitatea_digitala.title'),
    description: t('pages.securitatea_digitala.description'),
    keywords: t('pages.securitatea_digitala.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar className={styles.navbar} />
      <Chat />
      <Feedback />
      <div className={styles.top}>
        <Breadcrumb items={breadcrumbItems} />

        <div className={styles.hero}>
          <div className={styles.hero_left}>
            <div className={styles.hero_tag}>
              1 lună&nbsp;<span className={styles.hero_tag_1}>|</span>&nbsp;
              <span className={styles.hero_tag_2}>GRATUIT</span>
            </div>
            <div className={styles.hero_title}>
              Protecție 100% cu Securitatea Digitală
            </div>
            <div className={styles.hero_subtitle}>
              Soluția all-in-one, unică în Moldova, care te protejează împotriva
              amenințărilor online și îți oferă control total asupra
              conținutului accesat pe internet.
            </div>

            <Button
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

          <img
            src="/images/landings/10174119.webp"
            alt="Moldtelecom"
            className={styles.hero_img}
          />
        </div>

        <div className={styles.certificate}>
          <div className={styles.certificate_left}>
            <img
              src="/images/landings/10174219.webp"
              alt="Moldtelecom"
              className={styles.certificate_img}
            />
            <div className={styles.certificate_text}>
              <span>
                <b>Securitatea Digitală,</b> face parte din inițiativa{' '}
                <b>DNS4EU</b>
              </span>{' '}
              <br />
              <span className={styles.certificate_text_small}>
                (un proiect al Comisiei Europene care oferă infrastructură
                securizată, protecție si confidențialitate.)
              </span>
            </div>
          </div>
          <Button
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            mai multe
          </Button>
        </div>
      </div>
      <div className={styles.gradient_end}></div>

      <div className={styles.why}>
        <div className={styles.why_title}>Cel mai sigur operator!</div>
        <div className={styles.why_blocks}>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <b>Blochează phishing-ul și site-urile false</b>
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              Previne <b>criptomining-ul</b> ascuns
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              Filtrează <b>spam-ul</b> și <b>reclamele intruzive</b>
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <b>Limita</b> accesului la <b>aplicații</b> și{' '}
              <b>oprirea notificărilor</b>
            </span>
          </div>
          <div className={styles.why_block}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#ADBBFF" />
              <g clip-path="url(#clip0_13911_1433)">
                <path
                  d="M15.5312 27.4697L22.0559 33.9944L37.7151 17.0303"
                  stroke="white"
                  stroke-width="3.32758"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13911_1433">
                  <rect
                    width="26.6206"
                    height="26.6206"
                    fill="white"
                    transform="translate(13.3125 12.2021)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <b>Fără monetizare a datelor </b>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.what}>
        <img
          src="/images/landings/15484119.webp"
          alt="Moldtelecom"
          className={styles.what_img}
        />
        <div className={styles.what_right}>
          <div className={styles.what_title}>
            Ce este <span>M-Security</span>?
          </div>
          <div>
            Securitatea Digitală este soluția <b>all-in-one</b> care, te{' '}
            <b>protejează online</b>, <b>blocheaza publicitatea</b>,{' '}
            <b>spam-ul</b> și <b>notificarile cu reclame</b>, monitorizeaza
            parolele, carduri, documente, sb canează internetul și darknet-ul
            pentru a depista scurgerile de date, și îți oferă instrumente
            avansate pentru a gestiona accesul la aplicații și conținut
            <br />
            <br />
            Serviciul <b>funcționează automat</b>, analizează linkurile și
            paginile vizitate și blochează atacurile cibernetice, site-urile
            false și tentativele de furt de date.
          </div>
        </div>
      </div>

      <div className={`${styles.subs_title} title_3`}>
        Protejați-vă dispozitivul de amenințările online
      </div>

      <Details trackPrefix="msecurity">
        <DetailsBlock title={'Condiții de utilizare'}>test</DetailsBlock>
      </Details>

      <FaqV2 max_faq={5}>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089901"
          question={'Ce este serviciul „Securitatea Digitală”?'}
        >
          „Securitatea Digitală” vă protejează dispozitivul și datele personale
          de diverse amenințări online: spam, programe malware (troieni, viruși,
          viermi), atacuri de tip phishing, rețele botnet, site-uri compromise
          și alte riscuri din Internet.
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089902"
          question={'Cine poate beneficia de serviciul „Securitatea Digitală”?'}
        >
          Serviciul este disponibil pentru abonații de <b>Telefonie Mobilă</b>{' '}
          și pentru abonații de Servicii de <b>Internet / Internet + IPTV</b>.
          <ul>
            <li>
              În cazul abonaților de Telefonie Mobilă, protecția este activă pe
              dispozitivul care utilizează numărul de telefon pentru care a fost
              activat serviciul.
            </li>
            <li>
              În cazul abonaților de Servicii de Internet / Internet + IPTV,
              toate dispozitivele conectate la rețeaua clientului – fie prin
              cablu, fie prin Wi-Fi – vor fi protejate automat de „Securitatea
              Digitală”.
            </li>
          </ul>
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089903"
          question={'Ce este „Protecția datelor personale”?'}
        >
          „Protecția datelor personale” monitorizează posibile scurgeri pentru
          peste 65 de tipuri de informații: numere de carduri bancare, parole,
          mesaje text, documente și alte date confidențiale. De asemenea,
          funcția permite protejarea numărului de telefon, a adresei de e-mail
          și a conturilor asociate, asigurând un nivel suplimentar de securitate
          pentru informațiile dvs. personale.
        </FaqQAV2>
        <FaqQAV2
          trackPrefix="securitatea_digitala"
          id_faq="192089904"
          question={'Ce este „Blocarea aplicațiilor”?'}
        >
          Funcția permite restricționarea accesului anumitor aplicații pe
          dispozitiv și blocarea notificărilor nedorite.
        </FaqQAV2>
        {/*  <FaqQAV2*/}
        {/*    trackPrefix="securitatea_digitala"*/}
        {/*    id_faq="192089905"*/}
        {/*    question={''}*/}
        {/*  >*/}

        {/*  </FaqQAV2>*/}
        {/*  <FaqQAV2*/}
        {/*    trackPrefix="securitatea_digitala"*/}
        {/*    id_faq="192089906"*/}
        {/*    question={''}*/}
        {/*  >*/}

        {/*  </FaqQAV2>*/}
        {/*  <FaqQAV2*/}
        {/*  trackPrefix="securitatea_digitala"*/}
        {/*  id_faq="192089907"*/}
        {/*  question={''}*/}
        {/*>*/}

        {/*</FaqQAV2>*/}
        {/*  <FaqQAV2*/}
        {/*  trackPrefix="securitatea_digitala"*/}
        {/*  id_faq="192089908"*/}
        {/*  question={''}*/}
        {/*>*/}

        {/*</FaqQAV2>*/}
      </FaqV2>

      <Footer disclaimer={true} />
    </>
  );
}
