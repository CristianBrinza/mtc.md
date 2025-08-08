import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './Details.module.css';
import { trackEvent } from '../../initAnalytics.ts';

const ArrowIcon: React.FC<{ rotated?: boolean }> = ({ rotated = false }) => (
  <div className={styles.detalii_arrow}>
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
  </div>
);

/**
 * Props for each DetailsBlock.
 * `isOpen` and `onToggle` are injected by Details component.
 */
export interface DetailsBlockProps {
  title: string;
  children: React.ReactNode;
  /** Indicates if this block is open */
  isOpen?: boolean;
  /** Toggle callback for this block */
  onToggle?: () => void;
}

/**
 * Individual collapsible block.
 * Use inside <Details>...
 */
export const DetailsBlock: React.FC<DetailsBlockProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
}) => (
  <div className={styles.detalii_btns_detalii_line}>
    <div className={styles.detalii_btns_detalii_line_title} onClick={onToggle}>
      {title}
      {onToggle && <ArrowIcon rotated={isOpen} />}
    </div>
    <div
      className={`${styles.detalii_btns_detalii_line_inside} ${
        isOpen ? styles.detalii_btns_detalii_line_inside_open : ''
      }`}
    >
      {children}
    </div>
  </div>
);

/**
 * Container for multiple <DetailsBlock> children.
 * Manages open/closed state by child index.
 */
interface DetailsProps {
  children: React.ReactNode;
  className?: string;
  trackPrefix?: string;
}

const Details: React.FC<DetailsProps> = ({
  children,
  className,
  trackPrefix = 'combo',
}) => {
  // const { t } = useTranslation();
  const count = React.Children.count(children);
  const [openBlocks, setOpenBlocks] = useState<boolean[]>([]);

  // Initialize or reset state when number of blocks changes
  useEffect(() => {
    setOpenBlocks(Array(count).fill(false));
  }, [count]);

  const toggleBlock = (index: number) => {
    // figure out the next open/closed state
    const nextOpen = !openBlocks[index];

    // update state
    setOpenBlocks(prev => {
      const next = [...prev];
      next[index] = nextOpen;
      return next;
    });

    // now fire trackEvent exactly once
    const childArray = React.Children.toArray(children);
    const child = childArray[index];
    if (React.isValidElement<DetailsBlockProps>(child)) {
      const label = String(child.props.title)
        .replace(/\s+/g, '_')
        .toLowerCase();
      trackEvent(
        `${trackPrefix}_detalii_${label}_${nextOpen ? 'open' : 'closed'}`
      );
    }
  };

  return (
    <div
      className={`
        ${styles.detalii_btns_detalii_v2}
        ${styles.detalii_btns_detalii_v2_first}
       ${className || ''}
      `}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement<DetailsBlockProps>(child)) return child;
        return React.cloneElement(child, {
          isOpen: openBlocks[idx],
          onToggle: () => toggleBlock(idx),
        });
      })}
    </div>
  );
};

export default Details;
