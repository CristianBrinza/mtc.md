import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../Icon.tsx';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext.tsx';
import Slider from 'react-slick';
import Button from '../Button.tsx';

interface SubmenuItem {
  label: string;
  smallText?: string;
  to: string;
  new?: boolean;
  external?: boolean;
}
interface BottomItem {
  label: string;
  to: string;
}

interface SubmenuBlock {
  title: string;
  small?: boolean;
  items: SubmenuItem[];
}

interface MenuItem {
  menu_id?: string;
  label: string;
  promo?: PromoBlock[];
  to?: string;
  submenu?: SubmenuBlock[];
  bottom_menu?: BottomItem[];
}
interface PromoBlock {
  image_ro: string;
  image_ru: string;
  image_en: string;
  to?: string;
}

const Navbar: React.FC = () => {
  // const currentHour = new Date().getHours();
  // const isAvailable = currentHour >= 6 && currentHour < 24;

  const { t, i18n } = useTranslation();
  const { setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [isListLangPopupVisible, setIsListLangPopupVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuConfig, setMenuConfig] = useState<MenuItem[]>([]);
  const [, setOverlayVisible] = useState(false);

  useEffect(() => {
    fetch('/json/menuConfigBusiness.json')
      .then(res => res.json())
      .then((data: MenuItem[]) => setMenuConfig(data))
      .catch(err => console.error('Error fetching menu config:', err));
  }, []);

  const toggleLangPopup = () => {
    setIsListLangPopupVisible(!isListLangPopupVisible);
  };

  const [lockedMenu, setLockedMenu] = useState<string | null>(null);

  const toggleMenu = (menuKey: string) => {
    if (lockedMenu !== menuKey) {
      setLockedMenu(menuKey);
      setActiveMenu(menuKey);
      setOverlayVisible(true);
    } else {
      setLockedMenu(null);
      setActiveMenu(null);
      setOverlayVisible(false);
    }
  };

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang); // setează global limba

    const pathParts = location.pathname.split('/').filter(Boolean);
    if (['en', 'ro', 'ru'].includes(pathParts[0])) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }
    const newPath = `/${pathParts.join('/')}/`.replace(/\/+$/, '/');
    navigate(newPath);
    setIsListLangPopupVisible(false);
    // localStorage.setItem('i18nextLng', lang);
  };

  const getImageByLanguage = (img: PromoBlock): string => {
    switch (i18n.language) {
      case 'ro':
        return img.image_ro;
      case 'ru':
        return img.image_ru;
      case 'en':
      default:
        return img.image_en;
    }
  };
  const [progressKey, setProgressKey] = useState(0);
  const handlePromoMouseEnter = () => {
    // Optional: stop/reset autoplay dacă vrei
  };

  const handlePromoMouseLeave = () => {
    setProgressKey(prev => prev + 1); // Forțează resetul animației
  };

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
    setOverlayVisible(true);
  };

  const [, setCurrentPromoIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      void oldIndex;
      setCurrentPromoIndex(newIndex);
      setProgressKey(prev => prev + 1); // Reset progress bar on card change
    },
  };
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles.navbar_overlay} ${activeMenu ? styles.navbar_overlay_show : ''}`}
        onClick={() => {
          setActiveMenu(null);
          setLockedMenu(null);
          setOverlayVisible(false);
        }}
      />
      {isSticky && (
        <div className={styles.navbar_bottom_sticky_placeholder}>&nbsp;</div>
      )}
      <nav
        className={` ${styles.navbar}  ${isSticky ? styles.navbar_bottom_sticky : ''} mtc_navbar `}
      >
        <div className={styles.navbar_top}>
          {/*<div className={styles.navbar_top_left_block}>*/}
          {/*  <Link to="/magazine">*/}
          {/*    /!*Magazine*!/*/}
          {/*    <div*/}
          {/*      className={`${styles.navbar_top_left_block_icons} ${styles.navbar_top_left_block_icons_left}`}*/}
          {/*    >*/}
          {/*      <Icon size={'20px'} type="bag" />*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*  <div className={styles.navbar_top_left}>*/}
          {/*    <Link*/}
          {/*      to={`https://www.moldtelecom.md/${t('lang')}/personal/contacte`}*/}
          {/*    >*/}
          {/*      /!*Contacte*!/*/}
          {/*      <Icon size={'20px'} type="call" />*/}
          {/*      (6:00 -24:00)*/}
          {/*    </Link>*/}

          {/*    <div*/}
          {/*      className={`${styles.navbar_top_left_availabilty} ${*/}
          {/*        isAvailable*/}
          {/*          ? styles.navbar_top_left_availabilty_available*/}
          {/*          : styles.navbar_top_left_availabilty_unavailable*/}
          {/*      }`}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div></div>
          <div className={styles.navbar_top_right}>
            {/*<Link to={`https://my.moldtelecom.md/my-moldtelecom`}>*/}
            {/*  Portare*/}
            {/*</Link>*/}
            <Link to={`https://www.moldtelecom.md/${t('lang')}/`}>
              Personal
              <Icon
                style={{ marginTop: '1px', marginBottom: '-1px' }}
                type="business"
                color="--theme_primary_color_black"
                size="21px"
              />
            </Link>
          </div>
        </div>

        <div className={`${styles.navbar_bottom}`}>
          <a href={`https://www.moldtelecom.md/${t('lang')}/business`}>
            <svg
              className={`${styles.navbar_bottom_svg_main}`}
              width="205"
              height="47"
              viewBox="0 0 205 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1878 42.3578C18.8494 42.3578 16.5044 41.9647 14.227 41.1785C3.19964 37.3491 -2.65633 25.2644 1.1731 14.237C3.02342 8.89612 6.85285 4.59226 11.9362 2.13194C17.0262 -0.335158 22.767 -0.674041 28.1079 1.18306C39.1352 5.01249 44.9912 17.0972 41.1618 28.1246C39.3115 33.4654 35.482 37.7693 30.3987 40.2296C27.4775 41.6462 24.3394 42.3578 21.181 42.3578H21.1878ZM21.1607 8.18446C19.229 8.18446 17.3041 8.62501 15.508 9.49256C12.3903 11.004 10.0452 13.6406 8.9065 16.921C6.5614 23.6852 10.1536 31.0932 16.911 33.4451C20.1847 34.5838 23.7091 34.3737 26.8269 32.8622C29.9446 31.3508 32.2897 28.7143 33.4284 25.4338C35.7735 18.6696 32.1813 11.2616 25.4239 8.90968C24.0276 8.42846 22.5908 8.18446 21.1539 8.18446H21.1607Z"
                fill="#C767A4"
              />
              <path
                d="M15.569 41.4021C15.1217 41.4021 14.6676 41.3275 14.227 41.1716C3.19964 37.3422 -2.65633 25.2575 1.1731 14.2301C2.71842 9.77711 5.61252 6.06289 9.54361 3.48057C11.4346 2.24025 13.9695 2.76892 15.2098 4.65313C16.4501 6.54412 15.9215 9.07899 14.0373 10.3193C11.6312 11.8985 9.85539 14.1826 8.9065 16.9073C6.5614 23.6715 10.1536 31.0863 16.911 33.4314C19.046 34.1702 20.1779 36.5017 19.4323 38.6435C18.8427 40.3379 17.2567 41.3953 15.5622 41.3953L15.569 41.4021Z"
                fill="url(#paint0_linear_10094_19497)"
              />
              <path
                d="M21.1397 42.3376C18.8285 42.3376 16.497 41.958 14.2264 41.1718C10.3157 39.8163 6.91326 37.3695 4.39872 34.0959C3.02284 32.3065 3.35494 29.731 5.15105 28.3551C6.94037 26.9792 9.51592 27.3113 10.8918 29.1007C12.4303 31.1001 14.5111 32.598 16.9104 33.4316C22.4207 35.343 28.5681 33.33 31.8621 28.5313C33.1431 26.6675 35.6916 26.193 37.5554 27.474C39.4193 28.755 39.8938 31.3034 38.6128 33.1673C34.5936 39.0165 27.9785 42.3376 21.1397 42.3376Z"
                fill="url(#paint1_linear_10094_19497)"
              />
              <path
                d="M37.487 20.242C35.7383 20.242 34.1185 19.1101 33.5762 17.3547C32.363 13.4168 29.313 10.2584 25.4226 8.9096C23.2876 8.17083 22.1557 5.83928 22.9013 3.69752C23.6401 1.56253 25.9716 0.430644 28.1134 1.1762C34.4506 3.37896 39.4187 8.52327 41.4045 14.9418C42.0688 17.1039 40.8623 19.3948 38.7002 20.059C38.3003 20.181 37.8937 20.242 37.4938 20.242H37.487Z"
                fill="url(#paint2_linear_10094_19497)"
              />
              <path
                d="M32.2355 38.2773C31.0765 38.2773 29.9243 37.7893 29.111 36.8336C27.647 35.1121 27.8571 32.5298 29.5786 31.0658C30.9342 29.9203 32.0118 28.5241 32.7981 26.9381C33.5097 25.4945 34.9602 24.654 36.4716 24.654H36.4987C35.1296 24.0102 34.1672 22.6207 34.1468 21.0076C34.1265 19.3877 33.8012 17.8085 33.1912 16.2971C32.3372 14.2027 33.3471 11.817 35.4414 10.963C37.5357 10.1158 39.9215 11.1189 40.7755 13.2132C41.7718 15.6667 42.3004 18.2491 42.3343 20.8924C42.3682 23.1494 40.5586 25.0132 38.3016 25.0404C38.2745 25.0404 38.2406 25.0404 38.2135 25.0404C38.2406 25.0539 38.2609 25.0607 38.288 25.0743C40.3146 26.0706 41.1482 28.5241 40.1519 30.5574C38.8709 33.1601 37.1019 35.4306 34.8856 37.3081C34.1129 37.9587 33.1708 38.2841 32.2355 38.2841V38.2773Z"
                fill="url(#paint3_linear_10094_19497)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.74969 30.1917C4.47491 28.0635 6.79967 26.9451 8.94144 27.6975C11.0832 28.4498 12.2219 30.7881 11.4967 32.9231C10.7714 35.0513 8.44666 36.1696 6.3049 35.4173C4.16313 34.665 3.02447 32.3267 3.74969 30.1917Z"
                fill="url(#paint4_linear_10094_19497)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9567 36.529C21.6819 34.4007 24.0067 33.2824 26.1485 34.0348C28.2902 34.7871 29.4289 37.1254 28.7037 39.2604C27.9785 41.3886 25.6537 42.5069 23.5119 41.7546C21.3702 41.0023 20.2315 38.6639 20.9567 36.529Z"
                fill="url(#paint5_linear_10094_19497)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6208 36.2305C13.346 34.1023 15.6708 32.984 17.8125 33.7363C19.9543 34.4886 21.093 36.8269 20.3677 38.9619C19.6425 41.0901 17.3178 42.2085 15.176 41.4561C13.0342 40.7038 11.8956 38.3655 12.6208 36.2305Z"
                fill="url(#paint6_linear_10094_19497)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.3708 19.6523C35.096 17.5241 37.4208 16.4057 39.5625 17.158C41.7043 17.9104 42.843 20.2487 42.1177 22.3837C41.3925 24.5119 39.0678 25.6302 36.926 24.8779C34.7842 24.1256 33.6456 21.7873 34.3708 19.6523Z"
                fill="url(#paint7_linear_10094_19497)"
              />
              <path
                d="M69.8023 12.3136L66.1898 25.4421L65.9932 26.3436L65.8238 25.4421L62.1841 12.3136H57.2499L55.5352 30.4915H58.9918L59.9 16.7666L59.9746 15.594L60.266 16.7666L64.1836 30.3695H67.7825L71.6526 16.7869L71.9441 15.5873L72.0186 16.7869L72.9743 30.4915H76.4309L74.7636 12.3136H69.8091H69.8023ZM89.4239 19.1388C88.8478 18.5356 88.1564 18.0747 87.3567 17.7358C86.5569 17.4037 85.669 17.2343 84.6862 17.2343C83.9814 17.2343 83.2494 17.3698 82.4699 17.6341C81.6973 17.8985 80.9856 18.3119 80.3417 18.8609C79.6978 19.4099 79.1691 20.1148 78.7489 20.9756C78.3355 21.8363 78.1254 22.8462 78.1254 24.012C78.1254 25.0964 78.3016 26.0657 78.6608 26.9129C79.02 27.7601 79.5013 28.4785 80.1045 29.0479C80.7077 29.624 81.4058 30.0578 82.1988 30.3627C82.9918 30.661 83.8187 30.8101 84.6862 30.8101C85.486 30.8101 86.279 30.6542 87.072 30.3492C87.865 30.0442 88.5631 29.5969 89.1799 29.014C89.7899 28.4311 90.2914 27.7194 90.671 26.879C91.0573 26.0385 91.2471 25.0829 91.2471 24.0188C91.2471 23.0157 91.0912 22.1075 90.7726 21.2806C90.4541 20.4537 90.0068 19.742 89.4239 19.1456V19.1388ZM87.4177 25.659C87.2957 26.1741 87.1127 26.6214 86.8687 27.001C86.6247 27.3805 86.3197 27.6855 85.9537 27.9092C85.5877 28.1329 85.1675 28.2481 84.693 28.2481C84.2525 28.2481 83.8458 28.1464 83.4798 27.9363C83.1138 27.7262 82.802 27.4415 82.5512 27.0688C82.3005 26.696 82.1039 26.2554 81.9616 25.7403C81.826 25.2252 81.7515 24.6559 81.7515 24.0256C81.7515 23.4427 81.8192 22.9005 81.948 22.3989C82.0768 21.8906 82.2666 21.45 82.5106 21.0704C82.7546 20.6909 83.0596 20.3859 83.4256 20.1622C83.7916 19.9386 84.2118 19.8233 84.6862 19.8233C85.1607 19.8233 85.5809 19.9386 85.9469 20.1622C86.3129 20.3859 86.6179 20.6909 86.8619 21.0704C87.1059 21.45 87.2889 21.8973 87.4109 22.3989C87.5329 22.9072 87.5939 23.4494 87.5939 24.0256C87.5939 24.6084 87.5329 25.1507 87.4109 25.6658L87.4177 25.659ZM93.355 30.4915H96.7845V11.5409H93.355V30.4915ZM111.472 27.3399V11.5342H108.042V26.4859C107.046 27.6517 106.097 28.2345 105.202 28.2345C104.796 28.2345 104.43 28.1193 104.104 27.8821C103.779 27.6516 103.508 27.3331 103.284 26.9468C103.067 26.5537 102.898 26.0995 102.783 25.5844C102.668 25.0693 102.613 24.5203 102.613 23.9307C102.613 23.341 102.661 22.8056 102.762 22.304C102.857 21.8024 103.013 21.3755 103.23 21.0162C103.44 20.657 103.718 20.3724 104.064 20.1555C104.409 19.9386 104.83 19.8166 105.338 19.7827C105.745 19.7488 106.097 19.5522 106.389 19.193C106.68 18.8338 106.944 18.3661 107.175 17.7833C106.538 17.6003 106.023 17.4783 105.623 17.4173C105.223 17.3563 104.809 17.3291 104.389 17.3291C103.684 17.3291 103.013 17.5054 102.356 17.8646C101.705 18.2238 101.129 18.705 100.627 19.3015C100.133 19.9047 99.7328 20.6028 99.4414 21.4026C99.1499 22.2023 99.0008 23.0428 99.0008 23.9307C99.0008 24.9134 99.1296 25.8284 99.3804 26.6689C99.6312 27.5093 99.9972 28.2413 100.472 28.8581C100.946 29.4749 101.529 29.9561 102.234 30.295C102.932 30.6339 103.725 30.8101 104.606 30.8101C105.08 30.8101 105.575 30.7016 106.084 30.4847C106.599 30.2679 107.175 29.868 107.812 29.2851L108.225 28.7361L108.347 29.3122C108.429 29.5426 108.544 29.7731 108.679 29.99C108.822 30.2068 108.998 30.3763 109.208 30.4915H111.845C111.716 29.9086 111.621 29.3529 111.56 28.831C111.506 28.3091 111.472 27.8075 111.472 27.3399ZM122.133 28.1667C121.828 28.2142 121.564 28.2413 121.34 28.2413C120.771 28.2413 120.31 28.0041 119.958 27.5297C119.605 27.0552 119.429 26.391 119.429 25.5438V13.4184L116.196 14.4961L116.169 17.4986H113.024V20.0606H116.169L116.196 25.5438C116.196 27.2585 116.603 28.5666 117.423 29.4681C118.236 30.3695 119.429 30.8168 120.995 30.8168C121.401 30.8168 121.842 30.7559 122.303 30.6406C122.77 30.5254 123.313 30.356 123.929 30.1391L123.218 27.8618C122.791 28.0109 122.431 28.1125 122.126 28.16L122.133 28.1667ZM120.581 18.4271C120.71 18.7186 120.873 18.9829 121.069 19.2134C121.266 19.4438 121.496 19.6403 121.767 19.803C122.038 19.9589 122.35 20.0402 122.709 20.0402H124.316V17.5664H120.263C120.344 17.851 120.452 18.1357 120.581 18.4271ZM131.792 22.5683C131.365 22.5683 130.985 22.7649 130.653 23.158C130.321 23.5511 130.063 24.0391 129.88 24.622H136.733C137.092 23.5579 137.221 22.5683 137.112 21.6601C137.004 20.7519 136.726 19.9725 136.265 19.3218C135.811 18.6711 135.208 18.1628 134.455 17.7968C133.703 17.4308 132.883 17.2478 131.981 17.2478C131.08 17.2478 130.267 17.3969 129.487 17.6951C128.701 17.9934 128.023 18.4271 127.447 18.9829C126.871 19.5387 126.41 20.23 126.078 21.0434C125.746 21.8635 125.576 22.7852 125.576 23.8222C125.576 24.6694 125.705 25.5167 125.956 26.3503C126.207 27.184 126.6 27.9295 127.128 28.587C127.657 29.2444 128.328 29.7866 129.135 30.2001C129.941 30.6135 130.91 30.8236 132.036 30.8236C132.801 30.8236 133.574 30.7355 134.347 30.5593C135.119 30.3831 135.953 30.0781 136.834 29.6443L135.98 27.3195C135.262 27.6516 134.631 27.8889 134.082 28.0312C133.533 28.1735 132.978 28.2413 132.408 28.2413C131.378 28.2413 130.551 27.8482 129.914 27.0552C129.277 26.2622 128.958 25.1439 128.958 23.6935C128.958 22.975 129.047 22.365 129.216 21.8567C129.385 21.3483 129.609 20.9349 129.887 20.6096C130.165 20.2842 130.47 20.047 130.802 19.8979C131.134 19.7488 131.473 19.6742 131.819 19.6742C132.191 19.6742 132.524 19.7556 132.808 19.9115C133.093 20.0673 133.33 20.2842 133.52 20.5486C133.71 20.8129 133.845 21.1247 133.927 21.4771C134.008 21.8296 134.021 22.1956 133.974 22.5751H131.798L131.792 22.5683ZM139.715 30.4915H143.144V11.5409H139.715V30.4915ZM151.684 22.5683C151.257 22.5683 150.878 22.7649 150.546 23.158C150.213 23.5511 149.956 24.0391 149.773 24.622H156.625C156.984 23.5579 157.113 22.5683 157.005 21.6601C156.896 20.7519 156.618 19.9725 156.158 19.3218C155.703 18.6711 155.093 18.1628 154.348 17.7968C153.596 17.4308 152.775 17.2478 151.874 17.2478C150.973 17.2478 150.159 17.3969 149.38 17.6951C148.594 17.9934 147.916 18.4271 147.333 18.9829C146.757 19.5387 146.296 20.23 145.964 21.0434C145.632 21.8635 145.462 22.7852 145.462 23.8222C145.462 24.6694 145.591 25.5167 145.842 26.3503C146.093 27.184 146.486 27.9295 147.014 28.587C147.543 29.2444 148.214 29.7866 149.021 30.2001C149.827 30.6135 150.796 30.8236 151.921 30.8236C152.687 30.8236 153.46 30.7355 154.233 30.5593C155.005 30.3831 155.839 30.0781 156.72 29.6443L155.866 27.3195C155.148 27.6516 154.517 27.8889 153.968 28.0312C153.419 28.1735 152.864 28.2413 152.294 28.2413C151.264 28.2413 150.437 27.8482 149.8 27.0552C149.163 26.2622 148.844 25.1439 148.844 23.6935C148.844 22.975 148.932 22.365 149.102 21.8567C149.271 21.3483 149.495 20.9349 149.773 20.6096C150.051 20.2842 150.356 20.047 150.688 19.8979C151.02 19.7488 151.359 19.6742 151.705 19.6742C152.077 19.6742 152.409 19.7556 152.694 19.9115C152.979 20.0673 153.216 20.2842 153.406 20.5486C153.596 20.8129 153.724 21.1247 153.812 21.4771C153.894 21.8296 153.907 22.1956 153.86 22.5751H151.684V22.5683ZM166.677 28.1057C166.283 28.2006 165.917 28.2413 165.579 28.2413C164.697 28.2413 163.986 27.8685 163.45 27.1162C162.915 26.3639 162.644 25.3337 162.644 24.0188C162.644 22.7174 162.915 21.694 163.45 20.9417C163.986 20.1894 164.697 19.8166 165.579 19.8166C165.856 19.8166 166.182 19.8437 166.555 19.8911C166.927 19.9386 167.314 20.0131 167.707 20.1148L168.54 17.79C168.052 17.607 167.544 17.4715 167.022 17.3766C166.5 17.2885 166.019 17.241 165.579 17.241C164.731 17.241 163.911 17.3834 163.118 17.668C162.325 17.9527 161.627 18.3729 161.024 18.9287C160.421 19.4845 159.933 20.1894 159.567 21.0434C159.201 21.8906 159.018 22.8869 159.018 24.0188C159.018 25.2184 159.201 26.2486 159.567 27.1094C159.933 27.9702 160.421 28.6751 161.024 29.2241C161.627 29.7731 162.325 30.1797 163.118 30.4373C163.911 30.6948 164.731 30.8236 165.579 30.8236C166.019 30.8236 166.521 30.7559 167.083 30.6135C167.646 30.4712 168.249 30.2543 168.879 29.9493L168.046 27.6517C167.524 27.8685 167.07 28.0244 166.677 28.1125V28.1057ZM181.039 19.1388C180.463 18.5356 179.771 18.0747 178.971 17.7358C178.172 17.4037 177.284 17.2343 176.301 17.2343C175.596 17.2343 174.864 17.3698 174.085 17.6341C173.312 17.8985 172.6 18.3119 171.956 18.8609C171.313 19.4099 170.784 20.1148 170.364 20.9756C169.95 21.8363 169.74 22.8462 169.74 24.012C169.74 25.0964 169.916 26.0657 170.276 26.9129C170.635 27.7601 171.116 28.4785 171.719 29.0479C172.322 29.624 173.021 30.0578 173.814 30.3627C174.607 30.661 175.433 30.8101 176.294 30.8101C177.094 30.8101 177.887 30.6542 178.68 30.3492C179.473 30.0442 180.171 29.5969 180.788 29.014C181.398 28.4311 181.899 27.7194 182.279 26.879C182.665 26.0385 182.855 25.0829 182.855 24.0188C182.855 23.0157 182.699 22.1075 182.381 21.2806C182.062 20.4537 181.615 19.742 181.032 19.1456L181.039 19.1388ZM179.032 25.659C178.91 26.1741 178.727 26.6214 178.483 27.001C178.239 27.3805 177.934 27.6855 177.568 27.9092C177.202 28.1329 176.782 28.2481 176.308 28.2481C175.867 28.2481 175.461 28.1464 175.095 27.9363C174.729 27.7262 174.417 27.4415 174.166 27.0688C173.915 26.696 173.719 26.2554 173.576 25.7403C173.434 25.2252 173.366 24.6559 173.366 24.0256C173.366 23.4427 173.434 22.9005 173.563 22.3989C173.692 21.8906 173.881 21.45 174.125 21.0704C174.369 20.6909 174.674 20.3859 175.04 20.1622C175.406 19.9386 175.827 19.8233 176.301 19.8233C176.775 19.8233 177.196 19.9386 177.562 20.1622C177.928 20.3859 178.233 20.6909 178.477 21.0704C178.721 21.45 178.904 21.8973 179.026 22.3989C179.148 22.9072 179.209 23.4494 179.209 24.0256C179.209 24.6017 179.148 25.1507 179.026 25.6658L179.032 25.659ZM195.279 18.2441C194.974 17.912 194.628 17.6612 194.228 17.4918C193.828 17.3224 193.415 17.241 192.995 17.241C192.425 17.241 191.842 17.3224 191.246 17.4918C190.649 17.6612 189.911 17.9256 189.03 18.2916C189.145 18.522 189.267 18.7457 189.396 18.9558C189.524 19.1659 189.667 19.3489 189.809 19.5184C189.958 19.6878 190.114 19.8166 190.283 19.9047C190.453 19.9996 190.636 20.0335 190.832 20.0199C191.029 20.0064 191.198 19.9793 191.348 19.9454C191.497 19.9115 191.639 19.8979 191.788 19.8979C192.215 19.8979 192.5 20.0335 192.642 20.2978C192.791 20.5621 192.859 20.9078 192.859 21.3212V30.4983H196.289V21.2738C196.289 20.5892 196.194 19.9996 196.004 19.498C195.814 18.9965 195.57 18.583 195.272 18.2509L195.279 18.2441ZM203.792 19.4912C203.588 18.9897 203.317 18.5763 202.992 18.2441C202.66 17.912 202.287 17.6612 201.867 17.4918C201.446 17.3224 201.026 17.241 200.599 17.241C200.03 17.241 199.433 17.3224 198.81 17.4918C198.186 17.6612 197.434 17.9324 196.533 18.3187C196.648 18.5491 196.77 18.7728 196.899 18.9829C197.027 19.193 197.17 19.376 197.326 19.5455C197.481 19.7149 197.651 19.8437 197.827 19.9318C198.003 20.0267 198.193 20.0606 198.39 20.047C198.6 20.0335 198.796 19.9996 198.966 19.9589C199.135 19.9182 199.298 19.8979 199.44 19.8979C199.894 19.8979 200.213 20.0335 200.396 20.2978C200.572 20.5621 200.667 20.9078 200.667 21.3212V30.4983H204.097V21.2738C204.097 20.5892 203.995 19.9996 203.792 19.498V19.4912ZM187.532 17.5664H184.692C184.821 18.1493 184.916 18.705 184.977 19.2269C185.031 19.7488 185.065 20.2503 185.065 20.718V30.4915H188.494V20.3113C188.494 19.8098 188.433 19.3421 188.311 18.9016C188.189 18.461 187.932 18.0137 187.538 17.5664H187.532Z"
                fill="#2d327f"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10094_19497"
                  x1="3.34875"
                  y1="33.8516"
                  x2="22.7331"
                  y2="10.7463"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1AAD9E" />
                  <stop offset="0.01" stop-color="#20AE9A" />
                  <stop offset="0.12" stop-color="#57BD7A" />
                  <stop offset="0.23" stop-color="#85C960" />
                  <stop offset="0.33" stop-color="#A9D34B" />
                  <stop offset="0.42" stop-color="#C3DA3C" />
                  <stop offset="0.51" stop-color="#D2DE34" />
                  <stop offset="0.58" stop-color="#D8E031" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_10094_19497"
                  x1="3.5515"
                  y1="34.55"
                  x2="39.3312"
                  y2="34.55"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C767A4" />
                  <stop offset="0.13" stop-color="#BF6AA4" />
                  <stop offset="0.81" stop-color="#1AAD9E" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_10094_19497"
                  x1="32.1258"
                  y1="20.242"
                  x2="32.1258"
                  y2="0.945753"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.18" stop-color="#D7E033" />
                  <stop offset="1" stop-color="#DD5871" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_10094_19497"
                  x1="25.0646"
                  y1="30.1982"
                  x2="44.1575"
                  y2="18.7303"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.08" stop-color="#78C144" />
                  <stop offset="0.65" stop-color="#1AAD9E" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_10094_19497"
                  x1="4.12924"
                  y1="33.6551"
                  x2="11.1103"
                  y2="29.4665"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#78C144" />
                  <stop offset="1" stop-color="#DD5871" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_10094_19497"
                  x1="21.3431"
                  y1="39.9856"
                  x2="28.3173"
                  y2="35.797"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D8E033" />
                  <stop offset="0.85" stop-color="#1AAD9E" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_10094_19497"
                  x1="13.0071"
                  y1="39.6939"
                  x2="19.9882"
                  y2="35.4985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D8E033" />
                  <stop offset="1" stop-color="#C767A4" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_10094_19497"
                  x1="34.7571"
                  y1="23.1157"
                  x2="41.7382"
                  y2="18.927"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D8E033" />
                  <stop offset="1" stop-color="#1AAD9E" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          <div className={styles.navbar_bottom_menu}>
            <div
              className={`${styles.navbar_bottom_menu_options} ${isMenuVisible ? styles.topnav_right_show : ''}`}
            >
              {menuConfig.map((item, index) => {
                // Use menu_id if available, otherwise use the label as key.
                const menuKey = item.menu_id ? item.menu_id : item.label;
                if (item.submenu) {
                  return (
                    <div key={index}>
                      <div
                        className={styles.navbar_bottom_menu_option}
                        onClick={() => toggleMenu(menuKey)}
                        onMouseEnter={() => {
                          if (hideTimerRef.current) {
                            clearTimeout(hideTimerRef.current);
                            hideTimerRef.current = null;
                          }
                          if (!lockedMenu) setActiveMenu(menuKey);
                        }}
                        onMouseLeave={() => {
                          if (!lockedMenu) {
                            hideTimerRef.current = setTimeout(() => {
                              setActiveMenu(null);
                            }, 300);
                          }
                        }}
                      >
                        {t(item.label)}
                        {item.submenu && (
                          <div
                            className={styles.navbar_bottom_menu_option_circle}
                          ></div>
                        )}
                      </div>

                      <div
                        className={`${styles.navbar_bottom_menu_option_submenu} ${
                          activeMenu === menuKey
                            ? styles.navbar_bottom_menu_option_submenu_show
                            : ''
                        }`}
                        onMouseEnter={() => {
                          if (hideTimerRef.current) {
                            clearTimeout(hideTimerRef.current);
                            hideTimerRef.current = null;
                          }
                          if (!lockedMenu) setActiveMenu(menuKey);
                        }}
                        onMouseLeave={() => {
                          if (!lockedMenu) {
                            hideTimerRef.current = setTimeout(() => {
                              setActiveMenu(null);
                            }, 300);
                          }
                        }}
                      >
                        {item.bottom_menu && (
                          <div
                            className={`${styles.navbar_bottom_menu_option_submenu_bottom} ${styles.topbnav_menu_desktop} ${styles.navbar_bottom_menu_option_submenu_bottom_bb}`}
                          >
                            {item.bottom_menu.map((block, blockIndex) => (
                              <a
                                href={
                                  block.to.includes('/business')
                                    ? `https://www.moldtelecom.md/${t('lang')}${block.to}`
                                    : `/${t('lang')}/business${block.to}`
                                }
                                key={blockIndex}
                                className={`
                                  ${styles.navbar_bottom_menu_option_submenu_bottom_item}  `}
                              >
                                {t(block.label)}
                              </a>
                            ))}
                          </div>
                        )}
                        {item.submenu.map((block, blockIndex) => (
                          <div
                            key={blockIndex}
                            className={
                              block.small
                                ? styles.navbar_bottom_menu_option_submenu_block_small
                                : styles.navbar_bottom_menu_option_submenu_block
                            }
                          >
                            <div
                              className={
                                styles.navbar_bottom_menu_option_submenu_block_title
                              }
                            >
                              {t(block.title)}
                            </div>
                            <div
                              className={
                                block.small
                                  ? styles.navbar_bottom_menu_option_submenu_block_list_small
                                  : styles.navbar_bottom_menu_option_submenu_block_list
                              }
                            >
                              {block.items.map((subItem, subIndex) => (
                                <div
                                  key={subIndex}
                                  className={
                                    styles.navbar_bottom_menu_option_submenu_block_list_item_row
                                  }
                                >
                                  <a
                                    href={
                                      subItem.to.includes('/business')
                                        ? `https://www.moldtelecom.md/${t('lang')}${subItem.to}`
                                        : `/${t('lang')}/business${subItem.to}`
                                    }
                                    className={
                                      block.small
                                        ? styles.navbar_bottom_menu_option_submenu_block_list_item_small
                                        : styles.navbar_bottom_menu_option_submenu_block_list_item
                                    }
                                  >
                                    {t(subItem.label)}
                                    {subItem.smallText && (
                                      <span
                                        className={
                                          styles.navbar_bottom_menu_option_submenu_block_list_item_small_text
                                        }
                                      >
                                        &nbsp;({t(subItem.smallText)})
                                      </span>
                                    )}
                                  </a>
                                  {subItem.new && (
                                    <div
                                      className={
                                        styles.navbar_bottom_menu_option_submenu_new
                                      }
                                    >
                                      NEW
                                    </div>
                                  )}

                                  <Icon
                                    className={
                                      styles.navbar_bottom_menu_option_submenu_block_list_item_arrow
                                    }
                                    type="arrow_right"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div
                          className={
                            styles.navbar_bottom_menu_option_submenu_add_fake
                          }
                        ></div>
                        {item.promo && activeMenu === menuKey && (
                          <Slider
                            {...settings}
                            className={
                              styles.navbar_bottom_menu_option_submenu_add
                            }
                          >
                            {item.promo.map((promoItem, promoIndex) => (
                              <div key={promoIndex}>
                                <div
                                  className={
                                    styles.navbar_bottom_menu_option_submenu_add_inside
                                  }
                                  onMouseEnter={handlePromoMouseEnter}
                                  onMouseLeave={handlePromoMouseLeave}
                                  style={{
                                    backgroundImage: `url(${getImageByLanguage(promoItem)})`,
                                  }}
                                >
                                  <Button
                                    // to={promoItem.to}
                                    className={
                                      styles.navbar_bottom_menu_option_submenu_add_inside_btn
                                    }
                                    bgcolor={'#ffffff'}
                                    border={'#ffffff'}
                                    hover_bgcolor={'#dfe4fd'}
                                    hover_border={'#dfe4fd'}
                                  >
                                    <Icon
                                      type="business"
                                      style={{ pointerEvents: 'none' }}
                                    />
                                  </Button>
                                  <div
                                    className={
                                      styles.navbar_bottom_menu_option_submenu_add_inside_load
                                    }
                                  >
                                    <div
                                      key={progressKey}
                                      className={
                                        styles.navbar_bottom_menu_option_submenu_add_inside_load_inside
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        )}
                      </div>
                    </div>
                  );
                } else if (item.to) {
                  return (
                    <div
                      key={index}
                      className={styles.navbar_bottom_menu_option}
                    >
                      <a
                        href={
                          item.to.includes('/business')
                            ? `https://www.moldtelecom.md/${t('lang')}${item.to}`
                            : `business/${t('lang')}${item.to}`
                        }
                      >
                        {t(item.label)}
                      </a>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className={styles.navbar_bottom_menu_right}>
              {/*<Link*/}
              {/*  to={`https://www.moldtelecom.md/${t('lang')}/personal/search`}*/}
              {/*  className={`${styles.navbar_bottom_menu_right_lang_btn} ${styles.topbnav_menu_desktop} `}*/}
              {/*>*/}
              {/*  <Icon type="search" />*/}
              {/*</Link>*/}
              <div
                className={`${styles.navbar_bottom_menu_right_lang_btn} `}
                onClick={toggleLangPopup}
              >
                {i18n.language === 'en' ? (
                  <Icon type="en" size="28px" />
                ) : i18n.language === 'ro' ? (
                  <Icon type="ro" size="28px" />
                ) : (
                  <Icon type="ru" size="28px" />
                )}
              </div>
              <div
                className={`${styles.navbar_bottom_menu_right_lang} ${
                  isListLangPopupVisible
                    ? styles.navbar_bottom_menu_right_lang_show
                    : ''
                }`}
              >
                <div
                  className={styles.navbar_bottom_menu_right_lang_btn_select}
                  onClick={() => handleChangeLanguage('ro')}
                >
                  <Icon type="ro" size="22px" />
                  &nbsp;&nbsp;
                  {t('navbar.romanian')}
                </div>
                <div
                  className={styles.navbar_bottom_menu_right_lang_btn_select}
                  onClick={() => handleChangeLanguage('ru')}
                >
                  <Icon type="ru" size="22px" />
                  &nbsp;&nbsp;
                  {t('navbar.russian')}
                </div>
                {/*<div*/}
                {/*  className={styles.navbar_bottom_menu_right_lang_btn_select}*/}
                {/*  onClick={() => handleChangeLanguage('en')}*/}
                {/*>*/}
                {/*  EN*/}
                {/*</div>*/}
              </div>
              <Icon
                type="menu"
                className={styles.topbnav_menu_mobile_block}
                onClick={toggleMenuVisibility}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
