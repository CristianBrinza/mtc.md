import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../SEO';

export default function AppRedirect(): JSX.Element {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.mymtc.title'),
    description: t('pages.mymtc.description'),
    keywords: t('pages.mymtc.keywords'),
  };
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || '';
    let url: string;

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(ua) && !('MSStream' in window)) {
      url =
        'https://apps.apple.com/us/app/my-account-moldtelecom/id1260879758?ls=1';
    }
    // Detect Android (and Huawei specifically)
    else if (/Android/i.test(ua)) {
      if (/Huawei/i.test(ua) || /HuaweiBrowser/i.test(ua)) {
        url = 'https://appgallery.huawei.com/#/app/C106890525';
      } else {
        url = 'https://play.google.com/store/apps/details?id=md.esempla.mtc';
      }
    }
    // Fallback to web/desktop
    else {
      url = 'https://my.moldtelecom.md/my-moldtelecom';
    }

    // Try opening a new tab
    const newWindow = window.open(url, '_blank');

    // If popup was blocked, newWindow will be null
    if (!newWindow) {
      // Fallback: navigate in the same tab
      window.location.href = url;
    }
  }, []);

  return <SEO {...seo} />;
}
