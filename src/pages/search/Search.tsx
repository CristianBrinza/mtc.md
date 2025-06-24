import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

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
    const newPath = [...path, key];
    if (typeof value === 'string') {
      if (value.toLowerCase().includes(query.toLowerCase())) {
        matches.push({ path: newPath, value });
      }
    } else if (typeof value === 'object') {
      matches = matches.concat(collectMatches(value as Record<string, any>, query, newPath));
    }
  }
  return matches;
}

export default function SearchPage() {
  const { language } = useLanguage();
  const { i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ route: string; name: string; snippet: string }[]>([]);

  const onSearch = () => {
    const bundle = i18n.getResourceBundle(language, 'translation') as Record<string, any>;
    const meta = (bundle.pages || {}) as Record<string, { title: string; description: string; keywords: string }>;
    const matches = collectMatches(bundle, query);
    const res: { route: string; name: string; snippet: string }[] = [];
    matches.forEach(({ path, value }) => {
      const prefix = path[0];
      const route = PREFIX_TO_ROUTE[prefix] || '*';
      const name = meta[prefix]?.title || (route === '*' ? 'General content' : route);
      const lower = value.toLowerCase();
      const idx = lower.indexOf(query.toLowerCase());
      let snippet = value;
      if (idx !== -1) {
        const start = Math.max(0, idx - 40);
        const end = Math.min(value.length, idx + query.length + 40);
        snippet = `${start > 0 ? '...' : ''}${value.slice(start, idx)}<b>${value.substr(idx, query.length)}</b>${value.slice(idx + query.length, end)}${end < value.length ? '...' : ''}`;
      }
      res.push({ route, name, snippet });
    });
    setResults(res);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
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
  );
}
