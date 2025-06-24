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
import styles from './OptionsandServices.module.css';
import SEO from '../../../../components/SEO';

export default function OptionsandServices() {
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

  const renderItems = (key: string) => {
    const items = t(key, { returnObjects: true }) as Array<{
      label: string;
      price: string;
    }>;
    return items.map((item, idx) => (
      <div key={idx} className={styles.optionsandservices_block_list}>
        <div
          className={styles.optionsandservices_block_list_left}
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
        <div className={styles.optionsandservices_block_list_right}>
          {item.price}
        </div>
      </div>
    ));
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
      <div className={styles.optionsandservices_blocks}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.internet_mobile.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.internet_mobile.subtitle')}
            </div>
            <div
              className={`${styles.optionsandservices_block_inside} ${styles.optionsandservices_block_inside_1}`}
            >
              {renderItems('optionsandservices.blocks.internet_mobile.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f1')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/35974512.png"
            alt="Moldtelecom"
          />
          <img
            className={styles.optionsandservices_block_img_mob}
            src="/images/landings/15994011.png"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.national_minutes.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.national_minutes.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems('optionsandservices.blocks.national_minutes.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f2')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/35974011.png"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.international_minutes.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.international_minutes.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems(
                'optionsandservices.blocks.international_minutes.items'
              )}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f3')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/75974512.png"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.sms.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.sms.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems('optionsandservices.blocks.sms.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f4')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/95944014.png"
            alt="Moldtelecom"
          />
        </div>
      </div>
      <div className={`title title_3 ${styles.optionsandservices_title}`}>
        {t('optionsandservices.titles.roaming')}
      </div>
      <div className={styles.optionsandservices_blocks}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.roaming_europe.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.roaming_europe.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems('optionsandservices.blocks.roaming_europe.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f5')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/39974511.png"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.roaming_world.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.roaming_world.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems('optionsandservices.blocks.roaming_world.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f6')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/36974511.png"
            alt="Moldtelecom"
          />
        </div>
      </div>
      <div className={`title title_3 ${styles.optionsandservices_title}`}>
        {t('optionsandservices.titles.other')}
      </div>
      <div className={styles.optionsandservices_blocks}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.speed_4g_plus.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.speed_4g_plus.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems('optionsandservices.blocks.speed_4g_plus.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f7')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/15979001.png"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.upload_max.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.upload_max.subtitle')}
            </div>
            <div className={styles.optionsandservices_block_inside}>
              {renderItems('optionsandservices.blocks.upload_max.items')}
            </div>
            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f8')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/15779001.png"
            alt="Moldtelecom"
          />
        </div>
      </div>
      <MyApp style_type="blue_white" />
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={t('optionsandservices.faq.q1')}>
          <div>
            {t('optionsandservices.faq.a1')
              .split('\n\n')
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
        </FaqQAV2>
        <FaqQAV2 question={t('optionsandservices.faq.q2')}>
          <ul>
            {t('optionsandservices.faq.a2')
              .split('\n')
              .filter(l => l.startsWith('•'))
              .map((l, i) => (
                <li key={i}>{l.slice(2)}</li>
              ))}
          </ul>
        </FaqQAV2>
        <FaqQAV2 question={t('optionsandservices.faq.q3')}>
          <ul>
            {t('optionsandservices.faq.a3')
              .split('\n')
              .filter(l => l.startsWith('•'))
              .map((l, i) => (
                <li key={i}>{l.slice(2)}</li>
              ))}
          </ul>
        </FaqQAV2>
        <FaqQAV2 question={t('optionsandservices.faq.q4')}>
          <div>{t('optionsandservices.faq.a4')}</div>
        </FaqQAV2>
        <FaqQAV2 question={t('optionsandservices.faq.q5')}>
          <div>{t('optionsandservices.faq.a5')}</div>
        </FaqQAV2>
      </FaqV2>
      <Footer disclaimer />
      <Popups content={activePopup} onClose={() => setActivePopup(null)} />
    </>
  );
}
