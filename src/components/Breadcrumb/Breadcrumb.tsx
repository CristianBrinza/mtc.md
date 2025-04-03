import { Link } from 'react-router-dom';
import './Breadcrumb.css';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbItem {
  label: ReactNode;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { t } = useTranslation();
  return (
    <div className="breadcrumb">
      <Link to={`/${t('lang')}/`}>
        <svg
          style={{ marginTop: '1px', marginBottom: '-1px' }}
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.74935 15.2334H7.12435V11.275C7.12435 11.0507 7.20035 10.8628 7.35235 10.7114C7.50435 10.5599 7.69224 10.4839 7.91602 10.4834H11.0827C11.307 10.4834 11.4951 10.5594 11.6471 10.7114C11.7991 10.8634 11.8749 11.0512 11.8743 11.275V15.2334H14.2493V8.10836L9.49935 4.54586L4.74935 8.10836V15.2334ZM3.16602 15.2334V8.10836C3.16602 7.85766 3.22222 7.62016 3.33464 7.39586C3.44706 7.17155 3.60196 6.98683 3.79935 6.84169L8.54935 3.27919C8.82643 3.06808 9.1431 2.96252 9.49935 2.96252C9.8556 2.96252 10.1723 3.06808 10.4493 3.27919L15.1993 6.84169C15.3973 6.98683 15.5524 7.17155 15.6648 7.39586C15.7773 7.62016 15.8332 7.85766 15.8327 8.10836V15.2334C15.8327 15.6688 15.6775 16.0416 15.3672 16.352C15.0568 16.6623 14.6842 16.8172 14.2493 16.8167H11.0827C10.8584 16.8167 10.6705 16.7407 10.519 16.5887C10.3675 16.4367 10.2915 16.2488 10.291 16.025V12.0667H8.70768V16.025C8.70768 16.2493 8.63168 16.4375 8.47968 16.5895C8.32768 16.7415 8.13979 16.8172 7.91602 16.8167H4.74935C4.31393 16.8167 3.94132 16.6618 3.63152 16.352C3.32171 16.0422 3.16654 15.6693 3.16602 15.2334Z"
            fill="black"
            fill-opacity="0.44"
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
      </Link>
      <span className="breadcrumb-separator">/</span>
      {items.map((item: BreadcrumbItem, index: number) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index}>
            {isLast || !item.url ? (
              <span>{item.label}</span>
            ) : (
              <>
                <Link
                  className="breadcrumb-item"
                  to={`/${t('lang')}/${item.url}`}
                >
                  {item.label}
                </Link>
                <span className="breadcrumb-separator">/</span>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
