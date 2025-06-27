import Navbar from '../../../components/navbar/Navbar.tsx';
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

export default function M2M() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.roaming.title'),
    description: t('pages.roaming.description'),
    keywords: t('pages.roaming.keywords'),
  };
  const breadcrumbItems = [
    { label: t('roaming.breadcrumb.mobile'), url: ' ' },
    { label: t('roaming.breadcrumb.roaming') },
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
            src={`/images/landings/18774032${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/90296512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={'---?'}>
          <div className="mtc_evolution_qa_hiden">---</div>
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />
    </>
  );
}
