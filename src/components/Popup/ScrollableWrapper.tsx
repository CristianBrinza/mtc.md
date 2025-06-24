import React, { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScroll = () => {
      const scrollable = el.scrollWidth > el.clientWidth;
      setHasLeftScroll(el.scrollLeft > 0);
      setHasRightScroll(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
      setShowFakeScrollbar(scrollable);
      if (scrollable) {
        setThumbWidth((el.clientWidth / el.scrollWidth) * 100);
        setThumbLeft((el.scrollLeft / el.scrollWidth) * 100);
      }
    };

    updateScroll();
    el.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);

    return () => {
      el.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  // Drag logic
  useEffect(() => {
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      const el = scrollRef.current;
      const scrollRatio = el.scrollWidth / el.clientWidth;
      const deltaX = e.clientX - startX;
      el.scrollLeft = startScrollLeft + deltaX * scrollRatio;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = scrollRef.current.scrollLeft;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const thumb = thumbRef.current;
    if (thumb) {
      thumb.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (thumb) thumb.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
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
