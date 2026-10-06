"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { stories } from "@/lib/stories";

export default function StoryCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(motion.matches);
    const frame = requestAnimationFrame(sync);
    motion.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (root.current) observer.observe(root.current);
    return () => { cancelAnimationFrame(frame); motion.removeEventListener("change", sync); observer.disconnect(); };
  }, []);

  const playing = !paused && !hovered && !focused && visible && !reducedMotion;
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      if (!document.hidden) setActive(value => (value + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playing, active]);

  function select(index: number) { setActive((index + stories.length) % stories.length); setPaused(true); }

  return <div ref={root} className="story-showcase" role="region" aria-roledescription="karusel" aria-label="Příběhy klientů"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <Image src="/klid-domova.webp" alt="" fill sizes="(max-width: 1200px) 100vw, 1180px" className="story-landscape" />
    <div className="story-slides" aria-live={paused ? "polite" : "off"}>
      {stories.map((story, index) => <article className={`story-slide${active === index ? " is-active" : ""}`} key={story.slug}
        aria-hidden={active !== index} inert={active !== index} role="group" aria-roledescription="snímek" aria-label={`${index + 1} ze ${stories.length}`}>
        <p className="section-label">{story.category}</p>
        <h3>{story.title}</h3><p className="story-summary">{story.summary}</p>
        <Link href={`/pribehy/${story.slug}`} className="story-read">Přečíst celý příběh <span aria-hidden="true">↗</span></Link>
      </article>)}
    </div>
    <div className="story-controls">
      <div className="story-selectors">{stories.map((story, index) => <button key={story.slug} type="button" onClick={() => select(index)} aria-pressed={active === index} aria-label={`Zobrazit příběh ${index + 1}: ${story.category}`}><span>0{index + 1}</span><span className="story-progress" /></button>)}</div>
      <div className="story-buttons">
        {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Spustit automatické střídání" : "Pozastavit automatické střídání"}>{paused ? "Spustit" : "Pozastavit"}</button>}
        <button type="button" onClick={() => select(active - 1)} aria-label="Předchozí příběh">←</button><button type="button" onClick={() => select(active + 1)} aria-label="Další příběh">→</button>
      </div>
    </div>
    <span className="landscape-note">Ilustrační vizualizace</span>
  </div>;
}
