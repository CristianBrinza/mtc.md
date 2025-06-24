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

function collectKeys(
  obj: Record<string, any>,
  query: string,
  path: string[] = []
): string[] {
  let matches: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const newPath = [...path, key];
    if (typeof value === 'string') {
      if (value.toLowerCase().includes(query.toLowerCase())) {
        matches.push(newPath.join('.'));
      }
    } else if (typeof value === 'object') {
      matches = matches.concat(collectKeys(value as Record<string, any>, query, newPath));
    }
  }
  return matches;
}

export default function SearchPage() {
  const { language } = useLanguage();
  const { i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState<string[]>([]);

  const onSearch = () => {
    const bundle = i18n.getResourceBundle(language, 'translation') as Record<string, any>;
    const keys = collectKeys(bundle, query);
    const found = new Set<string>();
    keys.forEach(k => {
      const prefix = k.split('.')[0];
      const route = PREFIX_TO_ROUTE[prefix] || '*';
      found.add(route);
    });
    setPages(Array.from(found));
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
        {pages.map(page => (
          <li key={page}>
            {page === '*' ? (
              <span>General content</span>
            ) : (
              <Link to={`/${language}${page}`}>{page}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
