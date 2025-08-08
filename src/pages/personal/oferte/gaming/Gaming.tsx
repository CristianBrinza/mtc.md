import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './Gaming.module.css';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';

import Button from '../../../../components/Button.tsx';

export default function Gaming() {
  const { t } = useTranslation();

  const breadcrumbItems = [{ label: 'Promo', url: ' ' }, { label: 'Gaming' }];

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
            src={`/images/landings/79934311${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/88678012${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title_3 ${styles.title_main}`}>
        <span>
          Acum ai cele mai tari console, pentru experienta ideala in gaming
        </span>
      </div>

      <div className={styles.info_block}>
        <div className={styles.info_block_text}>
          <Button
            to="https://mtc.md/my-mtc"
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Vezi abonamentele
          </Button>
        </div>
        <img
          className={styles.info_block_img}
          src="/images/landings/12271183.webp"
          alt="Moldtelecom"
        />
      </div>

      <MyApp style_type={'blue_white'} className={styles.myapp} />
      <FaqV2 max_faq={5}>
        <FaqQAV2
          id_faq="112089314"
          question={t('gbps.faq.install_duration_question')}
        >
          {t('gbps.faq.install_duration_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089315"
          question={t('gbps.faq.availability_check_question')}
        >
          {t('gbps.faq.availability_check_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089316"
          question={t('gbps.faq.activate_new_offer_question')}
        >
          {t('gbps.faq.activate_new_offer_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089317"
          question={t('gbps.faq.bill_payment_deadline_question')}
        >
          {t('gbps.faq.bill_payment_deadline_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089318"
          question={t('gbps.faq.late_payment_consequences_question')}
        >
          {t('gbps.faq.late_payment_consequences_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089319"
          question={t('gbps.faq.manage_subscription_remotely_question')}
        >
          {t('gbps.faq.manage_subscription_remotely_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089320"
          question={t('gbps.faq.pause_services_question')}
        >
          {t('gbps.faq.pause_services_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089321"
          question={t('gbps.faq.change_package_question')}
        >
          {t('gbps.faq.change_package_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089322"
          question={t('gbps.faq.move_address_question')}
        >
          {t('gbps.faq.move_address_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089323"
          question={t('gbps.faq.transfer_subscription_question')}
        >
          {t('gbps.faq.transfer_subscription_answer')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />
    </>
  );
}
