import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './Triple.module.css';
import Faq from '../../../components/faq/Faq.tsx';
import FaqQA from '../../../components/faq/FaqQA.tsx';

export default function Triple() {
  const breadcrumbItems = [
    { label: 'Promo', url: ' ' },
    { label: 'Internet + TV + Mobil' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <Hero color=" #F7F7F7" image="/images/triple/triple_hero.png">
        <div
          className="hero_small_title"
          style={{
            background:
              'linear-gradient(279deg, #20AE9A 2.89%, #8CDC58 83.23%)',
          }}
        >
          Promo
        </div>
        <div className="hero_title">
          Crează-ți propriul <br />
          abonament, așa cum îți <br />
          dorești
        </div>
        <div className="hero_subtitle">
          Economisește până la <b>5000 LEI</b> <br />
          timp de 24 luni
        </div>
      </Hero>

      <div className={`title ${styles.title1}`}>
        Crează-ți propriul abonament:
      </div>
      <Chat />
      <Feedback />
      <Faq style_type="1">
        <FaqQA question="Cum pot să raportez o infracțiune sau o ilegalitate?">
          <p>
            <span></span>
            <span>
              Folosește-ți smartphone-ul ca și un Internet Hotspot, accesând:
              <br />
              <br />
              <strong>Setări</strong>⇒&nbsp;
              <strong>Hotspot mobil și tethering</strong>&nbsp;(trebuie să fie
              activat) ⇒&nbsp;<strong>alege Parolă Wi-Fi&nbsp;</strong>⇒&nbsp;
              <strong>setează parola cu minim 8 caractere</strong>⇒
              <strong>SALVARE</strong>&nbsp;⇒<strong>MAI MULTE</strong>
              &nbsp;(pentru Dispositive premise/Configurare Mobile hotspot -
              complează numele rețelei și parola pentru a te conecta doar cu
              dispozitivele cunoscute /Setări de expirare). La dezactivare -
              debifează Hotspot mobil.
              <br />
              Notă:&nbsp; Setările pot fi diferite în funcție de modelul
              telefonului.
              <br />
              <br />E bine să cunoști! Prin HotSpot se mărește consumul de date
              a traficului de internet.
            </span>
            <span></span>
          </p>
        </FaqQA>
        <FaqQA question="Cum pot să raportez o infracțiune sau o ilegalitate?">
          <p>
            <span></span>
            <span>
              Folosește-ți smartphone-ul ca și un Internet Hotspot, accesând:
              <br />
              <br />
              <strong>Setări</strong>⇒&nbsp;
              <strong>Hotspot mobil și tethering</strong>&nbsp;(trebuie să fie
              activat) ⇒&nbsp;<strong>alege Parolă Wi-Fi&nbsp;</strong>⇒&nbsp;
              <strong>setează parola cu minim 8 caractere</strong>⇒
              <strong>SALVARE</strong>&nbsp;⇒<strong>MAI MULTE</strong>
              &nbsp;(pentru Dispositive premise/Configurare Mobile hotspot -
              complează numele rețelei și parola pentru a te conecta doar cu
              dispozitivele cunoscute /Setări de expirare). La dezactivare -
              debifează Hotspot mobil.
              <br />
              Notă:&nbsp; Setările pot fi diferite în funcție de modelul
              telefonului.
              <br />
              <br />E bine să cunoști! Prin HotSpot se mărește consumul de date
              a traficului de internet.
            </span>
            <span></span>
          </p>
        </FaqQA>
        <FaqQA question="Cum pot să raportez o infracțiune sau o ilegalitate?">
          <p>
            <span></span>
            <span>
              Folosește-ți smartphone-ul ca și un Internet Hotspot, accesând:
              <br />
              <br />
              <strong>Setări</strong>⇒&nbsp;
              <strong>Hotspot mobil și tethering</strong>&nbsp;(trebuie să fie
              activat) ⇒&nbsp;<strong>alege Parolă Wi-Fi&nbsp;</strong>⇒&nbsp;
              <strong>setează parola cu minim 8 caractere</strong>⇒
              <strong>SALVARE</strong>&nbsp;⇒<strong>MAI MULTE</strong>
              &nbsp;(pentru Dispositive premise/Configurare Mobile hotspot -
              complează numele rețelei și parola pentru a te conecta doar cu
              dispozitivele cunoscute /Setări de expirare). La dezactivare -
              debifează Hotspot mobil.
              <br />
              Notă:&nbsp; Setările pot fi diferite în funcție de modelul
              telefonului.
              <br />
              <br />E bine să cunoști! Prin HotSpot se mărește consumul de date
              a traficului de internet.
            </span>
            <span></span>
          </p>
        </FaqQA>
        <FaqQA question="Cum pot să raportez o infracțiune sau o ilegalitate?">
          <p>
            <span></span>
            <span>
              Folosește-ți smartphone-ul ca și un Internet Hotspot, accesând:
              <br />
              <br />
              <strong>Setări</strong>⇒&nbsp;
              <strong>Hotspot mobil și tethering</strong>&nbsp;(trebuie să fie
              activat) ⇒&nbsp;<strong>alege Parolă Wi-Fi&nbsp;</strong>⇒&nbsp;
              <strong>setează parola cu minim 8 caractere</strong>⇒
              <strong>SALVARE</strong>&nbsp;⇒<strong>MAI MULTE</strong>
              &nbsp;(pentru Dispositive premise/Configurare Mobile hotspot -
              complează numele rețelei și parola pentru a te conecta doar cu
              dispozitivele cunoscute /Setări de expirare). La dezactivare -
              debifează Hotspot mobil.
              <br />
              Notă:&nbsp; Setările pot fi diferite în funcție de modelul
              telefonului.
              <br />
              <br />E bine să cunoști! Prin HotSpot se mărește consumul de date
              a traficului de internet.
            </span>
            <span></span>
          </p>
        </FaqQA>
        <FaqQA question="Cum pot să raportez o infracțiune sau o ilegalitate?">
          <p>
            <span></span>
            <span>
              Folosește-ți smartphone-ul ca și un Internet Hotspot, accesând:
              <br />
              <br />
              <strong>Setări</strong>⇒&nbsp;
              <strong>Hotspot mobil și tethering</strong>&nbsp;(trebuie să fie
              activat) ⇒&nbsp;<strong>alege Parolă Wi-Fi&nbsp;</strong>⇒&nbsp;
              <strong>setează parola cu minim 8 caractere</strong>⇒
              <strong>SALVARE</strong>&nbsp;⇒<strong>MAI MULTE</strong>
              &nbsp;(pentru Dispositive premise/Configurare Mobile hotspot -
              complează numele rețelei și parola pentru a te conecta doar cu
              dispozitivele cunoscute /Setări de expirare). La dezactivare -
              debifează Hotspot mobil.
              <br />
              Notă:&nbsp; Setările pot fi diferite în funcție de modelul
              telefonului.
              <br />
              <br />E bine să cunoști! Prin HotSpot se mărește consumul de date
              a traficului de internet.
            </span>
            <span></span>
          </p>
        </FaqQA>
        <FaqQA question="Cum pot să raportez o infracțiune sau o ilegalitate?">
          <p>
            <span></span>
            <span>
              Folosește-ți smartphone-ul ca și un Internet Hotspot, accesând:
              <br />
              <br />
              <strong>Setări</strong>⇒&nbsp;
              <strong>Hotspot mobil și tethering</strong>&nbsp;(trebuie să fie
              activat) ⇒&nbsp;<strong>alege Parolă Wi-Fi&nbsp;</strong>⇒&nbsp;
              <strong>setează parola cu minim 8 caractere</strong>⇒
              <strong>SALVARE</strong>&nbsp;⇒<strong>MAI MULTE</strong>
              &nbsp;(pentru Dispositive premise/Configurare Mobile hotspot -
              complează numele rețelei și parola pentru a te conecta doar cu
              dispozitivele cunoscute /Setări de expirare). La dezactivare -
              debifează Hotspot mobil.
              <br />
              Notă:&nbsp; Setările pot fi diferite în funcție de modelul
              telefonului.
              <br />
              <br />E bine să cunoști! Prin HotSpot se mărește consumul de date
              a traficului de internet.
            </span>
            <span></span>
          </p>
        </FaqQA>
      </Faq>
    </>
  );
}
