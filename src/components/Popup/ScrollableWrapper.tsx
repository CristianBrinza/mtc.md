// src/components/Popup/ScrollableWrapper.tsx
import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import './Popup.css';

interface Props {
  children: React.ReactNode;
}

export default function ScrollableWrapper({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [hasLeftScroll, setHasLeftScroll] = useState(false);
  const [hasRightScroll, setHasRightScroll] = useState(false);
  const [showFakeScrollbar, setShowFakeScrollbar] = useState(false);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth - el.clientWidth > 1;
    setHasLeftScroll(el.scrollLeft > 0);
    setHasRightScroll(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    setShowFakeScrollbar(scrollable);
    if (scrollable) {
      setThumbWidth((el.clientWidth / el.scrollWidth) * 100);
      setThumbLeft((el.scrollLeft / el.scrollWidth) * 100);
    }
  }, []);

  // run immediately after DOM mutations (i.e. popup becoming visible + children rendered)
  useLayoutEffect(() => {
    updateScroll();
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);

    // observe size/content changes (translations, images, font loads, etc)
    const ro = new ResizeObserver(updateScroll);
    ro.observe(el);
    // also observe inner wrapper so that table width changes fire
    if (el.firstElementChild) ro.observe(el.firstElementChild);

    return () => {
      el.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      ro.disconnect();
    };
  }, [updateScroll]);

  // fake‐scrollbar drag logic
  useEffect(() => {
    let isDragging = false;
    let startX = 0;
    let startLeft = 0;

    const onMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      const el = scrollRef.current;
      const ratio = el.scrollWidth / el.clientWidth;
      el.scrollLeft = startLeft + (e.clientX - startX) * ratio;
    };
    const onUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    const onDown = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      isDragging = true;
      startX = e.clientX;
      startLeft = scrollRef.current.scrollLeft;
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    };

    const thumb = thumbRef.current;
    thumb?.addEventListener('mousedown', onDown);
    return () => {
      thumb?.removeEventListener('mousedown', onDown);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <div className="popup_table_wrapper_outer">
      {hasLeftScroll && <div className="fade-left" />}
      {hasRightScroll && <div className="fade-right" />}
      <div className="popup_table_wrapper" ref={scrollRef}>
        <div className="popup_table_wrapper_inner">{children}</div>
      </div>
      {showFakeScrollbar && (
        <div className="fake-scrollbar">
          <div
            className="fake-scrollbar-thumb"
            ref={thumbRef}
            style={{
              width: `${thumbWidth}%`,
              left: `${thumbLeft}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}
