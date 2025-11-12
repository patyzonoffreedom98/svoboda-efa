"use client";

import { useMemo } from "react";
import Link from "next/link";

type Props = {
  /** URL na příspěvek: https://www.instagram.com/reel/XXXX/ nebo https://www.instagram.com/p/XXXX/ */
  url: string;
  /** Volitelný popisek pod náhledem */
  caption?: string;
  /** Poměr stran (CSS aspect-ratio), např. "1 / 1", "4 / 5", "9 / 16" */
  aspect?: string;
  /** Max šířka embedu v px (jen kosmetika) */
  maxWidth?: number;
  /** Odkaz na TVŮJ profil pro tlačítko "Zobrazit profil" */
  profileUrl?: string;
};

export default function InstagramEmbed({
  url,
  caption,
  aspect = "1 / 1",
  maxWidth,
  profileUrl,
}: Props) {
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
    <div className="card" style={{ padding: 0, maxWidth }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: aspect,
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

      {/* Popisek + tlačítko na TVŮJ profil */}
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 12,
          flexWrap: "wrap",
        }}
      >
        {caption && <div className="small">{caption}</div>}
        {profileUrl && (
          <Link href={profileUrl} target="_blank" className="btn btn-outline">
            Zobrazit profil
          </Link>
        )}
      </div>
    </div>
  );
}
