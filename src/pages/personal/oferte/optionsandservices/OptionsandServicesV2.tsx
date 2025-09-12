// src/pages/OptionsandServices/OptionsandServices.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../../components/navbar/Navbar';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import Hero from '../../../../components/hero/Hero';
import Chat from '../../../../components/chat/Chat';
import Feedback from '../../../../components/feedback/Feedback';
import Footer from '../../../../components/footer/Footer';
import Icon from '../../../../components/Icon';
import MyApp from '../../../../components/app/MyApp';
import FaqV2 from '../../../../components/faqV2/FaqV2';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2';
import Popups from '../../../../components/Popups/Popups';
import styles from './OptionsandServicesV2.module.css';
import SEO from '../../../../components/SEO';
import Button from '../../../../components/Button.tsx';

export default function OptionsandServicesV2() {
  const { t } = useTranslation();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const seo = {
    title: t('pages.optionsandservices.title'),
    description: t('pages.optionsandservices.description'),
    keywords: t('pages.optionsandservices.keywords'),
  };
  const breadcrumbItems = [
    { label: t('optionsandservices.breadcrumb.mobile'), url: ' ' },
    { label: t('optionsandservices.breadcrumb.optionsandservices') },
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
            src={`/images/landings/15074512${t('lang')}.webp`}
            alt="Moldtelecom"
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/16074571${t('lang')}.webp`}
            alt="Moldtelecom"
          />
        </div>
      </Hero>
      <div className={`title title_3 ${styles.optionsandservices_title}`}>
        {t('optionsandservices.titles.select')}
      </div>

      <div className={styles.optionsandservices_block}>
        <div className={styles.optionsandservices_block_left}>
          <div className={styles.optionsandservices_block_title}>
            {t('optionsandservices.blocks.internet_mobile.title')}
          </div>
          <div className={styles.optionsandservices_block_subtitle}>
            {t('optionsandservices.blocks.internet_mobile.subtitle')}
          </div>

          <div className={styles.optionsandservices_block_table}>
            <table>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>

          <Button
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            className={styles.optionsandservices_block_btn}
            onClick={() => setActivePopup('f1')}
          >
            {t('optionsandservices.usage_conditions')}{' '}
            <Icon type="arrow_right" color="#212a55" />
          </Button>
        </div>
      </div>

      <MyApp style_type="blue_white" />
      <FaqV2 max_faq={6}>
        <FaqQAV2 id_faq={'196489106'} question={t('optionsandservices.faq.q1')}>
          <div>
            {t('optionsandservices.faq.a1')
              .split('\n\n')
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
        </FaqQAV2>
        <FaqQAV2 id_faq={'196489107'} question={t('optionsandservices.faq.q2')}>
          <ul>
            {t('optionsandservices.faq.a2')
              .split('\n')
              .filter(l => l.startsWith('•'))
              .map((l, i) => (
                <li key={i}>{l.slice(2)}</li>
              ))}
          </ul>
        </FaqQAV2>
        <FaqQAV2 id_faq={'196489108'} question={t('optionsandservices.faq.q3')}>
          <ul>
            {t('optionsandservices.faq.a3')
              .split('\n')
              .filter(l => l.startsWith('•'))
              .map((l, i) => (
                <li key={i}>{l.slice(2)}</li>
              ))}
          </ul>
        </FaqQAV2>
        <FaqQAV2 id_faq={'196489109'} question={t('optionsandservices.faq.q4')}>
          <div>{t('optionsandservices.faq.a4')}</div>
        </FaqQAV2>
        <FaqQAV2 id_faq={'196489110'} question={t('optionsandservices.faq.q5')}>
          <div>{t('optionsandservices.faq.a5')}</div>
        </FaqQAV2>
      </FaqV2>
      <Footer disclaimer />
      <Popups content={activePopup} onClose={() => setActivePopup(null)} />
    </>
  );
}
