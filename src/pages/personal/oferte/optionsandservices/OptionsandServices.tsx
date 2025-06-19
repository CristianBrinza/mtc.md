// src/pages/OptionsandServices/OptionsandServices.tsx
import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './OptionsandServices.module.css';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import Icon from '../../../../components/Icon.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import { useState } from 'react';
import Popups from '../../../../components/Popups/Popups.tsx';

export default function OptionsandServices() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('optionsandservices.breadcrumb.mobile'), url: ' ' },
    { label: t('optionsandservices.breadcrumb.optionsandservices') },
  ];

  const [activePopup, setActivePopup] = useState<string | null>(null);

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
            src={`/images/landings/15074512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/90296512${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title title_3  ${styles.optionsandservices_title} `}>
        Conectează una din opțiunile dorite
      </div>

      <div className={styles.optionsandservices_blocks}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Internet Mobil
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Soluția ideală pentru momentele în care traficul tău de internet
              nu îți ajunge.
            </div>
            <div
              className={`${styles.optionsandservices_block_inside} ${styles.optionsandservices_block_inside_1}`}
            >
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Nelimitat <span>/ 1 zi</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  20 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Nelimitat <span> / 7 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  10GB <span> / 15 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  5GB <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  60 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  10GB <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  20GB <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  150 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f1')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/35974512.png"
            alt="Moldteleocm"
          />
          <img
            className={styles.optionsandservices_block_img_mob}
            src="/images/landings/15994011.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Minute Naționale
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Vorbește nelimitat în rețea și național, fără griji și
              întreruperi.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  50 minute <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  100 minute <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  20 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  200 minute<span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f2')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/35974011.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Minute Internaționale
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Comunică ușor cu cei dragi din afara țării, la tarife avantajoase.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  30 minute <br />
                  <span>România și Ucraina / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  25 minute <br />{' '}
                  <span> Europa, Israel, SUA, Canada / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Orice Țară<span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f3')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/75974512.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>SMS</div>
            <div className={styles.optionsandservices_block_subtitle}>
              Trimite rapid mesaje celor dragi, oriunde s-ar afla.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  50 SMS naționale
                  <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  10 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  100 SMS naționale <span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  15 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  20 SMS internaționale<span> / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  35 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f4')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/95944014.png"
            alt="Moldteleocm"
          />
        </div>
      </div>

      <div className={`title title_3  ${styles.optionsandservices_title} `}>
        Opțiuni Roaming
      </div>

      <div className={styles.optionsandservices_blocks}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Roaming Europe
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Comunică în Europa fără griji, la tarife ca acasă.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Apeluri <span> (100min) / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Internet <span>(2GB) / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Combo <span>(1GB / 50min) / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f5')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/39974511.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Roaming World
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Comunicarea și accesul la internet sunt prioritățile noastre.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Apeluri World <span> (10 min) / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  70 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Internet World <span> (1GB) / 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f6')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/36974511.png"
            alt="Moldteleocm"
          />
        </div>
      </div>

      <div className={`title title_3  ${styles.optionsandservices_title} `}>
        Alte Opțiuni
      </div>

      <div className={styles.optionsandservices_blocks}>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Viteza 4G+
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Majorarea vitezei de transport date download până la 175 Mbps și
              upload până la 50 Mbps.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  30 zile
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  Gratuit
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f7')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/15979001.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Upload Maxim
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Acordarea vitezei de upload de 5,76 Mbps.
            </div>
            <div className={`${styles.optionsandservices_block_inside}`}>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  30 zile
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  20 lei
                </div>
              </div>
            </div>

            <div
              className={styles.optionsandservices_block_btn}
              onClick={() => setActivePopup('f8')}
            >
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/15779001.png"
            alt="Moldteleocm"
          />
        </div>
      </div>
      <MyApp style_type={'blue_white'} />
      {/* FAQ */}
      <FaqV2 max_faq={6}>
        <FaqQAV2 question={'Cum pot să-mi verific starea contului?'}>
          <div>
            Cu ajutorul serviciului CostControl în orice moment vei putea afla
            care este stare contului tău. Pentru aceasta este necesar de a forma{' '}
            <b>500</b>, tasta de apel şi alege cifra <b>1</b>.
            <br /> <br /> De asemenea poţi utiliza acest serviciu prin
            expedierea unui mesaj scurt la nr. <b>500</b> cu cifra <b>1</b> sau
            poţi forma <b>*500*1#</b> şi <b>OK</b>.
            <br /> <br /> Mai mult, starea contului și alte detalii sunt
            disponibile prin intermediul aplicației ”MyMoldtelecom”.
          </div>
        </FaqQAV2>
        {/*<FaqQAV2 question={'Cum pot reîncărca contul?'}>*/}
        {/*  <div>*/}
        {/*    <ul>*/}
        {/*      <li>Pentru reîncărcare, trimite un SMS cu „R_************” (unde * reprezintă codul PIN de pe cartela de reîncărcare) la 100.</li>*/}
        {/*      <li>Pentru a cere unui prieten să îți reîncarce contul, trimite un SMS cu „RM_0xxxxxxxx” la 100 (unde „0xxxxxxxx” este numărul destinatarului).</li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</FaqQAV2>*/}
        <FaqQAV2 question={'De ce nu pot recepţiona apeluri?'}>
          <div>
            Nu poţi efectua apeluri din unul din următoarele motive:
            <ul>
              <li>Ai activată redirecţionarea apelurilor de intrare;</li>
              <li>Serviciile tale sunt suspendate temporar;</li>
              <li>Cartela USIM nu este valabilă sau este deteriorată;</li>
              <li>Nu te afli în aria de acoperire a reţelei Moldtelecom.</li>
            </ul>
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'De ce nu pot efectua apeluri?'}>
          <div>
            Nu poţi efectua apeluri din unul din următoarele motive:
            <ul>
              <li>
                Balanţa contului tău nu este suficientă pentru a efectua
                apeluri;
              </li>
              <li>Serviciile tale sunt suspendate temporar;</li>
              <li>Cartela USIM nu este valabilă sau este deteriorată;</li>
              <li>Nu te afli în aria de acoperire a reţelei Moldtelecom.</li>
            </ul>
          </div>
        </FaqQAV2>
        <FaqQAV2
          question={'Care este procedura de activare a Cartelei Moldtelecom?'}
        >
          <div>
            Pentru a activa Cartela Moldtelecom este nevoie să o introduci în
            telefonul tău mobil şi să formezi <b>200</b> apoi <b>OK</b> sau{' '}
            <b>*200#OK</b>.
          </div>
        </FaqQAV2>
        <FaqQAV2 question={'Cât costă restabilirea/înlocuirea cartelei USIM?'}>
          <div>Înlocuirea cartelei USIM este GRATUITĂ.</div>
        </FaqQAV2>
      </FaqV2>
      <Footer disclaimer={true} />

      <Popups content={activePopup} onClose={() => setActivePopup(null)} />
    </>
  );
}
