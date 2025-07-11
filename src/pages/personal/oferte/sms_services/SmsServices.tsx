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
            alt="Moldtelecom"
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/16074571${t('lang')}.webp`}
            alt="Moldtelecom"
          />
        </div>
      </Hero>
      <div className={styles.sms_title_1}>
        Pentru utilizarea serviciului SMS Service 100 este suficientă expedierea
        de la telefonul tău mobil a unor SMS coduri la numărul scurt 100.
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/images/landings/10171083.webp" alt="Moldtelecom" />
          <div className={styles.card_title}>Pachete internet</div>
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
          <div className={styles.card_title}>Pachete minute naționale</div>
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
          <div className={styles.card_title}>Pachete internațional</div>
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
          <div className={styles.card_title}>Roaming World</div>
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
          <div className={styles.card_title}>Roaming Europa</div>
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
          <div className={styles.card_title}>Roaming Romania</div>
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
          <div className={styles.card_title}>Pachete SMS</div>
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
          <div className={styles.card_title}>Starea contului</div>
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
          <div className={styles.card_title}>Schimbarea limbei</div>

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
          <div className={styles.card_title}>Seria de opțiuni Fly Prepay</div>

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
          <div className={styles.card_title}>Alte posibilităţi</div>
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

      <div className={styles.sms_text}>
        <br />
        Explicația simbolurilor utilizate în tabel:
        <br />
        <b>„n/a”</b> – nu se aplică;
        <br />
        <b>„*”</b> - cifrele codului Pin de pe cartela de reîncărcare
        Moldtelecom;
        <br />
        <b>„x”</b> - cifrele numărului de telefon al abonatului pentru care va
        fi aplicat serviciul, numărul de telefon va fi introdus cu prefixul “0”;
        <br />
        <b>„&lt; &gt;”</b> - câmpurile pentru care nu a fost definit câmpul
        cheie şi nu necesită de a fi utilizate la expedierea mesajului;
        <br />
        <b>„&nbsp;_”</b> - spaţiu liber.
        <br />
        Pentru întrebări suplimentare apelează Serviciul Asistență Clienți,
        formând numărul <a href="tel:1181">1181</a> sau{' '}
        <a href="tel:022200200">(022) 200 200</a>.
      </div>

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2
          question={'Cum pot afla numărul meu de telefon?'}
          id_faq={'126489311'}
        >
          Trimite un SMS cu textul „NUMBER” la 100 și vei primi un mesaj cu
          numărul tău.
        </FaqQAV2>
        <FaqQAV2 question={'Cum pot reîncărca contul?'} id_faq={'126489312'}>
          <ul>
            <li>
              Pentru reîncărcare, trimite un SMS cu „R_************” (unde *
              reprezintă codul PIN de pe cartela de reîncărcare) la 100.
            </li>
            <li>
              Pentru a cere unui prieten să îți reîncarce contul, trimite un SMS
              cu „RM_0xxxxxxxx” la 100 (unde „0xxxxxxxx” este numărul
              destinatarului).
            </li>
          </ul>
        </FaqQAV2>
        <FaqQAV2
          question={' Cum pot activa Roaming-ul UE sau World?'}
          id_faq={'126489313'}
        >
          Trimite SMS-ul corespunzător la 100, de exemplu:
          <ul>
            <li>
              „UE100net” pentru 2GB internet roaming în UE (100 lei, 30 zile)
            </li>
            <li>
              „Int30” pentru 30 de minute internaționale în România și Ucraina
              (50 lei, 30 zile).
            </li>
          </ul>
        </FaqQAV2>
        <FaqQAV2
          question={' Cum pot achita facturile Moldtelecom?'}
          id_faq={'126489314'}
        >
          Facturile pot fi achitate online prin site-ul Moldtelecom, prin
          aplicația mobilă, la terminalele de plată, bănci partenere sau
          magazine Moldtelecom.
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />

      <Popup
        id="1251120"
        width="1000px"
        isVisible={activePopup === '1251120'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Pachete internet:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>Nelimitat1zi</td>
                <td>Activare Internet Nelimitat o zi</td>
                <td>20 lei</td>
                <td>1 zi</td>
              </tr>
              <tr>
                <td>Nelimitat/7</td>
                <td>Activare Internet Nelimitat 7 zile</td>
                <td>100 lei</td>
                <td>7 zile</td>
              </tr>
              <tr>
                <td>10GB/15</td>
                <td>Internet 10 GB 15 zile</td>
                <td>50 lei</td>
                <td>15 zile</td>
              </tr>
              <tr>
                <td>5GB/30</td>
                <td>
                  Internet 5 GB 30<span>&nbsp;zile</span>
                </td>
                <td>60 lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>10GB</td>
                <td>
                  Internet 10 GB&nbsp;
                  <span>
                    30<span>&nbsp;zile</span>
                  </span>
                </td>
                <td>100 lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>20GB</td>
                <td>
                  Internet 20 GB&nbsp;
                  <span>
                    30<span>&nbsp;zile</span>
                  </span>
                </td>
                <td>150 lei</td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251121"
        width="1000px"
        isVisible={activePopup === '1251121'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Pachete minute naționale:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>50min</td>
                <td>50 minute naționale</td>
                <td>15 lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>100min</td>
                <td>100 minute naționale</td>
                <td>40 lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>200min</td>
                <td>200 minute naționale</td>
                <td>70 lei</td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251122"
        width="1000px"
        isVisible={activePopup === '1251122'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Pachete internațional:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong> SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif&nbsp;&nbsp;</strong>
                </td>
                <td>
                  <strong>Conținut</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>Int30</td>
                <td>Activare România și Ucraina</td>
                <td>50 lei</td>
                <td>
                  30 min.
                  <br />
                  internationale&nbsp;
                </td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>Int25</td>
                <td>
                  Activare Europa, Israel, SUA, Canada&nbsp; &nbsp;
                  <br />
                  <a href="https://moldtelecom.md/ru/Optiuni-telefonie-mobila">
                    (Mai multe detalii )
                  </a>
                </td>
                <td>50 lei</td>
                <td>
                  25 min.
                  <br />
                  internationale
                </td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>Int10</td>
                <td>
                  Activare orice țară
                  <br />
                  <a href="https://moldtelecom.md/ro/apeluri-internationale">
                    (zona 1, zona 2, zona 3)
                  </a>
                </td>
                <td>50 lei</td>
                <td>
                  10 min.
                  <br />
                  internationale
                </td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251123"
        width="1000px"
        isVisible={activePopup === '1251123'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>ROAMING WORLD:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>S</strong>
                  <strong>
                    <strong>M</strong>S cod
                  </strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif&nbsp;</strong>
                </td>
                <td>Conținut</td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>Wapel</td>
                <td>Apeluri World</td>
                <td>70 lei&nbsp;</td>
                <td>10 min</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>Wnet</td>
                <td>Internet World</td>
                <td>100 lei</td>
                <td>1 GB</td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251124"
        width="1000px"
        isVisible={activePopup === '1251124'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>ROAMING Europa:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>Trafic internet</td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>UE70apel</td>
                <td>Apeluri Roaming UE</td>
                <td>70 lei</td>
                <td>100 min</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>UE100net</td>
                <td>Internet Roaming UE</td>
                <td>100 lei</td>
                <td>2 GB</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>UE100</td>
                <td>Combo Roaming UE</td>
                <td>100 lei</td>
                <td>50 min / 1 GB</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>UE180</td>
                <td>Connect Roaming UE</td>
                <td>180 lei</td>
                <td>50 min / 5 GB</td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251125"
        width="1000px"
        isVisible={activePopup === '1251125'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Pachete SMS:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>SMS50</td>
                <td>50 SMS Naţionale</td>
                <td>10&nbsp; lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>SMS35</td>
                <td>20 SMS Internaționale</td>
                <td>35&nbsp; lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>SMS15</td>
                <td>100 SMS Naţionale&nbsp;</td>
                <td>15&nbsp; lei</td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251126"
        width="1000px"
        isVisible={activePopup === '1251126'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Starea contului:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif, lei</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>OPTION</td>
                <td>Verificarea opţiunilor activate</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>BONUS</td>
                <td>Verificarea bonusului</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>LASTREC</td>
                <td>Informaţii despre ultima reîncărcare</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>NUMBER</td>
                <td>A afla numărul meu de telefon</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251127"
        width="1000px"
        isVisible={activePopup === '1251127'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Schimbarea limbei:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif, lei</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>Lang_1</td>
                <td>Limba Engleză</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>Lang_2</td>
                <td>Limba Română</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>Lang_3</td>
                <td>Limba Rusă</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251129"
        width="1000px"
        isVisible={activePopup === '1251129'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Roaming Romania:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>Trafic internet</td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>RO50</td>
                <td>Roaming RO</td>
                <td>50 lei</td>
                <td>5 GB</td>
                <td>30 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251130"
        width="1000px"
        isVisible={activePopup === '1251130'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Seria de opțiuni Fly Prepay:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune&nbsp; &nbsp;</strong>
                </td>
                <td>
                  <strong>Minute naționale</strong>
                </td>
                <td>
                  <strong>Trafic internet</strong>
                </td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>
                  <span>
                    <span>
                      <span>Fly 30</span>
                    </span>
                  </span>
                </td>
                <td>Fly Prepay 30</td>
                <td>
                  Nelimitat min. rețeaua mobilă/fixă Moldtelecom + 100&nbsp;
                  minute către alți operatori&nbsp;
                </td>
                <td>5 GB</td>
                <td>30 lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <span>
                      <span>Fly 50</span>
                    </span>
                  </span>
                </td>
                <td>Fly Prepay 50</td>
                <td>
                  250 minute rețeaua mobilă/fixă Moldtelecom + 250 minute către
                  alți operatori&nbsp;
                </td>
                <td>20 GB</td>
                <td>50&nbsp; lei</td>
                <td>15 zile</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <span>
                      <span>Fly 70</span>
                    </span>
                  </span>
                </td>
                <td>Fly Prepay 70</td>
                <td>
                  300 minute rețeaua mobilă/fixă Moldtelecom + 300 minute către
                  alți operatori&nbsp;
                </td>
                <td>25 GB</td>
                <td>70 lei</td>
                <td>30 zile</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <span>
                      <span>Fly&nbsp;100</span>
                    </span>
                  </span>
                </td>
                <td>Fly Prepay 100</td>
                <td>
                  Nelimitat minute rețeaua mobilă/fixă Moldtelecom + 300 minute
                  către alți operatori
                </td>
                <td>Nelimitat</td>
                <td>100&nbsp;lei</td>
                <td>15 zile</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251128"
        width="1000px"
        isVisible={activePopup === '1251128'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Moldtelecom Talk:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>SMS cod</td>
                <td>Descriere opțiune</td>
                <td>Tarif, lei</td>
                <td>Valabilitate</td>
              </tr>
            </thead>
            <tbody className={styles.popup_table_body}>
              <tr>
                <td>UT1</td>
                <td>Activare Moldtelecom Talk</td>
                <td>0</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>STOPUT1</td>
                <td>Dezactivare Moldtelecom Talk</td>
                <td>0</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>UT</td>
                <td>Activare Moldtelecom Talk</td>
                <td>0</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>STOPUT</td>
                <td>Dezactivare Moldtelecom Talk</td>
                <td>0</td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1251121"
        width="1000px"
        isVisible={activePopup === '1251131'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.popup_title}>Alte posibilităţi:</div>

        <ScrollableWrapper>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>Tarif, lei</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>

            <tbody className={styles.popup_table_body}>
              <tr>
                <td>R_************</td>
                <td>Suplinirea contului cu cartela de reîncărcare</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>RM_0xxxxxxxx</td>
                <td>
                  Expedierea SMS «Reîncarcă-mi contul» la un prieten (numai
                  numere Moldtelecom), limita 5 sms per/zi
                </td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>Callme_0xxxxxxxx</td>
                <td>
                  Expedierea SMS «Sună-mă» la un prieten (numai numere
                  Moldtelecom), limita 5 sms per/zi
                </td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>43_1</td>
                <td>
                  Activarea expedierii facturii prin email, modificarea va fi
                  aplicată la următorul billing ciclu.
                </td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
    </>
  );
}
