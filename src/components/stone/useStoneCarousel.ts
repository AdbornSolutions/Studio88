import React, { useCallback, useEffect, useRef, useState } from 'react';

export function useStoneCarousel(reduced: boolean) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  const [spacer, setSpacer] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const frame = useRef(0);
  const settleTimer = useRef<number | undefined>(undefined);

  const getCards = () => Array.from(trackRef.current?.querySelectorAll<HTMLElement>('[data-card]') ?? []);
  const readPad = () => {
    const el = trackRef.current;
    return el ? parseFloat(getComputedStyle(el).paddingLeft) || 0 : 0;
  };

  const nearestIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const pad = readPad();
    let best = 0;
    let min = Infinity;
    getCards().forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - pad - el.scrollLeft);
      if (dist < min) {
        min = dist;
        best = i;
      }
    });
    return best;
  }, []);

  const update = useCallback(() => {
    setActive(nearestIndex());
  }, [nearestIndex]);

  // A trailing spacer lets the final card settle at the leading edge, so every card can become active.
  const measure = useCallback(() => {
    const el = trackRef.current;
    const cards = getCards();
    if (!el || cards.length === 0) return;
    const last = cards[cards.length - 1];
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    setSpacer(Math.max(0, el.clientWidth - readPad() - last.offsetWidth - gap));
    setCount(cards.length);
    update();
  }, [update]);

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = trackRef.current;
      const cards = getCards();
      if (!el || !cards[i]) return;
      el.scrollTo({ left: cards[i].offsetLeft - readPad(), behavior: reduced ? 'auto' : 'smooth' });
    },
    [reduced]
  );

  const prev = () => scrollToIndex(Math.max(active - 1, 0));
  const next = () => scrollToIndex(Math.min(active + 1, count - 1));

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(update);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !trackRef.current) return;
    window.clearTimeout(settleTimer.current);
    drag.current = { down: true, startX: e.clientX, startLeft: trackRef.current.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = drag.current;
    const el = trackRef.current;
    if (!s.down || !el) return;
    const dx = e.clientX - s.startX;
    if (!s.moved && Math.abs(dx) > 5) {
      s.moved = true;
      setDragging(true);
      el.setPointerCapture(e.pointerId);
    }
    if (s.moved) el.scrollLeft = s.startLeft - dx;
  };

  const endDrag = () => {
    const s = drag.current;
    if (!s.down) return;
    s.down = false;
    if (!s.moved) return;
    scrollToIndex(nearestIndex());
    // Keep snapping off until the glide settles, so the browser doesn't jump.
    settleTimer.current = window.setTimeout(() => setDragging(false), 650);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      cancelAnimationFrame(frame.current);
      window.clearTimeout(settleTimer.current);
    };
  }, [measure]);

  return {
    trackRef,
    active,
    count,
    spacer,
    dragging,
    canPrev: active > 0,
    canNext: active < count - 1,
    prev,
    next,
    handlers: {
      onScroll,
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onPointerLeave: endDrag,
      onClickCapture,
      onKeyDown
    }
  };
}