import { useParams } from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../components/footer/Footer.tsx';
import styles from './PromoTM.module.css';
import Button from '../../../components/Button.tsx';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function PromoTM() {
  const { url_link } = useParams<{ url_link?: string }>();
  const [name, setName] = useState<string>('[]');

  useEffect(() => {
    if (url_link == '18974898') {
      setName('Veronica Nita');
    }
  });
  const breadcrumbItems = [
    { label: 'Promo', url: 'mobile' },
    { label: 'Mobile' },
  ];
  const { t } = useTranslation();

  return (
    <>
      <Navbar className={styles.navbar} />
      <div className={styles.promo_tm}>
        <Chat />
        <Feedback />
        <Breadcrumb items={breadcrumbItems} />
        <div className={styles.promo_tm_div}>
          <div className={`title_3 ${styles.promo_tm_title_1}`}>
            Stimat(ă) {name},
          </div>

          <div className={styles.text_1}>
            {' '}
            Ne bucurăm că faceți parte din familia Moldtelecom și dorim să vă
            răsplătim loialitatea cu o ofertă exclusivă, creată special pentru
            Dvs.
          </div>
          <div className={styles.text_2}>
            Această ofertă nu se regăsește în comercializarea standard*
          </div>

          <div className={styles.promo_tm_block_1}>
            <div className={`title_3 ${styles.promo_tm_title_2}`}>
              Compară pachetul pe care îl dețineți cu cel creat special pentru
              Dvs.
            </div>
            <div className={styles.compare}>
              <div className={styles.compare_block}>
                <span>
                  {' '}
                  Pachet <b>Existent</b>
                </span>
                <div className={styles.roaming_carousell_block}>
                  <div className={styles.roaming_carousell_block_inside}>
                    <div className={styles.optionsandservices_block_left}>
                      <div className={styles.optionsandservices_block_title}>
                        Smart 120
                      </div>
                      <div className={styles.optionsandservices_block_subtitle}>
                        <span>
                          {' '}
                          Plata lunara: <b>120 lei</b>
                        </span>
                      </div>
                      <div className={styles.optionsandservices_block_inside}>
                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            Minute in reteaua mobila MTC
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            Nelimitat
                          </div>
                        </div>
                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            Minute in reteaua fixa MTC
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            Nelimitat
                          </div>
                        </div>

                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            Minute Nationale
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            350 sau
                          </div>
                        </div>
                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            Minute Internationale
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            35
                          </div>
                        </div>
                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            SMS Nationale
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            35
                          </div>
                        </div>

                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            SMS retea mobila MTC
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            Nelimitat
                          </div>
                        </div>
                        <div className={styles.optionsandservices_block_list}>
                          <div
                            className={
                              styles.optionsandservices_block_list_left
                            }
                          >
                            Trafic Internet
                          </div>

                          <div
                            className={
                              styles.optionsandservices_block_list_right
                            }
                          >
                            35 GB
                          </div>
                        </div>
                        <div
                          style={{ border: '0px' }}
                          className={styles.optionsandservices_block_list}
                        >
                          <div
                            className={
                              styles.optionsandservices_block_list_right_2
                            }
                          >
                            "Promo Spring 35% reducere" <br />
                            Acordarea unei reduceri lunare de 35% timp de 24
                            luni
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.roaming_carousell_block_inside_btns}>
                      {/*<Button*/}
                      {/*  to={'https://mtc.md/my-mtc'}*/}
                      {/*  color="var(--theme_primary_color_blue_4)"*/}
                      {/*  bgcolor="var(--theme_primary_color_blue_2)"*/}
                      {/*  border="var(--theme_primary_color_blue_2)"*/}
                      {/*  hover_border="var(--theme_primary_color_blue_2)"*/}
                      {/*  hover_bgcolor="var(--theme_primary_color_blue_2)"*/}
                      {/*  icon="arrow_right"*/}
                      {/*>*/}
                      {/*  Activează în aplicație*/}
                      {/*</Button>*/}
                      <Button
                        // onClick={() => openPopup('f5')}
                        color="var(--theme_primary_color_blue_4)"
                        bgcolor="var(--theme_primary_color_blue_3)"
                        border="var(--theme_primary_color_blue_3)"
                        hover_border="var(--theme_primary_color_blue_2)"
                        hover_bgcolor="var(--theme_primary_color_blue_2)"
                        icon="arrow_right"
                      >
                        {t('roaming.detalii')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.compare_block}>
                <div className={styles.roaming_carousell_block}>
                  <div className={styles.roaming_carousell_block_sp}>
                    <div className={styles.roaming_carousell_block_sp_title}>
                      Pachet <b>Oferta Speciala!</b>
                    </div>
                    <div className={styles.roaming_carousell_block_inside}>
                      <div className={styles.optionsandservices_block_left}>
                        <div className={styles.optionsandservices_block_title}>
                          ...
                        </div>
                        <div
                          className={styles.optionsandservices_block_subtitle}
                        >
                          ...
                        </div>
                      </div>
                      {/*<div className={styles.optionsandservices_block_inside}></div>*/}
                      <div
                        className={styles.roaming_carousell_block_inside_btns}
                      >
                        {/*<Button*/}
                        {/*  to={'https://mtc.md/my-mtc'}*/}
                        {/*  color="var(--theme_primary_color_blue_4)"*/}
                        {/*  bgcolor="var(--theme_primary_color_blue_2)"*/}
                        {/*  border="var(--theme_primary_color_blue_2)"*/}
                        {/*  hover_border="var(--theme_primary_color_blue_2)"*/}
                        {/*  hover_bgcolor="var(--theme_primary_color_blue_2)"*/}
                        {/*  icon="arrow_right"*/}
                        {/*>*/}
                        {/*  Activează în aplicație*/}
                        {/*</Button>*/}
                        <Button
                          // onClick={() => openPopup('f5')}
                          color="var(--theme_primary_color_blue_4)"
                          bgcolor="var(--theme_primary_color_blue_3)"
                          border="var(--theme_primary_color_blue_3)"
                          hover_border="var(--theme_primary_color_blue_2)"
                          hover_bgcolor="var(--theme_primary_color_blue_2)"
                          icon="arrow_right"
                        >
                          {t('roaming.detalii')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.promo_tm_subtext_1}`}>
              <span>
                Pentru întrebări sau consultanță, sunați la{' '}
                <a href="tel:1180">1180</a> sau apăsați butonul „Consultanță”,
                iar un consultant Moldtelecom vă va contacta în cel mai scurt
                timp.
              </span>
            </div>
            <div className={styles.promo_tm_btns}>
              <div
                className={`${styles.promo_tm_btn} ${styles.promo_tm_btn_green}`}
              >
                {/*<Icon type={'tick'}/> */}✅ Acceptă oferta
              </div>
              <div className={styles.promo_tm_btn}>Consultanța</div>
              <div
                className={`${styles.promo_tm_btn} ${styles.promo_tm_btn_red}`}
              >
                {/*<Icon type={'close'}/> */}❌ Respinge oferta
              </div>
            </div>
          </div>
        </div>

        <div className={styles.promo_tm_footer}>
          <span>
            <b>*Comercializarea standard</b> - reprezintă pachetele și ofertele
            disponibile în mod obișnuit, public și transparent, prin canalele
            oficiale Moldtelecom (site, magazine, call-center). Acestea sunt
            aceleași pentru toți clienții și nu includ condiții speciale,
            reduceri personalizate sau oferte individuale.
          </span>
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
