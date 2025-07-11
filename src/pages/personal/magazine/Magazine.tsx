// src/pages/magazine/Magazine.tsx
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/navbar/Navbar';
import Chat from '../../../components/chat/Chat';
import Feedback from '../../../components/feedback/Feedback';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Footer from '../../../components/footer/Footer';
import Button from '../../../components/Button';
import styles from './Magazine.module.css';
import SEO from '../../../components/SEO';
import Input from '../../../components/input/Input.tsx';
import ScrollableWrapper from '../../../components/Popup/ScrollableWrapper.tsx';

interface RawMag {
  id: number;
  telefon: string;
  adresa_ro: string;
  oras_ro: string;
  grafic_ro: string;
  grafic_s_ro: string;
  grafic_d_ro: string;
  lat: string;
  lng: string;
  status: string;
  type: string;
}

interface Mag {
  oras: string;
  adresa: string;
  grafic: string;
  grafic_s: string;
  grafic_d: string;
  lat: number;
  lng: number;
  telefon: string;
}

export default function Magazine() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.magazine.title'),
    description: t('pages.magazine.description'),
    keywords: t('pages.magazine.keywords'),
  };
  const breadcrumbItems = [
    { label: t('magazine.breadcrumb.help'), url: ' ' },
    { label: t('magazine.breadcrumb.magazine') },
  ];

  const mapRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [magList, setMagList] = useState<Mag[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://www.moldtelecom.md/magasin_json');
        const rawData: unknown = await res.json();
        const container = rawData as { data?: unknown };

        if (!container.data || typeof container.data !== 'object') {
          console.error('Unexpected format', rawData);
          return;
        }

        const arr = Array.isArray(container.data) ? container.data : [];
        const items = arr as RawMag[];

        const active = items.map<Mag>(m => ({
          oras: m.oras_ro,
          adresa: m.adresa_ro,
          grafic: m.grafic_ro,
          grafic_s: m.grafic_s_ro,
          grafic_d: m.grafic_d_ro,
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng),
          telefon: m.telefon.trim(),
        }));

        setMagList(active);
      } catch (err) {
        console.error('Nu s-au putut încărca magazinele:', err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!mapRef.current || magList.length === 0) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.initMap = () => {
      const map = new w.google.maps.Map(mapRef.current, {
        center: { lat: 47.016974, lng: 28.844743 },
        zoom: 8,
      });
      const infoWindow = new w.google.maps.InfoWindow();

      magList.forEach((m: Mag) => {
        const marker = new w.google.maps.Marker({
          position: { lat: m.lat, lng: m.lng },
          map,
          icon: {
            url: '/images/general/pinpoint_marker.png',
            scaledSize: new w.google.maps.Size(28, 36),
            anchor: new w.google.maps.Point(12.5, 40),
          },
        });
        marker.addListener('click', () => {
          infoWindow.setContent(`
            <h3>${m.oras}</h3>
            <p>${m.adresa}</p>
            <p><strong>${t('magazine.info.program')}</strong> ${m.grafic}</p>
            <p><strong>${t('magazine.info.saturday')}</strong> ${m.grafic_s}</p>
            <p><strong>${t('magazine.info.sunday')}</strong> ${m.grafic_d}</p>
            <p><strong>${t('magazine.info.phone')}</strong> ${m.telefon}</p>
          `);
          infoWindow.open(map, marker);
        });
      });
    };

    if (!w.google) {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCrW63ZFRth3we-4-5b9yLHnL12j-gf0k8&callback=initMap';
      script.async = true;
      document.head.appendChild(script);
    } else {
      w.initMap();
    }
  }, [magList]);

  const [search, setSearch] = useState('');
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  function HighlightParentheses({ text }: { text: string }) {
    // split into “outside” and “(inside)” pieces
    const parts = text.split(/(\([^)]*\))/g);
    return (
      <div className={styles.small_span_div}>
        {parts.map((part, i) =>
          part.startsWith('(') ? (
            <span className={styles.small_span} key={i}>
              <br />
              {part}
            </span>
          ) : (
            part
          )
        )}
      </div>
    );
  }

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />

      <div className={styles.magazine_page}>
        <h1 className={`title ${styles.magazine_page_title}`}>
          {t('magazine.title')}
        </h1>
        <p className={styles.magazine_page_text}>{t('magazine.text')}</p>

        <div className={styles.magazine_page_btns}>
          <Button
            color="var(--theme_primary_color_blue_4)"
            bgcolor={
              view === 'map'
                ? 'var(--theme_primary_color_blue_2)'
                : 'var(--theme_primary_color_blue_3)'
            }
            border="var(--theme_primary_color_blue_1)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            icon="arrow_right"
            onClick={() => setView('map')}
          >
            {t('magazine.buttons.map')}
          </Button>
          <Button
            color="var(--theme_primary_color_blue_4)"
            bgcolor={
              view === 'list'
                ? 'var(--theme_primary_color_blue_2)'
                : 'var(--theme_primary_color_blue_3)'
            }
            border="var(--theme_primary_color_blue_1)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            icon="arrow_right"
            onClick={() => setView('list')}
          >
            {t('magazine.buttons.list')}
          </Button>

          {view === 'list' && (
            <Input
              className={styles.seach_input}
              value={search}
              icon="search"
              placeholder={t('magazine.search.cauta')}
              onChange={handleSearch}
              color="var(--theme_primary_color_blue_3)"
            />
          )}
        </div>

        <div
          id="map"
          ref={mapRef}
          style={{
            width: '100%',
            height: '500px',
            display: view !== 'map' ? 'none' : 'block',
          }}
          className={styles.contact_iframe}
        />

        {view === 'list' && (
          <div>
            {/*<Input*/}
            {/*  className={styles.seach_input}*/}
            {/*  value={search}*/}
            {/*  icon="search"*/}
            {/*  placeholder={"Caută"}*/}
            {/*  onChange={handleSearch}*/}
            {/*/>*/}
            <div id="mag_list" className={styles.magazine_page_table}>
              <ScrollableWrapper>
                {/*<table className="popup_table">*/}
                <table className={`magazine_mtc ${styles.magazine_table}`}>
                  <thead>
                    <tr>
                      <th>{t('magazine.table.magazin')}</th>
                      <th>{t('magazine.table.weekdays')}</th>
                      <th>{t('magazine.table.saturday')}</th>
                      <th>{t('magazine.table.sunday')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {magList
                      .filter(
                        m =>
                          m.oras.toLowerCase().includes(search.toLowerCase()) ||
                          m.adresa.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((m, i) => (
                        <tr key={i}>
                          <td>
                            <span>{m.oras}</span>, {m.adresa}
                          </td>
                          <td>
                            <HighlightParentheses text={m.grafic} />
                          </td>
                          <td>
                            <HighlightParentheses text={m.grafic_s} />
                          </td>
                          <td>
                            <HighlightParentheses text={m.grafic_d} />
                          </td>
                        </tr>
                      ))}
                    {magList.filter(
                      m =>
                        m.oras.toLowerCase().includes(search.toLowerCase()) ||
                        m.adresa.toLowerCase().includes(search.toLowerCase())
                    ).length === 0 && (
                      <tr>
                        <td
                          style={{
                            textAlign: 'center',
                            padding: '25px 0 15px',
                          }}
                          colSpan={4}
                        >
                          {t('magazine.table.no_magazines')}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </ScrollableWrapper>
            </div>
          </div>
        )}
      </div>

      <Feedback />
      <Chat />
      <Footer disclaimer />
    </>
  );
}
