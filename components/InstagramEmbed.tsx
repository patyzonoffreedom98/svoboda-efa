"use client";

import { useMemo } from "react";

type Props = {
  /** URL na příspěvek: např. https://www.instagram.com/reel/XXXX/ nebo https://www.instagram.com/p/XXXX/ */
  url: string;
  /** Volitelný popisek pod náhledem */
  caption?: string;
};

export default function InstagramEmbed({ url, caption }: Props) {
  const embedUrl = useMemo(() => {
    try {
      const u = new URL(url);
      // Instagram akceptuje /embed na konci (funguje pro /reel/ i /p/)
      if (!/\/embed\/?$/.test(u.pathname)) {
        u.pathname = u.pathname.replace(/\/$/, "") + "/embed";
      }
      return u.toString();
    } catch {
      return "";
    }
  }, [url]);

  if (!embedUrl) {
    return (
      <div className="card">
        <p className="small" style={{ margin: 0 }}>
          Neplatná URL. Zadejte např.{" "}
          <code>https://www.instagram.com/reel/XXXXXXXX/</code> nebo{" "}
          <code>https://www.instagram.com/p/XXXXXXXX/</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "9 / 16", // mobilní poměr (funguje i pro /p/)
          overflow: "hidden",
          borderRadius: 12,
          background: "#0f0f13",
        }}
      >
        <iframe
          key={embedUrl}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", inset: 0 }}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {caption && (
        <div className="small" style={{ padding: 12 }}>{caption}</div>
      )}
    </div>
  );
}
