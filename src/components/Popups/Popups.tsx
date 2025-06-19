// components/Popup/Popups.tsx
import React from 'react';
import Popup from '../Popup/Popup';

interface PopupsProps {
  content: string | null;
  onClose: () => void;
  width?: string;
}

const Popups: React.FC<PopupsProps> = ({ content, onClose, width }) => {
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
          <h2>Internet Mobil</h2>

          <table className="popup_table">
            <thead>
              <tr>
                <td>Descriere opțiune</td>
                <td>SMS Cod</td>
                <td>Trafic&nbsp;</td>
                <td>Tarif</td>
                <td>Valabilitate</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Internet Nelimitat 1 zi</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>Nelimitat1zi</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>nelimitat</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>20 lei</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>1 zi&nbsp;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Internet Nelimitat 7 zile</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>Nelimitat/7</span>
                </td>
                <td style={{ textAlign: 'center' }}>nelimitat</td>
                <td style={{ textAlign: 'center' }}>100 lei</td>
                <td style={{ textAlign: 'center' }}>7 zile</td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <span>Internet 10 GB 15 zile</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>10GB/15</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>10 GB</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>50 lei</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>15 zile</span>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <span>
                    Internet 5 GB 30<span>&nbsp;zile</span>
                  </span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>5GB/30</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>5 GB</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>60 lei</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>30 zile</span>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <span>
                    Internet 10 GB&nbsp;
                    <span>
                      30<span>&nbsp;zile</span>
                    </span>
                  </span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>10GB</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>10 GB</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>100 lei</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>30 zile</span>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td>
                  <span>
                    Internet 20 GB&nbsp;
                    <span>
                      30<span>&nbsp;zile</span>
                    </span>
                  </span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span></span>20GB
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>20 GB&nbsp;</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>150 lei</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>30 zile</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Condiții de utilizare opțiune:</h3>

          <ul>
            <li>
              Opțiunile pentru 1 zi sunt valabile 24 ore din momentul activării.
            </li>
            <li>
              Opțiunea poate fi activată în orice zi, de mai multe ori pe lună.
            </li>
            <li>
              Viteza de acces la internet este în funcţie de terminalul
              utilizat.
            </li>
            <li>
              Pot fi activate până la 5 opțiuni concomitent, diferite sau de
              același fel.&nbsp;
            </li>
            <li>Opțiunile sunt valabile&nbsp;doar în perioada activă.</li>
            <li>
              Opțiunea este disponibilă pentru toţi abonații Moldtelecom,
              deținători de abonamente sau cartela Prepay, telefonie mobilă sau
              internet mobil.
              <br />
              &nbsp;
            </li>
          </ul>

          <h3>Activare opțiune:</h3>

          <ul>
            <li>
              prin{' '}
              <a href="https://www.moldtelecom.md/ro/personal/sms-100-abonament">
                SMS la numărul 100
              </a>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
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
          <h2>Minute Naționale</h2>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50 minute naționale</td>
                <td style={{ textAlign: 'center' }}>50min</td>
                <td style={{ textAlign: 'center' }}>15 lei</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>100 minute naționale</td>
                <td style={{ textAlign: 'center' }}>100min</td>
                <td style={{ textAlign: 'center' }}>40 lei</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>200 minute naționale</td>
                <td style={{ textAlign: 'center' }}>200min</td>
                <td style={{ textAlign: 'center' }}>70 lei</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
            </tbody>
          </table>
          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Opțiunea este valabilă 30 zile calendaristice.</li>
            <li>
              Minutele naționale oferite în cadrul opțiunii, nu se vor cumula cu
              minutele incluse in abonament, și se vor utiliza doar ca minute
              naționale.
            </li>
            <li>
              În cazul în care abonamentul deținut include deja minute naţionale
              în pachet, minutele din opţiune au prioritate la utilizare.
            </li>
            <li>
              Opțiunea poate fi activată în orice zi, de mai multe ori pe lună.
            </li>
            <li>La schimbul de pachet opțiunea va fi păstrată.</li>
          </ul>

          <h3>Activare opțiune:</h3>

          <ul>
            <li>
              prin{' '}
              <a href="https://www.moldtelecom.md/ro/personal/sms-100-abonament">
                SMS la numărul 100
              </a>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="tel:*200#">*200#</a> pentru
              utilizatorii Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentanță S.A. Moldtelecom.</li>
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
          <h2>Minute Internaționale</h2>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong> SMS cod</strong>
                </td>
                <td>
                  <strong>Tarif&nbsp;&nbsp;</strong>
                </td>
                <td>
                  <strong>Conținut</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Activare România și Ucraina</td>
                <td style={{ textAlign: 'center' }}>Int30</td>
                <td style={{ textAlign: 'center' }}>50 lei</td>
                <td style={{ textAlign: 'center' }}>
                  30 min.
                  <br />
                  internationale&nbsp;
                </td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>Activare Europa, Israel, SUA, Canada</td>
                <td style={{ textAlign: 'center' }}>Int25</td>
                <td style={{ textAlign: 'center' }}>50 lei</td>
                <td style={{ textAlign: 'center' }}>
                  25 min.
                  <br />
                  internationale
                </td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>Activare orice țară</td>
                <td style={{ textAlign: 'center' }}>Int10</td>
                <td style={{ textAlign: 'center' }}>50 lei</td>
                <td style={{ textAlign: 'center' }}>
                  10 min.
                  <br />
                  internationale
                </td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
            </tbody>
          </table>
          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Opțiunea este valabilă 30 zile.&nbsp;</li>
            <li>
              Opțiunea „Europa, Israel, SUA, Canada” conține următoarele
              destinatii internaționale: Ucraina, Italia, Romania, Germania,
              Franța, Cehia, Marea Britanie, Polonia, Grecia, Portugalia,
              Spania, Belarusia, Estonia, Belgia, Turcia, Israel, USA, Canada.
              <br />
              Destinație națională: regiunea transnistreană.
            </li>
            <li>
              Opțiunea Orice Țară conține destinațiile din Zona 1, Zona 2, Zona
              3.
            </li>
            <li>
              Minutele incluse în opțiune sunt destinate pentru apeluri spre
              orice rețea mobilă sau fixă.
            </li>
            <li>
              După consumarea Minutelor internaționale incluse în opțiune,
              convorbirile vor fi taxate la tarifele standard aplicate pentru
              fiecare țară în parte.&nbsp;
            </li>
            <li>
              Pot fi activate până la 5 opțiuni concomitent, diferite sau de
              același fel.&nbsp;
            </li>
            <li>Opțiunile sunt valabile doar în perioada activă.&nbsp;</li>
            <li>La schimbul de pachet opțiunea va fi păstrată.</li>
            <li>
              Opțiunea este disponibilă pentru toţi abonații Moldtelecom,
              deținători de abonamente sau cartela Prepay, telefonie mobilă sau
              internet mobil.
              <br />
              &nbsp;
            </li>
          </ul>

          <h3>Activare opțiune:</h3>

          <ul>
            <li>
              prin{' '}
              <a href="https://www.moldtelecom.md/ro/personal/sms-100-abonament">
                SMS la numărul 100
              </a>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
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
          <h2>Pachete SMS</h2>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50 SMS Naţionale</td>
                <td style={{ textAlign: 'center' }}>SMS50</td>
                <td style={{ textAlign: 'center' }}>10 lei</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>20 SMS Internaționale</td>
                <td style={{ textAlign: 'center' }}>SMS35</td>
                <td style={{ textAlign: 'center' }}>35 lei</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>100 SMS Naţionale</td>
                <td style={{ textAlign: 'center' }}>SMS15</td>
                <td style={{ textAlign: 'center' }}>15 lei</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
            </tbody>
          </table>
          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Opțiunea este valabilă 30 zile calendaristice.</li>
            <li>
              Conținutul de SMS neconsumat nu se va raporta în perioda
              următoare.
            </li>
            <li>
              Opțiunea poate fi activată în orice zi, de mai multe ori pe lună.
            </li>
            <li>
              Opțiunile ”SMS” activate se vor consuma prioritar conținutului din
              abonament sau cartelă.
            </li>
            <li>La schimbul de pachet opțiunea va fi păstrată.</li>
            <li>
              După consumarea SMS-urilor incluse în opțiune, SMS-urile expediate
              vor fi taxate la tarifele aferente planului tarifar.
            </li>
            <li>
              Opțiunile sunt valabile cînd abonatul se afla în perioada activă.
            </li>
            <li>
              Opțiunea este disponibilă pentru toţi abonații Moldtelecom,
              deținători de abonamente sau cartela Prepay, telefonie mobilă sau
              internet mobil.
            </li>
          </ul>

          <h3>Activare opțiune:</h3>

          <ul>
            <li>
              prin{' '}
              <a href="https://www.moldtelecom.md/ro/personal/sms-100-abonament">
                SMS la numărul 100
              </a>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
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
          <h2>Roaming Europe</h2>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>Trafic internet</td>
                <td>
                  <strong>Tarif</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apeluri Roaming UE</td>
                <td style={{ textAlign: 'center' }}>UE70apel</td>
                <td style={{ textAlign: 'center' }}>70 lei</td>
                <td style={{ textAlign: 'center' }}>100 min</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>Internet Roaming UE</td>
                <td style={{ textAlign: 'center' }}>UE100net</td>
                <td style={{ textAlign: 'center' }}>100 lei</td>
                <td style={{ textAlign: 'center' }}>2 GB</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>Combo Roaming UE</td>
                <td style={{ textAlign: 'center' }}>UE100</td>
                <td style={{ textAlign: 'center' }}>100 lei</td>
                <td style={{ textAlign: 'center' }}>50 min/ 1 GB</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
            </tbody>
          </table>
          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Tarifele includ toate taxele, inclusiv TVA.</li>
            <li>
              Seria de opțiuni „Roaming UE” este disponibilă pentru toți
              abonații de Telefonie mobilă Postpay, Voce și Date și Prepay
            </li>
            <li>
              După consumarea conținutului în Roaming inclus în opțiune,
              convorbirile și traficul internet vor fi taxate conform tarifelor
              standard în roaming pentru fiecare operator.
            </li>
            <li>
              Conținutul opțiunilor este destinat pentru utilizarea în Roaming
              în rețeaua operatorilor, conform listei
            </li>
            <li>
              Minutele incluse în opțiunile “Internet Roaming UE” și “Combo
              Roaming UE” repartizate după cum urmează:
              <ul>
                <li>
                  “Apeluri Roaming UE” – 100 min de iesire locale, de iesire
                  către MD;
                </li>
                <li>
                  “Combo Roaming UE”– 50 min de iesire locale, de iesire către
                  MD;
                </li>
              </ul>
            </li>
          </ul>
          <h3>Activare opțiune:</h3>
          <ul>
            <li>
              prin{' '}
              <a href="https://www.moldtelecom.md/ro/personal/sms-100-abonament">
                SMS la numărul 100
              </a>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
          </ul>
          <h3>Dezactivarea opțiune:</h3>
          <ul>
            <li>
              Prin aplicația mobilă „
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              ”
            </li>
            <li>
              Prin apel la nr. <a href="tel:+37322200200">+373 22 200 200</a>{' '}
              Serviciul Suport Clienți;
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="tel:*200#"></a> pentru clienții
              Prepay și urmărirea instrucțiunilor meniului.
            </li>
          </ul>
          Dezactivarea serviciului este gratuită.
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
          <h2>Roaming World</h2>
          <table className="popup_table">
            <thead>
              <tr>
                <td>
                  <strong>Descriere opțiune</strong>
                </td>
                <td>
                  <strong>SMS cod</strong>
                </td>
                <td>
                  <strong>Tarif&nbsp;</strong>
                </td>
                <td>
                  <strong>Conținut</strong>
                </td>
                <td>
                  <strong>Valabilitate</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apeluri World</td>
                <td style={{ textAlign: 'center' }}>Wapel</td>
                <td style={{ textAlign: 'center' }}>70 lei&nbsp;</td>
                <td style={{ textAlign: 'center' }}>10 min</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
              <tr>
                <td>Internet World</td>
                <td style={{ textAlign: 'center' }}>Wnet</td>
                <td style={{ textAlign: 'center' }}>100 lei</td>
                <td style={{ textAlign: 'center' }}>1 GB</td>
                <td style={{ textAlign: 'center' }}>30 zile</td>
              </tr>
            </tbody>
          </table>
          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Tarifele includ toate taxele, inclusiv TVA.</li>
            <li>
              Seria de opțiuni „World” este disponibilă pentru toți abonații de
              Telefonie mobilă Postpay, Voce și Date și Prepay.
            </li>
            <li>
              După consumarea conținutului în Roaming inclus în opțiune,
              convorbirile și traficul internet vor fi taxate conform tarifelor
              standard în roaming pentru fiecare operator.
            </li>
            <li>
              Viteza de acces la internet este conform condițiilor de prestare a
              serviciului în vigoare de către operator și în funcție de
              terminalul utilizat.
            </li>
            <li>
              Minutele incluse în opțiunea Apeluri Word pot fi utilizate pentru
              , „apeluri de ieșire locale”, „apeluri de ieșire către MD”{' '}
            </li>
          </ul>
          <h3>Activare opțiune:</h3>
          <ul>
            <li>
              prin{' '}
              <a href="https://www.moldtelecom.md/ro/personal/sms-100-abonament">
                SMS la numărul 100
              </a>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
          </ul>
          <h3>Dezactivarea opțiune:</h3>
          <ul>
            <li>
              Prin aplicația mobilă „
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              ”
            </li>
            <li>
              Prin apel la nr. <a href="tel:+37322200200">+373 22 200 200</a>{' '}
              Serviciul Suport Clienți;
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="tel:*200#"></a> pentru clienții
              Prepay și urmărirea instrucțiunilor meniului.
            </li>
          </ul>
          Dezactivarea serviciului este gratuită.
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
          <h2>VITEZA 4G+</h2>
          <p>
            Opțiunea viteza 4G+ presupune majorarea vitezei de transport date
            download până la 175 Mbps și upload până la 50 Mbps.
          </p>

          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Activarea este gratuită.</li>
            <li>
              Este necesar să ai terminal compatibil cu tehnologia LTE,
              frecvență de 1800 MHz (Band 3)
            </li>
            <li>Activarea/dezactivarea se efectuează în orice zi a lunii.</li>
          </ul>

          <h3>Activare opțiune:</h3>
          <ul>
            <li>
              Pentru activarea expediază un SMS la nr. 500 cu textul: <b>4G</b>
            </li>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
          </ul>

          <h3>Dezactivarea opțiune:</h3>

          <ul>
            <li>
              Pentru dezactivare expediază un SMS la nr. 500 cu textul:{' '}
              <b>STOP4G</b>
            </li>
            <li>
              Prin aplicația mobilă „
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              ”
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
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
          <h2>Upload Maxim</h2>
          <p>
            Opțiunea "Upload Maxim" presupune acordarea vitezei de upload de
            5,76 Mbps.
          </p>

          <table className="popup_table">
            <thead>
              <tr>
                <td>Descriere opțiune</td>
                <td>Tarif</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Upload Maxim</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span>20 lei</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Condițiile de utilizare a opţiunii</h3>
          <ul>
            <li>Activarea/dezactivarea se efectuează în orice zi a lunii.</li>
            <li>
              La schimbul de abonament, titular sau migrare opţiunea va fi
              păstrată
            </li>
            <li>
              Opțiunea este disponibilă pentru toţi abonații Moldtelecom,
              deținători de abonamente -&nbsp;telefonie mobilă sau internet
              mobil.
            </li>
            <li>
              Viteza de acces la internet este în funcţie de terminalul
              utilizat.
            </li>
          </ul>
          <h3>Activare opțiune:</h3>
          <ul>
            <li>
              prin aplicația "
              <a href="https://www.moldtelecom.md/ro/personal/My Moldtelecom">
                My Moldtelecom
              </a>
              "
            </li>
            <li>
              Prin meniul USSD, la formare <a href="tel:*500#">*500#</a> pentru
              abonații Postpay și <a href="*200#">*200#</a> pentru utilizatorii
              Prepay și se vor urmări instrucțiunile meniului.
            </li>
            <li>prin cerere depusă la orice reprezentață SA Moldtelecom</li>
          </ul>
        </div>
      </Popup>
    </>
  );
};

export default Popups;
