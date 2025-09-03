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
import Popup from '../../../components/Popup/Popup.tsx';
import Icon from '../../../components/Icon.tsx';
import BuyForm from '../../../components/buy_form/BuyForm.tsx';

function titleCase(word: string) {
  return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '';
}
type ServiceRow = { serviciu?: string; valoare?: string; unitate?: string };

const normalize = (s?: string) => (typeof s === 'string' ? s.trim() : '');
const hasAnyContent = (r: ServiceRow) =>
  normalize(r.serviciu).length > 0 || normalize(r.valoare).length > 0;

export default function PromoTM() {
  const { url_link } = useParams<{ url_link?: string }>();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true); // 👈 NEW
  const [name, setName] = useState<string>('[]');
  const [oldAbonament, setOldAbonament] = useState<string>('[]');
  const [newAbonament, setNewAbonament] = useState<string>('[]');
  const [phoneNumber, setPhoneNumber] = useState<string>('[]');
  const [contractNumber, setContractNumber] = useState<string>('[]');

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  function formatAccountName(accountname?: string): string {
    if (!accountname) return '';
    const cleaned = accountname
      .replace(/[.,]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const parts = cleaned.split(' ').filter(Boolean);
    if (parts.length === 1) return titleCase(parts[0]);
    const surname = parts[0];
    const given = parts[1];
    return `${titleCase(given)} ${titleCase(surname)}`;
  }
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [oldSum, setOldSum] = useState<number | null>(null);
  const [newSum, setNewSum] = useState<number | null>(null);
  const [block3, setBlock3] = useState<ServiceRow[]>([]);
  const [block7, setBlock7] = useState<ServiceRow[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [activeBuyConfig, setActiveBuyConfig] = useState<string>('');
  const handlePopupClose = () => {
    setActivePopup(null);
    setSubmitted(false);
    setError(false);
  };

  const setPopup = () => {
    setActivePopup('5934567');
    setActiveBuyConfig('test');
  };

  useEffect(() => {
    if (!url_link) {
      window.location.href = `https://new.moldtelecom.md/${t('lang')}/not-found`;
      return;
    }

    const url = `https://mobileself-test.moldtelecom.md/Api/pruning/GetPruningParams?sacode=${url_link}`;

    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const rawName = data?.block_1?.[0]?.accountname as string | undefined;
        const pretty = formatAccountName(rawName);
        setName(pretty || 'Client');
        setOldAbonament(data?.block_2?.[0]?.abonament);
        setNewAbonament(data?.block_6?.[0]?.abonament);
        setPhoneNumber(data?.block_1?.[0]?.phone);
        setContractNumber(data?.block_1?.[0]?.sacode);
        setOldAbonament(data?.block_2?.[0]?.abonament ?? '—');
        setOldSum(data?.block_2?.[0]?.suma ?? null);
        setNewSum(data?.block_6?.[0]?.suma ?? null);
        setBlock3(Array.isArray(data?.block_3) ? data.block_3 : []);
        setBlock7(Array.isArray(data?.block_7) ? data.block_7 : []);
        setLoading(false); // 👈 done loading
      } catch (err) {
        console.error('Eroare la fetch:', err);
        window.location.href = `https://new.moldtelecom.md/${t('lang')}/not-found`;
      }
    })();
  }, [url_link, t]);

  // 👇 Afișează DOAR acest div până la răspuns
  if (loading) return <div className={styles.loading}> loading...</div>;

  const breadcrumbItems = [
    { label: 'Promo', url: 'mobile' },
    { label: 'Mobile' },
  ];

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
          <div className={styles.promo_tm_details}>
            <div className={styles.promo_tm_details_block}>
              <span>
                Telefon:&nbsp;<b>{phoneNumber}</b>
              </span>
            </div>
            <div className={styles.promo_tm_details_block}>
              <span>
                Contract:&nbsp;<b>{contractNumber}</b>
              </span>
            </div>
          </div>
          <div className={styles.text_1}>
            {' '}
            Ne bucurăm că faceți parte din familia Moldtelecom și dorim să vă
            răsplătim loialitatea cu o ofertă exclusivă, creată special pentru
            Dvs.
          </div>
          <div className={styles.text_2}>
            <span>
              Această ofertă nu se regăsește în{' '}
              <span
                onClick={() => scrollToId('star_1')}
                className={styles.promo_tm_sp_text}
              >
                comercializarea standard
                <span className={styles.text_2_star}>*</span>
              </span>
            </span>
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
                        {oldAbonament}
                      </div>
                      <div className={styles.optionsandservices_block_subtitle}>
                        <span>
                          Plata lunara:{' '}
                          <b>{oldSum !== null ? `${oldSum} lei` : '—'}</b>
                        </span>
                      </div>

                      <div className={styles.optionsandservices_block_inside}>
                        {block3.filter(hasAnyContent).map((row, idx) => {
                          const left = normalize(row.serviciu);
                          const right = normalize(row.valoare);
                          const showLeft = left.length > 0;
                          const showRight = right.length > 0;

                          // dacă ambele sunt goale (de siguranță) -> sare peste rând
                          if (!showLeft && !showRight) return null;

                          // opțional: clasă pentru o singură coloană (dacă vrei să întinzi pe toată lățimea)
                          const rowClass = `${styles.optionsandservices_block_list} ${!showRight || !showLeft ? styles.singleCol : ''}`;

                          return (
                            <div key={idx} className={rowClass}>
                              {showLeft && (
                                <div
                                  className={
                                    styles.optionsandservices_block_list_left
                                  }
                                >
                                  {left}
                                </div>
                              )}
                              {showRight && (
                                <div
                                  className={
                                    styles.optionsandservices_block_list_right
                                  }
                                >
                                  {right}
                                </div>
                              )}
                            </div>
                          );
                        })}
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
                          {newAbonament}
                        </div>
                        <div
                          className={styles.optionsandservices_block_subtitle}
                        >
                          <span>
                            Plata lunara:{' '}
                            <b>{newSum !== null ? `${newSum} lei` : '—'}</b>
                          </span>
                        </div>

                        <div className={styles.optionsandservices_block_inside}>
                          {block7.filter(hasAnyContent).map((row, idx) => {
                            const left = normalize(row.serviciu);
                            const right = normalize(row.valoare);
                            const showLeft = left.length > 0;
                            const showRight = right.length > 0;

                            // dacă ambele sunt goale (de siguranță) -> sare peste rând
                            if (!showLeft && !showRight) return null;

                            // opțional: clasă pentru o singură coloană (dacă vrei să întinzi pe toată lățimea)
                            const rowClass = `${styles.optionsandservices_block_list} ${!showRight || !showLeft ? styles.singleCol : ''}`;

                            return (
                              <div key={idx} className={rowClass}>
                                {showLeft && (
                                  <div
                                    className={
                                      styles.optionsandservices_block_list_left
                                    }
                                  >
                                    {left}
                                  </div>
                                )}
                                {showRight && (
                                  <div
                                    className={
                                      styles.optionsandservices_block_list_right
                                    }
                                  >
                                    {right}
                                  </div>
                                )}
                              </div>
                            );
                          })}
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
                onClick={() => {
                  setActivePopup('5934568');
                }}
                className={`${styles.promo_tm_btn} ${styles.promo_tm_btn_green}`}
              >
                {/*<Icon type={'tick'}/> */}✅ Acceptă oferta
              </div>
              <div className={styles.promo_tm_btn} onClick={() => setPopup()}>
                Consultanța
              </div>
              <div
                onClick={() => {
                  setActivePopup('5934569');
                }}
                className={`${styles.promo_tm_btn} ${styles.promo_tm_btn_red}`}
              >
                {/*<Icon type={'close'}/> */}❌ Respinge oferta
              </div>
            </div>
          </div>
        </div>

        <div className={styles.promo_tm_footer}>
          <span id={'star_1'}>
            <b>*Comercializarea standard</b> - reprezintă pachetele și ofertele
            disponibile în mod obișnuit, public și transparent, prin canalele
            oficiale Moldtelecom (site, magazine, call-center). Acestea sunt
            aceleași pentru toți clienții și nu includ condiții speciale,
            reduceri personalizate sau oferte individuale.
          </span>
        </div>
      </div>
      <Footer disclaimer={true} />
      <Popup
        id="5934567"
        width="550px"
        isVisible={activePopup === '5934567'}
        onClose={handlePopupClose}
        className={styles.popupBuy}
        key={activePopup ?? 'popup-closed'}
      >
        {/*<div className={styles.popup_div_title}>*/}
        {/*  Mulțumim că ai ales Moldtelecom*/}
        {/*</div>*/}
        {error ? (
          <div className={styles.buy_popup_error}>
            <Icon
              type={'repair'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span
              dangerouslySetInnerHTML={{ __html: t('double.request_error') }}
            />
          </div>
        ) : submitted ? (
          <div className={styles.buy_popup_success}>
            <Icon
              type={'tick'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span
              dangerouslySetInnerHTML={{ __html: t('double.request_success') }}
            />
          </div>
        ) : (
          <div className={styles.buy_popup}>
            <div className={styles.selected_popup_subcription}>
              <div className={styles.popup_selected}>
                {/*{activePopupConfig}&nbsp;<span>{activePopupSubConfig}</span>*/}
                Lasa numarul
              </div>
            </div>

            <BuyForm
              coustumeBtn={'Trimite'}
              config={activeBuyConfig}
              tag={'double'}
              service={'campain[double_2025_b2s], place[abonament]'}
              onSuccess={() => {
                setSubmitted(true);
                setError(false);
              }}
              onError={() => {
                setError(true);
              }}
            />
            <div
              className={styles.popup_discalmer}
              dangerouslySetInnerHTML={{
                __html: t('double.request_disclaimer'),
              }}
            />
          </div>
        )}
      </Popup>
      <Popup
        id="5934568"
        width="550px"
        isVisible={activePopup === '5934568'}
        onClose={handlePopupClose}
        className={styles.popupBuy}
        key={activePopup ?? 'popup-closed'}
      >
        accept
      </Popup>
      <Popup
        id="5934569"
        width="550px"
        isVisible={activePopup === '5934569'}
        onClose={handlePopupClose}
        className={styles.popupBuy}
        key={activePopup ?? 'popup-closed'}
      >
        respige
      </Popup>
    </>
  );
}
