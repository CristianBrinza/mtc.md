import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../components/footer/Footer.tsx';
// import styles from './Contacts.module.css';

export default function Contacts() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('contacts.breadcrumb.help'), url: ' ' },
    { label: t('contacts.breadcrumb.title') },
  ];

  return (
    <>
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Footer disclaimer={true} />
    </>
  );
}
