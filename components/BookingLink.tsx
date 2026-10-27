"use client";

import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { trackAnalyticsEvent } from "@/lib/analytics";

// Tracks only opening the external booking page, NOT a completed reservation.
export default function BookingLink({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={site.booking}
      className={className}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        trackAnalyticsEvent("booking_link_click", { link_location: window.location.pathname });
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
