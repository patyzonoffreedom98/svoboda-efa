"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function ReviewBadge() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return <aside className="review-badge" aria-label="Recenze klientů">
    <button className="review-badge-close" type="button" onClick={() => setVisible(false)} aria-label="Zavřít okénko recenzí">×</button>
    <Link href="/#recenze" className="review-badge-title">Vaše zkušenost mě zajímá</Link>
    <a href={site.googleReview} target="_blank" rel="noopener noreferrer" className="review-badge-action">Napsat recenzi na Googlu <span aria-hidden="true">↗</span></a>
  </aside>;
}
