import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../components/hero/Hero.tsx';
import styles from './Mobile.module.css';
import Faq from '../../../components/faq/Faq.tsx';
import FaqQA from '../../../components/faq/FaqQA.tsx';
import ShopCard from '../../../components/shop_card/ShopCard.tsx';
import Slider from 'react-slick';
import Functions from '../../../components/functions/Functions.tsx';
import Footer from '../../../components/footer/Footer.tsx';
import MyApp from '../../../components/app/MyApp.tsx';
import AbonamentCard from '../../../components/abonament_card/AbonamentCard.tsx';
import Icon from '../../../components/Icon.tsx';
import PopupBuy from '../../../components/PopupBuy/PopupBuy.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button.tsx';

export default function Mobile() {
  const breadcrumbItems = [
    { label: 'Promo', url: ' ' },
    { label: 'Telefonie mobila' },
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
  const settings_carousell = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
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

  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');

  const set_Abonament = (popup: string, title: string) => {
    setActivePopup(activePopup !== popup ? popup : null);
    setTitle(title);
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <Hero color=" #F7F7F7">
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src="/images/landings/45274512.png"
            alt="Moldtelecom"
          />
        </div>
        {/*<div*/}
        {/*  className="hero_small_title"*/}
        {/*  style={{*/}
        {/*    background:*/}
        {/*      'linear-gradient(91deg, rgb(223 74 75) 10.51%, rgb(255 179 0) 76.69%)',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  /!*Porteaza-te la Moldtelecom*!/*/}
        {/*  -35% REDUCERE*/}
        {/*</div>*/}
        {/*<div className="hero_title">*/}
        {/*  Acum ai <br />*/}
        {/*  -35% REDUCERE*/}
        {/*  /!*<span*!/*/}
        {/*  /!*  className="stroked-text_black"*!/*/}
        {/*  /!*  style={{ fontWeight: '700', lineHeight: '1' }}*!/*/}
        {/*  /!*>*!/*/}
        {/*  /!*  -35% REDUCERE*!/*/}
        {/*  /!*</span>*!/*/}
        {/*  <br />*/}
        {/*  timp de 2 ani!*/}
        {/*</div>*/}
        {/*<div className="hero_subtitle">*/}
        {/*  Alege <b> GRATUIT</b> un număr frumos care <br />*/}
        {/*  te reprezintă!*/}
        {/*</div>*/}
      </Hero>

      <div className={styles.chose_product}>
        <div
          className={`${styles.chose_product_item} ${styles.chose_product_item_active}`}
        >
          Portare
          <div className={styles.chose_product_line}></div>
        </div>
        <div
          className={styles.chose_product_item}
          onClick={() => navigate('/')}
        >
          Abonament nou
          <div className={styles.chose_product_line}></div>
        </div>
      </div>

      <div className={`title title_5 gradient_text_2 ${styles.title2}`}>
        Cele mai avantajoase abonamente <br />
        de telefonie mobilă
      </div>

      <Slider
        {...settings_carousell}
        className={`${styles.tm_carousell_abonamente} mtc_carousell`}
      >
        <div className={styles.tm_carousell_block}>
          <AbonamentCard
            type={'Abonament'}
            title={'Smart 95'}
            image={'/images/landings/46424379.png'}
            price={'98'}
            old_price={''}
            // style_type={'new_white'}
            price_text={' '}
          >
            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>250 min</b>
                    <br /> naționale
                  </span>{' '}
                  /
                  <span>
                    <b>25 min </b>
                    <br /> internaționale
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 SMS</b> <br /> naționale
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
              <div
                className={styles.tm_carousell_block_row}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
            </div>
          </AbonamentCard>
        </div>
        <div className={styles.tm_carousell_block}>
          <AbonamentCard
            type={'Abonament'}
            title={'Liberty 120'}
            image={'/images/landings/72474374.png'}
            price={'78'}
            old_price={'120 lei/lună'}
            price_text={'35% reducere pentru 24 luni'}
          >
            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>250 min</b>
                    <br /> naționale
                  </span>{' '}
                  /
                  <span>
                    <b>25 min </b>
                    <br /> internaționale
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 SMS</b> <br /> naționale
                </span>
                <svg
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_10971_13707)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.4128C9.83183 11.4128 9.67055 11.346 9.55164 11.2271C9.43273 11.1082 9.36592 10.9469 9.36592 10.7787V2.16376L7.06634 4.46334C6.94614 4.57534 6.78716 4.63632 6.62289 4.63342C6.45862 4.63052 6.30189 4.56397 6.18572 4.4478C6.06954 4.33163 6.003 4.1749 6.0001 4.01063C5.9972 3.84636 6.05818 3.68738 6.17018 3.56718L9.55192 0.185438C9.67081 0.066696 9.83197 0 10 0C10.168 0 10.3292 0.066696 10.4481 0.185438L13.8298 3.56718C13.9418 3.68738 14.0028 3.84636 13.9999 4.01063C13.997 4.1749 13.9305 4.33163 13.8143 4.4478C13.6981 4.56397 13.5414 4.63052 13.3771 4.63342C13.2128 4.63632 13.0539 4.57534 12.9337 4.46334L10.6341 2.16376V10.7787C10.6341 10.9469 10.5673 11.1082 10.4484 11.2271C10.3294 11.346 10.1682 11.4128 10 11.4128Z"
                      fill="#86CA5E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10971_13707">
                      <rect width="16" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
              <div
                className={styles.tm_carousell_block_row}
                style={{ opacity: '0' }}
              >
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
            </div>
          </AbonamentCard>
        </div>
        <div className={styles.tm_carousell_block}>
          <AbonamentCard
            type={'Abonament'}
            title={'Liberty 150'}
            image={'/images/landings/98540076.png'}
            price={'97.5'}
            old_price={'160 lei/lună'}
            price_text={'35% reducere pentru 24 luni'}
          >
            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>250 min</b>
                    <br /> naționale
                  </span>{' '}
                  /
                  <span>
                    <b>25 min </b>
                    <br /> internaționale
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 SMS</b> <br /> naționale
                </span>
                <svg
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_10971_13707)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.4128C9.83183 11.4128 9.67055 11.346 9.55164 11.2271C9.43273 11.1082 9.36592 10.9469 9.36592 10.7787V2.16376L7.06634 4.46334C6.94614 4.57534 6.78716 4.63632 6.62289 4.63342C6.45862 4.63052 6.30189 4.56397 6.18572 4.4478C6.06954 4.33163 6.003 4.1749 6.0001 4.01063C5.9972 3.84636 6.05818 3.68738 6.17018 3.56718L9.55192 0.185438C9.67081 0.066696 9.83197 0 10 0C10.168 0 10.3292 0.066696 10.4481 0.185438L13.8298 3.56718C13.9418 3.68738 14.0028 3.84636 13.9999 4.01063C13.997 4.1749 13.9305 4.33163 13.8143 4.4478C13.6981 4.56397 13.5414 4.63052 13.3771 4.63342C13.2128 4.63632 13.0539 4.57534 12.9337 4.46334L10.6341 2.16376V10.7787C10.6341 10.9469 10.5673 11.1082 10.4484 11.2271C10.3294 11.346 10.1682 11.4128 10 11.4128Z"
                      fill="#86CA5E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10971_13707">
                      <rect width="16" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
            </div>
          </AbonamentCard>
        </div>
        <div className={styles.tm_carousell_block}>
          <AbonamentCard
            type={'Abonament'}
            title={'Liberty 190'}
            image={'/images/landings/72779378.png'}
            price={'123.5'}
            old_price={'190 lei/lună'}
            onClick={() => set_Abonament('3281270', 'test')}
            price_text={'35% reducere pentru 24 luni'}
          >
            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>250 min</b>
                    <br /> naționale
                  </span>{' '}
                  /
                  <span>
                    <b>25 min </b>
                    <br /> internaționale
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 SMS</b> <br /> naționale
                </span>
                <svg
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_10971_13707)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.4128C9.83183 11.4128 9.67055 11.346 9.55164 11.2271C9.43273 11.1082 9.36592 10.9469 9.36592 10.7787V2.16376L7.06634 4.46334C6.94614 4.57534 6.78716 4.63632 6.62289 4.63342C6.45862 4.63052 6.30189 4.56397 6.18572 4.4478C6.06954 4.33163 6.003 4.1749 6.0001 4.01063C5.9972 3.84636 6.05818 3.68738 6.17018 3.56718L9.55192 0.185438C9.67081 0.066696 9.83197 0 10 0C10.168 0 10.3292 0.066696 10.4481 0.185438L13.8298 3.56718C13.9418 3.68738 14.0028 3.84636 13.9999 4.01063C13.997 4.1749 13.9305 4.33163 13.8143 4.4478C13.6981 4.56397 13.5414 4.63052 13.3771 4.63342C13.2128 4.63632 13.0539 4.57534 12.9337 4.46334L10.6341 2.16376V10.7787C10.6341 10.9469 10.5673 11.1082 10.4484 11.2271C10.3294 11.346 10.1682 11.4128 10 11.4128Z"
                      fill="#86CA5E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10971_13707">
                      <rect width="16" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    <b style={{ color: '#DD4E6C' }}>850 min </b>
                    <br /> Roaming EU
                  </span>
                  +
                  <span>
                    {' '}
                    <b style={{ color: '#DD4E6C' }}>7 GB</b>
                    <br /> Roaming EU
                  </span>
                </div>
              </div>
            </div>
          </AbonamentCard>
        </div>
        <div className={styles.tm_carousell_block}>
          <AbonamentCard
            type={'Abonament'}
            title={'Liberty <sml>plus</sml> 250'}
            image={'/images/landings/72779378.png'}
            price={'162.5'}
            old_price={'250 lei/lună'}
            onClick={() => console.log('sss')}
            price_text={'35% reducere pentru 24 luni'}
          >
            <div className={styles.tm_carousell_block_rows}>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>Nelimitat</b> <br />
                  min. și SMS în rețea
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'call_mess'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    {' '}
                    <b>250 min</b>
                    <br /> naționale
                  </span>{' '}
                  /
                  <span>
                    <b>25 min </b>
                    <br /> internaționale
                  </span>
                </div>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'sms'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 SMS</b> <br /> naționale
                </span>
                <svg
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_10971_13707)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.4128C9.83183 11.4128 9.67055 11.346 9.55164 11.2271C9.43273 11.1082 9.36592 10.9469 9.36592 10.7787V2.16376L7.06634 4.46334C6.94614 4.57534 6.78716 4.63632 6.62289 4.63342C6.45862 4.63052 6.30189 4.56397 6.18572 4.4478C6.06954 4.33163 6.003 4.1749 6.0001 4.01063C5.9972 3.84636 6.05818 3.68738 6.17018 3.56718L9.55192 0.185438C9.67081 0.066696 9.83197 0 10 0C10.168 0 10.3292 0.066696 10.4481 0.185438L13.8298 3.56718C13.9418 3.68738 14.0028 3.84636 13.9999 4.01063C13.997 4.1749 13.9305 4.33163 13.8143 4.4478C13.6981 4.56397 13.5414 4.63052 13.3771 4.63342C13.2128 4.63632 13.0539 4.57534 12.9337 4.46334L10.6341 2.16376V10.7787C10.6341 10.9469 10.5673 11.1082 10.4484 11.2271C10.3294 11.346 10.1682 11.4128 10 11.4128Z"
                      fill="#86CA5E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10971_13707">
                      <rect width="16" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <span>
                  <b>25 GB </b> <br /> Trafic internet
                </span>
              </div>
              <div className={styles.tm_carousell_block_row}>
                <div className={styles.tm_carousell_block_row_svg}>
                  <Icon
                    type={'internet'}
                    color={'var(--theme_primary_color_blue_0)'}
                  />
                </div>
                <div className={styles.tm_carousell_block_row_inline}>
                  <span>
                    <b style={{ color: '#DD4E6C' }}>Nelimitat </b>
                    <br /> min Roaming EU
                  </span>
                  +
                  <span>
                    {' '}
                    <b style={{ color: '#DD4E6C' }}>10 GB</b>
                    <br /> Roaming EU
                  </span>
                </div>
              </div>
            </div>
          </AbonamentCard>
        </div>
      </Slider>

      <div className={styles.btn_detalii}>
        <Button
          color={'var(--theme_primary_color_blue_4)'}
          bgcolor={'var(--theme_primary_color_blue_1)'}
          border={'var(--theme_primary_color_blue_1)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          icon={'arrow_right'}
        >
          Detalii ofertă
        </Button>
      </div>
      <PopupBuy
        id="3281270"
        isVisible={activePopup === '3281270'}
        onClose={() => setActivePopup(null)}
        title={title}
        config={'444'}
      />
      {/*<div className={`title ${styles.title1}`}>*/}
      {/*  Crează-ți propriul abonament:*/}
      {/*</div>*/}

      <div className={`title title_3 title_5 gradient_text_4 ${styles.title2}`}>
        Smartphone la DOAR 1 leu, sau Preț Special!
      </div>

      <div className={`sub_title ${styles.sub_title1}`}>
        Alege oferta de internet cu TV fără reducere și primești la conectare
        unul din device-urile de mai jos
      </div>

      <Slider {...settings} className={styles.tm_carousell}>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={323564512}
            image="/images/shop/323564512.png"
            price={1}
            old_price={2999}
            reducere="-99%"
            title="Hisense "
            subtitle="32A4N (FHD)"
            characteristics='Direct LED / Full HD / 32"'
            tag={'DOAR 1 leu'}
            style_type={'gray'}
          />
        </div>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={194234497}
            image="/images/shop/394534437.png"
            price={1}
            old_price={5099}
            reducere="- 5098"
            title="Hisense"
            subtitle="43A4N (4k)"
            characteristics='UHD VA / 4K / 43"'
            tag={'Promo'}
            style_type={'gray'}
          />
        </div>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={394534437}
            image="/images/shop/394534437.png"
            price={2999}
            old_price={7299}
            reducere="-40%"
            title="Hisense"
            subtitle="55A4N (4k)"
            characteristics='UHD VA / 4K / 55"'
            style_type={'gray'}
          />
        </div>
        <div className={styles.tm_carousell_block}>
          <ShopCard
            device_id={5235345692}
            image="/images/shop/523534569.png"
            price={13499}
            old_price={2999}
            // reducere="-99%"
            title="Apple"
            subtitle="Iphone 16 Pro"
            characteristics="(8/256GB)"
            style_type={'gray'}
          />
        </div>
      </Slider>

      <div className={styles.devices_discalmer}>
        <span>
          {' '}
          <sup>*</sup>Oferta este valabilă în limita stocului disponibil
        </span>
      </div>

      <Functions
        style_type={'blue'}
        title={'general.recommended_options'}
        functions={['Internet', 'TV', 'MTC', 'APP']}
      />
      <MyApp style_type={'blue_white'} />
      <Chat />
      <Feedback />
      <Faq style_type="1">
        <FaqQA question=" Unde pot achita factura mea pentru Internet?">
          <div>
            <span>
              <strong></strong>Cea mai rapidă și comodă modalitate de achitare a
              serviciului de Internet fix este achitarea prin intermediul
              serviciului "Reîncărcare cont", cu cardurile Visa, MasterCard,
              Visa Electron sau Maestro.
              <br />
              <br />
              Modalităţile de plată a serviciilor:
            </span>

            <ul>
              <li>&nbsp;&nbsp;&nbsp; Aplicaţia mobilă "MyMoldtelecom"</li>
              <li>&nbsp;&nbsp;&nbsp; Bănci</li>
              <li>&nbsp;&nbsp;&nbsp; Oficiile Poşta Moldovei</li>
              <li>&nbsp;&nbsp;&nbsp; Puncte de vânzări Moldtelecom</li>
              <li>
                &nbsp;&nbsp;&nbsp; Prin intermediul bancomatelor Victoriabank
              </li>
              <li>
                &nbsp;&nbsp;&nbsp; Achitarea serviciilor prin intermediul Online
                Banking
              </li>
              <li>
                &nbsp;&nbsp;&nbsp; Prin intermediul terminalelor de plăţi
                electronice NettoPro, OSMP şi MMPS
              </li>
              <li>
                &nbsp;&nbsp;&nbsp; Prin intermediul sistemelor de plăți
                electronice B-Pay
              </li>
            </ul>
          </div>
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
        <FaqQA question="Ce este un atac DDoS și cum îți poate afecta afacerea?">
          <p>
            Un atac DDoS (Distributed Denial of Service) este o amenințare
            cibernetică care poate paraliza activitatea online a afacerii tale.
            Acesta constă într-un val masiv de trafic malițios trimis către
            site-ul sau serverele tale, cu scopul de a le suprasolicita și
            bloca. <b>Cum te poate afecta?</b>
            <ul>
              <li>
                <b>Blocarea website-ului</b> – Clienții nu mai pot accesa
                magazinul online sau serviciile digitale.
              </li>
              <li>
                <b>Pierderi financiare</b> – Fiecare minut de downtime înseamnă
                pierderi directe pentru afacerea ta.
              </li>
              <li>
                <b>Daune reputaționale</b> – Un atac poate afecta încrederea
                clienților și partenerilor tăi.
              </li>
              <li>
                <b>Solicitări de recompense</b> – În unele cazuri, atacatorii
                cer sume de bani pentru a opri atacurile.
              </li>
            </ul>
            Nu lăsa atacurile cibernetice să îți pună afacerea în pericol!
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
