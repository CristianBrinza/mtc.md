//import styles from './NotFound.module.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Chat from '../../components/chat/Chat.tsx';
import Feedback from '../../components/feedback/Feedback.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './NotFound.module.css';
import Button from '../../components/Button.tsx';

export default function NotFound() {
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('notfound.breadcrumb.title') }];

  return (
    <>
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <div className={styles.notfound}>
        <div className={styles.notfound_title}>
          {/*404  - Not Found*/}
          404.
        </div>

        <div className={`title_3 ${styles.notfound_subtitle}`}>
          {t('notfound.subtitle')}
        </div>
        <div className={styles.notfound_text}>{t('notfound.text')}</div>

        <Button
          to="/"
          color={'#fff'}
          bgcolor={'var(--theme_primary_color_blue_4)'}
          border={'var(--theme_primary_color_blue_4)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          icon={'arrow_right'}
        >
          {t('notfound.btn')}
        </Button>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
