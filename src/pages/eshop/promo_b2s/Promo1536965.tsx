
import Navbar from '../../../components/navbar/Navbar.tsx';
import Chat from '../../../components/chat/Chat.tsx';
import Feedback from '../../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../../components/footer/Footer.tsx';
// import styles from './Promo1536965.module.css';

export default function Promo1536965() {
  // const { t } = useTranslation();
  const breadcrumbItems = [
    { label: 'e-shop', url: ' ' },
    { label: 'Back-2-School'},
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
