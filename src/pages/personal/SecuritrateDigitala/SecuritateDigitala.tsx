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

      <Footer disclaimer={true} />
    </>
  );
}
