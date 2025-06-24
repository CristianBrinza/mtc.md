import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, value: string) => {
      let element = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    const setOG = (property: string, value: string) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setOG('og:title', title);
    setOG('og:description', description);
  }, [title, description, keywords]);

  return null;
}
