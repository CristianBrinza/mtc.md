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

export default function Roaming() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.roaming.title'),
    description: t('pages.roaming.description'),
    keywords: t('pages.roaming.keywords'),
  };
  const breadcrumbItems = [
    { label: t('roaming.breadcrumb.mobile'), url: ' ' },
    { label: t('roaming.breadcrumb.roaming') },
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
            src={`/images/landings/18074012${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/90296512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={'Înainte să plec de acasă?'}>
          <div>
            <ul>
              <li>
                Înainte de plecare, consultă site-ul{' '}
                <a href="https://moldtelecom.md/">moldtelecom.md</a>, secțiunea
                Roaming sau apelează Serviciul Asistență Clienți la
                numărul&nbsp;(022)200200 pentru a te asigura că{' '}
                <span style={{ color: '#6f89fe' }}>
                  serviciul de Telefonie Mobilă&nbsp;
                </span>
                dispune de un acord Roaming încheiat cu cel puţin un operator de
                telefonie mobilă din țara unde planifici să mergi.
                Examinează&nbsp;și alege-ți tarifele convenabile după
                țară/operator.
              </li>
              <li>
                Setează telefonul să funcționeze în regim&nbsp;
                <strong>Automat</strong>&nbsp;de selectare al operatorului
                <br />
                <em>
                  (Meniu &gt; Setări &gt; Conexiuni&gt;Rețea&gt;Selectare
                  Operator &gt; Selectare Automată).&nbsp;
                </em>
              </li>
              <li>Seteaza în meniul telefonului - tipul preferat de rețea.</li>
              <li>
                Dacă telefonul este setat în regim „doar 3G” este necesar de a
                seta și regimul 2G și LTE. Setarea recomandată este ”
                <strong>2G/3G/LTE</strong>” sau{' '}
                <strong>
                  <b>„WCDMA/GSM/LTE” sau „auto”</b>
                </strong>
                , deoarece ariile de acoperire ale operatorilor din roaming
                diferă în dependentă de tehnologiile utilizate.
                <br />
                Astfel telefonul se va conecta automat la rețeaua cu cel mai
                calitativ semnal identificat.&nbsp;
              </li>
            </ul>

            <p>
              <em>
                &nbsp; &nbsp; &nbsp; (Meniu &gt; Setări &gt; Wireless şi Retea
                &gt; Reţele mobile &gt; Tipul rețelei preferate).&nbsp;
              </em>
            </p>

            <p>
              <span style={{ color: '#6f89fe' }}>
                Verifică disponibilitatea operatorilor, lista acestora este
                diferită dacă ești la abonament sau utilizezi cartela
                prepay.&nbsp;
              </span>
            </p>
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Cum activez serviciul?'}>
          <div>
            <p>Pentru activarea serviciului Roaming, simplu și comod:</p>

            <ul id="detalii_block_hiden_ul">
              <li>Folosește aplicația MyMoldtelecom</li>
              <li>
                Apelează la Serviciul Asistență Clienți la numarul{' '}
                <a href="tel:022200200">0(22) 200-200</a>
              </li>
              <li>Vizitează unul din magazinele Moldtelecom</li>
              <li>Activarea serviciului nu costă nimic</li>
              <li>
                Nu există un depozit minim obligatoriu, se recomandă doar ca în
                perioada în care te vei afla în afara ţării, pentru ca să nu-ți
                fie întrerupt serviciul de Roaming, să suplineşti contul cu un
                avans (suma în funcție de ce servicii intenţionezi să
                utilizezi/sau să primeşti apeluri).
              </li>
              <li>
                Dacă anterior deja ai beneficiat de Roaming, atunci la plecările
                ulterioare nu mai este necesar să activezi repetat, doar te poți
                asigura prin apel la Serviciul Asistență Clienți că statutul
                serviciul Roaming este activ pentru numărul tău.
              </li>
            </ul>
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Cum dezactivez serviciul M2M?'}>
          <div>
            <ul>
              <li>Prin aplicația mobilă „My Moldtelecom”</li>
              <li>
                Prin apel la nr.{' '}
                <a href="tel:+37322200200">+373 (22) 200-200</a> Serviciul
                Suport Clienți;
              </li>
              <li>
                Prin meniul USSD, la formare *500# pentru abonații Postpay și
                *200# pentru clienții Prepay și urmărirea instrucțiunilor
                meniului.
              </li>
            </ul>
            Dezactivarea serviciului este gratuită.
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Cum suplinesc contul în roaming?'}>
          <div className="mtc_evolution_qa_hiden">
            <ul>
              <li>
                Prin intermediul paginii web{' '}
                <a href="https://achitari.moldtelecom.md/Pay">
                  <u>achitări.moldtelecom.md</u>
                </a>
              </li>
              <li>Prin intermediul on-line banking</li>
              <li>
                Prin intermediul paginii web <u>www.bpay.md</u>
              </li>
              <li>
                Prin intermediul sistemului internaţional de reîncărcare al
                conturilor – <strong>Ding</strong>.
              </li>
            </ul>
          </div>
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />
    </>
  );
}
