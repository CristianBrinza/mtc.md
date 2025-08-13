import { useEffect, useMemo, useState } from 'react';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../components/footer/Footer.tsx';
import styles from './Promo1536965.module.css';
import Hero from '../../../components/hero/Hero.tsx';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';
import ShopCard from '../../../components/shop_card/ShopCard.tsx';
import Icon from '../../../components/Icon.tsx';

// === CONFIGURARE: setează data/ora limită (cu fus orar) ===
const ENDS_AT = '2025-09-25T23:59:59+03:00';

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
  colors?: string[];
  sort?: string[];
  model?: string;
  brand?: string;
  category?: string;
}

type SortMode = 'default' | 'min_price' | 'max_price';

// normalizare text: fără diacritice/spații/simboluri, lowercase
const norm = (s?: string) =>
  (s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');

// Make "sort" robust: accept string ("a,b") or array(["a","b"]) or null
const getSortTokens = (val: unknown): string[] => {
  if (Array.isArray(val)) return val.map(String);
  if (typeof val === 'string') {
    return val
      .split(/[,;|]/)
      .map(s => s.trim())
      .filter(Boolean);
  }
  return [];
};

const toNum = (v: any): number | undefined => {
  if (v === null || v === undefined || v === '') return undefined;
  const n = Number(String(v).replace(/[^\d.-]/g, ''));
  return Number.isNaN(n) ? undefined : n;
};

const toBool = (v: any): boolean | undefined => {
  if (typeof v === 'boolean') return v;
  if (v === null || v === undefined) return undefined;
  const s = String(v).trim().toLowerCase();
  return s === 'true' || s === '1' || s === 'yes';
};

// potrivire între eticheta din UI și token-urile din item.sort
const matchesSort = (item: PromoItem, uiLabel: string) => {
  const sel = norm(uiLabel);
  const tokens = getSortTokens((item as any).sort).map(norm);
  return tokens.some(t => t === sel || t.includes(sel) || sel.includes(t));
};

// grupare cu păstrarea etichetei “originale”
function uniqueLabels(items: PromoItem[], key: 'category' | 'brand' | 'color') {
  const map = new Map<string, string>(); // norm -> original
  for (const it of items) {
    const raw = (it as any)[key] as string | undefined;
    if (!raw) continue;
    const n = norm(raw);
    if (!map.has(n)) map.set(n, raw);
  }
  return Array.from(map.entries())
    .map(([n, original]) => ({ n, label: original }))
    .sort((a, b) => a.label.localeCompare(b.label, 'ro'));
}

// numărări dinamice pentru un facet, ținând cont de ceilalți filtri
function facetCounts(
  base: PromoItem[],
  key: 'category' | 'brand' | 'color'
): Record<string, number> {
  const cnt: Record<string, number> = {};
  for (const it of base) {
    const raw = (it as any)[key] as string | undefined;
    if (!raw) continue;
    const n = norm(raw);
    cnt[n] = (cnt[n] ?? 0) + 1;
  }
  return cnt;
}

export default function Promo1536965() {
  const untilFromQuery = useMemo(() => {
    try {
      const q = new URLSearchParams(
        typeof window !== 'undefined' ? window.location.search : ''
      );
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
    return d.toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  }, [targetMs]);

  const { t } = useTranslation();
  const seo = {
    title: t('pages.back_to_school.title'),
    description: t('pages.back_to_school.description'),
    keywords: t('pages.back_to_school.keywords'),
  };
  const breadcrumbItems = [
    {
      label: 'Magazin Online',
      url: `https://www.moldtelecom.md/${t('lang')}/personal/Telefoane`,
    },
    {
      label: 'Promo',
      url: `https://www.moldtelecom.md/${t('lang')}/personal/Telefoane`,
    },
    { label: 'Back to school' },
  ];

  // === FETCH din public/json/promo1536956.json ===
  const [items, setItems] = useState<PromoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fiterActive, setFiterActive] = useState(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/json/promo1536956.json', {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = await res.json();
        if (!Array.isArray(raw))
          throw new Error('JSON invalid: trebuie să fie un array.');

        // Normalize fields so sorting/filtering works even if JSON has strings like "FALSE"/"2999"
        const normalized: PromoItem[] = raw.map((r: any, idx: number) => ({
          device_id: toNum(r.device_id) ?? idx,
          image: String(r.image ?? ''),
          price: toNum(r.price) ?? 0,
          old_price: toNum(r.old_price),
          reducere: r.reducere != null ? String(r.reducere) : undefined,
          title: String(r.title ?? ''),
          subtitle: r.subtitle != null ? String(r.subtitle) : undefined,
          characteristics:
            r.characteristics != null ? String(r.characteristics) : undefined,
          tag: r.tag != null ? String(r.tag) : undefined,
          subtag: r.subtag != null ? String(r.subtag) : undefined,
          tag_color: r.tag_color != null ? String(r.tag_color) : undefined,
          style_type: r.style_type != null ? String(r.style_type) : undefined,
          show_like: toBool(r.show_like) ?? false,
          show_comapre: toBool(r.show_comapre) ?? false,
          link: r.link ?? undefined,
          color: r.color != null ? String(r.color) : undefined,
          model: r.model != null ? String(r.model) : undefined,
          brand: r.brand != null ? String(r.brand) : undefined,
          category: r.category != null ? String(r.category) : undefined,
          sort: getSortTokens(r.sort), // <-- always an array now
          colors: getSortTokens(r.colors),
        }));

        if (alive) setItems(normalized);
      } catch (e: any) {
        if (alive) setError(e?.message || 'Eroare necunoscută.');
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // === SORT & FILTER state ===
  const [sortMode, setSortMode] = useState<SortMode>('default');
  const [activeTag, setActiveTag] = useState<string | null>(null); // tags de sus (La 1 leu etc.)

  // filtre laterale: un singur selection pe fiecare facet
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // panouri fold/unfold (toate închise implicit)
  const [openCat, setOpenCat] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  // TAGS sus (max 1 activ)
  const filterTags = [
    'La 1 leu',
    'Telefoane',
    'Televizoare',
    'Tablete',
    'Console',
    'Ceasuri',
    'Gadget-uri',
  ];

  // rezolvă link-ul relativ vs absolut + limbă
  const resolveLink = (link?: string) => {
    if (!link) return undefined;
    if (/^https?:\/\//i.test(link)) return link;
    const lang = t('lang');
    const trimmed = link.startsWith('/') ? link : `/${link}`;
    return `https://www.moldtelecom.md/${lang}${trimmed}`;
  };

  // === listă opțiuni (toate distinctele din JSON) ===
  const allCategories = useMemo(() => uniqueLabels(items, 'category'), [items]);
  const allBrands = useMemo(() => uniqueLabels(items, 'brand'), [items]);
  const allColors = useMemo(() => uniqueLabels(items, 'color'), [items]);

  // === aplică filtru de tag (sus) și ceilalți doi facți la calculul numărătorilor ===
  const baseAfterTag = useMemo(() => {
    let arr = items.slice();
    if (activeTag) {
      arr = arr.filter(it => matchesSort(it, activeTag));
    }
    return arr;
  }, [items, activeTag]);

  // counts dinamice pentru fiecare facet (ținând cont de ceilalți selectați)
  const catCounts = useMemo(() => {
    let base = baseAfterTag.slice();
    if (selectedBrand)
      base = base.filter(it => norm(it.brand) === norm(selectedBrand));
    if (selectedColor)
      base = base.filter(it => norm(it.color) === norm(selectedColor));
    return facetCounts(base, 'category');
  }, [baseAfterTag, selectedBrand, selectedColor]);

  const brandCounts = useMemo(() => {
    let base = baseAfterTag.slice();
    if (selectedCategory)
      base = base.filter(it => norm(it.category) === norm(selectedCategory));
    if (selectedColor)
      base = base.filter(it => norm(it.color) === norm(selectedColor));
    return facetCounts(base, 'brand');
  }, [baseAfterTag, selectedCategory, selectedColor]);

  const colorCounts = useMemo(() => {
    let base = baseAfterTag.slice();
    if (selectedCategory)
      base = base.filter(it => norm(it.category) === norm(selectedCategory));
    if (selectedBrand)
      base = base.filter(it => norm(it.brand) === norm(selectedBrand));
    return facetCounts(base, 'color');
  }, [baseAfterTag, selectedCategory, selectedBrand]);

  // === lista vizibilă (aplică toate filtrele + sortarea) ===
  const visibleItems = useMemo(() => {
    let arr = items.slice();

    // FILTRU: tags sus
    if (activeTag) {
      arr = arr.filter(it => matchesSort(it, activeTag));
    }

    // FILTRU: facete laterale
    if (selectedCategory) {
      arr = arr.filter(it => norm(it.category) === norm(selectedCategory));
    }
    if (selectedBrand) {
      arr = arr.filter(it => norm(it.brand) === norm(selectedBrand));
    }
    if (selectedColor) {
      arr = arr.filter(it => norm(it.color) === norm(selectedColor));
    }

    // SORTARE: preț
    if (sortMode === 'min_price') {
      arr.sort(
        (a, b) =>
          (a.price ?? Number.POSITIVE_INFINITY) -
          (b.price ?? Number.POSITIVE_INFINITY)
      );
    } else if (sortMode === 'max_price') {
      arr.sort(
        (a, b) =>
          (b.price ?? Number.NEGATIVE_INFINITY) -
          (a.price ?? Number.NEGATIVE_INFINITY)
      );
    }
    // default = ordinea din JSON
    return arr;
  }, [
    items,
    activeTag,
    selectedCategory,
    selectedBrand,
    selectedColor,
    sortMode,
  ]);

  // handleri UI
  const onSelectSort = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSortMode(e.target.value as SortMode);
  const onClickTag = (label: string) =>
    setActiveTag(prev => (prev === label ? null : label));

  const toggleFacet = (facet: 'cat' | 'brand' | 'color') => {
    if (facet === 'cat') setOpenCat(v => !v);
    if (facet === 'brand') setOpenBrand(v => !v);
    if (facet === 'color') setOpenColor(v => !v);
  };

  const pickCategory = (label: string) =>
    setSelectedCategory(prev =>
      prev && norm(prev) === norm(label) ? null : label
    );
  const pickBrand = (label: string) =>
    setSelectedBrand(prev =>
      prev && norm(prev) === norm(label) ? null : label
    );
  const pickColor = (label: string) =>
    setSelectedColor(prev =>
      prev && norm(prev) === norm(label) ? null : label
    );

  // Restore filters from URL on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const tag = params.get('tag');
    const cat = params.get('category');
    const brand = params.get('brand');
    const color = params.get('color');
    const sortParam = params.get('sort');

    if (tag) setActiveTag(tag);
    if (cat) setSelectedCategory(cat);
    if (brand) setSelectedBrand(brand);
    if (color) setSelectedColor(color);
    if (
      sortParam &&
      ['default', 'min_price', 'max_price'].includes(sortParam)
    ) {
      setSortMode(sortParam as SortMode);
    }
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeTag) params.set('tag', activeTag);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedBrand) params.set('brand', selectedBrand);
    if (selectedColor) params.set('color', selectedColor);
    if (sortMode !== 'default') params.set('sort', sortMode);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [activeTag, selectedCategory, selectedBrand, selectedColor, sortMode]);

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/13286912${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/13236962${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title_3 title_4 gradient_text_4 ${styles.title_main}`}>
        {t('pormo_b2s_2025.title')}
      </div>
      <div className={styles.subtitle}>
        {t('pormo_b2s_2025.text')}
      </div>

      <div className={styles.couldown_container}>
        <div className={styles.couldown}>
          <div className={styles.couldown_promo}>
            <div className={styles.couldown_promo_title}>Back to School</div>
            <div className={styles.couldown_bottom}>
              {expired
                ? 'Oferta s-a încheiat'
                : `Valabil până la: ${endsAtLabel}`}
            </div>
          </div>
          <div className={styles.couldown_top}>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>{days}</div>
              <div className={styles.couldown_top_card_time}>
                {days === 1 ? 'zi' : 'zile'}
              </div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>:</div>
              <div className={styles.couldown_top_card_time}>&nbsp;</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>
                {pad2(hours)}
              </div>
              <div className={styles.couldown_top_card_time}>
                {hours === 1 ? 'oră' : 'ore'}
              </div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>:</div>
              <div className={styles.couldown_top_card_time}>&nbsp;</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>
                {pad2(minutes)}
              </div>
              <div className={styles.couldown_top_card_time}>
                {minutes === 1 ? 'minut' : 'minute'}
              </div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>:</div>
              <div className={styles.couldown_top_card_time}>&nbsp;</div>
            </div>
            <div className={styles.couldown_top_card}>
              <div className={styles.couldown_top_card_number}>
                {pad2(seconds)}
              </div>
              <div className={styles.couldown_top_card_time}>
                {seconds === 1 ? 'secundă' : 'secunde'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAGS sus (selectare exclusivă, filtrare pe item.sort) */}
      <div className={styles.devices_tags}>
        {filterTags.map(label => (
          <div
            key={label}
            className={`${styles.devices_tag} ${activeTag === label ? styles.devices_tag_active : ''}`}
            onClick={() => onClickTag(label)}
            role="button"
            tabIndex={0}
            onKeyDown={e =>
              e.key === 'Enter' || e.key === ' ' ? onClickTag(label) : null
            }
          >
            {label}
          </div>
        ))}
      </div>

      <div className={styles.sort}>
        <div className={styles.devices_found}>
          Au fost găsite <b>{loading ? '...' : visibleItems.length}</b> produse
        </div>
        <div className={styles.sort_rigth}>
          <div
            className={styles.sort_rigth_icon}
            onClick={() => setFiterActive(!fiterActive)}
          >
            <Icon type={'filter'} color={'var(--theme_primary_color_blue_2)'} />
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
      </div>

      <div className={styles.devices}>
        <div
          className={`${styles.devices_filter} ${fiterActive && styles.devices_filter_active}`}
        >
          <div className={styles.filter_title}>Filtru:</div>

          {/* CATEGORIE */}
          <div className={styles.filter_btn}>
            <div
              className={styles.filter_btn_title}
              onClick={() => toggleFacet('cat')}
            >
              <b>Categorie</b> <Icon type={'arrow_down'} />
            </div>
            {openCat && (
              <div className={styles.filter_btn_options}>
                {allCategories.map(({ n, label }) => (
                  <label key={n} className={styles.filter_btn_option}>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        className={styles.checkbox_input}
                        checked={
                          !!selectedCategory && norm(selectedCategory) === n
                        }
                        onChange={() => pickCategory(label)}
                      />
                      <span className={styles.checkbox_box}></span>
                    </label>
                    <b>{label}</b>{' '}
                    <span className={styles.filter_btn_option_span}>
                      ({catCounts[n] ?? 0})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* BRAND */}
          <div className={styles.filter_btn}>
            <div
              className={styles.filter_btn_title}
              onClick={() => toggleFacet('brand')}
            >
              <b>Brand</b> <Icon type={'arrow_down'} />
            </div>
            {openBrand && (
              <div className={styles.filter_btn_options}>
                {allBrands.map(({ n, label }) => (
                  <label key={n} className={styles.filter_btn_option}>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={!!selectedBrand && norm(selectedBrand) === n}
                        onChange={() => pickBrand(label)}
                        className={styles.checkbox_input}
                      />
                      <span className={styles.checkbox_box}></span>
                    </label>
                    <b>{label}</b>{' '}
                    <span className={styles.filter_btn_option_span}>
                      ({brandCounts[n] ?? 0})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* CULOARE */}
          <div className={styles.filter_btn}>
            <div
              className={styles.filter_btn_title}
              onClick={() => toggleFacet('color')}
            >
              <b>Culoare</b> <Icon type={'arrow_down'} />
            </div>
            {openColor && (
              <div className={styles.filter_btn_options}>
                {allColors.map(({ n, label }) => (
                  <label key={n} className={styles.filter_btn_option}>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        className={styles.checkbox_input}
                        checked={!!selectedColor && norm(selectedColor) === n}
                        onChange={() => pickColor(label)}
                      />
                      <span className={styles.checkbox_box}></span>
                    </label>
                    <b>{label}</b>{' '}
                    <span className={styles.filter_btn_option_span}>
                      ({colorCounts[n] ?? 0})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.devices_list}>
          {loading && <div>Se încarcă...</div>}
          {error && <div>Nu am putut încărca produsele: {error}</div>}
          {!loading &&
            !error &&
            visibleItems.map((item, index) => (
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
                show_detalii={true}
                subtag={item.subtag}
                tag_color={
                  item.tag_color ?? 'var(--theme_primary_color_blue_3)'
                }
                style_type={item.style_type ?? 'gray'}
                colors={item.colors}
                show_like={item.show_like ?? false}
                show_comapre={item.show_comapre ?? false}
                // color={item.color}
                link={resolveLink(item.link)}
              />
            ))}
        </div>
      </div>

      <Footer disclaimer={true} />
    </>
  );
}
