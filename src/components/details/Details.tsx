import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './Details.module.css';

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
}

const Details: React.FC<DetailsProps> = ({ children }) => {
  // const { t } = useTranslation();
  const count = React.Children.count(children);
  const [openBlocks, setOpenBlocks] = useState<boolean[]>([]);

  // Initialize or reset state when number of blocks changes
  useEffect(() => {
    setOpenBlocks(Array(count).fill(false));
  }, [count]);

  const toggleBlock = (index: number) => {
    setOpenBlocks(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div
      className={`
        ${styles.detalii_btns_detalii_v2}
        ${styles.detalii_btns_detalii_v2_first}
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
