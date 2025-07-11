import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO.tsx';
import Navbar from '../../../../components/navbar/Navbar.tsx';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import styles from './SmsServices.module.css';
import Hero from '../../../../components/hero/Hero.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import Button from '../../../../components/Button.tsx';
import { useState } from 'react';
import Popup from '../../../../components/Popup/Popup.tsx';
import ScrollableWrapper from '../../../../components/Popup/ScrollableWrapper.tsx';

export default function SmsServices() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.sms_services.title'),
    description: t('pages.sms_services.description'),
    keywords: t('pages.sms_services.keywords'),
  };
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const breadcrumbItems = [
    { label: t('sms_services.breadcrumb.mobile'), url: ' ' },
    { label: t('sms_services.breadcrumb.optionsandservices') },
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
            src={`/images/landings/18074332${t('lang')}.webp`}
            alt={t('sms_services.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/16074571${t('lang')}.webp`}
            alt={t('sms_services.hero.alt')}
          />
        </div>
      </Hero>
      <div className={styles.sms_title_1}>{t('sms_services.title_1')}</div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/images/landings/10171083.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.internet_packages')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251120');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/20771083.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.national_minutes')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251121');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/10571083.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.international_packages')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251122');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/15172083.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.roaming_world')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251123');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/15672983.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.roaming_europe')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251124');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/15672984.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.roaming_romania')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251129');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/69171082.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.sms_packages')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251125');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/15672989.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.account_status')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251126');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/10571085.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.language_change')}
          </div>

          <Button
            onClick={() => {
              setActivePopup('1251127');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        <div className={styles.card}>
          <img src="/images/landings/20771088.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.fly_prepay_series')}
          </div>

          <Button
            onClick={() => {
              setActivePopup('1251130');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
        {/*<div className={styles.card}>*/}
        {/*  <img src="/images/landings/33171083.webp" alt="Moldtelecom" />*/}
        {/*  <div className={styles.card_title}>Moldtelecom Talk</div>*/}

        {/*  <Button*/}
        {/*    onClick={() => {*/}
        {/*      setActivePopup('1251128');*/}
        {/*    }}*/}
        {/*    color={'var(--theme_primary_color_blue_4)'}*/}
        {/*    bgcolor={'var(--theme_primary_color_blue_3)'}*/}
        {/*    border={'var(--theme_primary_color_blue_3)'}*/}
        {/*    hover_border={'var(--theme_primary_color_blue_2)'}*/}
        {/*    hover_bgcolor={'var(--theme_primary_color_blue_2)'}*/}
        {/*    icon={'arrow_right'}*/}
        {/*  >*/}
        {/*    {''}*/}
        {/*  </Button>*/}
        {/*</div>*/}

        <div className={`${styles.card} ${styles.card_white}`}>
          <img src="/images/landings/18171083.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>
            {t('sms_services.cards.other_possibilities')}
          </div>
          <Button
            onClick={() => {
              setActivePopup('1251131');
            }}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            {''}
          </Button>
        </div>
      </div>

      <div
        className={styles.sms_text}
        dangerouslySetInnerHTML={{ __html: t('sms_services.sms_text_html') }}
      />

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={t('sms_services.faq.q1')} id_faq={'126489311'}>
          {t('sms_services.faq.a1')}
        </FaqQAV2>
        <FaqQAV2 question={t('sms_services.faq.q2')} id_faq={'126489312'}>
          <div dangerouslySetInnerHTML={{ __html: t('sms_services.faq.a2') }} />
        </FaqQAV2>
        <FaqQAV2 question={t('sms_services.faq.q3')} id_faq={'126489313'}>
          <div dangerouslySetInnerHTML={{ __html: t('sms_services.faq.a3') }} />
        </FaqQAV2>
        <FaqQAV2 question={t('sms_services.faq.q4')} id_faq={'126489314'}>
          {t('sms_services.faq.a4')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />

      <Popup
        id="1251120"
        width="1000px"
        isVisible={activePopup === '1251120'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.internet.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.internet.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.internet.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251121"
        width="1000px"
        isVisible={activePopup === '1251121'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.national_minutes.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.national_minutes.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.national_minutes.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251122"
        width="1000px"
        isVisible={activePopup === '1251122'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.international.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.international.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.international.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251123"
        width="1000px"
        isVisible={activePopup === '1251123'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.roaming_world.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.roaming_world.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.roaming_world.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251124"
        width="1000px"
        isVisible={activePopup === '1251124'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.roaming_europe.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.roaming_europe.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.roaming_europe.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251125"
        width="1000px"
        isVisible={activePopup === '1251125'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.sms_packages.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.sms_packages.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.sms_packages.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251126"
        width="1000px"
        isVisible={activePopup === '1251126'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.account_status.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.account_status.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.account_status.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251127"
        width="1000px"
        isVisible={activePopup === '1251127'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.language_change.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.language_change.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.language_change.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251129"
        width="1000px"
        isVisible={activePopup === '1251129'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.roaming_romania.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.roaming_romania.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.roaming_romania.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251130"
        width="1000px"
        isVisible={activePopup === '1251130'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.fly_prepay_series.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.fly_prepay_series.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.fly_prepay_series.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251128"
        width="1000px"
        isVisible={activePopup === '1251128'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.moldtelecom_talk.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.moldtelecom_talk.head_html'),
              }}
            />
            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.moldtelecom_talk.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251121"
        width="1000px"
        isVisible={activePopup === '1251131'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>
          {t('sms_services.tables.other_possibilities.title')}
        </div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.other_possibilities.head_html'),
              }}
            />

            <tbody
              className={styles.popup_table_body}
              dangerouslySetInnerHTML={{
                __html: t('sms_services.tables.other_possibilities.body_html'),
              }}
            />
          </table>
        </ScrollableWrapper>
      </Popup>
    </>
  );
}
