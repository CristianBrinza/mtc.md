import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import { useTranslation } from 'react-i18next';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Navbar from '../../../components/navbar/Navbar.tsx';
import styles from './PoliticaRoaming.module.css';
import Footer from '../../../components/footer/Footer.tsx';
import SEO from '../../../components/SEO';

// import CostumeFunctions from '../../../components/functions/CostumeFunctions.tsx';

export default function PoliticaRoaming() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    // { label: 'politica-de-utilizare-rezonabila-a-serviciului-roaming-europa' },
    { label: 'Politica de utilizare rezonabilă', url: ' ' },
    { label: 'Roaming-Europa' },
  ];
  const seo = {
    title: t('pages.politica_roaming.title'),
    description: t('pages.politica_roaming.description'),
    keywords: t('pages.politica_roaming.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />
      <div className={`title_3 ${styles.politica_roaming_title}`}>
        <div className={styles.politica_roaming_title_text}>
          <span>
            Politica de utilizare rezonabilă a serviciului „Roaming Europa”
          </span>
        </div>
      </div>
      <div className={styles.politica_roaming}>
        <ul className={styles.politica_roaming_ul}>
          <li>
            Utilizarea serviciului de roaming este considerată rezonabilă atâta
            timp cât acesta este folosit exclusiv în cadrul călătoriilor
            ocazionale în afara teritoriului Republicii Moldova.
          </li>
          <li>
            Abonații care beneficiază de serviciul de roaming inclus în
            abonament au obligația de evita utilizarea abuzivă a serviciilor
            roaming UE+SEE. Pentru a analiza folosirea abuzivă, Moldtelecom va
            monitoriza, în mod cumulat, pe parcursul fiecărei perioade de patru
            luni consecutive de la momentul conectării dacă:
            <ul>
              <li>
                volumul de consum al oricărui serviciu în roaming în Europa este
                mai mare decât volumul consumului aceluiași serviciu la nivel
                național;
              </li>
              <li>
                numărul de zile de utilizare în roaming este mai mare decât
                numărul de zile de utilizare a serviciilor la nivel național.
              </li>
            </ul>
          </li>
          <li>
            Consumul la nivel național și consumul în roaming în Europa se
            măsoară separat pentru următoarele categorii de servicii:
            <ul>
              <li>
                apeluri primite din orice rețea și apeluri efectuate către
                rețele din Republica Moldova și Europa (minute);
              </li>
              <li>
                trafic de internet generat în Republica Moldova, respectiv în
                Europa (MB/GB).
              </li>
            </ul>
          </li>
          <li>
            Consumul predominant sau numărul de zile de utilizare preponderent
            în roaming pentru oricare dintre serviciile de mai sus, pe durata
            perioadei de monitorizare, va fi considerat un indicator al riscului
            de utilizare abuzivă sau anormală, care nu corespunde scopului
            călătoriilor ocazionale în Europa.
          </li>
          <li>
            În cazul în care sunt constatate dovezi de utilizare excesivă sau
            abuzivă a serviciului de roaming, Moldtelecom va transmite
            clientului o avertizare prealabilă și, dacă comportamentul continuă,
            își rezervă dreptul de a restricționa sau suspenda utilizarea
            serviciului, inclusiv în situații de tentativă de fraudă care pot
            aduce prejudicii Moldtelecom sau terților.
          </li>
        </ul>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
