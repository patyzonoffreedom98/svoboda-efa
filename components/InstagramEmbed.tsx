"use client";

import { useMemo } from "react";
import Link from "next/link";

type Props = {
  /** URL na příspěvek: https://www.instagram.com/reel/... nebo https://www.instagram.com/p/... */
  url: string;
  /** Volitelný popisek pod náhledem */
  caption?: string;
  /** Poměr stran (CSS aspect-ratio) – např. "1 / 1", "4 / 5", "9 / 16" */
  aspect?: string;
  /** Max šířka embedu v px (jen kosmetika) */
  maxWidth?: number;
  /** Odkaz na TVŮJ profil (pro tlačítko „Zobrazit profil“) */
  profileUrl?: string;
  /** Schovat horní lištu uvnitř IG embedu překrytím (maskou) */
  hideHeader?: boolean;
};

export default function InstagramEmbed({
  url,
  caption,
  aspect = "1 / 1",
  maxWidth,
  profileUrl,
  hideHeader = true,
}: Props) {
  const embedUrl = useMemo(() => {
    try {
      const u = new URL(url);
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

  // Výška horní lišty embedu (px) – vizuálně se pohybuje kolem 44–56 px.
  const headerHeight = 56;

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
        {/* Vlastní embed */}
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

        {/* Maska, která „odřízne“ horní pruh s profilem / tlačítkem */}
        {hideHeader && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: headerHeight,
              background: "#0f0f13", // stejné jako pozadí wrapperu
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              pointerEvents: "none",
            }}
          />
        )}
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
