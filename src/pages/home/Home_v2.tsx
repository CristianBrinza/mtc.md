import Navbar from '../../components/navbar/Navbar.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home_v2.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import Chat from '../../components/chat/Chat.tsx';
import Footer from '../../components/footer/Footer.tsx';
import ShopCard from '../../components/shop_card/ShopCard.tsx';
import Icon from '../../components/Icon.tsx';
import Videos from '../../components/videos/Videos.tsx';
import SEO from '../../components/SEO';

interface videosItem {
  url_ro?: string;
  url_ru?: string;
  url_en?: string;
}

interface newsItem {
  id?: string;
  name?: string;
  image?: string;
  created_at?: string;
  link?: string;
}

export default function Home() {
  // useEffect(() => {
  //   window.location.href = `https://www.moldtelecom.md/${t('lang')}`;
  // });

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { t } = useTranslation();
  const seo = {
    title: t('pages.home.title'),
    description: t('pages.home.description'),
    keywords: t('pages.home.keywords'),
  };

  const settings_phones = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1491,
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

  // ✨ Tell TS this ref will hold a HTMLDivElement
  const carouselRef = useRef<HTMLDivElement>(null);

  // ✨ Narrow dir to two literal types
  const scrollByCard = (dir: 'prev' | 'next') => {
    const container = carouselRef.current;
    if (!container) return;

    // ✨ Tell TS this will return an HTMLElement (so offsetWidth exists)
    const card = container.querySelector<HTMLDivElement>(
      `.${styles.home_deals_card}`
    );
    if (!card) return;

    const gap = parseInt(getComputedStyle(container).gap, 10) || 0;
    const scrollAmount = card.offsetWidth + gap;

    // ✨ Now TS knows container.scrollBy exists on HTMLDivElement
    container.scrollBy({
      left: dir === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const [videos, setVideos] = useState<videosItem[]>([]);
  useEffect(() => {
    fetch('/json/home_videos.json')
      .then(response => response.json())
      .then((data: videosItem[]) => setVideos(data))
      .catch(error => console.error('Error loading videos:', error));
  }, []);

  const formatDate = (dateTime: string): string => {
    const [datePart] = dateTime.split(' ');
    const [year, month, day] = datePart.split('-');
    return `${day}.${month}.${year}`;
  };

  const [news, setNews] = useState<newsItem[]>([]);
  useEffect(() => {
    fetch(`https://www.moldtelecom.md/news_json/${t('lang')}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data: any) => {
        if (Array.isArray(data.data)) {
          setNews(data.data);
        } else {
          setNews([]);
        }
      })
      .catch(error => console.error('Error loading news:', error));
  }, []);

  return (
    <>
      <SEO {...seo} />
      <Navbar />

      <Slider {...settings} className={styles.home_slider}>
        <a href={'/mobile'} className={styles.home_hero}>
          <img
            className={styles.home_hero_img_desk}
            src="/images/homepage/home_hero_tm_desktop_ro.png"
            alt="Moldtelecom"
          />
        </a>
        <a href={'/mobile'} className={styles.home_hero}>
          <img
            className={styles.home_hero_img_desk}
            src="/images/homepage/30292512_desk_ro.png"
            alt="Moldtelecom"
          />
        </a>
        <a href={'/mobile'} className={styles.home_hero}>
          <img
            className={styles.home_hero_img_desk}
            src="/images/homepage/home_hero_mtc_tv_desktop_ro.png"
            alt="Moldtelecom"
          />
        </a>
        <a href={'/triple'} className={styles.home_hero}>
          <img
            className={styles.home_hero_img_desk}
            src="/images/homepage/home_hero_triple_desktop_ro.png"
            alt="Moldtelecom"
          />
        </a>
      </Slider>

      <div className={styles.home_topbar}>
        <a
          href={'https://my.moldtelecom.md/my-moldtelecom/'}
          className={styles.home_topbar_block}
        >
          <div className={styles.home_topbar_block_svg}>
            <svg
              width="17"
              height="27"
              viewBox="0 0 17 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 1.6875C13.9476 1.6875 14.3768 1.86529 14.6932 2.18176C15.0097 2.49822 15.1875 2.92745 15.1875 3.375V23.625C15.1875 24.0726 15.0097 24.5018 14.6932 24.8182C14.3768 25.1347 13.9476 25.3125 13.5 25.3125H3.375C2.92745 25.3125 2.49823 25.1347 2.18176 24.8182C1.86529 24.5018 1.6875 24.0726 1.6875 23.625V3.375C1.6875 2.92745 1.86529 2.49822 2.18176 2.18176C2.49823 1.86529 2.92745 1.6875 3.375 1.6875H13.5ZM3.375 0C2.47989 0 1.62145 0.355579 0.988514 0.988515C0.355579 1.62145 0 2.47989 0 3.375V23.625C0 24.5201 0.355579 25.3785 0.988514 26.0115C1.62145 26.6444 2.47989 27 3.375 27H13.5C14.3951 27 15.2536 26.6444 15.8865 26.0115C16.5194 25.3785 16.875 24.5201 16.875 23.625V3.375C16.875 2.47989 16.5194 1.62145 15.8865 0.988515C15.2536 0.355579 14.3951 0 13.5 0L3.375 0Z"
                fill="#2F3043"
              />
              <path
                d="M8.4375 23.625C8.88505 23.625 9.31427 23.4472 9.63074 23.1307C9.94721 22.8143 10.125 22.3851 10.125 21.9375C10.125 21.4899 9.94721 21.0607 9.63074 20.7443C9.31427 20.4278 8.88505 20.25 8.4375 20.25C7.98995 20.25 7.56073 20.4278 7.24426 20.7443C6.92779 21.0607 6.75 21.4899 6.75 21.9375C6.75 22.3851 6.92779 22.8143 7.24426 23.1307C7.56073 23.4472 7.98995 23.625 8.4375 23.625Z"
                fill="#2F3043"
              />
            </svg>
          </div>
          <div className={styles.home_topbar_block_title}>My Moldtelecom</div>
        </a>
        <a
          href={`https://www.moldtelecom.md/${t('lang')}/Telefoane`}
          className={styles.home_topbar_block}
        >
          <div className={styles.home_topbar_block_svg}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84414 21.9333C7.40497 21.9333 6.22747 23.1108 6.22747 24.55C6.22747 25.9892 7.40497 27.1667 8.84414 27.1667C10.2833 27.1667 11.4608 25.9892 11.4608 24.55C11.4608 23.1108 10.2833 21.9333 8.84414 21.9333ZM21.9275 21.9333C20.4883 21.9333 19.3108 23.1108 19.3108 24.55C19.3108 25.9892 20.4883 27.1667 21.9275 27.1667C23.3666 27.1667 24.5441 25.9892 24.5441 24.55C24.5441 23.1108 23.3666 21.9333 21.9275 21.9333ZM9.10581 17.7467V17.6158L10.2833 15.3917H19.965C20.8808 15.3917 21.7966 14.8683 22.1891 14.0833L27.2916 4.925L25.0675 3.61667L19.965 12.775H10.8066L5.31164 1H0.994141V3.61667H3.61081L8.32081 13.56L6.48914 16.7C6.35831 17.0925 6.22747 17.485 6.22747 18.0083C6.22747 19.4475 7.40497 20.625 8.84414 20.625H24.5441V18.0083H9.36747C9.23664 18.0083 9.10581 17.8775 9.10581 17.7467Z"
                fill="#2F3043"
                stroke="white"
                stroke-width="0.7"
              />
              <path d="M20.4667 4V5.61667H11V4H20.4667Z" fill="#2F3043" />
            </svg>
          </div>
          <div className={styles.home_topbar_block_title}>eShop</div>
        </a>
        <a
          href={'https://achitari.moldtelecom.md/Pay'}
          className={styles.home_topbar_block}
        >
          <div className={styles.home_topbar_block_svg}>
            <svg
              width="24"
              height="34"
              viewBox="0 0 24 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 1.6875C20.9476 1.6875 21.3768 1.86529 21.6932 2.18176C22.0097 2.49822 22.1875 2.92745 22.1875 3.375V23.625C22.1875 24.0726 22.0097 24.5018 21.6932 24.8182C21.3768 25.1347 20.9476 25.3125 20.5 25.3125H10.375C9.92745 25.3125 9.49823 25.1347 9.18176 24.8182C8.86529 24.5018 8.6875 24.0726 8.6875 23.625V3.375C8.6875 2.92745 8.86529 2.49822 9.18176 2.18176C9.49823 1.86529 9.92745 1.6875 10.375 1.6875H20.5ZM10.375 0C9.47989 0 8.62145 0.355579 7.98851 0.988515C7.35558 1.62145 7 2.47989 7 3.375V23.625C7 24.5201 7.35558 25.3785 7.98851 26.0115C8.62145 26.6444 9.47989 27 10.375 27H20.5C21.3951 27 22.2536 26.6444 22.8865 26.0115C23.5194 25.3785 23.875 24.5201 23.875 23.625V3.375C23.875 2.47989 23.5194 1.62145 22.8865 0.988515C22.2536 0.355579 21.3951 0 20.5 0L10.375 0Z"
                fill="#2F3043"
              />
              <rect
                y="15"
                width="19"
                height="19"
                fill="white"
                className={styles.home_topbar_block_fill}
              />
              <path
                d="M15.0034 15.2472C14.7937 15.2472 14.6289 15.0824 14.6289 14.8727V8.13112C14.6289 7.92139 14.7937 7.75659 15.0034 7.75659C15.2132 7.75659 15.378 7.92139 15.378 8.13112V14.8727C15.378 15.0824 15.2132 15.2472 15.0034 15.2472Z"
                fill="#2F3043"
                stroke="#2F3043"
                stroke-width="0.374532"
              />
              <path
                d="M17.6255 10.3783C17.5763 10.3789 17.5276 10.3692 17.4825 10.3498C17.4373 10.3305 17.3967 10.3019 17.3633 10.2659L15.0037 7.90637L12.6442 10.2659C12.4944 10.4157 12.2622 10.4157 12.1124 10.2659C11.9625 10.1161 11.9625 9.8839 12.1124 9.73408L14.7341 7.11236C14.8839 6.96255 15.1161 6.96255 15.2659 7.11236L17.8876 9.73408C18.0375 9.8839 18.0375 10.1161 17.8876 10.2659C17.8127 10.3408 17.7154 10.3783 17.6255 10.3783Z"
                fill="#2F3043"
                stroke="#2F3043"
                stroke-width="0.374532"
              />
              <path
                d="M9 23.8334C9 24.938 10.7907 25.8334 13 25.8334C15.2093 25.8334 17 24.938 17 23.8334C17 22.7287 15.2093 21.8334 13 21.8334C10.7907 21.8334 9 22.7287 9 23.8334Z"
                stroke="#2F3043"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 23.8333V26.5C9 27.604 10.7907 28.5 13 28.5C15.2093 28.5 17 27.604 17 26.5V23.8333M5 18.5C5 19.2147 5.76267 19.8747 7 20.232C8.23733 20.5893 9.76267 20.5893 11 20.232C12.2373 19.8747 13 19.2147 13 18.5C13 17.7853 12.2373 17.1253 11 16.768C9.76267 16.4107 8.23733 16.4107 7 16.768C5.76267 17.1253 5 17.7853 5 18.5Z"
                stroke="#2F3043"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 18.5V25.1667C5 25.7587 5.51467 26.1333 6.33333 26.5"
                stroke="#2F3043"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 21.8334C5 22.4254 5.51467 22.8 6.33333 23.1667"
                stroke="#2F3043"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_topbar_block_title}>Reincarcare cont</div>
        </a>
        <a
          href={'https://moldtelecom.md/ro/cereri'}
          className={styles.home_topbar_block}
        >
          <div className={styles.home_topbar_block_svg}>
            <svg
              width="21"
              height="27"
              viewBox="0 0 21 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.73182 11.6591C3.73182 10.8586 4.0498 10.0909 4.61582 9.52491C5.18184 8.9589 5.94953 8.64091 6.75 8.64091C7.55047 8.64091 8.31816 8.9589 8.88418 9.52491C9.4502 10.0909 9.76818 10.8586 9.76818 11.6591C9.76818 12.4596 9.4502 13.2272 8.88418 13.7933C8.31816 14.3593 7.55047 14.6773 6.75 14.6773C5.94953 14.6773 5.18184 14.3593 4.61582 13.7933C4.0498 13.2272 3.73182 12.4596 3.73182 11.6591ZM6.75 10.3818C6.41125 10.3818 6.08637 10.5164 5.84683 10.7559C5.6073 10.9955 5.47273 11.3203 5.47273 11.6591C5.47273 11.9978 5.6073 12.3227 5.84683 12.5623C6.08637 12.8018 6.41125 12.9364 6.75 12.9364C7.08875 12.9364 7.41363 12.8018 7.65317 12.5623C7.8927 12.3227 8.02727 11.9978 8.02727 11.6591C8.02727 11.3203 7.8927 10.9955 7.65317 10.7559C7.41363 10.5164 7.08875 10.3818 6.75 10.3818ZM4.61582 18.1158C5.18184 17.5498 5.94953 17.2318 6.75 17.2318C7.55047 17.2318 8.31816 17.5498 8.88418 18.1158C9.4502 18.6818 9.76818 19.4495 9.76818 20.25C9.76818 21.0505 9.4502 21.8182 8.88418 22.3842C8.31816 22.9502 7.55047 23.2682 6.75 23.2682C5.94953 23.2682 5.18184 22.9502 4.61582 22.3842C4.0498 21.8182 3.73182 21.0505 3.73182 20.25C3.73182 19.4495 4.0498 18.6818 4.61582 18.1158ZM5.84683 19.3468C5.6073 19.5864 5.47273 19.9112 5.47273 20.25C5.47273 20.5888 5.6073 20.9136 5.84683 21.1532C6.08637 21.3927 6.41125 21.5273 6.75 21.5273C7.08875 21.5273 7.41363 21.3927 7.65317 21.1532C7.8927 20.9136 8.02727 20.5888 8.02727 20.25C8.02727 19.9112 7.8927 19.5864 7.65317 19.3468C7.41363 19.1073 7.08875 18.9727 6.75 18.9727C6.41125 18.9727 6.08637 19.1073 5.84683 19.3468ZM11.3227 11.3523C11.3227 11.1214 11.4144 10.9 11.5777 10.7368C11.7409 10.5735 11.9623 10.4818 12.1932 10.4818H16.3977C16.6286 10.4818 16.85 10.5735 17.0132 10.7368C17.1765 10.9 17.2682 11.1214 17.2682 11.3523C17.2682 11.5831 17.1765 11.8045 17.0132 11.9678C16.85 12.131 16.6286 12.2227 16.3977 12.2227H12.1932C11.9623 12.2227 11.7409 12.131 11.5777 11.9678C11.4144 11.8045 11.3227 11.5831 11.3227 11.3523ZM11.5777 19.3277C11.7409 19.1644 11.9623 19.0727 12.1932 19.0727H16.3977C16.6286 19.0727 16.85 19.1644 17.0132 19.3277C17.1765 19.4909 17.2682 19.7123 17.2682 19.9432C17.2682 20.174 17.1765 20.3954 17.0132 20.5587C16.85 20.7219 16.6286 20.8136 16.3977 20.8136H12.1932C11.9623 20.8136 11.7409 20.7219 11.5777 20.5587C11.4144 20.3954 11.3227 20.174 11.3227 19.9432C11.3227 19.7123 11.4144 19.4909 11.5777 19.3277ZM3.73182 5.21591C3.73182 4.98505 3.82353 4.76365 3.98677 4.6004C4.15001 4.43716 4.37141 4.34545 4.60227 4.34545H16.3977C16.6286 4.34545 16.85 4.43716 17.0132 4.6004C17.1765 4.76365 17.2682 4.98505 17.2682 5.21591C17.2682 5.44677 17.1765 5.66817 17.0132 5.83141C16.85 5.99466 16.6286 6.08636 16.3977 6.08636H4.60227C4.37141 6.08636 4.15001 5.99466 3.98677 5.83141C3.82353 5.66817 3.73182 5.44677 3.73182 5.21591ZM1.38333 1.38333C2.23705 0.529613 3.39494 0.05 4.60227 0.05H16.3977C17.6051 0.05 18.763 0.529613 19.6167 1.38333C20.4704 2.23705 20.95 3.39494 20.95 4.60227V22.3977C20.95 23.6051 20.4704 24.763 19.6167 25.6167C18.763 26.4704 17.6051 26.95 16.3977 26.95H4.60227C3.39494 26.95 2.23705 26.4704 1.38333 25.6167C0.529613 24.763 0.05 23.6051 0.05 22.3977V4.60227C0.05 3.39494 0.529613 2.23705 1.38333 1.38333ZM2.61434 2.61434C2.08711 3.14157 1.79091 3.85665 1.79091 4.60227V22.3977C1.79091 23.1433 2.08711 23.8584 2.61434 24.3857C3.14157 24.9129 3.85665 25.2091 4.60227 25.2091H16.3977C17.1433 25.2091 17.8584 24.9129 18.3857 24.3857C18.9129 23.8584 19.2091 23.1433 19.2091 22.3977V4.60227C19.2091 3.85665 18.9129 3.14157 18.3857 2.61434C17.8584 2.08711 17.1433 1.79091 16.3977 1.79091H4.60227C3.85665 1.79091 3.14157 2.08711 2.61434 2.61434Z"
                fill="#2F3043"
                stroke="white"
                stroke-width="0.1"
              />
            </svg>
          </div>
          <div className={styles.home_topbar_block_title}>Cerere online</div>
        </a>
        <a
          href={'https://moldtelecom.md/ro/Factura-prin-email'}
          className={styles.home_topbar_block}
        >
          <div className={styles.home_topbar_block_svg}>
            <svg
              width="19"
              height="27"
              viewBox="0 0 19 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.8 2.92545e-07C2.79218 2.92545e-07 1.82563 0.400356 1.11299 1.11299C0.400356 1.82563 0 2.79218 0 3.8V22.8C0 23.8078 0.400356 24.7744 1.11299 25.487C1.82563 26.1996 2.79218 26.6 3.8 26.6H15.2C16.2078 26.6 17.1744 26.1996 17.887 25.487C18.5996 24.7744 19 23.8078 19 22.8V8.3866C18.9993 7.63099 18.6986 6.90657 18.164 6.3726L12.6293 0.8341C12.3645 0.569493 12.0502 0.359638 11.7043 0.216522C11.3584 0.0734053 10.9877 -0.000169307 10.6134 2.92545e-07H3.8ZM1.9 3.8C1.9 3.29609 2.10018 2.81282 2.4565 2.4565C2.81282 2.10018 3.29609 1.9 3.8 1.9H9.5V6.65C9.5 7.40587 9.80027 8.13078 10.3347 8.66525C10.8692 9.19973 11.5941 9.5 12.35 9.5H17.1V22.8C17.1 23.3039 16.8998 23.7872 16.5435 24.1435C16.1872 24.4998 15.7039 24.7 15.2 24.7H3.8C3.29609 24.7 2.81282 24.4998 2.4565 24.1435C2.10018 23.7872 1.9 23.3039 1.9 22.8V3.8ZM16.7067 7.6H12.35C12.098 7.6 11.8564 7.49991 11.6782 7.32175C11.5001 7.14359 11.4 6.90196 11.4 6.65V2.2933L16.7067 7.6Z"
                fill="#2F3043"
              />
              <path
                d="M8.26172 12.4H14.1992M4.69922 12.4H5.88672M8.26172 15.9625H14.1992M4.69922 15.9625H5.88672M8.26172 19.525H14.1992M4.69922 19.525H5.88672"
                stroke="#2F3043"
                stroke-width="1.1875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_topbar_block_title}>Primeste factura</div>
        </a>
        <a href={'/magazine'} className={styles.home_topbar_block}>
          <div className={styles.home_topbar_block_svg}>
            <svg
              width="31"
              height="28"
              viewBox="0 0 31 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.39664 26.7703C4.60284 26.7703 3.92355 26.4879 3.35875 25.9231C2.79395 25.3583 2.51107 24.6786 2.51011 23.8838V12.4099C1.95686 11.9047 1.53014 11.2553 1.22994 10.4615C0.929741 9.66768 0.923487 8.80173 1.21118 7.86361L2.7266 2.95652C2.91904 2.3311 3.26205 1.81394 3.75565 1.40501C4.24924 0.996088 4.82029 0.791626 5.4688 0.791626H25.5301C26.1796 0.791626 26.7449 0.990315 27.226 1.38769C27.7071 1.78507 28.0558 2.30801 28.2723 2.95652L29.7878 7.86361C30.0764 8.80173 30.0706 9.65566 29.7704 10.4254C29.4702 11.1951 29.043 11.8566 28.4888 12.4099V23.8838C28.4888 24.6776 28.2064 25.3574 27.6416 25.9231C27.0768 26.4889 26.3971 26.7713 25.6023 26.7703H5.39664ZM18.6746 10.8945C19.3241 10.8945 19.8172 10.6722 20.154 10.2277C20.4907 9.78314 20.623 9.28378 20.5509 8.72956L19.7571 3.67815H16.9427V9.01822C16.9427 9.52336 17.1111 9.96259 17.4479 10.3359C17.7846 10.7092 18.1936 10.8954 18.6746 10.8945ZM12.18 10.8945C12.7332 10.8945 13.1845 10.7078 13.5337 10.3345C13.883 9.96115 14.0572 9.52239 14.0562 9.01822V3.67815H11.2418L10.448 8.72956C10.3518 9.30687 10.4779 9.81201 10.8262 10.245C11.1745 10.678 11.6258 10.8945 12.18 10.8945ZM5.75745 10.8945C6.19043 10.8945 6.56904 10.7381 6.8933 10.4254C7.21755 10.1127 7.41624 9.71579 7.48936 9.23471L8.28316 3.67815H5.4688L4.02554 8.51307C3.88121 8.99416 3.95915 9.51133 4.25935 10.0646C4.55954 10.6178 5.05891 10.8945 5.75745 10.8945ZM25.2415 10.8945C25.9391 10.8945 26.4442 10.6178 26.7569 10.0646C27.0696 9.51133 27.1418 8.99416 26.9734 8.51307L25.458 3.67815H22.7158L23.5096 9.23471C23.5817 9.71579 23.7804 10.1127 24.1056 10.4254C24.4308 10.7381 24.8095 10.8945 25.2415 10.8945ZM5.39664 23.8838H25.6023V13.7088C25.482 13.7569 25.4041 13.781 25.3685 13.781H25.2415C24.592 13.781 24.021 13.6727 23.5283 13.4562C23.0357 13.2398 22.5484 12.891 22.0663 12.4099C21.6333 12.8429 21.1402 13.1796 20.587 13.4202C20.0337 13.6607 19.4444 13.781 18.819 13.781C18.1695 13.781 17.5619 13.6607 16.9961 13.4202C16.4304 13.1796 15.9315 12.8429 15.4995 12.4099C15.0905 12.8429 14.6157 13.1796 14.075 13.4202C13.5342 13.6607 12.9507 13.781 12.3243 13.781C11.6267 13.781 10.9955 13.6607 10.4307 13.4202C9.86593 13.1796 9.36657 12.8429 8.93263 12.4099C8.42748 12.915 7.9286 13.2701 7.43596 13.475C6.94333 13.68 6.38383 13.7819 5.75745 13.781H5.59581C5.53519 13.781 5.4688 13.7569 5.39664 13.7088V23.8838Z"
                fill="#2F3043"
                stroke="white"
                stroke-width="0.748387"
              />
            </svg>
          </div>
          <div className={styles.home_topbar_block_title}>Magazine</div>
        </a>
      </div>

      <div className={`${styles.home_promo_title} ${''}`}>
        NEW <span>deals & products</span>
      </div>
      <div className={styles.home_promo}>
        {/*<div className={`${styles.home_promo_card} ${styles.home_promo_card_1}`}>*/}

        {/*  <div className={styles.home_promo_card_subtitle}>*/}
        {/*    eSIM*/}
        {/*  </div>*/}
        {/*  <div className={styles.home_promo_card_title}>*/}
        {/*    Descoperă cea mai tare promoție.*/}

        {/*  </div>*/}

        {/*  <svg className={styles.home_promo_card_btn} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*    <rect width="36" height="36" rx="18" fill="#2D2D2F"/>*/}
        {/*    <path d="M10 18L26 18M26 18L19 11M26 18L19 25" stroke="#D0D0D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*  </svg>*/}
        {/*</div>*/}
        <div
          onClick={() => {
            window.location.href = `https://moldtelecom.md/${t('lang')}/esim-acasa`;
          }}
          className={`${styles.home_promo_card} ${styles.home_promo_card_2}`}
        >
          <div className={styles.home_promo_card_subtitle}>eSIM Acasa</div>
          <div className={styles.home_promo_card_title}>
            Simplu și ușor, oriunde te afli <br />
            365 zile, la doar 80 lei
          </div>

          <svg
            className={styles.home_promo_card_btn}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#2D2D2F" />
            <path
              d="M10 18L26 18M26 18L19 11M26 18L19 25"
              stroke="#D0D0D1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          onClick={() => {
            window.location.href = `https://moldtelecom.md/${t('lang')}/moldtelecom-tv-go`;
          }}
          className={`${styles.home_promo_card} ${styles.home_promo_card_3}`}
        >
          <div className={styles.home_promo_card_subtitle}>
            Moldtelecom TV GO
          </div>
          <div className={styles.home_promo_card_title}>
            TV pe orice Dispozitiv,
            <br />
            Oriunde, fara contracte sau obligatii
          </div>

          <svg
            className={styles.home_promo_card_btn}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#2D2D2F" />
            <path
              d="M10 18L26 18M26 18L19 11M26 18L19 25"
              stroke="#D0D0D1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={`${styles.home_phones}`}>
        <div className={`${styles.home_phones_inside}`}>
          <div className={`${styles.home_phones_title}`}>
            Exclusiv online
            {/*Descoperă cele mai tari oferte exclusiv online*/}
            <div className={styles.home_phones_subtitle}>
              Descoperă cele mai tari oferte exclusiv online
            </div>
          </div>

          <Slider {...settings_phones} className={styles.home_carousell}>
            <div className={styles.home_carousell_phone}>
              <ShopCard
                device_id={194234497}
                image="/images/shop/394534437.webp"
                price={6799}
                // old_price={5099}
                // reducere="- 5098"
                title="Hisense"
                subtitle="55A4N (4k)"
                characteristics='UHD VA / 4K / 55"'
                // tag={'DOAR 1 leu'}
              />
            </div>
            <div className={styles.home_carousell_phone}>
              <ShopCard
                device_id={394514438}
                image="/images/shop/394514438.webp"
                price={28699}
                // old_price={7299}
                // reducere="-40%"
                title="Samsung"
                subtitle="Galaxy S25 Ultra"
                characteristics='(12/512GB)"'
              />
            </div>
            <div className={styles.home_carousell_phone}>
              <ShopCard
                device_id={383534569}
                image="/images/shop/383534569.webp"
                price={7499}
                old_price={8799}
                reducere="- 1300"
                title="Huawei"
                subtitle="Watch 4"
                characteristics='46 mm / Negru"'
                tag={'Promo'}
                link={`https://moldtelecom.md/${t('lang')}/personal/gadgeturismart/359`}
              />
            </div>
            <div className={styles.home_carousell_phone}>
              <ShopCard
                device_id={5235345692}
                image="/images/shop/523534569.png"
                price={30489}
                old_price={36999}
                reducere="- 6510"
                title="Apple"
                subtitle="Iphone 16 Pro Max"
                characteristics="(8/256GB)"
                link={`https://www.moldtelecom.md/${t('lang')}/eshop/telefoane/apple-iphone-16-pro-max-8-gb-256-gb-desert-titanium`}
              />
            </div>
            <div className={styles.home_carousell_phone}>
              <ShopCard
                device_id={374514418}
                image="/images/shop/374514418.webp"
                price={3189}
                old_price={3789}
                reducere="- 600"
                title="Samsung"
                subtitle="A16"
                characteristics="(4/128GB)"
                link={`https://www.moldtelecom.md/${t('lang')}/eshop/telefoane/samsung-a16-4-gb-128-gb-black`}
              />
            </div>
          </Slider>
          <div className={styles.devices_disclailmer}>
            <sup>*</sup>Oferta este valabilă în limita stocului disponibil
          </div>
        </div>
      </div>
      <div className={`${styles.home_deals_block}`}>
        <div className={`${styles.home_deals_title} ${''}`}>WOW! Deals</div>
        <div className={styles.home_deals} ref={carouselRef}>
          <div
            className={`${styles.home_deals_card} ${styles.home_deals_card_1}`}
          >
            {/*<div className={`${styles.home_deals_card_special}`}>*/}
            {/*</div>*/}
            <div className={styles.home_deals_card_subtitle}>Home Deal</div>
            <div className={styles.home_deals_card_title}>
              Descoperă cea mai tare promoție.
              <br />
              <span>Internet fibră + TV acasă</span>
            </div>
            <svg
              className={styles.home_deals_card_btn}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#2D2D2F" />
              <path
                d="M10 18L26 18M26 18L19 11M26 18L19 25"
                stroke="#D0D0D1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${styles.home_deals_card} ${styles.home_deals_card_4}`}
          >
            <div className={styles.home_deals_card_subtitle}>One Number</div>
            <div className={styles.home_deals_card_title}>
              Ramai mereu conenctat.
            </div>
            <svg
              className={styles.home_deals_card_btn}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#2D2D2F" />
              <path
                d="M10 18L26 18M26 18L19 11M26 18L19 25"
                stroke="#D0D0D1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${styles.home_deals_card} ${styles.home_deals_card_2}`}
          >
            <div className={styles.home_deals_card_subtitle}>eSIMplu</div>
            <div className={styles.home_deals_card_title}>
              Cu eSIM te conectezi 100% digital.
            </div>
            <svg
              className={styles.home_deals_card_btn}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#2D2D2F" />
              <path
                d="M10 18L26 18M26 18L19 11M26 18L19 25"
                stroke="#D0D0D1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${styles.home_deals_card} ${styles.home_deals_card_3}`}
          >
            <div className={styles.home_deals_card_subtitle}>
              Prepay 100% Digital
            </div>
            <div className={styles.home_deals_card_title}>
              Ia-ți cartela Prepay <br /> la doar 10 lei.
            </div>
            <svg
              className={styles.home_deals_card_btn}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#2D2D2F" />
              <path
                d="M10 18L26 18M26 18L19 11M26 18L19 25"
                stroke="#D0D0D1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_deals_card}>{/* Card 5 content */}</div>
        </div>
        <div className={styles.home_deals_btns}>
          <svg
            className={styles.home_deals_btns_svg}
            onClick={() => scrollByCard('prev')}
            style={{ transform: 'rotate(180deg)' }}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#F2F2F3" />
            <path
              d="M23.5587 16.916C24.1447 17.5 24.1467 18.446 23.5647 19.034L16.6077 26.056C16.3147 26.352 15.9287 26.5 15.5427 26.5C15.1607 26.5 14.7787 26.355 14.4867 26.065C13.8977 25.482 13.8947 24.533 14.4777 23.944L20.3818 17.984L14.4408 12.062C13.8548 11.478 13.8528 10.5279 14.4378 9.941C15.0218 9.354 15.9738 9.353 16.5588 9.938L23.5587 16.916Z"
              fill="#BDBDBE"
            />
          </svg>
          <svg
            className={styles.home_deals_btns_svg}
            onClick={() => scrollByCard('next')}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#F2F2F3" />
            <path
              d="M23.5587 16.916C24.1447 17.5 24.1467 18.446 23.5647 19.034L16.6077 26.056C16.3147 26.352 15.9287 26.5 15.5427 26.5C15.1607 26.5 14.7787 26.355 14.4867 26.065C13.8977 25.482 13.8947 24.533 14.4777 23.944L20.3818 17.984L14.4408 12.062C13.8548 11.478 13.8528 10.5279 14.4378 9.941C15.0218 9.354 15.9738 9.353 16.5588 9.938L23.5587 16.916Z"
              fill="#BDBDBE"
            />
          </svg>
        </div>
      </div>

      <div className={styles.news}>
        <div className={styles.news_title_block}>
          <div className={`title title_3 ${styles.news_title}`}>News</div>
          <a href={`https://www.moldtelecom.md/${t('lang')}/news_list`}>
            {t('general.see_all')}
            <Icon className={styles.news_title_svg} type={'arrow_right'} />
          </a>
        </div>

        <div className={styles.news_inside}>
          <div
            className={styles.news_inside_left}
            onClick={() => {
              if (news[0]?.link) {
                window.location.href = news[0].link;
              }
            }}
          >
            <div className={styles.news_inside_left_img_block}>
              <img
                className={styles.news_inside_left_img}
                // src="/images/landings/30292512.png"
                src={news[0]?.image?.replace('/storage/', '')}
                alt="News"
              />
            </div>
            <div className={styles.news_inside_left_date}>
              {news[0]?.created_at ? formatDate(news[0].created_at) : ' '}
            </div>
            <div className={styles.news_inside_left_title}>
              {news[0]?.name || ' '}
            </div>
          </div>
          <div className={styles.news_inside_right}>
            <div
              className={styles.news_inside_right_block}
              onClick={() => {
                if (news[1]?.link) {
                  window.location.href = news[1].link;
                }
              }}
            >
              <div className={styles.news_inside_left_date}>
                {news[1]?.created_at ? formatDate(news[1].created_at) : ' '}
              </div>
              <div className={styles.news_inside_left_title}>
                {news[1]?.name || ' '}
              </div>
            </div>
            <div
              className={styles.news_inside_right_block}
              onClick={() => {
                if (news[2]?.link) {
                  window.location.href = news[2].link;
                }
              }}
            >
              <div className={styles.news_inside_left_date}>
                {news[2]?.created_at ? formatDate(news[2].created_at) : ' '}
              </div>
              <div className={styles.news_inside_left_title}>
                {news[2]?.name || ' '}
              </div>
            </div>
            <div
              className={`${styles.news_inside_right_block} ${styles.news_inside_right_block_last}`}
              onClick={() => {
                if (news[3]?.link) {
                  window.location.href = news[3].link;
                }
              }}
            >
              <div className={styles.news_inside_left_date}>
                {news[3]?.created_at ? formatDate(news[3].created_at) : ' '}
              </div>
              <div className={styles.news_inside_left_title}>
                {news[3]?.name || ' '}
              </div>
            </div>
            {/*<div className={`${styles.news_inside_right_block} ${styles.news_inside_right_block_last}`}*/}
            {/*     onClick={() => {*/}
            {/*       if (news[4]?.link) {*/}
            {/*         window.location.href = news[4].link;*/}
            {/*       }*/}
            {/*     }}>*/}
            {/*  <div className={styles.news_inside_left_date}>*/}
            {/*    {news[3]?.created_at ? formatDate(news[3].created_at) : ' '}*/}

            {/*  </div>*/}
            {/*  <div className={styles.news_inside_left_title}>*/}
            {/*    {news[4]?.name || ' '}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <Videos items={videos} />
      <Chat />
      <Footer disclaimer={true} />
    </>
  );
}
