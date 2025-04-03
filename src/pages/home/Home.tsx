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

  const [videos, setVideos] = useState<videosItem[]>([]);
  useEffect(() => {
    fetch('/json/home_videos.json')
      .then(response => response.json())
      .then((data: videosItem[]) => setVideos(data))
      .catch(error => console.error('Error loading videos:', error));
  }, []);
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

      <Videos items={videos} />
      <Chat />
      <Footer discalmer={true} />
    </>
  );
}
