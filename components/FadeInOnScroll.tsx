"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type FadeInOnScrollProps = PropsWithChildren<{
  /** směr animace – "right" | "left" | "up" | "down" */
  direction?: "right" | "left" | "up" | "down";
  /** vzdálenost posunu v px */
  distance?: number;
  /** délka animace v ms */
  duration?: number;
  /** zpoždění startu v ms */
  delay?: number;
  /** spustit jen jednou (nezmizí při odscrollování) */
  once?: boolean;
  /** kdy se bere prvek jako viditelný (0–1) */
  threshold?: number;
}>;

export default function FadeInOnScroll({
  children,
  direction = "right",
  distance = 40,
  duration = 600,
  delay = 0,
  once = true,
  threshold = 0.2,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const transforms: Record<string, string> = {
    right: `translateX(${distance}px)`,
    left: `translateX(-${distance}px)`,
    up: `translateY(-${distance}px)`,
    down: `translateY(${distance}px)`,
  };

  const initial = transforms[direction] ?? transforms.right;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initial,
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
