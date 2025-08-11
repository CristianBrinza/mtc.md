import Navbar from '../../../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../../../components/hero/Hero.tsx';
import styles from './Gaming.module.css';
import { useTranslation } from 'react-i18next';
import Chat from '../../../../components/chat/Chat.tsx';
import Feedback from '../../../../components/feedback/Feedback.tsx';
import MyApp from '../../../../components/app/MyApp.tsx';
import Footer from '../../../../components/footer/Footer.tsx';
import FaqQAV2 from '../../../../components/faqV2/FaqQAV2.tsx';
import FaqV2 from '../../../../components/faqV2/FaqV2.tsx';

import Button from '../../../../components/Button.tsx';
import Slider from 'react-slick';
import Icon from '../../../../components/Icon.tsx';
import Toggle from '../../../../components/toggle/Toggle.tsx';
import Details, {
  DetailsBlock,
} from '../../../../components/details/Details.tsx';
import React, { useMemo, useState } from 'react';
import { trackEvent } from '../../../../initAnalytics.ts';
import Popup from '../../../../components/Popup/Popup.tsx';
import BuyForm from '../../../../components/buy_form/BuyForm.tsx';
import ScrollableWrapper from '../../../../components/Popup/ScrollableWrapper.tsx';

const InfoIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <svg
    onClick={onClick}
    className={styles.info_icon}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8" stroke="black" stroke-opacity="0.2" />
    <line
      x1="10.75"
      y1="10.75"
      x2="10.75"
      y2="14.25"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M10.75 7.75L10.75 8"
      stroke="black"
      stroke-opacity="0.2"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
const OptionsIcon: React.FC = () => (
  <svg
    width="65"
    height="24"
    viewBox="0 0 65 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="41" width="24" height="24" rx="12" fill="#DBE1FF" />
    <path
      d="M53.5 19.5C57.6421 19.5 61 16.1421 61 12C61 7.85786 57.6421 4.5 53.5 4.5C49.3579 4.5 46 7.85786 46 12C46 16.1421 49.3579 19.5 53.5 19.5Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.502 16.4995C55.9872 16.4995 58.002 14.4848 58.002 11.9995C58.002 9.51423 55.9872 7.49951 53.502 7.49951C51.0167 7.49951 49.002 9.51423 49.002 11.9995C49.002 14.4848 51.0167 16.4995 53.502 16.4995Z"
      fill="white"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect x="28" width="24" height="24" rx="12" fill="#D1D8FF" />
    <g clip-path="url(#clip0_13279_16679)">
      <path
        d="M40.5018 17.0285L43.8542 13.6761L42.6809 12.5027L41.3399 13.8437V10.3237H39.6638V13.8437L38.3228 12.5027L37.1495 13.6761L40.5018 17.0285ZM34.6352 8.64752V17.8665H46.3685V8.64752H34.6352ZM34.6352 19.5427C34.1742 19.5427 33.7798 19.3788 33.4518 19.0508C33.1238 18.7228 32.9595 18.3281 32.959 17.8665V7.41132C32.959 7.21576 32.9906 7.02719 33.0537 6.84561C33.1168 6.66402 33.211 6.4964 33.3361 6.34275L34.3837 5.06466C34.5374 4.8691 34.7293 4.7188 34.9595 4.61376C35.1897 4.50872 35.4308 4.45648 35.6828 4.45704H45.3209C45.5723 4.45704 45.8134 4.50956 46.0442 4.6146C46.2749 4.71964 46.4668 4.86966 46.6199 5.06466L47.6676 6.34275C47.7933 6.4964 47.8877 6.66402 47.9508 6.84561C48.014 7.02719 48.0452 7.21576 48.0447 7.41132V17.8665C48.0447 18.3275 47.8807 18.7223 47.5527 19.0508C47.2248 19.3793 46.83 19.5433 46.3685 19.5427H34.6352ZM34.9704 6.97132H46.0333L45.3209 6.13322H35.6828L34.9704 6.97132Z"
        fill="white"
        stroke="#D1D8FF"
        stroke-width="0.32"
      />
    </g>
    <rect x="15" width="24" height="24" rx="12" fill="#BFCAFF" />
    <g clip-path="url(#clip1_13279_16679)">
      <path
        d="M31.6348 7.09262H32.4074V7.86525C32.4074 8.07017 32.4888 8.26669 32.6337 8.41159C32.7786 8.55649 32.9751 8.63787 33.18 8.63787C33.3849 8.63787 33.5814 8.55649 33.7263 8.41159C33.8712 8.26669 33.9526 8.07017 33.9526 7.86525V7.09262H34.7253C34.9302 7.09262 35.1267 7.01122 35.2716 6.86632C35.4165 6.72143 35.4979 6.5249 35.4979 6.31999C35.4979 6.11507 35.4165 5.91855 35.2716 5.77365C35.1267 5.62876 34.9302 5.54736 34.7253 5.54736H33.9526V4.77473C33.9526 4.56981 33.8712 4.37329 33.7263 4.22839C33.5814 4.08349 33.3849 4.00209 33.18 4.00209C32.9751 4.00209 32.7786 4.08349 32.6337 4.22839C32.4888 4.37329 32.4074 4.56981 32.4074 4.77473V5.54736H31.6348C31.4298 5.54736 31.2333 5.62876 31.0884 5.77365C30.9435 5.91855 30.8621 6.11507 30.8621 6.31999C30.8621 6.5249 30.9435 6.72143 31.0884 6.86632C31.2333 7.01122 31.4298 7.09262 31.6348 7.09262ZM23.1358 8.63787V16.3642C23.1358 16.5691 23.2172 16.7657 23.3621 16.9106C23.507 17.0554 23.7035 17.1368 23.9084 17.1368C24.1133 17.1368 24.3099 17.0554 24.4548 16.9106C24.5997 16.7657 24.681 16.5691 24.681 16.3642V8.63787C24.681 8.43297 24.5997 8.23645 24.4548 8.09155C24.3099 7.94665 24.1133 7.86525 23.9084 7.86525C23.7035 7.86525 23.507 7.94665 23.3621 8.09155C23.2172 8.23645 23.1358 8.43297 23.1358 8.63787ZM34.4162 10.1832C34.3168 10.2034 34.2223 10.2431 34.1382 10.2999C34.0541 10.3567 33.982 10.4295 33.926 10.5141C33.87 10.5988 33.8313 10.6937 33.812 10.7933C33.7927 10.893 33.7933 10.9954 33.8136 11.0949C34.1152 12.5599 33.9364 14.0832 33.3037 15.4386C32.671 16.794 31.6181 17.9093 30.3013 18.6188C28.9845 19.3284 27.474 19.5944 25.994 19.3774C24.514 19.1604 23.1434 18.4719 22.0858 17.4143C21.0281 16.3565 20.3396 14.986 20.1226 13.506C19.9056 12.026 20.1717 10.5155 20.8812 9.19869C21.5907 7.88191 22.706 6.829 24.0614 6.19628C25.4168 5.56356 26.9401 5.38477 28.4052 5.68643C28.6101 5.72741 28.8229 5.68532 28.9967 5.5694C29.1706 5.45348 29.2913 5.27324 29.3323 5.06832C29.3733 4.86341 29.3312 4.65061 29.2153 4.47673C29.0993 4.30286 28.9191 4.18215 28.7142 4.14117C28.1488 4.03582 27.574 3.98921 26.999 4.00209C25.318 4.00209 23.6748 4.50055 22.2772 5.43442C20.8795 6.3683 19.7902 7.69566 19.1469 9.24862C18.5037 10.8016 18.3354 12.5105 18.6633 14.1591C18.9912 15.8078 19.8007 17.3221 20.9893 18.5107C22.1779 19.6993 23.6923 20.5087 25.3409 20.8367C26.9895 21.1646 28.6984 20.9963 30.2514 20.3531C31.8044 19.7098 33.1317 18.6204 34.0656 17.2228C34.9995 15.8252 35.4979 14.182 35.4979 12.501C35.4995 11.9301 35.4426 11.3606 35.3279 10.8013C35.3094 10.7004 35.271 10.6043 35.215 10.5184C35.159 10.4326 35.0864 10.3588 35.0016 10.3012C34.9167 10.2437 34.8212 10.2036 34.7208 10.1833C34.6203 10.1631 34.5168 10.163 34.4162 10.1832ZM26.2263 10.1832V10.9558C26.2297 11.5276 26.4443 12.0779 26.829 12.501C26.4443 12.9242 26.2297 13.4745 26.2263 14.0463V14.8189C26.2263 15.4337 26.4705 16.0233 26.9052 16.458C27.3399 16.8926 27.9295 17.1368 28.5442 17.1368H29.3169C29.9316 17.1368 30.5212 16.8926 30.9558 16.458C31.3905 16.0233 31.6348 15.4337 31.6348 14.8189V14.0463C31.6314 13.4745 31.4167 12.9242 31.0321 12.501C31.4167 12.0779 31.6314 11.5276 31.6348 10.9558V10.1832C31.6348 9.5684 31.3905 8.97885 30.9558 8.54415C30.5212 8.10946 29.9316 7.86525 29.3169 7.86525H28.5442C27.9295 7.86525 27.3399 8.10946 26.9052 8.54415C26.4705 8.97885 26.2263 9.5684 26.2263 10.1832ZM30.0895 14.8189C30.0895 15.0239 30.0081 15.2204 29.8632 15.3653C29.7183 15.5102 29.5218 15.5916 29.3169 15.5916H28.5442C28.3393 15.5916 28.1428 15.5102 27.9979 15.3653C27.853 15.2204 27.7716 15.0239 27.7716 14.8189V14.0463C27.7716 13.8414 27.853 13.6449 27.9979 13.5C28.1428 13.3551 28.3393 13.2737 28.5442 13.2737H29.3169C29.5218 13.2737 29.7183 13.3551 29.8632 13.5C30.0081 13.6449 30.0895 13.8414 30.0895 14.0463V14.8189ZM30.0895 10.1832V10.9558C30.0895 11.1607 30.0081 11.3572 29.8632 11.5021C29.7183 11.647 29.5218 11.7284 29.3169 11.7284H28.5442C28.3393 11.7284 28.1428 11.647 27.9979 11.5021C27.853 11.3572 27.7716 11.1607 27.7716 10.9558V10.1832C27.7716 9.97823 27.853 9.7817 27.9979 9.6368C28.1428 9.49194 28.3393 9.41052 28.5442 9.41052H29.3169C29.5218 9.41052 29.7183 9.49194 29.8632 9.6368C30.0081 9.7817 30.0895 9.97823 30.0895 10.1832Z"
        fill="white"
      />
    </g>
    <rect width="24" height="24" rx="12" fill="#ADBBFF" />
    <g clip-path="url(#clip2_13279_16679)">
      <path
        d="M10.0732 8.3113C10.2401 8.72307 10.5638 9.05167 10.973 9.22476C11.1756 9.31051 11.3931 9.35547 11.6131 9.35713C11.8331 9.35878 12.0513 9.31713 12.2552 9.23446C12.4591 9.15178 12.6447 9.02979 12.8014 8.87541C12.9581 8.72101 13.083 8.53726 13.1687 8.33465C13.2544 8.13203 13.2994 7.91451 13.301 7.69451C13.3027 7.47451 13.261 7.25634 13.1783 7.05245C12.507 5.37398 10.4928 4.53475 8.81433 5.20614C6.38056 6.21321 4.78601 8.3113 4.28247 10.6612C3.98424 10.7854 3.72946 10.9952 3.55024 11.264C3.37102 11.5328 3.27539 11.8487 3.27539 12.1718C3.27539 12.4949 3.37102 12.8107 3.55024 13.0795C3.72946 13.3483 3.98424 13.5581 4.28247 13.6824C4.69373 15.6086 5.83718 17.2997 7.47157 18.3989M15.9478 18.3821C17.6263 17.2911 18.7173 15.5287 19.1369 13.6824C19.4207 13.545 19.66 13.3304 19.8275 13.0632C19.9949 12.796 20.0837 12.4871 20.0837 12.1718C20.0837 11.8565 19.9949 11.5475 19.8275 11.2804C19.66 11.0132 19.4207 10.7986 19.1369 10.6612C18.6955 9.01907 17.7576 7.55353 16.4514 6.46498M8.31078 12.1718H8.31916M15.0247 12.1718H15.033"
        stroke="white"
        stroke-width="1.67846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6668 17.2073C12.5938 17.2073 13.3452 16.4558 13.3452 15.5288C13.3452 14.6018 12.5938 13.8503 11.6668 13.8503C10.7398 13.8503 9.98828 14.6018 9.98828 15.5288C9.98828 16.4558 10.7398 17.2073 11.6668 17.2073Z"
        stroke="white"
        stroke-width="1.67846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99035 15.5288H9.57074C9.01429 15.5288 8.48063 15.7498 8.08714 16.1433C7.69369 16.5368 7.47266 17.0704 7.47266 17.6269V18.4661C7.47266 19.0226 7.69369 19.5562 8.08714 19.9497C8.48063 20.3432 9.01429 20.5642 9.57074 20.5642H13.7669C14.3233 20.5642 14.857 20.3432 15.2505 19.9497C15.6439 19.5562 15.865 19.0226 15.865 18.4661V17.6269C15.865 17.0704 15.6439 16.5368 15.2505 16.1433C14.857 15.7498 14.3233 15.5288 13.7669 15.5288H13.3473"
        stroke="white"
        stroke-width="1.67846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_13279_16679">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(32.5 4)"
        />
      </clipPath>
      <clipPath id="clip1_13279_16679">
        <rect
          width="17"
          height="17"
          fill="white"
          transform="translate(18.5 4)"
        />
      </clipPath>
      <clipPath id="clip2_13279_16679">
        <rect
          width="19"
          height="17.5385"
          fill="white"
          transform="translate(2 4)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function Gaming() {
  const { t } = useTranslation();

  const breadcrumbItems = [{ label: 'Promo', url: ' ' }, { label: 'Gaming' }];

  const [activeTVConfig_3, setActiveTVConfig_3] = useState<string>('smart_tv');
  const [activeSelectedTV_3, setActiveSelectedTV_3] =
    useState<string>('univers');
  const [activeTV_Select_3, setActiveTV_Select_3] = useState<boolean>(false);
  const [activeMesh_3, setActiveMesh_3] = useState<boolean>(false);
  const [activeSafeweb_3, setActiveSafeweb_3] = useState<boolean>(false);
  const [activeTelephone_3, setActiveTelephone_3] = useState<boolean>(false);
  const [numberTVConfig_3, setNumberTVConfig_3] = useState<number>(1);
  const [selectedDevice_3_3, setSelectedDevice_3_3] =
    useState<string>('1780226');

  function calculateTotal_3(
    mesh: boolean,
    safeweb: boolean,
    telephone: boolean,
    tvConfig: string,
    selectedTV: string,
    numberTV: number
  ): number {
    const base = 300;
    const meshVal = mesh ? 49 : 0;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    let tvVal = 0;
    if (tvConfig === 'smart_tv') {
      tvVal = selectedTV === 'premier' ? 60 : selectedTV === 'univers' ? 70 : 0;
    } else if (tvConfig === 'tv_box') {
      tvVal = selectedTV === 'premier' ? 70 : selectedTV === 'univers' ? 80 : 0;
    }

    const extraTV =
      numberTV > 1 ? (numberTV - 1) * (tvConfig === 'smart_tv' ? 20 : 30) : 0;

    return base + meshVal + safeVal + telVal + tvVal + extraTV;
  }

  const total_3 = useMemo(
    () =>
      calculateTotal_3(
        activeMesh_3,
        activeSafeweb_3,
        activeTelephone_3,
        activeTVConfig_3,
        activeSelectedTV_3,
        numberTVConfig_3
      ),
    [
      activeMesh_3,
      activeSafeweb_3,
      activeTelephone_3,
      activeTVConfig_3,
      activeSelectedTV_3,
      numberTVConfig_3,
    ]
  );

  // and now your “other” total, for whichever config ≠ '1':
  useMemo(
    () =>
      calculateTotal_3(
        activeMesh_3,
        activeSafeweb_3,
        activeTelephone_3,
        activeTVConfig_3,
        activeSelectedTV_3,
        numberTVConfig_3
      ),
    [
      activeMesh_3,
      activeSafeweb_3,
      activeTelephone_3,
      activeTVConfig_3,
      activeSelectedTV_3,
      numberTVConfig_3,
    ]
  );
  const [activeTVConfig_4, setActiveTVConfig_4] = useState<string>('smart_tv');
  const [activeSelectedTV_4, setActiveSelectedTV_4] =
    useState<string>('univers');
  const [activeTV_Select_4, setActiveTV_Select_4] = useState<boolean>(false);
  const [activeSafeweb_4, setActiveSafeweb_4] = useState<boolean>(false);
  const [activeTelephone_4, setActiveTelephone_4] = useState<boolean>(false);
  const [numberTVConfig_4, setNumberTVConfig_4] = useState<number>(1);
  const [selectedDevice_4_4, setSelectedDevice_4_4] =
    useState<string>('1780226');

  function calculateTotal_4(
    safeweb: boolean,
    telephone: boolean,
    tvConfig: string,
    selectedTV: string,
    numberTV: number
  ): number {
    const base = 599;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    let tvVal = 0;
    if (tvConfig === 'smart_tv') {
      tvVal = selectedTV === 'premier' ? 60 : selectedTV === 'univers' ? 70 : 0;
    } else if (tvConfig === 'tv_box') {
      tvVal = selectedTV === 'premier' ? 70 : selectedTV === 'univers' ? 80 : 0;
    }

    const extraTV =
      numberTV > 1 ? (numberTV - 1) * (tvConfig === 'smart_tv' ? 20 : 30) : 0;

    return base + safeVal + telVal + tvVal + extraTV;
  }

  const total_4 = useMemo(
    () =>
      calculateTotal_4(
        activeSafeweb_4,
        activeTelephone_4,
        activeTVConfig_4,
        activeSelectedTV_4,
        numberTVConfig_4
      ),
    [
      activeSafeweb_4,
      activeTelephone_4,
      activeTVConfig_4,
      activeSelectedTV_4,
      numberTVConfig_4,
    ]
  );

  // and now your “other” total, for whichever config ≠ '1':
  useMemo(
    () =>
      calculateTotal_4(
        activeSafeweb_4,
        activeTelephone_4,
        activeTVConfig_4,
        activeSelectedTV_4,
        numberTVConfig_4
      ),
    [
      activeSafeweb_4,
      activeTelephone_4,
      activeTVConfig_4,
      activeSelectedTV_4,
      numberTVConfig_4,
    ]
  );
  const [activeTVConfig_5, setActiveTVConfig_5] = useState<string>('smart_tv');
  const [activeSelectedTV_5, setActiveSelectedTV_5] =
    useState<string>('univers');
  const [activeTV_Select_5, setActiveTV_Select_5] = useState<boolean>(false);
  const [activeSafeweb_5, setActiveSafeweb_5] = useState<boolean>(false);
  const [activeTelephone_5, setActiveTelephone_5] = useState<boolean>(false);
  const [numberTVConfig_5, setNumberTVConfig_5] = useState<number>(1);
  const [selectedDevice_5_5, setSelectedDevice_5_5] =
    useState<string>('1780226');

  function calculateTotal_5(
    safeweb: boolean,
    telephone: boolean,
    tvConfig: string,
    selectedTV: string,
    numberTV: number
  ): number {
    const base = 799;
    const safeVal = safeweb ? 15 : 0;
    const telVal = telephone ? 10 : 0;

    let tvVal = 0;
    if (tvConfig === 'smart_tv') {
      tvVal = selectedTV === 'premier' ? 60 : selectedTV === 'univers' ? 70 : 0;
    } else if (tvConfig === 'tv_box') {
      tvVal = selectedTV === 'premier' ? 70 : selectedTV === 'univers' ? 80 : 0;
    }

    const extraTV =
      numberTV > 1 ? (numberTV - 1) * (tvConfig === 'smart_tv' ? 20 : 30) : 0;

    return base + safeVal + telVal + tvVal + extraTV;
  }

  const total_5 = useMemo(
    () =>
      calculateTotal_5(
        activeSafeweb_5,
        activeTelephone_5,
        activeTVConfig_5,
        activeSelectedTV_5,
        numberTVConfig_5
      ),
    [
      activeSafeweb_5,
      activeTelephone_5,
      activeTVConfig_5,
      activeSelectedTV_5,
      numberTVConfig_5,
    ]
  );

  // and now your “other” total, for whichever config ≠ '1':
  useMemo(
    () =>
      calculateTotal_5(
        activeSafeweb_5,
        activeTelephone_5,
        activeTVConfig_5,
        activeSelectedTV_5,
        numberTVConfig_5
      ),
    [
      activeSafeweb_5,
      activeTelephone_5,
      activeTVConfig_5,
      activeSelectedTV_5,
      numberTVConfig_5,
    ]
  );
  const [popupType, setPopupType] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [activePopupConfig, setActivePopupConfig] = useState<string>('');
  const [activePopupSubConfig, setActivePopupSubConfig] = useState<string>('');
  const [activeBuyConfig, setActiveBuyConfig] = useState<string>('');
  const handlePopupClose = () => {
    setActivePopup(null);
    setSubmitted(false);
    setError(false);
    setPopupType(false);
  };

  const setPopup = (id: string, name: string, subname: string) => {
    if (id == '0') {
      trackEvent('gaming_device_buy', `${name} ${subname}`);
    }
    setActivePopup('1934567');
    setActivePopupConfig(name);
    setActivePopupSubConfig(subname);
    setActiveBuyConfig(
      id === '3'
        ? ` (Gaming set - Internet + TV) Double – ${name} ${subname} (tip - ${activeTVConfig_3}, nr - ${numberTVConfig_3} tv), ${activeMesh_3 ? '+ Wi‑Fi Mesh, ' : ''}${activeSafeweb_3 ? '+ Safe‑Web, ' : ''}${activeTelephone_3 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
        : id === '4'
          ? ` (Gaming set - Internet + TV) Double – ${name} ${subname} (tip - ${activeTVConfig_4}, nr - ${numberTVConfig_4} tv), ${activeSafeweb_4 ? '+ Safe‑Web, ' : ''}${activeTelephone_4 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
          : id === '5'
            ? ` (Gaming set - Internet + TV) Double – ${name} ${subname} (tip - ${activeTVConfig_5}, nr - ${numberTVConfig_5} tv), ${activeSafeweb_5 ? '+ Safe‑Web, ' : ''}${activeTelephone_5 ? '+ Telefonie Fixa, ' : ''} (Oferta Back-2-School 2025)`
            : ''
    );
  };

  const trackToggle =
    (event: string, setter: (checked: boolean) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.checked);
      trackEvent(event);
    };

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Chat />
      <Feedback />
      <Breadcrumb items={breadcrumbItems} />

      <Hero color="#F7F7F7" classname={styles.hero}>
        <div className={styles.hero_img_block}>
          <img
            className={styles.hero_img}
            src={`/images/landings/79934311${t('lang')}.webp`}
            alt={t('wifi_plus.hero.alt')}
          />
          <img
            className={styles.hero_img_tablet}
            src={`/images/landings/88678012${t('lang')}.png`}
            alt={t('wifi_plus.hero.alt')}
          />
        </div>
      </Hero>

      <div className={`title_3 ${styles.title_main}`}>
        <span>
          Acum ai cele mai tari console, pentru experienta ideala in gaming
        </span>
      </div>

      <div className={styles.why}>
        <div className={styles.why_card}>
          <Icon
            type={'speed'}
            color={'var(--theme_primary_color_blue_2)'}
            size="48px"
          />
          <div className={styles.why_card_text}>
            <div className={styles.why_card_title}>Viteza incredibila</div>
            <div className={styles.why_card_text_span}>
              {' '}
              Performanță constantă pe multiple dispozitive, fără pierderi de
              viteză sau instabilitate.
            </div>
          </div>
        </div>
        <div className={styles.why_card}>
          <Icon
            type={'modem'}
            color={'var(--theme_primary_color_blue_2)'}
            size="48px"
          />
          <div className={styles.why_card_text}>
            <div className={styles.why_card_title}>Acoperire toata casa</div>
            <div className={styles.why_card_text_span}>
              Wi-Fi de ultima generatie si Tehnologie XGS-PON cu arhitectura
              pasivă și eficientă
            </div>
          </div>
        </div>
        <div className={styles.why_card}>
          <Icon
            type={'gaming'}
            color={'var(--theme_primary_color_blue_2)'}
            size="48px"
          />
          <div className={styles.why_card_text}>
            <div className={styles.why_card_title}>Console & Gaming</div>
            <div className={styles.why_card_text_span}>
              Oferte incredile la Xbox sau Playstation cu 1 leu la conenctare
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info_block}>
        <div className={styles.info_block_text}>
          <div>
            <div className={styles.info_block_text_title}>
              Cu mare viteza, <br />
              vin marile victorii
            </div>
            Acum ai viteze de pana la <b>5.5Gbps</b> si console la 1 leu sau la
            pret special doar la Moldtelecom.
            <br />
            Gaming-ul de performata nu a fost niciodata mai aproape. Nu rata
            ocazia de a fi parte a progresului, <b>fără laguri</b>,{' '}
            <b>fără întreruperi</b>, <b>ultra-rapid</b>.
          </div>
          <Button
            to="https://mtc.md/my-mtc"
            color={'var(--theme_primary_color_blue_4)'}
            bgcolor={'var(--theme_primary_color_blue_3)'}
            border={'var(--theme_primary_color_blue_3)'}
            hover_border={'var(--theme_primary_color_blue_2)'}
            hover_bgcolor={'var(--theme_primary_color_blue_2)'}
            icon={'arrow_right'}
          >
            Vezi abonamentele
          </Button>
        </div>
        <img
          className={styles.info_block_img}
          src="/images/landings/12271183.webp"
          alt="Moldtelecom"
        />
      </div>

      <div className={`title_3 ${styles.title_main}`}>
        <span>{t('combo_home.choose_best_subscription')}</span>
      </div>

      <Slider {...settings} className={styles.abonaments}>
        <div className={styles.abonaments_block}>
          <div className={styles.abonaments_block_inside}>
            <div className={styles.abonaments_block_inside_pretitle}>
              {t('navbar.internet_tv')}
            </div>
            <div className={styles.abonaments_block_inside_title}>
              1000 Mbps
            </div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('combo_home.router_wifi6_included')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle
                  checked={activeMesh_3}
                  onChange={trackToggle('gaming_mesh_toggle', setActiveMesh_3)}
                />
              </div>
              <span>
                x1 <b>Mesh Wi-Fi</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (49 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280110')} />
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle
                  checked={activeSafeweb_3}
                  onChange={trackToggle(
                    'gaming_safeweb_toggle',
                    setActiveSafeweb_3
                  )}
                />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>
            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_tv_chose} ${activeTV_Select_3 && styles.abonaments_block_inside_tv_chose_active}`}
            >
              <div
                onClick={() => {
                  setActiveSelectedTV_3('premier');
                  setActiveTV_Select_3(false);
                }}
                className={`${styles.abonaments_block_inside_tv_chose_select} ${styles.abonaments_block_inside_tv_chose_select_left} ${activeSelectedTV_3 === 'premier' && styles.abonaments_block_inside_tv_chose_select_active}`}
              >
                {t('double.premier_tv')}
              </div>
              <div
                onClick={() => {
                  setActiveSelectedTV_3('univers');
                  setActiveTV_Select_3(false);
                }}
                className={`${styles.abonaments_block_inside_tv_chose_select} ${styles.abonaments_block_inside_tv_chose_select_right} ${activeSelectedTV_3 === 'univers' && styles.abonaments_block_inside_tv_chose_select_active}`}
              >
                {t('double.univers_tv')}
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_title} ${styles.abonaments_block_inside_title_tv}   ${activeTV_Select_3 && styles.abonaments_block_inside_title_tv_hide}`}
            >
              <span>
                {activeSelectedTV_3 === 'premier'
                  ? t('double.premier_tv')
                  : activeSelectedTV_3 === 'univers' && t('double.univers_tv')}
              </span>
              <Icon
                className={styles.abonaments_block_inside_title_tv_svg}
                type={'retry'}
                size={'24px'}
                color={'var(--theme_primary_color_blue_2)'}
                onClick={() => setActiveTV_Select_3(true)}
              />
              <InfoIcon onClick={() => setActivePopup('1280111')} />
            </div>
            <div
              className={`${styles.abonaments_block_inside_tv_canale} ${activeTV_Select_3 && styles.abonaments_block_inside_title_tv_hide}`}
            >
              <span>
                {activeSelectedTV_3 === 'premier'
                  ? t('double.premier_tv_channels')
                  : activeSelectedTV_3 === 'univers' &&
                    t('double.univers_tv_channels')}{' '}
              </span>
            </div>

            <div className={styles.tv_config}>
              <div className={styles.tv_config_left}>
                <div
                  className={styles.tv_config_left_t1}
                  onClick={() =>
                    setNumberTVConfig_3(prev => Math.max(1, prev - 1))
                  }
                >
                  -
                </div>
                <div className={styles.tv_config_left_t2}>
                  {numberTVConfig_3} <span>TV</span>
                </div>
                <div
                  className={styles.tv_config_left_t3}
                  onClick={() =>
                    setNumberTVConfig_3(prev => Math.min(3, prev + 1))
                  }
                >
                  +
                </div>
              </div>
              <div className={styles.tv_config_right}>
                <div
                  onClick={() => setActiveTVConfig_3('smart_tv')}
                  className={`${styles.tv_config_right_t1} ${activeTVConfig_3 == 'smart_tv' && styles.tv_config_right_active}`}
                >
                  Smart TV
                </div>
                <div
                  onClick={() => setActiveTVConfig_3('tv_box')}
                  className={`${styles.tv_config_right_t2} ${activeTVConfig_3 == 'tv_box' && styles.tv_config_right_active}`}
                >
                  TV Box
                </div>
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'gift'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
                {/*<Toggle />*/}
              </div>
              <span>
                <b>Arhiva TV</b> inclus{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  ({t('combo_home.gratiut')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280116')} />
            </div>

            <div className={styles.abonaments_block_tv_free}>
              <OptionsIcon />

              <span onClick={() => setActivePopup('1280117')}>
                {' '}
                {t('combo_home.more_options')}
              </span>
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle
                  checked={activeTelephone_3}
                  onChange={trackToggle(
                    'gaming_telephone_toggle',
                    setActiveTelephone_3
                  )}
                />
              </div>
              <span>
                <b>{t('combo_home.telefonie_fixa')}</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280119')} />
            </div>

            <div className={styles.abonaments_block_inside_info_line}>
              <select
                className={`${styles.popup_regio_select} ${styles.calculaor_select}`}
                value={selectedDevice_3_3}
                onChange={e => setSelectedDevice_3_3(e.target.value)}
              >
                <option value={'1780226'}>
                  <b>Xbox Series S </b> (la 1 leu)&nbsp;
                </option>

                <option value={'1780227'}>
                  <b>PlayStation 5 </b> (la 1 leu)&nbsp;
                </option>
              </select>
              {selectedDevice_3_3 != 'no_device' && (
                <InfoIcon onClick={() => setActivePopup(selectedDevice_3_3)} />
              )}
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.mobile_carousell_price}>
                <div>
                  <div>{total_3}</div>
                </div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span> </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              id="combo_buy+3"
              onClick={() =>
                setPopup(
                  '3',
                  t('navbar.internet_tv'),
                  `(1000Mbps + ${
                    activeSelectedTV_3 == 'premier'
                      ? t('double.premier_tv')
                      : activeSelectedTV_3 == 'univers' &&
                        t('double.univers_tv')
                  })`
                )
              }
              color="#fff"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              hover_color="var(--theme_primary_color_blue_4)"
              icon="arrow_right"
              className={styles.mobile_carousell_block_btn_buy}
            >
              {t('order_now')}
            </Button>
          </div>
        </div>
        <div className={styles.abonaments_block}>
          <div className={styles.abonaments_block_inside}>
            {/*<div className={styles.mobile_carousell_tags}>*/}
            {/*  /!*<div className={styles.mobile_carousell_tag}>*!/*/}
            {/*  /!*  New*!/*/}
            {/*  /!*</div>*!/*/}
            {/*  <div*/}
            {/*    className={styles.mobile_carousell_tag}*/}
            {/*    style={{ background: '#E7EBFF' }}*/}
            {/*  >*/}
            {/*    Budget*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.abonaments_block_inside_pretitle}>
              {t('navbar.internet_tv')}
            </div>
            <div className={styles.abonaments_block_inside_title}>2.1 Gbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('combo_home.router_wifi6_included')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'wifi'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              <span>
                x1 <b>Mesh Wi-Fi</b> {t('combo_home.inclus')}{' '}
                <span
                  className={styles.abonaments_block_inside_subtitle_small}
                  style={{ textDecoration: 'line-through' }}
                >
                  (49 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280110')} />
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle
                  checked={activeSafeweb_4}
                  onChange={trackToggle(
                    'gaming_safeweb_toggle',
                    setActiveSafeweb_4
                  )}
                />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>
            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_tv_chose} ${activeTV_Select_4 && styles.abonaments_block_inside_tv_chose_active}`}
            >
              <div
                onClick={() => {
                  setActiveSelectedTV_4('premier');
                  setActiveTV_Select_4(false);
                }}
                className={`${styles.abonaments_block_inside_tv_chose_select} ${styles.abonaments_block_inside_tv_chose_select_left} ${activeSelectedTV_4 === 'premier' && styles.abonaments_block_inside_tv_chose_select_active}`}
              >
                {t('double.premier_tv')}
              </div>
              <div
                onClick={() => {
                  setActiveSelectedTV_4('univers');
                  setActiveTV_Select_4(false);
                }}
                className={`${styles.abonaments_block_inside_tv_chose_select} ${styles.abonaments_block_inside_tv_chose_select_right} ${activeSelectedTV_4 === 'univers' && styles.abonaments_block_inside_tv_chose_select_active}`}
              >
                {t('double.univers_tv')}
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_title} ${styles.abonaments_block_inside_title_tv}   ${activeTV_Select_4 && styles.abonaments_block_inside_title_tv_hide}`}
            >
              <span>
                {activeSelectedTV_4 === 'premier'
                  ? t('double.premier_tv')
                  : activeSelectedTV_4 === 'univers' && t('double.univers_tv')}
              </span>
              <Icon
                className={styles.abonaments_block_inside_title_tv_svg}
                type={'retry'}
                size={'24px'}
                color={'var(--theme_primary_color_blue_2)'}
                onClick={() => setActiveTV_Select_4(true)}
              />
              <InfoIcon onClick={() => setActivePopup('1280111')} />
            </div>
            <div
              className={`${styles.abonaments_block_inside_tv_canale} ${activeTV_Select_4 && styles.abonaments_block_inside_title_tv_hide}`}
            >
              <span>
                {activeSelectedTV_4 === 'premier'
                  ? t('double.premier_tv_channels')
                  : activeSelectedTV_4 === 'univers' &&
                    t('double.univers_tv_channels')}{' '}
              </span>
            </div>

            <div className={styles.tv_config}>
              <div className={styles.tv_config_left}>
                <div
                  className={styles.tv_config_left_t1}
                  onClick={() =>
                    setNumberTVConfig_4(prev => Math.max(1, prev - 1))
                  }
                >
                  -
                </div>
                <div className={styles.tv_config_left_t2}>
                  {numberTVConfig_4} <span>TV</span>
                </div>
                <div
                  className={styles.tv_config_left_t3}
                  onClick={() =>
                    setNumberTVConfig_4(prev => Math.min(3, prev + 1))
                  }
                >
                  +
                </div>
              </div>
              <div className={styles.tv_config_right}>
                <div
                  onClick={() => setActiveTVConfig_4('smart_tv')}
                  className={`${styles.tv_config_right_t1} ${activeTVConfig_4 == 'smart_tv' && styles.tv_config_right_active}`}
                >
                  Smart TV
                </div>
                <div
                  onClick={() => setActiveTVConfig_4('tv_box')}
                  className={`${styles.tv_config_right_t2} ${activeTVConfig_4 == 'tv_box' && styles.tv_config_right_active}`}
                >
                  TV Box
                </div>
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'gift'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
                {/*<Toggle />*/}
              </div>
              <span>
                <b>Arhiva TV</b> inclus{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  ({t('combo_home.gratiut')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280116')} />
            </div>

            <div className={styles.abonaments_block_tv_free}>
              <OptionsIcon />

              <span onClick={() => setActivePopup('1280117')}>
                {' '}
                {t('combo_home.more_options')}
              </span>
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle
                  checked={activeTelephone_4}
                  onChange={trackToggle(
                    'gaming_telephone_toggle',
                    setActiveTelephone_4
                  )}
                />
              </div>
              <span>
                <b>{t('combo_home.telefonie_fixa')}</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280119')} />
            </div>

            <div className={styles.abonaments_block_inside_info_line}>
              <select
                className={`${styles.popup_regio_select} ${styles.calculaor_select}`}
                value={selectedDevice_4_4}
                onChange={e => setSelectedDevice_4_4(e.target.value)}
              >
                <option value={'1780226'}>
                  <b>Xbox Series S </b> (la 1 leu)&nbsp;
                </option>

                <option value={'1780227'}>
                  <b>PlayStation 5 </b> (la 1 leu)&nbsp;
                </option>
              </select>
              {selectedDevice_4_4 != 'no_device' && (
                <InfoIcon onClick={() => setActivePopup(selectedDevice_4_4)} />
              )}
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.mobile_carousell_price}>
                <div>
                  <div>{total_4}</div>
                </div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span> </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              id="combo_buy+4"
              onClick={() =>
                setPopup(
                  '4',
                  t('navbar.internet_tv'),
                  `(2.1Gbps + ${
                    activeSelectedTV_4 == 'premier'
                      ? t('double.premier_tv')
                      : activeSelectedTV_4 == 'univers' &&
                        t('double.univers_tv')
                  })`
                )
              }
              color="#fff"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              hover_color="var(--theme_primary_color_blue_4)"
              icon="arrow_right"
              className={styles.mobile_carousell_block_btn_buy}
            >
              {t('order_now')}
            </Button>
          </div>
        </div>
        <div className={styles.abonaments_block}>
          <div className={styles.abonaments_block_inside}>
            {/*<div className={styles.mobile_carousell_tags}>*/}
            {/*  /!*<div className={styles.mobile_carousell_tag}>*!/*/}
            {/*  /!*  New*!/*/}
            {/*  /!*</div>*!/*/}
            {/*  <div*/}
            {/*    className={styles.mobile_carousell_tag}*/}
            {/*    style={{ background: '#E7EBFF' }}*/}
            {/*  >*/}
            {/*    Budget*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.abonaments_block_inside_pretitle}>
              {t('navbar.internet_tv')}
            </div>
            <div className={styles.abonaments_block_inside_title}>5.5 Gbps</div>

            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'modem'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
              </div>
              {t('combo_home.router_wifi6_included')}
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'wifi'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
                {/*<Toggle*/}
                {/*  checked={activeMesh_4}*/}
                {/*  onChange={trackToggle('double_mesh_toggle', setActiveMesh_4)}*/}
                {/*/>*/}
              </div>
              <span>
                x2 <b>Mesh Wi-Fi</b> {t('combo_home.inclus')}{' '}
                <span
                  className={styles.abonaments_block_inside_subtitle_small}
                  style={{ textDecoration: 'line-through' }}
                >
                  (49 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280110')} />
            </div>
            <div className={styles.abonaments_block_inside_subtitle}>
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                {/*<Icon*/}
                {/*  type={'empty'}*/}
                {/*  color={'var(--theme_primary_color_blue_2)'}*/}
                {/*/>*/}
                <Toggle
                  checked={activeSafeweb_5}
                  onChange={trackToggle(
                    'double_safeweb_toggle',
                    setActiveSafeweb_5
                  )}
                />
              </div>
              <span>
                <b>Safe-Web</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (15 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280112')} />
            </div>
            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_tv_chose} ${activeTV_Select_5 && styles.abonaments_block_inside_tv_chose_active}`}
            >
              <div
                onClick={() => {
                  setActiveSelectedTV_5('premier');
                  setActiveTV_Select_5(false);
                }}
                className={`${styles.abonaments_block_inside_tv_chose_select} ${styles.abonaments_block_inside_tv_chose_select_left} ${activeSelectedTV_5 === 'premier' && styles.abonaments_block_inside_tv_chose_select_active}`}
              >
                {t('double.premier_tv')}
              </div>
              <div
                onClick={() => {
                  setActiveSelectedTV_5('univers');
                  setActiveTV_Select_5(false);
                }}
                className={`${styles.abonaments_block_inside_tv_chose_select} ${styles.abonaments_block_inside_tv_chose_select_right} ${activeSelectedTV_5 === 'univers' && styles.abonaments_block_inside_tv_chose_select_active}`}
              >
                {t('double.univers_tv')}
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_title} ${styles.abonaments_block_inside_title_tv}   ${activeTV_Select_5 && styles.abonaments_block_inside_title_tv_hide}`}
            >
              <span>
                {activeSelectedTV_5 === 'premier'
                  ? t('double.premier_tv')
                  : activeSelectedTV_5 === 'univers' && t('double.univers_tv')}
              </span>
              <Icon
                className={styles.abonaments_block_inside_title_tv_svg}
                type={'retry'}
                size={'24px'}
                color={'var(--theme_primary_color_blue_2)'}
                onClick={() => setActiveTV_Select_5(true)}
              />
              <InfoIcon onClick={() => setActivePopup('1280111')} />
            </div>
            <div
              className={`${styles.abonaments_block_inside_tv_canale} ${activeTV_Select_5 && styles.abonaments_block_inside_title_tv_hide}`}
            >
              <span>
                {activeSelectedTV_5 === 'premier'
                  ? t('double.premier_tv_channels')
                  : activeSelectedTV_5 === 'univers' &&
                    t('double.univers_tv_channels')}{' '}
              </span>
            </div>

            <div className={styles.tv_config}>
              <div className={styles.tv_config_left}>
                <div
                  className={styles.tv_config_left_t1}
                  onClick={() =>
                    setNumberTVConfig_5(prev => Math.max(1, prev - 1))
                  }
                >
                  -
                </div>
                <div className={styles.tv_config_left_t2}>
                  {numberTVConfig_5} <span>TV</span>
                </div>
                <div
                  className={styles.tv_config_left_t3}
                  onClick={() =>
                    setNumberTVConfig_5(prev => Math.min(3, prev + 1))
                  }
                >
                  +
                </div>
              </div>
              <div className={styles.tv_config_right}>
                <div
                  onClick={() => setActiveTVConfig_5('smart_tv')}
                  className={`${styles.tv_config_right_t1} ${activeTVConfig_5 == 'smart_tv' && styles.tv_config_right_active}`}
                >
                  Smart TV
                </div>
                <div
                  onClick={() => setActiveTVConfig_5('tv_box')}
                  className={`${styles.tv_config_right_t2} ${activeTVConfig_5 == 'tv_box' && styles.tv_config_right_active}`}
                >
                  TV Box
                </div>
              </div>
            </div>
            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_icon}>
                <Icon
                  type={'gift'}
                  color={'var(--theme_primary_color_blue_2)'}
                />
                {/*<Toggle />*/}
              </div>
              <span>
                <b>Arhiva TV</b> inclus{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  ({t('combo_home.gratiut')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280116')} />
            </div>

            <div className={styles.abonaments_block_tv_free}>
              <OptionsIcon />

              <span onClick={() => setActivePopup('1280117')}>
                {' '}
                {t('combo_home.more_options')}
              </span>
            </div>

            <div className={styles.abonaments_block_inside_line}></div>

            <div
              className={`${styles.abonaments_block_inside_subtitle} ${styles.abonaments_block_inside_subtitle_tv}`}
            >
              <div className={styles.abonaments_block_inside_subtitle_toggle}>
                <Toggle
                  checked={activeTelephone_5}
                  onChange={trackToggle(
                    'double_telephone_toggle',
                    setActiveTelephone_5
                  )}
                />
              </div>
              <span>
                <b>{t('combo_home.telefonie_fixa')}</b>
                {/*inclus*/}{' '}
                <span className={styles.abonaments_block_inside_subtitle_small}>
                  (10 {t('combo_home.lei_luna')})
                </span>
              </span>
              <InfoIcon onClick={() => setActivePopup('1280119')} />
            </div>

            <div className={styles.abonaments_block_inside_info_line}>
              <select
                className={`${styles.popup_regio_select} ${styles.calculaor_select}`}
                value={selectedDevice_5_5}
                onChange={e => setSelectedDevice_5_5(e.target.value)}
              >
                <option value={'1780226'}>
                  <b>Xbox Series S </b> (la 1 leu)&nbsp;
                </option>

                <option value={'1780227'}>
                  <b>PlayStation 5 </b> (la 1 leu)&nbsp;
                </option>
              </select>
              {selectedDevice_5_5 != 'no_device' && (
                <InfoIcon onClick={() => setActivePopup(selectedDevice_5_5)} />
              )}
            </div>

            <div className={styles.wifi_carousell_block_inside_btns}>
              <div className={styles.mobile_carousell_price}>
                <div>
                  <div>{total_5}</div>
                </div>
                <div>
                  <div className={styles.mobile_carousell_price_valuta}>
                    {t('lei_luna')}
                  </div>
                  <div className={styles.mobile_carousell_price_old}>
                    <span> </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              id="combo_buy+5"
              onClick={() =>
                setPopup(
                  '5',
                  t('navbar.internet_tv'),
                  `(5.5Gbps + ${
                    activeSelectedTV_4 == 'premier'
                      ? t('double.premier_tv')
                      : activeSelectedTV_4 == 'univers' &&
                        t('double.univers_tv')
                  })`
                )
              }
              color="#fff"
              bgcolor="var(--theme_primary_color_blue_4)"
              border="var(--theme_primary_color_blue_4)"
              hover_border="var(--theme_primary_color_blue_2)"
              hover_bgcolor="var(--theme_primary_color_blue_2)"
              hover_color="var(--theme_primary_color_blue_4)"
              icon="arrow_right"
              className={styles.mobile_carousell_block_btn_buy}
            >
              {t('order_now')}
            </Button>
          </div>
        </div>
      </Slider>

      <Details trackPrefix="gaming">
        <DetailsBlock title={t('combo_home.conditii_1.title')}>
          <ul>
            <li>{t('combo_home.conditii_1.item_1')}</li>
            <li>{t('combo_home.conditii_1.item_2')}</li>
            <li>{t('combo_home.conditii_1.item_3')}</li>
            <li>{t('combo_home.conditii_1.item_4')}</li>
            <li>{t('combo_home.conditii_1.item_5')}</li>
            <li>{t('combo_home.conditii_1.item_6')}</li>
            <li>{t('combo_home.conditii_1.item_7')}</li>
            <li>{t('combo_home.conditii_1.item_8')}</li>
            <li>{t('combo_home.conditii_1.item_9')}</li>
          </ul>
        </DetailsBlock>
        <DetailsBlock title={t('combo_home.conditii_3.title')}>
          <ul>
            <li>{t('combo_home.conditii_3.item_1')}</li>
            <li>{t('combo_home.conditii_3.item_2')}</li>
            <li>{t('combo_home.conditii_3.item_3')}</li>
            <li>
              {t('combo_home.conditii_3.item_4')
                .split('\n')
                .map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
            </li>
            <li>{t('combo_home.conditii_3.item_5')}</li>
            <li>{t('combo_home.conditii_3.item_6')}</li>
            <li>{t('combo_home.conditii_3.item_7')}</li>
          </ul>
        </DetailsBlock>
      </Details>

      <MyApp style_type={'blue_white'} className={styles.myapp} />
      <FaqV2 max_faq={5}>
        <FaqQAV2
          id_faq="112089314"
          question={t('combo_home.faq.install_duration_question')}
        >
          {t('combo_home.faq.install_duration_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089315"
          question={t('combo_home.faq.availability_check_question')}
        >
          {t('combo_home.faq.availability_check_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089316"
          question={t('combo_home.faq.activate_new_offer_question')}
        >
          {t('combo_home.faq.activate_new_offer_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089317"
          question={t('combo_home.faq.bill_payment_deadline_question')}
        >
          {t('combo_home.faq.bill_payment_deadline_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089318"
          question={t('combo_home.faq.late_payment_consequences_question')}
        >
          {t('combo_home.faq.late_payment_consequences_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089319"
          question={t('combo_home.faq.manage_subscription_remotely_question')}
        >
          {t('combo_home.faq.manage_subscription_remotely_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089320"
          question={t('combo_home.faq.pause_services_question')}
        >
          {t('combo_home.faq.pause_services_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089321"
          question={t('combo_home.faq.change_package_question')}
        >
          {t('combo_home.faq.change_package_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089322"
          question={t('combo_home.faq.move_address_question')}
        >
          {t('combo_home.faq.move_address_answer')}
        </FaqQAV2>
        <FaqQAV2
          id_faq="112089323"
          question={t('combo_home.faq.transfer_subscription_question')}
        >
          {t('combo_home.faq.transfer_subscription_answer')}
        </FaqQAV2>
      </FaqV2>

      <Footer disclaimer={true} />
      <Popup
        id="1934567"
        width="550px"
        isVisible={activePopup === '1934567'}
        onClose={handlePopupClose}
        className={styles.popupBuy}
        key={activePopup ?? 'popup-closed'}
      >
        {/*<div className={styles.popup_div_title}>*/}
        {/*  Mulțumim că ai ales Moldtelecom*/}
        {/*</div>*/}
        {error ? (
          <div className={styles.buy_popup_error}>
            <Icon
              type={'repair'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span
              dangerouslySetInnerHTML={{ __html: t('double.request_error') }}
            />
          </div>
        ) : submitted ? (
          <div className={styles.buy_popup_success}>
            <Icon
              type={'tick'}
              size={'48px'}
              color={'var(--theme_primary_color_blue_3)'}
            />
            <span
              dangerouslySetInnerHTML={{ __html: t('double.request_success') }}
            />
          </div>
        ) : (
          <div className={styles.buy_popup}>
            {popupType == true ? (
              <div>{t('double.device_chosen')}</div>
            ) : (
              <div>{t('double.subscription_chosen')}</div>
            )}
            <div className={styles.selected_popup_subcription}>
              <div className={styles.popup_selected}>
                {activePopupConfig}&nbsp;<span>{activePopupSubConfig}</span>
              </div>
            </div>

            <BuyForm
              config={activeBuyConfig}
              tag={'double'}
              service={'campain[double_2025_b2s], place[abonament]'}
              onSuccess={() => {
                setSubmitted(true);
                setError(false);
              }}
              onError={() => {
                setError(true);
              }}
            />
            <div
              className={styles.popup_discalmer}
              dangerouslySetInnerHTML={{
                __html: t('double.request_disclaimer'),
              }}
            />
          </div>
        )}
      </Popup>
      <Popup
        id="1280110"
        width="1000px"
        isVisible={activePopup === '1280110'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.popup_mesh.title')}</b>
        <p>{t('double.popup_mesh.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_mesh.why_title')}
        </b>
        <ul>
          <li>{t('double.popup_mesh.list.0')}</li>
          <li>{t('double.popup_mesh.list.1')}</li>
          <li>{t('double.popup_mesh.list.2')}</li>
        </ul>

        <Details className={styles.popup_more_detalii}>
          <DetailsBlock title={t('double.popup_tvgo.conditions_title')}>
            <ul>
              <li>{t('double.popup_mesh.conditions.0')}</li>
              <li>{t('double.popup_mesh.conditions.1')}</li>
              <li>{t('double.popup_mesh.conditions.2')}</li>
              <li>{t('double.popup_mesh.conditions.3')}</li>
              <li>{t('double.popup_mesh.conditions.4')}</li>
              <li>{t('double.popup_mesh.conditions.5')}</li>
              <li>{t('double.popup_mesh.conditions.6')}</li>
              <li>{t('double.popup_mesh.conditions.7')}</li>
            </ul>
          </DetailsBlock>
        </Details>

        <Button
          id="combo_wifi_plus+learn_more"
          to={`https://new.moldtelecom.md/${t('lang')}/wifi-plus`}
          color="#fff"
          bgcolor="var(--theme_primary_color_blue_4)"
          border="var(--theme_primary_color_blue_4)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="var(--theme_primary_color_blue_4)"
          icon="arrow_right"
          className={styles.popup_more_btn}
        >
          {t('double.learn_more')}
        </Button>
      </Popup>

      {/* Premier TV */}
      <Popup
        id="1280111"
        width="1000px"
        isVisible={activePopup === '1280111'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>
          {t('double.popup_premier.title')}
        </b>
        <p>{t('double.popup_premier.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_premier.features_title')}
        </b>
        <ul>
          <li>{t('double.popup_premier.features.0')}</li>
          <li>{t('double.popup_premier.features.1')}</li>
          <li>{t('double.popup_premier.features.2')}</li>
          <li>{t('double.popup_premier.features.3')}</li>
        </ul>

        <div className={styles.abonaments_block_inside_line}></div>

        <b className={styles.popup_title_1}>
          {t('double.popup_univers.title')}
        </b>
        <p>{t('double.popup_univers.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_univers.features_title')}
        </b>
        <ul>
          <li>{t('double.popup_univers.features.0')}</li>
          <li>{t('double.popup_univers.features.1')}</li>
          <li>{t('double.popup_univers.features.1_1')}</li>
          <li>{t('double.popup_univers.features.2')}</li>
          <li>{t('double.popup_univers.features.3')}</li>
        </ul>
      </Popup>

      {/* Safe-Web */}
      <Popup
        id="1280112"
        width="1000px"
        isVisible={activePopup === '1280112'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>
          {t('double.popup_safeweb.title')}
        </b>
        <p>{t('double.popup_safeweb.text')}</p>
        <b className={styles.popup_title_1}>
          {t('double.popup_safeweb.why_title')}
        </b>
        <ul>
          <li>{t('double.popup_safeweb.list.0')}</li>
          <li>{t('double.popup_safeweb.list.1')}</li>
          <li>{t('double.popup_safeweb.list.2')}</li>
        </ul>
        <Button
          id="combo_safe_web+learn_more"
          color="#fff"
          bgcolor="var(--theme_primary_color_blue_4)"
          border="var(--theme_primary_color_blue_4)"
          hover_border="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="var(--theme_primary_color_blue_4)"
          icon="arrow_right"
          className={styles.popup_more_btn}
          to={`https://www.moldtelecom.md/${t('lang')}/personal/safe-web`}
        >
          {t('double.learn_more')}
        </Button>
      </Popup>

      <Popup
        id="1280113"
        width="1000px"
        isVisible={activePopup === '1280113'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.popup_tvgo.title')}</b>
        <p>{t('double.popup_tvgo.text')}</p>

        <Details className={styles.popup_more_detalii}>
          <DetailsBlock title={t('double.popup_tvgo.conditions_title')}>
            <ul>
              <li>{t('double.popup_tvgo.conditions.0')}</li>
              <li>{t('double.popup_tvgo.conditions.1')}</li>
              <li>{t('double.popup_tvgo.conditions.2')}</li>
              <li>{t('double.popup_tvgo.conditions.3')}</li>
              <li>{t('double.popup_tvgo.conditions.4')}</li>
              <li>{t('double.popup_tvgo.conditions.5')}</li>
              <li>{t('double.popup_tvgo.conditions.6')}</li>
              <li>
                {t('double.popup_tvgo.conditions.7')}
                <ul>
                  <li>{t('double.popup_tvgo.conditions.7_list.0')}</li>
                  <li>{t('double.popup_tvgo.conditions.7_list.1')}</li>
                </ul>
              </li>
              <li>{t('double.popup_tvgo.conditions.8')}</li>
              <li>{t('double.popup_tvgo.conditions.9')}</li>
            </ul>
          </DetailsBlock>
        </Details>

        <div className={styles.popup_btns_info}>
          <Button
            id="combo_tvgo+learn_more"
            to={`https://www.moldtelecom.md/${t('lang')}/personal/moldtelecom-tv-go`}
            color="#fff"
            bgcolor="var(--theme_primary_color_blue_4)"
            border="var(--theme_primary_color_blue_4)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_4)"
            icon="arrow_right"
            className={styles.popup_more_btn}
          >
            {t('double.learn_more')}
          </Button>
          <Button
            id="combo_tvgo+watch_now"
            to={'https://edge.multiscreen.moldtelecom.md/web/mold/#ro/login'}
            color="var(--theme_primary_color_blue_4)"
            bgcolor="transparent"
            border="var(--theme_primary_color_blue_4)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_4)"
            icon="arrow_right"
            className={styles.popup_more_btn}
          >
            {t('double.watch_now')}
          </Button>
        </div>
      </Popup>
      <Popup
        id="1280119"
        width="1000px"
        isVisible={activePopup === '1280119'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>Telefonia fixă</b>
        Telefonia fixă este disponibilă exclusiv pentru abonații conectați la
        serviciul Internet Fix Moldtelecom. <br />
        <br />
        Abonamentul include:
        <ul>
          <li>Minute nelimitate către rețeaua fixă și mobilă Moldtelecom </li>
          <li> 30 minute naționale incluse (fix & mobil alte rețele) </li>
          <li> Serviciul CLIP (afișarea numărului apelant) – gratuit</li>
        </ul>
        <div className={styles.popup_btns_info}>
          <Button
            id="combo_fix+learn_more"
            to={`https://www.moldtelecom.md/${t('lang')}/personal/Abonamente-telefonie-fixa`}
            color="#fff"
            bgcolor="var(--theme_primary_color_blue_4)"
            border="var(--theme_primary_color_blue_4)"
            hover_border="var(--theme_primary_color_blue_2)"
            hover_bgcolor="var(--theme_primary_color_blue_2)"
            hover_color="var(--theme_primary_color_blue_4)"
            icon="arrow_right"
            className={styles.popup_more_btn}
          >
            {t('double.learn_more')}
          </Button>
        </div>
      </Popup>
      <Popup
        id="1280116"
        width="1000px"
        isVisible={activePopup === '1280116'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>{t('double.popup_arhiva.title')}</b>
        <p>{t('double.popup_arhiva.text')}</p>

        <b>{t('double.popup_arhiva.activation_title')}</b>
        {t('double.popup_arhiva.activation_text')}
      </Popup>
      <Popup
        id="1280117"
        width="1000px"
        isVisible={activePopup === '1280117'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <b className={styles.popup_title_1}>
          {t('double.popup_options.title')}
        </b>
        <br />
        <div className={styles.popup_subtitle_1}>
          {t('double.popup_options.subtitle')}
        </div>

        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.adult.title')}
            </div>
            {t('double.popup_options.adult.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.adult.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.junior.title')}
            </div>
            {t('double.popup_options.junior.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.junior.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.tvextra.title')}
            </div>
            {t('double.popup_options.tvextra.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.tvextra.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.arhiva.title')}
            </div>
            {t('double.popup_options.arhiva.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.arhiva.price')}
          </div>
        </div>
        <div className={styles.popup_subtitle_1}>
          {' '}
          <br />
          {t('double.popup_options.cinema_title')}
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.megogo.title')}
            </div>
            {t('double.popup_options.megogo.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.megogo.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.premier.title')}
            </div>
            {t('double.popup_options.premier.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={`https://moldtelecom.md/${t('lang')}/personal/premier`}
                className={styles.row_popup_options_link}
              >
                {t('footer.maimult')} {'>'}
              </a>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.premier.price')}
          </div>
        </div>
        <div className={styles.row_popup_options}>
          <div>
            <div className={styles.row_popup_options_title}>
              {t('double.popup_options.ivi.title')}
            </div>
            {t('double.popup_options.ivi.text')}
            <div className={styles.row_popup_options_links}>
              <a
                href={`https://moldtelecom.md/${t('lang')}/personal/ivi`}
                className={styles.row_popup_options_link}
              >
                {t('footer.maimult')} {'>'}
              </a>
              <a
                href={'https://mtc.md/my-mtc'}
                className={styles.row_popup_options_link}
              >
                {t('activeaza_acum')} {'>'}
              </a>
            </div>
          </div>
          <div className={styles.row_popup_options_title_price}>
            {t('double.popup_options.ivi.price')}
          </div>
        </div>
        {/*<div className={styles.row_popup_options}>*/}
        {/*  <div>*/}
        {/*    <div className={styles.row_popup_options_title}>Moldtelecom TV</div>*/}
        {/*    O aplicație care permite să accesezi pe orice dispozitiv toate canalele din grila Moldtelecom.*/}
        {/*  </div>*/}
        {/*  <div className={styles.row_popup_options_title_price}>30 lei</div>*/}
        {/*</div>*/}
      </Popup>

      <Popup
        id="1780226"
        width="600px"
        isVisible={activePopup === '1780226'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.row_popup_options_title}>
          Caracteristici:
          <br />{' '}
          <span className={styles.row_popup_options_title_span}>
            (Xbox Series S)
          </span>
        </div>

        <ScrollableWrapper>
          <table className={`popup_table ${styles.popup_table_double}`}>
            <tbody>
              <tr>
                <td style={{ color: '#00000099', background: '#eceef0' }}>
                  Rezoluție ecran
                </td>
                <td style={{ background: '#eceef0' }}>2560 x 1440</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099' }}> Model CPU</td>
                <td>Custom Zen 2</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099', background: '#eceef0' }}>
                  RAM
                </td>
                <td style={{ background: '#eceef0' }}>10 GB</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099' }}>Model placă video</td>
                <td>AMD Radeon RDNA 2</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099', background: '#eceef0' }}>
                  Tip unitate de stocare
                </td>
                <td style={{ background: '#eceef0' }}>SSD</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099' }}> Capacitate SSD </td>
                <td>1 TB</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
      <Popup
        id="1780227"
        width="600px"
        isVisible={activePopup === '1780227'}
        className={styles.popupBuy}
        onClose={() => setActivePopup(null)}
      >
        <div className={styles.row_popup_options_title}>
          Caracteristici:
          <br />{' '}
          <span className={styles.row_popup_options_title_span}>
            (Playstation 5 SLIM)
          </span>
        </div>

        <ScrollableWrapper>
          <table className={`popup_table ${styles.popup_table_double}`}>
            <tbody>
              <tr>
                <td style={{ color: '#00000099', background: '#eceef0' }}>
                  Rezoluție ecran
                </td>
                <td style={{ background: '#eceef0' }}>2560 x 1440</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099' }}> Ryzen Zen 2</td>
                <td>Custom Zen 2</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099', background: '#eceef0' }}>
                  RAM
                </td>
                <td style={{ background: '#eceef0' }}>16 GB</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099' }}>Model placă video</td>
                <td>Radeon RDNA 2</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099', background: '#eceef0' }}>
                  Tip unitate de stocare
                </td>
                <td style={{ background: '#eceef0' }}>SSD</td>
              </tr>
              <tr>
                <td style={{ color: '#00000099' }}> Capacitate SSD </td>
                <td>1 TB</td>
              </tr>
            </tbody>
          </table>
        </ScrollableWrapper>
      </Popup>
    </>
  );
}
