import Navbar from '../../../../components/navbar/Navbar.tsx';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from '../roaming/Roaming.module.css';

export default function Mobile() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.mobile.title'),
    description: t('pages.mobile.description'),
    keywords: t('pages.mobile.keywords'),
  };
  const breadcrumbItems = [
    { label: 'Promo', url: ' ' },
    { label: 'Telefonie mobila' },
  ];

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
            src={`/images/landings/18074012${t('lang')}.webp`}
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
