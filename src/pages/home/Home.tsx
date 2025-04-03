import Navbar from '../../components/navbar/Navbar.tsx';
import Chat from '../../components/chat/Chat.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

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

      <Chat />
    </>
  );
}
