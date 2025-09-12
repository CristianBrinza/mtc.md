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

  const renderItems = (key: string) => {
    const items = t(key, { returnObjects: true }) as Array<{
      label: string;
      value: string;
      valability: string;
      price: string;
      tag?: string;
    }>;

    return (
      <div className={styles.optionsandservices_block_table}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.optionsandservices_block_table_row}>
            <div className={styles.optionsandservices_block_table_row_item}>
              {item.tag && (
                <div
                  className={styles.optionsandservices_block_table_row_item_tag}
                >
                  {item.tag}
                </div>
              )}
              <div
                className={styles.optionsandservices_block_table_row_item_info}
              >
                <b>{item.value}</b>{' '}
                <span className={styles.optionsandservices_block_table_row_sub}>
                  {item.label}
                </span>
              </div>
            </div>
            <span>
              {' '}
              {item.price}
              <span className={styles.optionsandservices_block_table_row_price}>
                {' '}
                / {item.valability}
              </span>
            </span>
          </div>
        ))}

        {/*<table>*/}
        {/*  /!*<thead>*!/*/}
        {/*  /!*<tr>*!/*/}
        {/*  /!*  <th>Opțiune</th>*!/*/}
        {/*  /!*  <th>Preț</th>*!/*/}
        {/*  /!*  <th>Valabilitate</th>*!/*/}
        {/*  /!*</tr>*!/*/}
        {/*  /!*</thead>*!/*/}
        {/*  <tbody>*/}
        {/*  {items.map((item, idx) => (*/}
        {/*    <tr key={idx} className={styles.optionsandservices_block_table_row}>*/}
        {/*      <td><b>{item.value}</b></td>*/}
        {/*      <td className={styles.optionsandservices_block_table_td}>{item.price}</td>*/}
        {/*      <td>{item.valability}</td>*/}
        {/*    </tr>*/}
        {/*  ))}*/}
        {/*  </tbody>*/}
        {/*</table>*/}
      </div>
    );
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

      <div className={styles.optionsandservices_block}>
        <div className={styles.optionsandservices_block_top}>
          <div
            className={`${styles.optionsandservices_block_left} ${styles.optionsandservices_block_left_sp}`}
          >
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.internet_mobile.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.internet_mobile.subtitle')}
            </div>

            {renderItems('optionsandservices.blocks.internet_mobile.items')}
          </div>
          <img
            className={styles.optionsandservices_block_top_img_sp}
            src="/images/landings/59865621.webp"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block_bottom}>
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

          <div className={styles.optionsandservices_block_bottom_text}>
            <b>Activează</b> prin{' '}
            <a href={`https://new.moldtelecom.md/${t('lang')}/sms-service`}>
              SMS 100
            </a>
            , aplicația <a href="https://mtc.md/my-mtc">My Moldtelecom</a> sau
            cerere depusă la{' '}
            <a href={`https://new.moldtelecom.md/${t('lang')}/magazine`}>
              Magazine
            </a>
            .
          </div>
        </div>
      </div>
      <div className={styles.optionsandservices_block}>
        <div className={styles.optionsandservices_block_top}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              {t('optionsandservices.blocks.sms.title')}
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              {t('optionsandservices.blocks.sms.subtitle')}
            </div>

            {renderItems('optionsandservices.blocks.sms.items')}
          </div>
          <img
            className={styles.optionsandservices_block_top_img}
            src="/images/landings/59865623.webp"
            alt="Moldtelecom"
          />
        </div>
        <div className={styles.optionsandservices_block_bottom}>
          <Button
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            className={styles.optionsandservices_block_btn}
            onClick={() => setActivePopup('f4')}
          >
            {t('optionsandservices.usage_conditions')}{' '}
            <Icon type="arrow_right" color="#212a55" />
          </Button>
        </div>
      </div>

      <div className={styles.optionsandservices_blocks_2}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_top}>
            <div className={`${styles.optionsandservices_block_left}`}>
              <div className={styles.optionsandservices_block_title}>
                {t('optionsandservices.blocks.national_minutes.title')}
              </div>
              <div className={styles.optionsandservices_block_subtitle}>
                {t('optionsandservices.blocks.national_minutes.subtitle')}
              </div>

              {renderItems('optionsandservices.blocks.national_minutes.items')}
            </div>
            {/*<img*/}
            {/*  className={styles.optionsandservices_block_top_img}*/}
            {/*  src="/images/landings/59865622.webp"*/}
            {/*  alt="Moldtelecom"*/}
            {/*/>*/}
          </div>
          <div className={styles.optionsandservices_block_bottom}>
            <Button
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'var(--theme_primary_color_blue_3)'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f2')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </Button>
          </div>
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_top}>
            <div className={styles.optionsandservices_block_left}>
              <div className={styles.optionsandservices_block_title}>
                {t('optionsandservices.blocks.international_minutes.title')}
              </div>
              <div className={styles.optionsandservices_block_subtitle}>
                {t('optionsandservices.blocks.international_minutes.subtitle')}
              </div>

              {renderItems(
                'optionsandservices.blocks.international_minutes.items'
              )}
            </div>
            {/*<img*/}
            {/*  className={styles.optionsandservices_block_top_img}*/}
            {/*  src="/images/landings/59865623.webp"*/}
            {/*  alt="Moldtelecom"*/}
            {/*/>*/}
          </div>
          <div className={styles.optionsandservices_block_bottom}>
            <Button
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'var(--theme_primary_color_blue_3)'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f3')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.optionsandservices_bg}>
        <div className={`title title_3 ${styles.optionsandservices_title}`}>
          {t('optionsandservices.titles.roaming')}
        </div>

        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_top}>
            <div className={styles.optionsandservices_block_left}>
              <div className={styles.optionsandservices_block_title}>
                {t('optionsandservices.blocks.roaming_europe.title')}
              </div>
              <div className={styles.optionsandservices_block_subtitle}>
                {t('optionsandservices.blocks.roaming_europe.subtitle')}
              </div>

              {renderItems('optionsandservices.blocks.roaming_europe.items')}
            </div>
            <img
              className={styles.optionsandservices_block_top_img}
              src="/images/landings/59865624.webp"
              alt="Moldtelecom"
            />
          </div>
          <div className={styles.optionsandservices_block_bottom}>
            <Button
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'var(--theme_primary_color_blue_3)'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f5')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </Button>
          </div>
        </div>
        <div className={styles.optionsandservices_blocks_2}>
          <div className={styles.optionsandservices_block}>
            <div className={styles.optionsandservices_block_top}>
              <div className={styles.optionsandservices_block_left}>
                <div className={styles.optionsandservices_block_title}>
                  {t('optionsandservices.blocks.roaming_world.title')}
                </div>
                <div className={styles.optionsandservices_block_subtitle}>
                  {t('optionsandservices.blocks.roaming_world.subtitle')}
                </div>

                {renderItems('optionsandservices.blocks.roaming_world.items')}
              </div>
              {/*<img*/}
              {/*  className={styles.optionsandservices_block_top_img}*/}
              {/*  src="/images/landings/59865624.webp"*/}
              {/*  alt="Moldtelecom"*/}
              {/*/>*/}
            </div>
            <div className={styles.optionsandservices_block_bottom}>
              <Button
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                className={styles.optionsandservices_block_btn}
                onClick={() => setActivePopup('f6')}
              >
                {t('optionsandservices.usage_conditions')}{' '}
                <Icon type="arrow_right" color="#212a55" />
              </Button>
            </div>
          </div>
          <div className={styles.optionsandservices_block}>
            <div className={styles.optionsandservices_block_top}>
              <div className={styles.optionsandservices_block_left}>
                <div className={styles.optionsandservices_block_title}>
                  {t('optionsandservices.blocks.roaming_ro.title')}
                </div>
                <div className={styles.optionsandservices_block_subtitle}>
                  {t('optionsandservices.blocks.roaming_ro.subtitle')}
                </div>

                {renderItems('optionsandservices.blocks.roaming_ro.items')}
              </div>
              {/*<img*/}
              {/*  className={styles.optionsandservices_block_top_img}*/}
              {/*  src="/images/landings/59865624.webp"*/}
              {/*  alt="Moldtelecom"*/}
              {/*/>*/}
            </div>
            <div className={styles.optionsandservices_block_bottom}>
              <Button
                color={'var(--theme_primary_color_blue_4)'}
                bgcolor={'var(--theme_primary_color_blue_3)'}
                border={'var(--theme_primary_color_blue_3)'}
                hover_border={'var(--theme_primary_color_blue_2)'}
                hover_bgcolor={'var(--theme_primary_color_blue_2)'}
                className={styles.optionsandservices_block_btn}
                onClick={() => setActivePopup('f9')}
              >
                {t('optionsandservices.usage_conditions')}{' '}
                <Icon type="arrow_right" color="#212a55" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={`title title_3 ${styles.optionsandservices_title}`}>
        {t('optionsandservices.titles.other')}
      </div>

      <div className={styles.optionsandservices_blocks_2}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_top}>
            <div className={styles.optionsandservices_block_left}>
              <div className={styles.optionsandservices_block_title}>
                {t('optionsandservices.blocks.speed_4g_plus.title')}
              </div>
              <div className={styles.optionsandservices_block_subtitle}>
                {t('optionsandservices.blocks.speed_4g_plus.subtitle')}
              </div>

              {renderItems('optionsandservices.blocks.speed_4g_plus.items')}
            </div>
            {/*<img*/}
            {/*  className={styles.optionsandservices_block_top_img}*/}
            {/*  src="/images/landings/59865624.webp"*/}
            {/*  alt="Moldtelecom"*/}
            {/*/>*/}
          </div>
          <div className={styles.optionsandservices_block_bottom}>
            <Button
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'var(--theme_primary_color_blue_3)'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f7')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </Button>
          </div>
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_top}>
            <div className={styles.optionsandservices_block_left}>
              <div className={styles.optionsandservices_block_title}>
                {t('optionsandservices.blocks.upload_max.title')}
              </div>
              <div className={styles.optionsandservices_block_subtitle}>
                {t('optionsandservices.blocks.upload_max.subtitle')}
              </div>

              {renderItems('optionsandservices.blocks.upload_max.items')}
            </div>
            {/*<img*/}
            {/*  className={styles.optionsandservices_block_top_img}*/}
            {/*  src="/images/landings/59865624.webp"*/}
            {/*  alt="Moldtelecom"*/}
            {/*/>*/}
          </div>
          <div className={styles.optionsandservices_block_bottom}>
            <Button
              color={'var(--theme_primary_color_blue_4)'}
              bgcolor={'var(--theme_primary_color_blue_3)'}
              border={'var(--theme_primary_color_blue_3)'}
              hover_border={'var(--theme_primary_color_blue_2)'}
              hover_bgcolor={'var(--theme_primary_color_blue_2)'}
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f8')}
            >
              {t('optionsandservices.usage_conditions')}{' '}
              <Icon type="arrow_right" color="#212a55" />
            </Button>
          </div>
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
