// GA4 events do not include names, email addresses, phone numbers or messages.
type AnalyticsEvent = "generate_lead" | "booking_link_click";

export function trackAnalyticsEvent(
  name: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  const ga = window as Window & {
    gtag?: (...args: unknown[]) => void;
  };
  if (typeof ga.gtag === "function") {
    ga.gtag("event", name, params);
  }
}
