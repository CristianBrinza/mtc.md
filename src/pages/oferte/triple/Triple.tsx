import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './Triple.module.css';
import Faq from '../../../components/faq/Faq.tsx';
import FaqQA from '../../../components/faq/FaqQA.tsx';
import ShopCard from '../../../components/shop_card/ShopCard.tsx';
import Slider from 'react-slick';
import Functions from '../../../components/functions/Functions.tsx';
import Footer from '../../../components/footer/Footer.tsx';

export default function Triple() {
  const breadcrumbItems = [
    { label: 'Promo', url: ' ' },
    { label: 'Internet + TV + Mobil' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

      {/*<div className={`title ${styles.title1}`}>*/}
      {/*  Crează-ți propriul abonament:*/}
      {/*</div>*/}

      <div className={`title ${styles.title2}`}>
        Smartphone la DOAR 1 leu, sau Preț Special!
      </div>

      <div className={`sub_title ${styles.sub_title1}`}>
        Alege oferta de internet cu TV fără reducere și primești la conectare
        unul din device-urile de mai jos
      </div>

      <Slider {...settings} className={styles.triple_carousell}>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            image="/images/shop/323564512.png"
            price={1}
            old_price={2999}
            reducere="-99%"
            title='Hisense TV 32"'
            subtitle="32A4N"
            characteristics='Direct LED / Full HD / 32"'
          />
        </div>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            image="/images/shop/394534437.png"
            price={1}
            old_price={2999}
            reducere="-99%"
            title='Hisense TV 43"'
            subtitle="43A4N (4k)"
            characteristics='UHD VA / 4k / 43"'
          />
        </div>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            image="/images/shop/394534437.png"
            price={2599}
            old_price={2999}
            reducere="-99%"
            title='Hisense TV 55"'
            subtitle="55A4N (4k)"
            characteristics='UHD VA / 4k / 55"'
          />
        </div>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            image="/images/shop/523534569.png"
            price={13499}
            old_price={2999}
            reducere="-99%"
            title="Apple"
            subtitle="Iphone 16 Pro"
            characteristics="(8/256GB)"
          />
        </div>
      </Slider>

      <Functions title={'Funcții interactive'} />
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

      <Footer discalmer={true} />
    </>
  );
}
