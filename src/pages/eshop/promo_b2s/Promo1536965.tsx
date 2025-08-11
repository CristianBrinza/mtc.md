import  { useEffect, useMemo, useState } from 'react';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../components/footer/Footer.tsx';
import styles from './Promo1536965.module.css';
import Hero from '../../../components/hero/Hero.tsx';
import { useTranslation } from 'react-i18next';
import ShopCard from '../../../components/shop_card/ShopCard.tsx';
import Icon from '../../../components/Icon.tsx';

// === CONFIGURARE: setează data/ora limită (cu fus orar) ===
const ENDS_AT = '2025-09-15T23:59:59+03:00';

// mic utilitar pentru zecimale la ore/min/sec
const pad2 = (n: number) => String(n).padStart(2, '0');

// hook de countdown
function useCountdown(targetMs: number) {
  const [diff, setDiff] = useState(() => Math.max(targetMs - Date.now(), 0));

  useEffect(() => {
    if (targetMs <= Date.now()) {
      setDiff(0);
      return;
    }
    const id = setInterval(() => {
      const next = Math.max(targetMs - Date.now(), 0);
      setDiff(next);
      if (next === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);

  return { days, hours, minutes, seconds, expired: diff === 0 };
}

// === Tip pentru item-urile din JSON ===
interface PromoItem {
  device_id: number;
  image: string;
  price: number;
  old_price?: number;
  reducere?: string;
  title: string;
  subtitle?: string;
  characteristics?: string;
  tag?: string;
  subtag?: string;
  tag_color?: string;
  style_type?: string;
  show_like?: boolean;
  show_comapre?: boolean;
  link?: string;
  color?: string;
  sort?: string[];    // <-- folosim asta pentru filtrare
  model?: string;
  brand?: string;
  category?: string;
}

type SortMode = 'default' | 'min_price' | 'max_price';

// normalizare text: fără diacritice/spații/simboluri, lowercase
const norm = (s: string) =>
  (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');

// potrivire flexibilă între eticheta din UI și token-urile din item.sort
const matchesSort = (item: PromoItem, uiLabel: string) => {
  const sel = norm(uiLabel); // ex: "La 1 leu" -> "la1leu"
  const tokens = (item.sort ?? []).map(norm); // ex: ["1leu","televizor"] -> ["1leu","televizor"]
  // acceptăm egalitate sau includere bilaterală, ca să acoperim "la1leu" vs "1leu"
  return tokens.some((t) => t === sel || t.includes(sel) || sel.includes(t));
};

export default function Promo1536965() {
  const untilFromQuery = useMemo(() => {
    try {
      const q = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
      return q.get('until') || null;
    } catch {
      return null;
    }
  }, []);

  const endsAtStr = untilFromQuery || ENDS_AT;
  const targetMs = useMemo(() => new Date(endsAtStr).getTime(), [endsAtStr]);
  const { days, hours, minutes, seconds, expired } = useCountdown(targetMs);

  const endsAtLabel = useMemo(() => {
    const d = new Date(targetMs);
    return d.toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit', year: '2-digit' });
  }, [targetMs]);

  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: 'Magazin Online', url: `https://www.moldtelecom.md/${t('lang')}/personal/Telefoane` },
    { label: 'Promo' , url: `https://www.moldtelecom.md/${t('lang')}/personal/Telefoane` },
    { label: 'Back to school' },
  ];

  // === FETCH din public/json/promo1536956.json ===
  const [items, setItems] = useState<PromoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/json/promo1536956.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('JSON invalid: trebuie să fie un array.');
        if (alive) setItems(data);
      } catch (e: any) {
        if (alive) setError(e?.message || 'Eroare necunoscută.');
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // === SORT & FILTER state ===
  const [sortMode, setSortMode] = useState<SortMode>('default');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // etichete UI (max 1 activ simultan). Poți adăuga altele; trebuie doar să le pui și în item.sort.
  const filterTags = ['La 1 leu', 'Telefoane', 'Televizoare', 'Tablete', 'Ceasuri', 'Gadgetu-uri'];

  // rezolvă link-ul relativ vs absolut + limbă
  const resolveLink = (link?: string) => {
    if (!link) return undefined;
    if (/^https?:\/\//i.test(link)) return link;
    const lang = t('lang');
    const trimmed = link.startsWith('/') ? link : `/${link}`;
    return `https://www.moldtelecom.md/${lang}${trimmed}`;
  };

  // === aplică filtrare (după item.sort) + sortare (după price) ===
  const visibleItems = useMemo(() => {
    let arr = items.slice();

    // FILTRARE după câmpul `sort` din JSON
    if (activeTag) {
      arr = arr.filter((it) => matchesSort(it, activeTag!));
    }

    // SORTARE după preț
    if (sortMode === 'min_price') {
      arr.sort((a, b) => (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY));
    } else if (sortMode === 'max_price') {
      arr.sort((a, b) => (b.price ?? Number.NEGATIVE_INFINITY) - (a.price ?? Number.NEGATIVE_INFINITY));
    }
    // 'default' = ordinea din JSON (recomandate)

    return arr;
  }, [items, activeTag, sortMode]);

  // handleri UI
  const onSelectSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMode(e.target.value as SortMode);
  };

  const onClickTag = (label: string) => {
    setActiveTag((prev) => (prev === label ? null : label)); // toggle; max 1 activ
  };

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
            src={`/images/landings/79934311${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/88678012${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title_3 title_4 gradient_text_4 ${styles.title_main}`}>
        Back to School cu mega oferte la tot ce-ți trebuie!
      </div>
      <div className={styles.subtitle}>
        Dă start noului an de studii cu tehnologia care te sprijină în fiecare moment. Fie că e vorba de școală sau timp liber, pasiune sau eficiență, te așteaptă reduceri la laptopuri, telefoane, trotinete, gadgeturi, tablete și ceasuri inteligente. Descoperă ce te motivează, bucură-te de oferte și continuă să faci ceea ce îți place!
      </div>

      <div className={styles.couldown_container}>
        <div className={styles.couldown}>
          <div className={styles.couldown_promo}>
            <div className={styles.couldown_promo_title}>Back to School</div>
            <div className={styles.couldown_bottom}>
              {expired ? 'Oferta s-a încheiat' : `Valabil până la: ${endsAtLabel}`}
            </div>
          </div>
          <div className={styles.couldown_top}>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>{days}</div>
              <div className={styles.couldown_top_card_time}>{days === 1 ? 'zi' : 'zile'}</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>:</div>
              <div className={styles.couldown_top_card_time}>&nbsp;</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>{pad2(hours)}</div>
              <div className={styles.couldown_top_card_time}>{hours === 1 ? 'oră' : 'ore'}</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>:</div>
              <div className={styles.couldown_top_card_time}>&nbsp;</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>{pad2(minutes)}</div>
              <div className={styles.couldown_top_card_time}>{minutes === 1 ? 'minut' : 'minute'}</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>:</div>
              <div className={styles.couldown_top_card_time}>&nbsp;</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>{pad2(seconds)}</div>
              <div className={styles.couldown_top_card_time}>{seconds === 1 ? 'secundă' : 'secunde'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* TAGS: selectare exclusivă, filtrare pe baza item.sort */}
      <div className={styles.devices_tags}>
        {filterTags.map((label) => (
          <div
            key={label}
            className={`${styles.devices_tag} ${activeTag === label ? styles.devices_tag_active : ''}`}
            onClick={() => onClickTag(label)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ' ? onClickTag(label) : null)}
          >
            {label}
          </div>
        ))}
      </div>

      <div className={styles.sort}>
        <div className={styles.devices_found}>
          Au fost găsite <b>{loading ? '...' : visibleItems.length}</b> produse
        </div>
        <select
          name="sort"
          id="sort_promo"
          className={styles.sort_select}
          value={sortMode}
          onChange={onSelectSort}
        >
          <option value="default">Recomandate</option>
          <option value="min_price">Preț (crescător)</option>
          <option value="max_price">Preț (descrescător)</option>
        </select>
      </div>

      <div className={styles.devices}>
        <div className={styles.devices_filter}>
          <div className={styles.filter_title}>Filtru:</div>
          <div className={styles.filter_btn}>
          <div className={styles.filter_btn_title}>  <b>Categorie</b> <Icon type={'arrow_down'} /></div>
            <div className={styles.filter_btn_option}>
              <input type={'checkbox'} value={'televizor'}/> <b>Televizor</b> <span>(2)</span>
            </div>
            <div className={styles.filter_btn_option}>
              <input type={'checkbox'} value={'telefoane'}/> <b>Telefoane</b> <span>(4)</span>
            </div>
            <div className={styles.filter_btn_option}>
              <input type={'checkbox'} value={'ceasuri'}/> <b>Ceasuri</b> <span>(0)</span>
            </div>

          </div>
          <div className={styles.filter_btn}>
            <div className={styles.filter_btn_title}>   <b>Brand</b> <Icon type={'arrow_down'} /></div>

          </div>
          <div className={styles.filter_btn}>
            <div className={styles.filter_btn_title}>  <b>Categorie</b>  <Icon type={'arrow_down'} /></div>

          </div>
        </div>

        <div className={styles.devices_list}>
          {loading && <div>Se încarcă...</div>}
          {error && <div>Nu am putut încărca produsele: {error}</div>}
          {!loading && !error && visibleItems.map((item, index) => (
            <ShopCard
              key={`${item.device_id}-${index}`}
              device_id={item.device_id}
              image={item.image}
              price={item.price}
              old_price={item.old_price}
              reducere={item.reducere}
              title={item.title}
              subtitle={item.subtitle}
              characteristics={item.characteristics}
              tag={item.tag}
              subtag={item.subtag ?? t('combo_home.cu_oferta')}
              tag_color={item.tag_color ?? 'var(--theme_primary_color_blue_3)'}
              style_type={item.style_type ?? 'gray'}
              show_like={item.show_like ?? false}
              show_comapre={item.show_comapre ?? false}
              link={resolveLink(item.link)}
            />
          ))}
        </div>
      </div>

      <Footer disclaimer={true} />
    </>
  );
}
