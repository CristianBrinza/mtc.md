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

export default function OptionsandServices() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('optionsandservices.breadcrumb.mobile'), url: ' ' },
    { label: t('optionsandservices.breadcrumb.optionsandservices') },
  ];

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
                  Nelimitat <span>/ 7 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
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
                  10GB <span>/ 15 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  5GB <span>/ 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  60 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  10GB <span>/ 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  100 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  20GB <span>/ 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  150 lei
                </div>
              </div>
            </div>

            <div className={styles.optionsandservices_block_btn}>
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/35974512.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Minute Naționale
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Soluția ideală pentru momentele în care traficul tău de internet
              nu îți ajunge.
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

            <div className={styles.optionsandservices_block_btn}>
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
              Soluția ideală pentru momentele în care traficul tău de internet
              nu îți ajunge.
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
                  <span> Europa, Israel, SUA, Canada/ 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
              <div className={styles.optionsandservices_block_list}>
                <div className={styles.optionsandservices_block_list_left}>
                  Orice Țară<span>/ 30 zile</span>
                </div>
                <div className={styles.optionsandservices_block_list_right}>
                  50 lei
                </div>
              </div>
            </div>

            <div className={styles.optionsandservices_block_btn}>
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
              Soluția ideală pentru momentele în care traficul tău de internet
              nu îți ajunge.
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

            <div className={styles.optionsandservices_block_btn}>
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
              Soluția ideală pentru momentele în care traficul tău de internet
              nu îți ajunge.
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

            <div className={styles.optionsandservices_block_btn}>
              Condițiile de utilizare{' '}
              <Icon type={'arrow_right'} color={'#212a55'} />
            </div>
          </div>
          <img
            className={styles.optionsandservices_block_img}
            src="/images/landings/35974512.png"
            alt="Moldteleocm"
          />
        </div>
        <div className={styles.optionsandservices_block}>
          <div className={styles.optionsandservices_block_left}>
            <div className={styles.optionsandservices_block_title}>
              Roaming World
            </div>
            <div className={styles.optionsandservices_block_subtitle}>
              Soluția ideală pentru momentele în care traficul tău de internet
              nu îți ajunge.
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

            <div className={styles.optionsandservices_block_btn}>
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
      </div>
      <MyApp />
      <Footer disclaimer={true} />
    </>
  );
}
