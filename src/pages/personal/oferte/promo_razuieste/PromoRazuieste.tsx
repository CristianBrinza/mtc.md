import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './PromoRazuieste.module.css';
import Footer from '../../../../components/footer/Footer.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Button from '../../../../components/Button.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import { useState } from 'react';
import Popup from '../../../../components/Popup/Popup.tsx';

export default function PromoRazuieste() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('promorazuieste.breadcrumb.app'), url: ' ' },
    { label: t('promorazuieste.breadcrumb.name') },
  ];

  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('1002600048836');
    } catch (err) {
      console.error('Eroare la copiere:', err);
    }
  };

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
            src={`/images/landings/15094512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/15994522${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={styles.promorazuieste}>
        <div className="title_3">
          Câștigă în fiecare săptămână cu My Moldtelecom
        </div>
        <div className={styles.btns}>
          <Button
            to="https://mtc.md/my-mtc"
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Răzuiește acum
          </Button>
          <Button
            onClick={() => setShowPopup(true)}
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Regulament concurs
          </Button>
        </div>
        Intra in aplicatia{' '}
        <a className={styles.promorazuieste_btn} href="https://mtc.md/my-mtc">
          MyMoldtelecom
        </a>{' '}
        în <b>fiecare weekend </b> si Răzuiește cartonasul pentru a câștiga
        premii! <br />
        Nu mai aștepta norocul să vină de la sine – ia-l tu acum în mâini și
        transformă fiecare răzuire într-un premiu garantat! <br />
        Poți câștiga beneficii plăcute în formă de trafic Internet sau minute
        naționale, fără efort și absolut gratuit.
        <br />
        <br />
        <br />
      </div>
      <div className={styles.promorazuieste}>
        <div className="title_3">Iată ce poți câștiga:</div>

        <div className={styles.win}>
          <div className={styles.wincard}>
            100MB <br />
            <span>pentru o zi</span>
          </div>
          <div className={styles.wincard}>
            500 MB <br />
            <span>pentru o zi</span>
          </div>
          <div className={styles.wincard}>
            1GB <br />
            <span>pentru o zi</span>
          </div>
          <div className={styles.wincard}>
            5GB <br />
            <span>pentru 3 zile</span>
          </div>
          <div className={styles.wincard}>
            10 GB <br />
            <span>pentru 3 zile</span>
          </div>
          <div className={styles.wincard}>
            20 minute <br />
            <span>pentru o zile</span>
          </div>
          <div className={styles.wincard}>
            50 minute <br />
            <span>pentru 3 zile</span>
          </div>
          <div className={styles.wincard}>
            100 min <br />
            <span>pentru 3 zile</span>
          </div>
        </div>
        <div className={styles.promorazuieste_down}>
          Premiul câștigat se activează automat în contul tău – gata de
          utilizare imediat! <br />
          <span>
            Campania se desfășoară între 21 iunie 2025 - 30 septembrie 2025
            (inclusiv).
          </span>
        </div>
      </div>
      <MyApp />

      <FaqV2 max_faq={7}>
        <FaqQAV2 question={'Ce este campania „Weekend cu beneficii”?'}>
          <div>
            Este o tombolă digitală desfășurată în aplicația MyMoldtelecom, prin
            care abonații eligibili pot răzui un scratch-card în fiecare sâmbătă
            sau duminică, pentru a primi instant trafic internet sau minute
            naționale gratuite.
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Cine poate participa la campanie?'}>
          <div>
            <ul>
              <li>
                Abonații persoane fizice (prepaid sau postpaid) ai serviciilor
                de telefonie mobilă Moldtelecom, cu vârsta minimă de 18 ani.
              </li>
              <li>
                Este necesară instalarea ori actualizarea la ultima versiune a
                aplicației MyMoldtelecom din Play Market sau App Store.
              </li>
              <li>Angajații S.A. Moldtelecom NU pot participa.</li>
            </ul>
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'De câte ori pot participa la campanie?'}>
          <div>
            Poți răzui o singură dată în fiecare weekend: fie sâmbătă, fie
            duminică.
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Partciparea costă ceva?\n'}>
          <div>
            Participarea este gratuită; trebuie doar să ai aplicația instalată /
            actualizată.
          </div>
        </FaqQAV2>
      </FaqV2>
      <Footer disclaimer={true} />
      <Popup
        id="1981718"
        isVisible={showPopup}
        onClose={() => setShowPopup(false)}
        width={'1000px'}
      >
        <div className={styles.popup_div}>
          <span className={styles.popup_div_title}>
            Regulamentul campaniei ”Weekend cu beneficii”
          </span>{' '}
          <br /> <br />
          <h3>1. ORGANIZATORUL CAMPANIEI</h3>
          <p>
            1.1. Organizatorul Campaniei în aplicația MyMoldtelecom este S.A.
            „Moldtelecom”, persoană juridică înregistrată în Registrul de Stat
            al persoanelor juridice al Republicii Moldova cu IDNO (cod fiscal){' '}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                handleCopy();
              }}
            >
              1002600048836
            </a>
            , cu sediul în{' '}
            <a href="https://maps.app.goo.gl/kYR2Dmyb9dCwTUui7">
              MD-2001, bd. Ştefan cel Mare şi Sfânt, 10, mun. Chişinău,
              Republica Moldova
            </a>{' '}
            (numit în continuare „Moldtelecom” sau „Organizator”).
          </p>
          <p>
            1.2. Prezentul Regulament este obligatoriu pentru toţi
            participanţii. Regulamentul este disponibil gratuit oricărui
            participant pe site-ul{' '}
            <a href="https://www.moldtelecom.md" target="_blank">
              www.moldtelecom.md
            </a>{' '}
            şi în Reprezentanţele Moldtelecom (inclusiv dealeri) pe durata
            întregii Campanii.
          </p>
          <p>
            1.3. Participanţii la Campanie vor putea obţine informaţii
            suplimentare apelând gratuit:
          </p>
          <ul>
            <li>
              din reţeaua Moldtelecom: <a href="tel:1181">1181</a>
            </li>
            <li>
              din reţeaua mobilă Moldtelecom: <a href="tel:200">200</a>
            </li>
            <li>
              de pe telefon fix/mobil din alte reţele:{' '}
              <a href="tel:022200200">(022) 200-200</a>
            </li>
            <li>în reprezentanțele Companiei din întreaga țară</li>
          </ul>
          <h3>2. REGULILE DE PARTICIPARE</h3>
          <p>
            2.1. Perioada de desfășurare a Campaniei este{' '}
            <b>21.06.2025 – 30.09.2025</b> inclusiv.
          </p>
          <p>
            2.2. Campania este destinată abonaților de telefonie mobilă
            Voce/Date (prepaid/postpaid), persoane fizice, cu vârsta minimă de
            18 ani și care au instalată/actualizată aplicația MyMoldtelecom.
          </p>
          <p>
            2.3. Nu pot participa persoanele cu statut de angajat S.A.
            Moldtelecom.
          </p>
          <h3>3. MECANISMUL DESFĂȘURĂRII CAMPANIEI</h3>
          <p>
            3.1. Abonații eligibili trebuie să deschidă aplicația MyMoldtelecom
            și să acceseze pagina „Contul meu”, unde vor găsi un scratch card de
            răzuit pentru a primi un premiu instant.
          </p>
          <p>3.2. Fondul de premii include:</p>
          <ul>
            <li>
              Carduri cu trafic mobil: <b>100MB, 500MB, 1GB, 5GB, 10GB</b>
            </li>
            <li>
              Carduri cu minute naționale: <b>20, 50, 100 minute</b>
            </li>
          </ul>
          <p>3.3. Valabilitatea premiilor:</p>
          <ul>
            <li>
              <b>100MB, 500MB, 1GB </b> – valabile 1 zi
            </li>
            <li>
              <b>5GB, 10GB</b> – valabile 3 zile
            </li>
            <li>
              <b>20, 50, 100 minute</b> – valabile 3 zile
            </li>
          </ul>
          <p>
            3.4. Un participant poate răzui un card o singură dată în fiecare
            sâmbătă sau duminică.
          </p>
          <p>
            3.5. Premiile se activează automat și se consumă prioritar față de
            alte opțiuni.
          </p>
          <h3>4. PRELUCRAREA DATELOR CU CARACTER PERSONAL</h3>
          <p>
            4.1. Participarea implică acordul privind prelucrarea datelor
            personale în scopul desfășurării Campaniei.
          </p>
          <p>
            4.2. Procesarea presupune orice acțiune asupra datelor: colectare,
            stocare, adaptare, consultare, utilizare, combinare, ștergere sau
            distrugere.
          </p>
          <h2>5. MODIFICARE, SUSPENDARE ȘI ANULARE</h2>
          <p>5.1. Organizatorul poate modifica sau completa Regulamentul.</p>
          <p>
            5.2. Modificările devin valabile la publicarea lor pe site-ul
            Organizatorului.
          </p>
          <p>
            5.3. În cazuri excepționale, Campania poate fi suspendată, anulată
            sau extinsă.
          </p>
          <h3>6. RECLAMAȚII ȘI LITIGII</h3>
          <p>
            6.1. Reclamațiile trebuie trimise în scris la sediul Organizatorului
            în termen de 5 zile lucrătoare de la producerea evenimentului.
          </p>
          <p>
            6.2. Litigiile vor fi soluționate pe cale amiabilă sau de către
            instanțele competente din Republica Moldova.
          </p>
          <h3>7. DISPOZIȚII FINALE</h3>
          <p>
            7.1. Regulamentul este reglementat de legislația în vigoare a
            Republicii Moldova.
          </p>
          <p>
            7.2. Invalidarea unei prevederi nu afectează valabilitatea
            celorlalte.
          </p>
        </div>
      </Popup>
    </>
  );
}
