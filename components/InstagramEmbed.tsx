// components/InstagramEmbed.tsx
"use client";

import React from "react";

type Props = {
  url: string;                 // např. https://www.instagram.com/p/XXXXXX/
  caption?: string;
  maxWidth?: number;           // max šířka embedu
  aspect?: string;             // použije se jen když skrýváme hlavičku
  profileUrl?: string;         // nepovinné, odkaz na profil
  showHeader?: boolean;        // <- když true, necháváme originální hlavičku IG
};

export default function InstagramEmbed({
  url,
  caption,
  maxWidth = 560,
  aspect = "1 / 1",
  profileUrl,
  showHeader = false,
}: Props) {
  // normalize URL (odstraníme query/fragments a zajistíme trailing slash)
  const normalized = (() => {
    try {
      const u = new URL(url);
      u.hash = "";
      u.search = "";
      if (!u.pathname.endsWith("/")) u.pathname += "/";
      return u.toString();
    } catch {
      return url.endsWith("/") ? url : url + "/";
    }
  })();

  // IG embed endpoint
  const embedUrl = `${normalized}embed`;

  // Varianta A: chceme VIDITELNOU HLAVIČKU → bez ořezu, fixní auto výška
  if (showHeader) {
    return (
      <figure
        style={{
          width: "100%",
          maxWidth,
          margin: 0,
        }}
      >
        <iframe
          src={embedUrl}
          allowTransparency
          scrolling="no"
          frameBorder={0}
          style={{
            width: "100%",
            height: 680, // dost prostoru pro hlavičku i fotku; IG si výšku doroluje
            border: 0,
            background: "transparent",
            overflow: "hidden",
          }}
        />
        {caption ? (
          <figcaption
            style={{
              marginTop: 8,
              fontSize: 14,
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            {caption}{" "}
            {profileUrl ? (
              <a href={profileUrl} target="_blank" rel="noreferrer">
                @{profileUrl.replace(/^https?:\/\/(www\.)?instagram\.com\//, "").replace(/\/$/, "")}
              </a>
            ) : null}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  // Varianta B: skrýváme hlavičku → responsivní čtverec (domovská stránka)
  return (
    <figure
      style={{
        width: "100%",
        maxWidth,
        margin: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: aspect,
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        <iframe
          src={embedUrl}
          allowTransparency
          scrolling="no"
          frameBorder={0}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            background: "transparent",
          }}
        />
      </div>
      {caption ? (
        <figcaption
          style={{
            marginTop: 8,
            fontSize: 14,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
