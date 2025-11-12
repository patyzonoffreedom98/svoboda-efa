"use client";
import { useEffect, useRef } from "react";

/** Instagram embed (reels/post). Předáš URL na IG příspěvek. */
export default function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Načti IG script jen jednou
    if (document.getElementById("ig-embed-script")) {
      // re-scan elementy, kdyby už script existoval
      // @ts-ignore
      window.instgrm?.Embeds?.process();
      return;
    }
    const s = document.createElement("script");
    s.id = "ig-embed-script";
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
    s.onload = () => {
      // @ts-ignore
      window.instgrm?.Embeds?.process();
    };
  }, []);

  return (
    <div ref={ref} className="card" style={{ padding: 0, overflow: "hidden" }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, border: 0, width: "100%" }}
      ></blockquote>
    </div>
  );
}
