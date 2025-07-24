import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './Roaming.module.css';
import Footer from '../../../../components/footer/Footer.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import SEO from '../../../../components/SEO';
import Input from '../../../../components/input/Input.tsx';
import { ChangeEvent, useEffect, useState } from 'react';
import ScrollableWrapper from '../../../../components/Popup/ScrollableWrapper.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import Icon from '../../../../components/Icon.tsx';
import Slider from 'react-slick';
import Button from '../../../../components/Button.tsx';
import Popups from '../../../../components/Popups/Popups.tsx';
import Popup from '../../../../components/Popup/Popup.tsx';
import { trackEvent } from '../../../../initAnalytics.ts';
import Details, {
  DetailsBlock,
} from '../../../../components/details/Details.tsx';

type TarifCard = { top: string; bottom: string };
type FaqEntry = { question: string; content: string; id_faq: string };

interface Country {
  name_ro: string;
  name_ru: string;
}
interface Operator {
  id: number;
  name_ro: string;
  apel_intrare: string;
  apel_iesire_local: string;
  apel_iesire_moldova: string;
  apel_iesire_int: string;
  sms: string;
  trafic: string;
  abo: string;
  prepay: string;
  status: string;
}

export default function Roaming() {
  const { t } = useTranslation();
  const tarifCards = t('roaming.tarifs.cards', {
    returnObjects: true,
  }) as TarifCard[];
  const faqEntries = t('roaming.faq', { returnObjects: true }) as FaqEntry[];

  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (id: string) => {
    setActivePopup(id);
    trackEvent('roaming_popup', id);
  };
  const seo = {
    title: t('pages.roaming.title'),
    description: t('pages.roaming.description'),
    keywords: t('pages.roaming.keywords'),
  };
  const breadcrumbItems = [
    { label: t('roaming.breadcrumb.mobile'), url: ' ' },
    { label: t('roaming.breadcrumb.roaming') },
  ];

  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [operators, setOperators] = useState<Operator[]>([]);

  // Fetch list of countries once
  useEffect(() => {
    fetch('https://www.moldtelecom.md/operators_countries')
      .then(res => res.json())
      .then((data: Country[]) => setCountries(data))
      .catch(err => console.error('Failed to load countries', err));
  }, []);

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountry(value);
    // Clear previous operators when typing a new search
    setOperators([]);

    if (value) {
      const lower = value.toLowerCase();
      const starts = countries
        .map(c => c.name_ro)
        .filter(name => name.toLowerCase().startsWith(lower));
      const contains = countries
        .map(c => c.name_ro)
        .filter(
          name =>
            !name.toLowerCase().startsWith(lower) &&
            name.toLowerCase().includes(lower)
        );
      const combined = [...starts, ...contains];
      setFilteredCountries(combined.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setFilteredCountries([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (name: string) => {
    setCountry(name);
    setFilteredCountries([]);
    setShowSuggestions(false);

    trackEvent('roaming_select_country', name);

    fetch(`https://moldtelecom.md/roaming/${encodeURIComponent(name)}`)
      .then(res => res.json())
      .then((data: { operators: Operator[] }) => setOperators(data.operators))
      .catch(err => console.error('Failed to load operators', err));
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1800,
          arrows: true,
        },
      },
      { breakpoint: 1151, settings: { slidesToShow: 1 } },
    ],
  };
  const [showVideo, setShowVideo] = useState(false);
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

      <div className={styles.roaming_seach}>
        <div className={`${styles.roaming_seach_title} title_3`}>
          {t('roaming.search.title')}
        </div>
        <div className={`${styles.roaming_seach_subtitle}`}>
          {t('roaming.search.description')}
        </div>

        <Input
          className={styles.roaming_seach_input}
          value={country}
          icon="search"
          placeholder={t('roaming.search.cauta')}
          onChange={handleCountryChange}
        />

        {showSuggestions && filteredCountries.length > 0 && (
          <div className={styles.suggestions}>
            {filteredCountries.map(name => (
              <div
                className={styles.suggestions_btn}
                key={name}
                onClick={() => handleSuggestionClick(name)}
              >
                {name}
              </div>
            ))}
          </div>
        )}

        {/* Render table only after a country button is clicked */}
        {operators.length > 0 && (
          <div className={styles.operatorTableWrapper}>
            <ScrollableWrapper>
              <table className="popup_table">
                <thead>
                  <tr className={styles.rotate}>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.operator')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.incoming')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.localExit')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.mdExit')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.intExit')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.sms')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.traffic')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.subscription')}
                      </span>
                    </th>
                    <th>
                      <span className={styles.rotateText}>
                        {t('roaming.table.headers.prepay')}
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {operators.map(op => (
                    <tr
                      key={op.id}
                      className={op.status === 'active' ? styles.activeRow : ''}
                    >
                      <td style={{ minWidth: 'max-content' }}>{op.name_ro}</td>
                      <td>{op.apel_intrare}</td>
                      <td>{op.apel_iesire_local}</td>
                      <td>{op.apel_iesire_moldova}</td>
                      <td>{op.apel_iesire_int}</td>
                      <td>{op.sms}</td>
                      <td>{op.trafic}</td>
                      <td style={{ textAlign: 'center' }}>
                        {op.abo == 'Abonament' ? (
                          <Icon color={'#adbbff'} type={'tick'} />
                        ) : (
                          ''
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {op.prepay == 'Prepay' ? (
                          <Icon color={'#adbbff'} type={'tick'} />
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableWrapper>
            <div className={styles.operatorTableWrapper_text}>
              {t('roaming.tarifs.text_3')}
            </div>
          </div>
        )}
      </div>

      <div className={styles.wifi_plus_full_block}>
        <div className={styles.wifi_plus_full_block_inside}>
          <div className="title_3">
            {t('optionsandservices.titles.roaming')}
          </div>
          <div className={styles.wifi_plus_full_block_inside_sutitle}>
            {t('roaming.calatoreste')}
          </div>
          <Slider {...settings} className={styles.roaming_carousell}>
            <div className={styles.roaming_carousell_block}>
              <div className={styles.roaming_carousell_block_inside}>
                <div className={styles.optionsandservices_block_left}>
                  <div className={styles.optionsandservices_block_title}>
                    {t('optionsandservices.blocks.roaming_europe.title')}
                  </div>
                  <div className={styles.optionsandservices_block_subtitle}>
                    {t('optionsandservices.blocks.roaming_europe.subtitle')}
                  </div>
                  <div className={styles.optionsandservices_block_inside}>
                    {renderItems(
                      'optionsandservices.blocks.roaming_europe.items'
                    )}
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
                    onClick={() => openPopup('f5')}
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
            <div className={styles.roaming_carousell_block}>
              <div className={styles.roaming_carousell_block_inside}>
                <div className={styles.optionsandservices_block_left}>
                  <div className={styles.optionsandservices_block_title}>
                    {t('optionsandservices.blocks.roaming_world.title')}
                  </div>
                  <div className={styles.optionsandservices_block_subtitle}>
                    {t('optionsandservices.blocks.roaming_world.subtitle')}
                  </div>
                  <div className={styles.optionsandservices_block_inside}>
                    {renderItems(
                      'optionsandservices.blocks.roaming_world.items'
                    )}
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
                    onClick={() => openPopup('f6')}
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
            <div className={styles.roaming_carousell_block}>
              <div className={styles.roaming_carousell_block_sp}>
                <div className={styles.roaming_carousell_block_sp_title}>
                  NEW
                </div>
                <div className={styles.roaming_carousell_block_inside}>
                  <div className={styles.optionsandservices_block_left}>
                    <div className={styles.optionsandservices_block_title}>
                      {t('optionsandservices.blocks.roaming_ro.title')}
                    </div>
                    <div className={styles.optionsandservices_block_subtitle}>
                      {t('optionsandservices.blocks.roaming_ro.subtitle')}
                    </div>
                    <div className={styles.optionsandservices_block_inside}>
                      {renderItems(
                        'optionsandservices.blocks.roaming_ro.items'
                      )}
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
                      onClick={() => openPopup('f9')}
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
          </Slider>
        </div>
      </div>

      <div className={styles.roaming_btns}>
        <Button
          to={`https://www.moldtelecom.md/${t('lang')}/personal/Abonamente_Telefonie_Mobila`}
          color="var(--theme_primary_color_blue_4)"
          bgcolor="var(--theme_primary_color_blue_3)"
          border="var(--theme_primary_color_blue_3)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          icon="arrow_right"
        >
          Abonamente Mobile
        </Button>
        <Button
          to={`https://mtc.md/my-mtc`}
          color="var(--theme_primary_color_blue_4)"
          bgcolor="transparent"
          border="var(--theme_primary_color_blue_3)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          icon="arrow_right"
        >
          My Moldtelecom
        </Button>
      </div>
      <div className={styles.roaming_warning}>
        <div className={`${styles.roaming_warning_red}`}></div>
        <div className={styles.roaming_warning_inside}>
          {t('roaming.warning_1')} <br />
          {t('roaming.warning_2')}
        </div>
      </div>

      <Details>
        <DetailsBlock title={'Condiții de utilizare rezonabilă a serviciilor Roaming'}>
          (Condiții de utilizare rezonabilă a serviciilor Roaming în țările din Uniunea Europeană și Spațiul Economic European)
<br/> <br/>
          <b>Utilizatorul este responsabil pentru utilizarea abuzivă a ofertelor sau opțiunilor promoționale.</b> Prin „utilizare abuzivă a serviciilor incluse în abonament” se înțelege:
         <ul>
           <li>
             	efectuarea de apeluri către alți operatori naționali și/sau trimiterea de SMS-uri către alți operatori naționali către mai mult de 200 de numere telefonice unice într-o perioadă de facturare;
           </li> <li>	efectuarea de apeluri nelimitate către alți operatori naționali care depășesc 3000 de minute într-o perioadă de facturare, cu condiția ca numărul de minute efectuate să fie de cel puțin două ori mai mare decât numărul minutelor primite de la alți operatori naționali în aceeași perioadă;
         </li> <li>	utilizarea, consumul sau numărul de zile în roaming care depășește utilizarea, consumul sau numărul de zile corespunzător la nivel național pentru același serviciu.

           </li>
         </ul>
          Utilizarea serviciului de roaming este considerată rezonabilă atât timp cât acesta este folosit <b>exclusiv în cadrul călătoriilor ocazionale în afara teritoriului Republicii Moldova</b>.
         <br/>
          În cazul în care se constată dovezi de utilizare excesivă sau abuzivă a serviciului de roaming, <b>Moldtelecom va notifica Clientul cu privire la comportamentul identificat</b>, printr-o avertizare prealabilă.
          <br/> <br/>
          De asemenea, Moldtelecom își rezervă dreptul de a <b>restricționa sau suspenda utilizarea serviciului</b> în cazul continuării utilizării abuzive, ilegale și/sau contrare prevederilor Contractului de Abonament, inclusiv în situații de tentativă de fraudă care ar putea prejudicia Moldtelecom sau terți.

        </DetailsBlock>
      </Details>

      {/* Tarife */}
      <div className={styles.roaming_tarifs}>
        <div className={styles.roaming_tarifs_inside}>
          <div className={`${styles.roaming_tarifs_inside_title} title_3`}>
            {t('roaming.tarifs.title')}
          </div>

          <div className={styles.roaming_tarifs_cards}>
            {tarifCards.map((card, i) => (
              <div className={styles.roaming_tarifs_card} key={i}>
                <div
                  className={styles.roaming_tarifs_card_top}
                  dangerouslySetInnerHTML={{ __html: card.top }}
                />
                <div className={styles.roaming_tarifs_card_bottom}>
                  {card.bottom}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.roaming_tarifs_card_text}>
            {t('roaming.tarifs.text_1')}{' '}
            <span onClick={() => openPopup('1281120')}>
              {t('roaming.tarifs.text_2')}
            </span>
            .
          </div>
        </div>
      </div>

      {/* Activare */}
      <div className={styles.roaming_activate}>
        <div className={styles.roaming_activate_inside}>
          <div className={styles.roaming_activate_left}>
            <div className={`${styles.roaming_activate_title} title_3`}>
              {t('roaming.activate.title')}
            </div>
            <div className={styles.roaming_activate_inside_card}>
              <div className={styles.roaming_activate_inside_card_icon}>
                <Icon type="user" color="#adbbff" />
              </div>
              <span>{t('roaming.activate.methods.0')}</span>
            </div>
            <div className={styles.roaming_activate_inside_card}>
              <div className={styles.roaming_activate_inside_card_icon}>
                <Icon type="message" color="#adbbff" />
              </div>
              <span>{t('roaming.activate.methods.1')}</span>
            </div>
            <div className={styles.roaming_activate_inside_card}>
              <div className={styles.roaming_activate_inside_card_icon}>
                <Icon type="message" color="#adbbff" />
              </div>
              <span>{t('roaming.activate.methods.2')}</span>
            </div>
            <div className={styles.roaming_activate_inside_card}>
              <div className={styles.roaming_activate_inside_card_icon}>
                <Icon type="cart" color="#adbbff" />
              </div>
              <span>{t('roaming.activate.methods.3')}</span>
            </div>

            <span
              className={styles.roaming_activate_note}
              dangerouslySetInnerHTML={{ __html: t('roaming.activate.note') }}
            />
          </div>
          <div className={styles.roaming_activate_right}>
            <div
              onClick={() => openPopup('1281124')}
              className={`${styles.roaming_activate_right_card} ${styles.roaming_activate_right_card_1}`}
            >
              Vezi pașii de configurare APN
              <svg
                className={styles.roaming_activate_right_card_btn}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="18" fill="#D0D0D1"></rect>
                <path
                  d="M10 18L26 18M26 18L19 11M26 18L19 25"
                  stroke="#2D2D2F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div
              onClick={() => setShowVideo(true)}
              className={`${styles.roaming_activate_right_card} ${styles.roaming_activate_right_card_2}`}
            >
              Ghidul de activare a serviciului Roaming
              <svg
                className={styles.roaming_activate_right_card_btn}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="18" fill="#D0D0D1"></rect>
                <path
                  d="M10 18L26 18M26 18L19 11M26 18L19 25"
                  stroke="#2D2D2F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MyApp style_type={'blue_white'} />

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        {faqEntries.map((entry, idx) => (
          <FaqQAV2 id_faq={entry.id_faq} key={idx} question={entry.question}>
            <div dangerouslySetInnerHTML={{ __html: entry.content }} />
          </FaqQAV2>
        ))}
      </FaqV2>

      <Footer disclaimer={true} />
      <Popups content={activePopup} onClose={() => setActivePopup(null)} />

      <Popup
        id="1281120"
        width="1000px"
        isVisible={activePopup === '1281120'}
        onClose={() => setActivePopup(null)}
      >
        <table className="popup_table">
          <thead>
            <tr>
              <td>
                <span>
                  <strong>{t('roaming.table.headers.country')}</strong>
                </span>
              </td>
              <td>
                <span>
                  <strong>{t('roaming.table.headers.operator')}</strong>
                </span>
              </td>
              <td>
                <span>
                  <strong>{t('roaming.table.headers.serviceType')}</strong>
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Austria</td>
              <td>3 Austria (Hutchison Drei Austria)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>T-Mobile Austria (Magenta)</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Belgia</td>
              <td>Proximus</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Bulgaria</td>
              <td>Vivacom Bulgaria (Vivatel)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Yettel Bulgaria</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Cehia</td>
              <td>O2 Czech Republic</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Cipru</td>
              <td>Epic</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Croatia</td>
              <td>Hrvatski Telecom</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Telemach Croatia</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Danemarka</td>
              <td>3 Denmark (Hi3G Denmark)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Telenor Denmark</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Estonia</td>
              <td>Tele 2 Eesti AS</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Finlanda</td>
              <td>DNA</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={3}>Franta</td>
              <td>Bouygues Telecom</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Free Mobile</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>SFR</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Germania</td>
              <td>Telekom Deutschland</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Grecia</td>
              <td>Cosmote</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Irlanda</td>
              <td>3 Ireland (Hutchison 3G Ireland)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Meteor Mobile</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Islanda</td>
              <td>Nova</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Italia</td>
              <td>3 Italia (Wind Tre S.p.A.)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>ILIAD Italia</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Letonia</td>
              <td>Bite Latvija</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Tele2</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Liechtenstein</td>
              <td>Salt Liechtenstein</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td rowSpan={2}>Lituania</td>
              <td>Bite Lietuva</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>UAB Tele2</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td rowSpan={2}>Luxembourg</td>
              <td>POST Luxembourg</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Tango</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={3}>Malta</td>
              <td>Go</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Melita</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Epic Malta MLTTL</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Norvegia</td>
              <td>Telenor</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={3}>Polonia</td>
              <td>P4 SP.z.o.o. (PLAY)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Polkomtel (PLUS)</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Orange Polska</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Portugalia</td>
              <td>MEO</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={4}>România</td>
              <td>Digi Mobil</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Orange Romania</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Telekom Romania Mobile</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Vodafone Romania</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Slovacia</td>
              <td>O2 Slovakia</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Slovak Telekom</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Slovenia</td>
              <td>Telemach</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={3}>Suedia</td>
              <td>Hi3G Access</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Tele2 Sverige</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Telenor Sverige</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td>Țările de Jos</td>
              <td>KPN Mobile</td>
              <td>Abonament / PrePay</td>
            </tr>
            <tr>
              <td rowSpan={2}>Ungaria</td>
              <td>Yettel Magyarorszag</td>
              <td>Abonament</td>
            </tr>
            <tr>
              <td>Magyar Telekom (Telekom HU)</td>
              <td>Abonament / PrePay</td>
            </tr>
          </tbody>
        </table>
      </Popup>
      <Popup
        id="1281124"
        width="1000px"
        isVisible={activePopup === '1281124'}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.guide_title}>Urmează pașii:</div>
        <div className={styles.guide_subtitle}>Ghid IOS:</div>
        <Details>
          <DetailsBlock title={'1. Deschide setările telefonului'}>
            <img
              className={styles.guide_img}
              src="/images/landings/12170389.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'2. Deschide meniul "Cellular"'}>
            <img
              className={styles.guide_img}
              src="/images/landings/12170318.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'3. Deschide meniul "Cellular Data Network"'}>
            <img
              className={styles.guide_img}
              src="/images/landings/12126318.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'4. Modifică setarile APN'}>
            <img
              className={styles.guide_img}
              src="/images/landings/12100189.webp"
              alt="Guide"
            />
          </DetailsBlock>
        </Details>

        <div className={styles.guide_subtitle}>Ghid Android:</div>
        <Details>
          <DetailsBlock title={'1. Deschide setările telefonului'}>
            <img
              className={styles.guide_img}
              src="/images/landings/11100189.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'2. Deschide meniul "Cellular"'}>
            <img
              className={styles.guide_img}
              src="/images/landings/12100122.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'3. Deschide meniul "Cellular Data Network"'}>
            <img
              className={styles.guide_img}
              src="/images/landings/11230189.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'4. Adaugă un APN nou'}>
            <img
              className={styles.guide_img}
              src="/images/landings/19803122.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'5. Configurează APN-ul nou'}>
            <img
              className={styles.guide_img}
              src="/images/landings/16100689.webp"
              alt="Guide"
            />
          </DetailsBlock>
          <DetailsBlock title={'6. Alege APN-ul nou'}>
            <img
              className={styles.guide_img}
              src="/images/landings/16130189.webp"
              alt="Guide"
            />
          </DetailsBlock>
        </Details>
      </Popup>

      {showVideo && (
        <div
          className={`${styles.videos_popup} ${styles.videos_popup_show}`}
          onClick={() => setShowVideo(false)}
        >
          <iframe
            className={styles.videos_carousell_iframe_popup}
            src={'https://www.youtube.com/embed/T9lr1QCO1eU'}
            title={`YouTube video player Roaming`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
}
