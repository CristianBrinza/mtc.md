// src/pages/OneNumber/OneNumber.tsx
import Navbar from '../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './SecuritateDigitala.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import SEO from '../../../components/SEO';
import FaqQAV2 from '../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../components/faqV2/FaqV2.tsx';
import MyApp from '../../../components/app/MyApp.tsx';

export default function SecuritateDigitala() {
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: 'Securitrate Digitala' }];
  const seo = {
    title: t('pages.securitatea_digitala.title'),
    description: t('pages.securitatea_digitala.description'),
    keywords: t('pages.securitatea_digitala.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/13986912${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/18074013${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <MyApp style_type={'blue_white'} className={styles.myapp} />
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
