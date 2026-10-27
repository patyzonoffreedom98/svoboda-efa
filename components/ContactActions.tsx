import Link from "next/link";
import BookingLink from "@/components/BookingLink";
export default function ContactActions({ topic }: { topic?: string }) {
  const contact = topic ? `/kontakt?tema=${encodeURIComponent(topic)}` : "/kontakt";
  return <div className="hero-actions">
    <BookingLink className="btn btn-gold">Vybrat termín konzultace</BookingLink>
    <Link className="btn btn-dark" href={contact}>Nejdřív napsat dotaz</Link>
  </div>;
}
