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
import Button from '../../components/Button.tsx';

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

      <div className={styles.home_discount_block}>
        <div className={styles.home_discount_block_small_title}>
          Descoperă cea mai tare promoție
        </div>
        <div className={styles.home_discount_block_title}>
          Home Deal <span>( Internet fibră + TV acasă )</span>
        </div>

        <div className={styles.home_discount_block_list}>
          <div className={styles.home_discount_block_list_row}>
            <div className={styles.home_discount_block_list_svg}>
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.8401 10.875H8.36305C6.90696 10.875 5.72656 12.0554 5.72656 13.5115V30.551C5.72656 32.0071 6.90696 33.1875 8.36305 33.1875H39.8401C41.2962 33.1875 42.4766 32.0071 42.4766 30.551V13.5115C42.4766 12.0554 41.2962 10.875 39.8401 10.875Z"
                  stroke="black"
                  stroke-opacity="0.85"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.6016 37.125H34.6016Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M13.6016 37.125H34.6016"
                  stroke="black"
                  stroke-opacity="0.85"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className={styles.home_discount_block_list_text}>
              <span className={styles.home_discount_block_title_span}>
                Televiziune
              </span>{' '}
              <br />
              Până la 163 canale, 105 HD, 3 radio cu <br />
              abonamentul Univers și TV la preț special.
            </div>
          </div>
          <div className={styles.home_discount_block_list_row}>
            <div className={styles.home_discount_block_list_svg}>
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9496 27.6C32.0936 26.412 32.2016 25.224 32.2016 24C32.2016 22.776 32.0936 21.588 31.9496 20.4H38.0336C38.3216 21.552 38.5016 22.758 38.5016 24C38.5016 25.242 38.3216 26.448 38.0336 27.6M28.7636 37.608C29.8436 35.61 30.6716 33.45 31.2476 31.2H36.5576C34.8137 34.2029 32.047 36.4776 28.7636 37.608ZM28.3136 27.6H19.8896C19.7096 26.412 19.6016 25.224 19.6016 24C19.6016 22.776 19.7096 21.57 19.8896 20.4H28.3136C28.4756 21.57 28.6016 22.776 28.6016 24C28.6016 25.224 28.4756 26.412 28.3136 27.6ZM24.1016 38.328C22.6076 36.168 21.4016 33.774 20.6636 31.2H27.5396C26.8016 33.774 25.5956 36.168 24.1016 38.328ZM16.9016 16.8H11.6456C13.3711 13.7887 16.1359 11.5102 19.4216 10.392C18.3416 12.39 17.5316 14.55 16.9016 16.8ZM11.6456 31.2H16.9016C17.5316 33.45 18.3416 35.61 19.4216 37.608C16.1424 36.4781 13.3813 34.2027 11.6456 31.2ZM10.1696 27.6C9.88156 26.448 9.70156 25.242 9.70156 24C9.70156 22.758 9.88156 21.552 10.1696 20.4H16.2536C16.1096 21.588 16.0016 22.776 16.0016 24C16.0016 25.224 16.1096 26.412 16.2536 27.6M24.1016 9.654C25.5956 11.814 26.8016 14.226 27.5396 16.8H20.6636C21.4016 14.226 22.6076 11.814 24.1016 9.654ZM36.5576 16.8H31.2476C30.6833 14.5709 29.8492 12.419 28.7636 10.392C32.0756 11.526 34.8296 13.812 36.5576 16.8ZM24.1016 6C14.1476 6 6.10156 14.1 6.10156 24C6.10156 28.7739 7.99799 33.3523 11.3736 36.7279C13.0451 38.3994 15.0294 39.7253 17.2133 40.6298C19.3971 41.5344 21.7378 42 24.1016 42C28.8755 42 33.4538 40.1036 36.8295 36.7279C40.2051 33.3523 42.1016 28.7739 42.1016 24C42.1016 21.6362 41.636 19.2956 40.7314 17.1117C39.8268 14.9278 38.5009 12.9435 36.8295 11.2721C35.158 9.60062 33.1737 8.27475 30.9899 7.37017C28.806 6.46558 26.4654 6 24.1016 6Z"
                  fill="black"
                  fill-opacity="0.85"
                />
                <path
                  d="M31.9496 27.6C32.0936 26.412 32.2016 25.224 32.2016 24C32.2016 22.776 32.0936 21.588 31.9496 20.4H38.0336C38.3216 21.552 38.5016 22.758 38.5016 24C38.5016 25.242 38.3216 26.448 38.0336 27.6M10.1696 27.6C9.88156 26.448 9.70156 25.242 9.70156 24C9.70156 22.758 9.88156 21.552 10.1696 20.4H16.2536C16.1096 21.588 16.0016 22.776 16.0016 24C16.0016 25.224 16.1096 26.412 16.2536 27.6M28.7636 37.608C29.8436 35.61 30.6716 33.45 31.2476 31.2H36.5576C34.8137 34.2029 32.047 36.4776 28.7636 37.608ZM28.3136 27.6H19.8896C19.7096 26.412 19.6016 25.224 19.6016 24C19.6016 22.776 19.7096 21.57 19.8896 20.4H28.3136C28.4756 21.57 28.6016 22.776 28.6016 24C28.6016 25.224 28.4756 26.412 28.3136 27.6ZM24.1016 38.328C22.6076 36.168 21.4016 33.774 20.6636 31.2H27.5396C26.8016 33.774 25.5956 36.168 24.1016 38.328ZM16.9016 16.8H11.6456C13.3711 13.7887 16.1359 11.5102 19.4216 10.392C18.3416 12.39 17.5316 14.55 16.9016 16.8ZM11.6456 31.2H16.9016C17.5316 33.45 18.3416 35.61 19.4216 37.608C16.1424 36.4781 13.3813 34.2027 11.6456 31.2ZM24.1016 9.654C25.5956 11.814 26.8016 14.226 27.5396 16.8H20.6636C21.4016 14.226 22.6076 11.814 24.1016 9.654ZM36.5576 16.8H31.2476C30.6833 14.5709 29.8492 12.419 28.7636 10.392C32.0756 11.526 34.8296 13.812 36.5576 16.8ZM24.1016 6C14.1476 6 6.10156 14.1 6.10156 24C6.10156 28.7739 7.99799 33.3523 11.3736 36.7279C13.0451 38.3994 15.0294 39.7253 17.2133 40.6298C19.3971 41.5344 21.7378 42 24.1016 42C28.8755 42 33.4538 40.1036 36.8295 36.7279C40.2051 33.3523 42.1016 28.7739 42.1016 24C42.1016 21.6362 41.636 19.2956 40.7314 17.1117C39.8268 14.9278 38.5009 12.9435 36.8295 11.2721C35.158 9.60062 33.1737 8.27475 30.9899 7.37017C28.806 6.46558 26.4654 6 24.1016 6Z"
                  stroke="white"
                  stroke-width="0.8"
                />
              </svg>
            </div>
            <div className={styles.home_discount_block_list_text}>
              <span className={styles.home_discount_block_title_span}>
                Internet
              </span>{' '}
              <br />
              Viteză maximă de net disponibilă la adresa ta, <br /> de până la
              2.1 Gbps.
            </div>
          </div>
          <div className={styles.home_discount_block_list_row}>
            <div className={styles.home_discount_block_list_svg}>
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.50486 20.5141L9.50485 20.5141L9.50325 20.5154C8.62218 21.2523 7.31857 21.1763 6.49368 20.3515C5.52286 19.3806 5.60769 17.8006 6.65205 16.9651L6.65206 16.9651L6.65398 16.9635C16.7991 8.68071 31.4497 8.68089 41.5767 16.9634L41.577 16.9636C42.6235 17.817 42.6902 19.3984 41.7372 20.3515C40.9157 21.173 39.5933 21.238 38.6901 20.4961L38.6898 20.4958C30.222 13.566 17.9551 13.5657 9.50486 20.5141ZM16.66 27.7693L16.6585 27.7704C15.7337 28.4357 14.4928 28.3506 13.7062 27.5639C12.7129 26.5707 12.792 24.9455 13.8906 24.1492C19.9778 19.7559 28.2533 19.7562 34.3222 24.1491L34.3241 24.1504C35.4204 24.929 35.5001 26.5707 34.5247 27.546L34.5068 27.5639C33.7223 28.3484 32.4808 28.4203 31.5524 27.769C29.3755 26.2276 26.7739 25.3998 24.1065 25.3998C21.4389 25.3998 18.8371 26.2277 16.66 27.7693ZM23.0126 36.8704L20.3817 34.2395C19.655 33.5128 19.8319 32.2648 20.6977 31.7917C21.7442 31.2549 22.9035 30.9749 24.0796 30.9749C25.2568 30.9749 26.4171 31.2553 27.4643 31.7931C28.3785 32.2659 28.5418 33.5111 27.8133 34.2395L25.1825 36.8704C24.5821 37.4707 23.6129 37.4707 23.0126 36.8704Z"
                  fill="black"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </div>
            <div className={styles.home_discount_block_list_text}>
              <span className={styles.home_discount_block_title_span}>
                {' '}
                Super Wi-Fi
              </span>{' '}
              <br />
              Stabilitate și viteză ridicată cu echipamentul <br /> Wi-Fi 6, în
              toate colțurile casei.
            </div>
          </div>
        </div>
        <Button
          to="https://www.youtube.com/@Moldtelecom-official"
          bgcolor={'var(--theme_primary_color_blue_3)'}
          border={'transparent'}
          hover_border={'var(--theme_primary_color_blue_3)'}
          hover_bgcolor={'var(--theme_primary_color_blue_3)'}
          icon={'arrow_right'}
        >
          Mai multe detalii
        </Button>

        <img
          className={styles.home_discount_block_img}
          src="/images/landings/62474372.png"
          alt="Speacial_Deal"
        />
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
