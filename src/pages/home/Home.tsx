import Navbar from '../../components/navbar/Navbar.tsx';
import Chat from '../../components/chat/Chat.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Videos from '../../components/videos/Videos.tsx';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer.tsx';
import MyApp from '../../components/app/MyApp.tsx';
import ShopCard from '../../components/shop_card/ShopCard.tsx';
import { useTranslation } from 'react-i18next';
import CardFeatures from '../../components/card_features/CardFeatures.tsx';

interface videosItem {
  url_ro?: string;
  url_ru?: string;
  url_en?: string;
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings_topbar = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const settings_phones = {
    dots: true,
    infinite: true,
    arrows: true,
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

  const settings_digital = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [videos, setVideos] = useState<videosItem[]>([]);
  useEffect(() => {
    fetch('/json/home_videos.json')
      .then(response => response.json())
      .then((data: videosItem[]) => setVideos(data))
      .catch(error => console.error('Error loading videos:', error));
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <Navbar />

      <Slider {...settings}>
        <div className={styles.home_slider_main}>
          <Link to={'/triple'} className={styles.home_hero}>
            <img
              className={styles.home_hero_img_desk}
              src="/images/homepage/home_hero_triple_desktop_ro.png"
              alt="Moldtelecom"
            />
          </Link>
        </div>

        <div className={styles.home_slider_main}>
          <Link to={'/mobile'} className={styles.home_hero}>
            <img
              className={styles.home_hero_img_desk}
              src="/images/homepage/home_hero_tm_desktop_ro.png"
              alt="Moldtelecom"
            />
          </Link>
        </div>
      </Slider>

      <div className={styles.home_topbar}>
        <div className={styles.home_topbar_inside}>
          <Slider {...settings_topbar}>
            <Link to={'/'} className={styles.home_topbar_block}>
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
                <rect y="15" width="19" height="19" fill="white" />
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
              <div className={styles.home_topbar_block_title}>
                Reincarcare cont
              </div>
            </Link>
            <Link to={'/'} className={styles.home_topbar_block}>
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
                <rect y="15" width="19" height="19" fill="white" />
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
              <div className={styles.home_topbar_block_title}>
                Reincarcare cont
              </div>
            </Link>
            <Link to={'/'} className={styles.home_topbar_block}>
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
                <rect y="15" width="19" height="19" fill="white" />
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
              <div className={styles.home_topbar_block_title}>
                Reincarcare cont
              </div>
            </Link>
            <Link to={'/'} className={styles.home_topbar_block}>
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
                <rect y="15" width="19" height="19" fill="white" />
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
              <div className={styles.home_topbar_block_title}>
                Reincarcare cont
              </div>
            </Link>
            <Link to={'/'} className={styles.home_topbar_block}>
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
                <rect y="15" width="19" height="19" fill="white" />
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
              <div className={styles.home_topbar_block_title}>
                Reincarcare cont
              </div>
            </Link>
          </Slider>
        </div>
      </div>

      <div className={`title ${styles.home_title}`}>
        {t('home.exclusive_online')}
      </div>
      <Slider {...settings_phones} className={styles.home_carousell}>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            device_id={194234497}
            image="/images/shop/394534437.png"
            price={1}
            old_price={5099}
            reducere="- 5098"
            title="Hisense"
            subtitle="43A4N (4k)"
            characteristics='UHD VA / 4K / 43"'
            tag={'DOAR 1 leu'}
          />
        </div>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            device_id={394514438}
            image="/images/shop/394514438.png"
            price={2999}
            old_price={7299}
            reducere="-40%"
            title="Samsung"
            subtitle="Galaxy S25 Ultra"
            characteristics='(12/512GB)"'
          />
        </div>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            device_id={383534569}
            image="/images/shop/383534569.png"
            price={7499}
            old_price={8799}
            reducere="- 1300"
            title="Huawei"
            subtitle="Watch 4"
            characteristics='46 mm / Negru"'
            tag={'Promo'}
          />
        </div>
        <div className={styles.triple_carousell_block}>
          <ShopCard
            device_id={5235345692}
            image="/images/shop/523534569.png"
            price={13499}
            old_price={2999}
            // reducere="-99%"
            title="Apple"
            subtitle="Iphone 16 Pro"
            characteristics="(8/256GB)"
          />
        </div>
      </Slider>

      <div className={`title ${styles.home_title}`}>
        {t('home.only_digital')}
      </div>
      <Slider {...settings_digital} className={styles.home_carousell}>
        <div className={styles.home_carousell_block}>
          <CardFeatures
            img={'/images/landings/12474372.png'}
            title={' Conecteaza One Number -<br> 3 luni CADOU'}
            subtitle={
              'Acum poți utiliza atât telefonul, cât și ceasul inteligent, cu un singur număr de telefon și abonament.'
            }
          />
        </div>
        <div className={styles.home_carousell_block}>
          <CardFeatures
            img={'/images/landings/16474379.png'}
            title={' Cu eSIM te conectezi <br> 100% digital'}
            subtitle={
              'eSIMplu să te conectezi prin câteva clickuri la rețeaua mobilă Moldtelecom, oriunde te-ai afla.'
            }
          />
        </div>
        <div className={styles.home_carousell_block}>
          <CardFeatures
            img={'/images/landings/12774378.png'}
            title={' Ia-ți cartela Prepay 100% <br> Online'}
            subtitle={
              'Cu doar 10 lei, primești tot ce ai nevoie minute, SMS-uri și internet, exact când vrei!'
            }
          />
        </div>
      </Slider>

      <MyApp />
      <Videos items={videos} />
      <Chat />
      <Footer discalmer={true} />
    </>
  );
}
