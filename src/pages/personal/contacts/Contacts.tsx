import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../components/footer/Footer.tsx';
// import styles from './Promo1536965.module.css';
import SEO from '../../../components/SEO';

export default function Contacts() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('contacts.breadcrumb.help'), url: ' ' },
    { label: t('contacts.breadcrumb.title') },
  ];
  const seo = {
    title: t('pages.contacts.title'),
    description: t('pages.contacts.description'),
    keywords: t('pages.contacts.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Footer disclaimer={true} />
    </>
  );
}
