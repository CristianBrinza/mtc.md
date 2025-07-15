import { useTranslation } from 'react-i18next';
import ScrollableWrapper from '../Popup/ScrollableWrapper.tsx';

interface Row {
  country: string;
  operators: string[];
}

export default function TableRoaming() {
  const { t } = useTranslation();
  const rows_1 = t('operatorsTableRoamingEurope.rows', {
    returnObjects: true,
  }) as Row[];

  return (
    <ScrollableWrapper>
      <table className="popup_table">
        <thead>
          <tr>
            <td>
              <span>{t('operatorsTableRoamingEurope.header.country')}</span>
            </td>
            <td>
              <span>{t('operatorsTableRoamingEurope.header.operator')}</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {rows_1.map(({ country, operators }, i) =>
            operators.map((op, j) => (
              <tr key={`${i}-${j}`}>
                {j === 0 && <td rowSpan={operators.length}>{country}</td>}
                <td>{op}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </ScrollableWrapper>
  );
}
