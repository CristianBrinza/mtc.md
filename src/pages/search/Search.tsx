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

function collectMatches(
  obj: Record<string, any>,
  query: string,
  path: string[] = []
): Match[] {
  let matches: Match[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (path.length === 0 && key === 'pages') continue; // skip meta
    const newPath = [...path, key];
    if (typeof value === 'string') {
      if (value.toLowerCase().includes(query.toLowerCase())) {
        matches.push({ path: newPath, value });
      }
    } else if (typeof value === 'object' && value) {
      matches = matches.concat(
        collectMatches(value as Record<string, any>, query, newPath)
      );
    }
  }
  return matches;
}

function snippetAround(value: string, query: string): string {
  const words = value.split(/\s+/);
  const lowerQuery = query.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes(lowerQuery)) {
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
  const { i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<
    { route: string; name: string; snippet: string }[]
  >([]);

  const onSearch = () => {
    const bundle = i18n.getResourceBundle(language, 'translation') as Record<
      string,
      any
    >;
    const meta = (bundle.pages || {}) as Record<
      string,
      { title: string; description: string; keywords: string }
    >;
    const matches = collectMatches(bundle, query);
    const grouped: Record<
      string,
      { route: string; name: string; snippets: string[] }
    > = {};
    matches.forEach(({ path, value }) => {
      const prefix = path[0];
      const route = PREFIX_TO_ROUTE[prefix];
      if (!route) return; // skip general content
      const name = meta[prefix]?.title || route;
      const snippet = snippetAround(value, query);
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
      snippet: g.snippets.join('<br/>'),
    }));
    setResults(res);
  };

  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('search.breadcrumb.title') }];

  return (
    <>
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <div className={styles.search}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch()}
          placeholder="Search..."
        />
        <button onClick={onSearch}>Search</button>
        <ul>
          {results.map((r, idx) => (
            <li key={idx} style={{ marginBottom: '1rem' }}>
              {r.route === '*' ? (
                <span>{r.name}</span>
              ) : (
                <Link to={`/${language}${r.route}`}>{r.name}</Link>
              )}
              <div
                style={{ fontSize: '0.9rem' }}
                dangerouslySetInnerHTML={{ __html: r.snippet }}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
