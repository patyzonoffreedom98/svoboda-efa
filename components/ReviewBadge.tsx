"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { googleReviews } from "@/lib/reviews";
import ReviewAvatar from "@/components/ReviewAvatar";

export default function ReviewBadge() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync(); query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  const playing = visible && !paused && !hovered && !focused && !reducedMotion;
  useEffect(() => {
    if (!playing || googleReviews.length < 2) return;
    const timer = setInterval(() => { if (!document.hidden) setActive(value => (value + 1) % googleReviews.length); }, 8000);
    return () => clearInterval(timer);
  }, [playing, active]);
  if (!visible) return null;
  function select(index: number) { setActive((index + googleReviews.length) % googleReviews.length); setPaused(true); }
  const review = googleReviews[active];
  return <aside className="review-badge" aria-label="Recenze klientů"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <button className="review-badge-close" type="button" onClick={() => setVisible(false)} aria-label="Zavřít okénko recenzí">×</button>
    <Link href="/#recenze" className="review-badge-title">Co říkají moji klienti</Link>
    <span className="review-source">Recenze z Googlu</span>
    <div className="review-badge-content" aria-live={paused ? "polite" : "off"} aria-atomic="true">
      <span className="review-stars" role="img" aria-label={`${review.rating} z 5 hvězdiček`}>{"★".repeat(review.rating)}</span>
      <blockquote>{review.text}</blockquote><div className="review-badge-person"><ReviewAvatar src={review.avatar} /><a className="review-badge-author" href={review.url} target="_blank" rel="noopener noreferrer">{review.author} ↗</a></div>
    </div>
    <div className="review-badge-controls"><button type="button" onClick={() => select(active - 1)} aria-label="Předchozí recenze">←</button><span>{active + 1} / {googleReviews.length}</span><button type="button" onClick={() => select(active + 1)} aria-label="Další recenze">→</button>{!reducedMotion && <button className="review-pause" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Spustit střídání recenzí" : "Pozastavit střídání recenzí"}>{paused ? "Spustit" : "Pozastavit"}</button>}</div>
    <div className="review-badge-links"><Link href="/#recenze">Všechny recenze</Link><a href={site.googleReview} target="_blank" rel="noopener noreferrer">Napsat recenzi ↗</a></div>
  </aside>;
}
