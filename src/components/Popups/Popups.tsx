// components/Popup/Popups.tsx
import { useTranslation } from 'react-i18next';
import Popup from '../Popup/Popup';
import ScrollableWrapper from '../Popup/ScrollableWrapper.tsx';
import styles from './Popups.module.css';
import React, { useState } from 'react';

interface PopupsProps {
  content: string | null;
  onClose: () => void;
  width?: string;
}

const ArrowIcon: React.FC<{ rotated?: boolean }> = ({ rotated = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={rotated ? styles.rotated : ''}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8.5L12 17.5L21 8.5"
      stroke="#B7B7B7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Row {
  country: string;
  operators: string[];
}

export default function Popups({ content, onClose, width }: PopupsProps) {
  const { t } = useTranslation();

  const [openBlocks, setOpenBlocks] = useState<boolean[]>([]);

  const toggleBlock = (index: number) => {
    setOpenBlocks(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };
  const rows_1 = t('operatorsTableRoamingEurope.rows', {
    returnObjects: true,
  }) as Row[];
  const rows_2 = t('operatorsTableRoamingApeluriWorld.rows', {
    returnObjects: true,
  }) as Row[];
  const rows_3 = t('operatorsTableRoamingInternetWorld.rows', {
    returnObjects: true,
  }) as Row[];

  return (
    <>
      {/* Popup pentru f1 */}
      <Popup
        id="f1"
        width={width || '1000px'}
        isVisible={content === 'f1'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f1.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f1.table.headers.0')}</td>
                  <td>{t('popups.f1.table.headers.1')}</td>
                  <td>{t('popups.f1.table.headers.2')}</td>
                  <td>{t('popups.f1.table.headers.3')}</td>
                  <td>{t('popups.f1.table.headers.4')}</td>
                </tr>
              </thead>
              <tbody>
                {/*
                row 0
              */}
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.0.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.0.1'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.0.2'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.0.3'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.0.4'),
                    }}
                  />
                </tr>
                {/*
                row 1
              */}
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.1.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.1.1'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f1.table.rows.1.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f1.table.rows.1.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f1.table.rows.1.4')}
                  </td>
                </tr>
                {/*
                row 2
              */}
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.2.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.2.1'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.2.2'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.2.3'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.2.4'),
                    }}
                  />
                </tr>
                {/*
                row 3
              */}
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.3.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.3.1'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.3.2'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.3.3'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.3.4'),
                    }}
                  />
                </tr>
                {/*
                row 4
              */}
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.4.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.4.1'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.4.2'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.4.3'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.4.4'),
                    }}
                  />
                </tr>
                {/*
                row 5
              */}
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.5.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.5.1'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.5.2'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.5.3'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f1.table.rows.5.4'),
                    }}
                  />
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f1.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f1.conditions.0')}</li>
            <li>{t('popups.f1.conditions.1')}</li>
            <li>{t('popups.f1.conditions.2')}</li>
            <li>{t('popups.f1.conditions.3')}</li>
            <li>{t('popups.f1.conditions.4')}</li>
            <li>{t('popups.f1.conditions.5')}</li>
            <li>{t('popups.f1.conditions.6')}</li>
          </ul>

          <h3>{t('popups.f1.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f1.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f1.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f1.activation.2'),
              }}
            />
            <li>{t('popups.f1.activation.3')}</li>
          </ul>
        </div>
      </Popup>

      {/* Popup pentru f2 */}
      <Popup
        id="f2"
        width={width || '1000px'}
        isVisible={content === 'f2'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f2.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f2.table.headers.0')}</td>
                  <td>{t('popups.f2.table.headers.1')}</td>
                  <td>{t('popups.f2.table.headers.2')}</td>
                  <td>{t('popups.f2.table.headers.3')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f2.table.rows.0.0'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.0.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.0.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.0.3')}
                  </td>
                </tr>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f2.table.rows.1.0'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.1.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.1.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.1.3')}
                  </td>
                </tr>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f2.table.rows.2.0'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.2.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.2.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f2.table.rows.2.3')}
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f2.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f2.conditions.0')}</li>
            <li>{t('popups.f2.conditions.1')}</li>
            <li>{t('popups.f2.conditions.2')}</li>
            <li>{t('popups.f2.conditions.3')}</li>
            <li>{t('popups.f2.conditions.4')}</li>
            <li>{t('popups.f2.conditions.5')}</li>
            <li>{t('popups.f2.conditions.6')}</li>
            <li>{t('popups.f2.conditions.7')}</li>
          </ul>

          <h3>{t('popups.f2.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f2.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f2.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f2.activation.2'),
              }}
            />
            <li>{t('popups.f2.activation.3')}</li>
          </ul>
        </div>
      </Popup>

      {/* Popup pentru f3 */}
      <Popup
        id="f3"
        width={width || '1000px'}
        isVisible={content === 'f3'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f3.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f3.table.headers.0')}</td>
                  <td>{t('popups.f3.table.headers.1')}</td>
                  <td>{t('popups.f3.table.headers.2')}</td>
                  <td>{t('popups.f3.table.headers.3')}</td>
                  <td>{t('popups.f3.table.headers.4')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('popups.f3.table.rows.0.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.0.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.0.2')}
                  </td>
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f3.table.rows.0.3'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.0.4')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f3.table.rows.1.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.1.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.1.2')}
                  </td>
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f3.table.rows.1.3'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.1.4')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f3.table.rows.2.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.2.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.2.2')}
                  </td>
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f3.table.rows.2.3'),
                    }}
                  />
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f3.table.rows.2.4')}
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f3.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f3.conditions.0')}</li>
            <li>{t('popups.f3.conditions.1')}</li>
            <li>{t('popups.f3.conditions.2')}</li>
            <li>{t('popups.f3.conditions.3')}</li>
            <li>{t('popups.f3.conditions.4')}</li>
            <li>{t('popups.f3.conditions.5')}</li>
            <li>{t('popups.f3.conditions.6')}</li>
            <li>{t('popups.f3.conditions.7')}</li>
            <li>{t('popups.f3.conditions.8')}</li>
            <li>{t('popups.f3.conditions.9')}</li>
            <li>{t('popups.f3.conditions.10')}</li>
            <li>{t('popups.f3.conditions.11')}</li>
          </ul>

          <h3>{t('popups.f3.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f3.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f3.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f3.activation.2'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f3.activation.3'),
              }}
            />
          </ul>
        </div>
      </Popup>

      {/* Popup pentru f4 */}
      <Popup
        id="f4"
        width={width || '1000px'}
        isVisible={content === 'f4'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f4.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f4.table.headers.0')}</td>
                  <td>{t('popups.f4.table.headers.1')}</td>
                  <td>{t('popups.f4.table.headers.2')}</td>
                  <td>{t('popups.f4.table.headers.3')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('popups.f4.table.rows.0.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.0.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.0.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.0.3')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f4.table.rows.1.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.1.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.1.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.1.3')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f4.table.rows.2.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.2.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.2.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f4.table.rows.2.3')}
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f4.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f4.conditions.0')}</li>
            <li>{t('popups.f4.conditions.1')}</li>
            <li>{t('popups.f4.conditions.2')}</li>
            <li>{t('popups.f4.conditions.3')}</li>
            <li>{t('popups.f4.conditions.4')}</li>
            <li>{t('popups.f4.conditions.5')}</li>
            <li>{t('popups.f4.conditions.6')}</li>
            <li>{t('popups.f4.conditions.7')}</li>
            <li>{t('popups.f4.conditions.8')}</li>
          </ul>

          <h3>{t('popups.f4.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f4.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f4.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f4.activation.2'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f4.activation.3'),
              }}
            />
          </ul>
        </div>
      </Popup>

      {/* Popup pentru f5 */}
      <Popup
        id="f5"
        width={width || '1000px'}
        isVisible={content === 'f5'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f5.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f5.table.headers.0')}</td>
                  <td>{t('popups.f5.table.headers.1')}</td>
                  <td>{t('popups.f5.table.headers.2')}</td>
                  <td>{t('popups.f5.table.headers.3')}</td>
                  <td>{t('popups.f5.table.headers.4')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('popups.f5.table.rows.0.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.0.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.0.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.0.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.0.4')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f5.table.rows.1.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.1.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.1.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.1.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.1.4')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f5.table.rows.2.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.2.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.2.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.2.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.2.4')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f5.table.rows.3.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.3.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.3.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.3.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f5.table.rows.3.4')}
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f5.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f5.conditions.0')}</li>
            <li>{t('popups.f5.conditions.1')}</li>
            <li>{t('popups.f5.conditions.2')}</li>
            <li>{t('popups.f5.conditions.3')}</li>
            <li>{t('popups.f5.conditions.4')}</li>
            <li>{t('popups.f5.conditions.5')}</li>
            <li>{t('popups.f5.conditions.6')}</li>
            <ul>
              <li>{t('popups.f5.conditions_sub.0')}</li>
              <li>{t('popups.f5.conditions_sub.1')}</li>
            </ul>
          </ul>

          <h3>{t('popups.f5.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f5.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f5.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f5.activation.2'),
              }}
            />
          </ul>

          <h3>{t('popups.f5.deactivationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f5.deactivation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f5.deactivation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f5.deactivation.2'),
              }}
            />
          </ul>
          <span
            dangerouslySetInnerHTML={{
              __html: t('popups.f5.deactivation.3'),
            }}
          />

          <div
            className={`${styles.wifi_carousell_btns_detalii_v2} ${styles.wifi_carousell_btns_detalii_v2_first}`}
          >
            {/* Block 0 */}
            <div className={styles.wifi_carousell_btns_detalii_line}>
              <div
                className={styles.wifi_carousell_btns_detalii_line_title}
                onClick={() => toggleBlock(0)}
              >
                {t('operatorsTableRoamingEurope.title')}
                <ArrowIcon rotated={!!openBlocks[0]} />
              </div>
              <div
                className={`${styles.wifi_carousell_btns_detalii_line_inside} ${
                  openBlocks[0]
                    ? styles.wifi_carousell_btns_detalii_line_inside_open
                    : ''
                }`}
              >
                <table className="popup_table">
                  <thead>
                    <tr>
                      <td>
                        <span>
                          {t('operatorsTableRoamingEurope.header.country')}
                        </span>
                      </td>
                      <td>
                        <span>
                          {t('operatorsTableRoamingEurope.header.operator')}
                        </span>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {rows_1.map(({ country, operators }, i) =>
                      operators.map((op, j) => (
                        <tr key={`${i}-${j}`}>
                          {j === 0 && (
                            <td rowSpan={operators.length}>{country}</td>
                          )}
                          <td>{op}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Popup>

      {/* Popup pentru f6 */}
      <Popup
        id="f6"
        width={width || '1000px'}
        isVisible={content === 'f6'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f6.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f6.table.headers.0')}</td>
                  <td>{t('popups.f6.table.headers.1')}</td>
                  <td>{t('popups.f6.table.headers.2')}</td>
                  <td>{t('popups.f6.table.headers.3')}</td>
                  <td>{t('popups.f6.table.headers.4')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('popups.f6.table.rows.0.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.0.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.0.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.0.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.0.4')}
                  </td>
                </tr>
                <tr>
                  <td>{t('popups.f6.table.rows.1.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.1.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.1.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.1.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f6.table.rows.1.4')}
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f6.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f6.conditions.0')}</li>
            <li>{t('popups.f6.conditions.1')}</li>
            <li>{t('popups.f6.conditions.2')}</li>
            <li>{t('popups.f6.conditions.3')}</li>
            <li>{t('popups.f6.conditions.4')}</li>
            <li>{t('popups.f6.conditions.5')}</li>
            <li>{t('popups.f6.conditions.6')}</li>
          </ul>

          <h3>{t('popups.f6.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f6.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f6.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f6.activation.2'),
              }}
            />
          </ul>

          <h3>{t('popups.f6.deactivationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f6.deactivation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f6.deactivation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f6.deactivation.2'),
              }}
            />
          </ul>

          <span
            dangerouslySetInnerHTML={{
              __html: t('popups.f6.deactivation.3'),
            }}
          />

          <div
            className={`${styles.wifi_carousell_btns_detalii_v2} ${styles.wifi_carousell_btns_detalii_v2_first}`}
          >
            {/* Block 0 */}
            <div className={styles.wifi_carousell_btns_detalii_line}>
              <div
                className={styles.wifi_carousell_btns_detalii_line_title}
                onClick={() => toggleBlock(2)}
              >
                {t('operatorsTableRoamingApeluriWorld.title')}
                <ArrowIcon rotated={!!openBlocks[2]} />
              </div>
              <div
                className={`${styles.wifi_carousell_btns_detalii_line_inside} ${
                  openBlocks[2]
                    ? styles.wifi_carousell_btns_detalii_line_inside_open
                    : ''
                }`}
              >
                <table className="popup_table">
                  <thead>
                    <tr>
                      <td>
                        <span>
                          {t(
                            'operatorsTableRoamingApeluriWorld.header.country'
                          )}
                        </span>
                      </td>
                      <td>
                        <span>
                          {t(
                            'operatorsTableRoamingApeluriWorld.header.operator'
                          )}
                        </span>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {rows_2.map(({ country, operators }, i) =>
                      operators.map((op, j) => (
                        <tr key={`${i}-${j}`}>
                          {j === 0 && (
                            <td rowSpan={operators.length}>{country}</td>
                          )}
                          <td>{op}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Block 1 */}
            <div className={styles.wifi_carousell_btns_detalii_line}>
              <div
                className={styles.wifi_carousell_btns_detalii_line_title}
                onClick={() => toggleBlock(3)}
              >
                {t('operatorsTableRoamingInternetWorld.title')}
                <ArrowIcon rotated={!!openBlocks[3]} />
              </div>
              <div
                className={`${styles.wifi_carousell_btns_detalii_line_inside} ${
                  openBlocks[3]
                    ? styles.wifi_carousell_btns_detalii_line_inside_open
                    : ''
                }`}
              >
                <table className="popup_table">
                  <thead>
                    <tr>
                      <td>
                        <span>
                          {t(
                            'operatorsTableRoamingInternetWorld.header.country'
                          )}
                        </span>
                      </td>
                      <td>
                        <span>
                          {t(
                            'operatorsTableRoamingInternetWorld.header.operator'
                          )}
                        </span>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {rows_3.map(({ country, operators }, i) =>
                      operators.map((op, j) => (
                        <tr key={`${i}-${j}`}>
                          {j === 0 && (
                            <td rowSpan={operators.length}>{country}</td>
                          )}
                          <td>{op}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Popup>

      {/* Popup pentru f7 */}
      <Popup
        id="f7"
        width={width || '1000px'}
        isVisible={content === 'f7'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f7.title')}</h2>
          <p>{t('popups.f7.paragraph')}</p>

          <h3>{t('popups.f7.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f7.conditions.0')}</li>
            <li>{t('popups.f7.conditions.1')}</li>
            <li>{t('popups.f7.conditions.2')}</li>
          </ul>

          <h3>{t('popups.f7.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f7.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f7.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f7.activation.2'),
              }}
            />
          </ul>

          <h3>{t('popups.f7.deactivationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f7.deactivation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f7.deactivation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f7.deactivation.2'),
              }}
            />
          </ul>
        </div>
      </Popup>

      {/* Popup pentru f8 */}
      <Popup
        id="f8"
        width={width || '1000px'}
        isVisible={content === 'f8'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f8.title')}</h2>
          <p>{t('popups.f8.paragraph')}</p>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f8.table.headers.0')}</td>
                  <td>{t('popups.f8.table.headers.1')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f8.table.rows.0.0'),
                    }}
                  />
                  <td
                    style={{ textAlign: 'center' }}
                    dangerouslySetInnerHTML={{
                      __html: t('popups.f8.table.rows.0.1'),
                    }}
                  />
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f8.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f8.conditions.0')}</li>
            <li>{t('popups.f8.conditions.1')}</li>
            <li>{t('popups.f8.conditions.2')}</li>
            <li>{t('popups.f8.conditions.3')}</li>
          </ul>

          <h3>{t('popups.f8.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f8.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f8.activation.1'),
              }}
            />
            <li>{t('popups.f8.activation.2')}</li>
          </ul>
        </div>
      </Popup>
      {/* Popup pentru 95 */}
      <Popup
        id="f9"
        width={width || '1000px'}
        isVisible={content === 'f9'}
        onClose={onClose}
      >
        <div className="popup_content">
          <h2>{t('popups.f9.title')}</h2>
          <ScrollableWrapper>
            <table className="popup_table">
              <thead>
                <tr>
                  <td>{t('popups.f9.table.headers.0')}</td>
                  <td>{t('popups.f9.table.headers.1')}</td>
                  <td>{t('popups.f9.table.headers.2')}</td>
                  <td>{t('popups.f9.table.headers.3')}</td>
                  <td>{t('popups.f9.table.headers.4')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('popups.f9.table.rows.0.0')}</td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f9.table.rows.0.1')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f9.table.rows.0.2')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f9.table.rows.0.3')}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {t('popups.f9.table.rows.0.4')}
                  </td>
                </tr>
              </tbody>
            </table>
          </ScrollableWrapper>
          <h3>{t('popups.f9.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f9.conditions.0')}</li>
            <li>{t('popups.f9.conditions.1')}</li>
            <li>{t('popups.f9.conditions.2')}</li>
            <li>{t('popups.f9.conditions.3')}</li>
            <li>{t('popups.f9.conditions.4')}</li>
            <li>{t('popups.f9.conditions.5')}</li>
          </ul>

          <h3>{t('popups.f9.activationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f9.activation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f9.activation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f9.activation.2'),
              }}
            />
          </ul>

          <h3>{t('popups.f9.deactivationTitle')}</h3>
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f9.deactivation.0'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f9.deactivation.1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('popups.f9.deactivation.2'),
              }}
            />
          </ul>
          <span
            dangerouslySetInnerHTML={{
              __html: t('popups.f9.deactivation.3'),
            }}
          />
        </div>
      </Popup>
    </>
  );
}
