// components/Popup/Popups.tsx
import { useTranslation } from 'react-i18next';
import Popup from '../Popup/Popup';

interface PopupsProps {
  content: string | null;
  onClose: () => void;
  width?: string;
}

export default function Popups({ content, onClose, width }: PopupsProps) {
  const { t } = useTranslation();

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

          <h3>{t('popups.f1.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f1.conditions.0')}</li>
            <li>{t('popups.f1.conditions.1')}</li>
            <li>{t('popups.f1.conditions.2')}</li>
            <li>{t('popups.f1.conditions.3')}</li>
            <li>{t('popups.f1.conditions.4')}</li>
            <li>{t('popups.f1.conditions.5')}</li>
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

          <h3>{t('popups.f2.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f2.conditions.0')}</li>
            <li>{t('popups.f2.conditions.1')}</li>
            <li>{t('popups.f2.conditions.2')}</li>
            <li>{t('popups.f2.conditions.3')}</li>
            <li>{t('popups.f2.conditions.4')}</li>
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

          <h3>{t('popups.f3.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f3.conditions.0')}</li>
            <li>{t('popups.f3.conditions.1')}</li>
            <li>{t('popups.f3.conditions.2')}</li>
            <li>{t('popups.f3.conditions.3')}</li>
            <li>{t('popups.f3.conditions.4')}</li>
            <li>{t('popups.f3.conditions.5')}</li>
            <li>{t('popups.f3.conditions.6')}</li>
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
            </tbody>
          </table>

          <h3>{t('popups.f5.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f5.conditions.0')}</li>
            <li>{t('popups.f5.conditions.1')}</li>
            <li>{t('popups.f5.conditions.2')}</li>
            <li>{t('popups.f5.conditions.3')}</li>
            <li>{t('popups.f5.conditions.4')}</li>
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

          <h3>{t('popups.f6.conditionsTitle')}</h3>
          <ul>
            <li>{t('popups.f6.conditions.0')}</li>
            <li>{t('popups.f6.conditions.1')}</li>
            <li>{t('popups.f6.conditions.2')}</li>
            <li>{t('popups.f6.conditions.3')}</li>
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
    </>
  );
}
