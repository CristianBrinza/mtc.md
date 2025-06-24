import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import Footer from '../../components/footer/Footer.tsx';
import Navbar from '../../components/navbar/Navbar.tsx';
import Chat from '../../components/chat/Chat.tsx';
import Feedback from '../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import styles from './Search.module.css';
import SEO from '../../components/SEO';
import Input from '../../components/input/Input.tsx';
import Button from '../../components/Button.tsx';

const PREFIX_TO_ROUTE: Record<string, string> = {
  home: '/',
  wifi_plus: '/wifi-plus',
  optionsandservices: '/mobile-options',
  promorazuieste: '/weekend-cu-beneficii',
  magazine: '/magazine',
  mobile: '/mobile',
  triple: '/triple',
  one_number: '/one-number',
};

interface Match {
  path: string[];
  value: string;
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[-\s]/g, '');
}

function collectMatches(
  obj: Record<string, any>,
  tokens: string[],
  path: string[] = []
): Match[] {
  let matches: Match[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const newPath = [...path, key];
    if (typeof value === 'string') {
      const normalizedValue = normalize(value);
      const found = tokens.every(t => normalizedValue.includes(t));
      if (found) {
        matches.push({ path: newPath, value });
      }
    } else if (typeof value === 'object' && value) {
      matches = matches.concat(
        collectMatches(value as Record<string, any>, tokens, newPath)
      );
    }
  }
  return matches;
}

function snippetAround(value: string, tokens: string[]): string {
  const words = value.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const n = normalize(words[i]);
    if (tokens.some(t => n.includes(t))) {
      const start = Math.max(0, i - 5);
      const end = Math.min(words.length, i + 6);
      const before = words.slice(start, i).join(' ');
      const after = words.slice(i + 1, end).join(' ');
      return `${start > 0 ? '... ' : ''}${before} <b>${words[i]}</b> ${after}${end < words.length ? ' ...' : ''}`;
    }
  }
  return value;
}

export default function SearchPage() {
  const { language } = useLanguage();
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<
    { route: string; name: string; snippets: string[] }[]
  >([]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const seo = {
    title: t('pages.search.title'),
    description: t('pages.search.description'),
    keywords: t('pages.search.keywords'),
  };

  const onSearch = () => {
    const bundle = i18n.getResourceBundle(language, 'translation') as Record<
      string,
      any
    >;
    const meta = (bundle.pages || {}) as Record<
      string,
      { title: string; description: string; keywords: string }
    >;
    const tokens = query.split(/\s+/).map(normalize).filter(Boolean);
    const matches = [
      ...collectMatches(bundle, tokens),
      ...collectMatches(meta, tokens),
    ];
    const grouped: Record<
      string,
      { route: string; name: string; snippets: string[] }
    > = {};
    matches.forEach(({ path, value }) => {
      const prefix = path[0];
      const route = PREFIX_TO_ROUTE[prefix];
      if (!route) return; // skip general content
      const name = meta[prefix]?.title || route;
      const snippet = snippetAround(value, tokens);
      if (!grouped[prefix]) {
        grouped[prefix] = { route, name, snippets: [] };
      }
      if (!grouped[prefix].snippets.includes(snippet)) {
        grouped[prefix].snippets.push(snippet);
      }
    });
    const res = Object.values(grouped).map(g => ({
      route: g.route,
      name: g.name,
      snippets: g.snippets,
    }));
    setExpanded({});
    setResults(res);
  };

  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('search.breadcrumb.title') }];

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <div className={styles.search}>
        <h1 className={`title ${styles.search_page_title}`}>
          {t('search.breadcrumb.title')}
        </h1>
        <p className={styles.search_page_text}>{t('search.text')}</p>

        <div className={styles.seach_top}>
          <Input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)} // e is ChangeEvent, .target.value is string
            onKeyDown={e => e.key === 'Enter' && onSearch()}
            placeholder="Search..."
          />

          <Button
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_1)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
            onClick={onSearch}
          >
            {t('search.search')}
          </Button>
        </div>
        <ul>
          {results.map((r, idx) => {
            const showAll = expanded[idx];
            const visible = showAll ? r.snippets : r.snippets.slice(0, 3);
            return (
              <li key={idx} style={{ marginBottom: '1rem' }}>
                {r.route === '*' ? (
                  <span>{r.name}</span>
                ) : (
                  <Link to={`/${language}${r.route}`}>{r.name}</Link>
                )}
                {visible.map((s, i) => (
                  <div
                    key={i}
                    style={{ fontSize: '0.9rem' }}
                    dangerouslySetInnerHTML={{ __html: s }}
                  />
                ))}
                {r.snippets.length > 3 && (
                  <button
                    className={styles.search_more}
                    onClick={() =>
                      setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))
                    }
                  >
                    {showAll ? t('search.show_less') : t('search.show_more')}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
