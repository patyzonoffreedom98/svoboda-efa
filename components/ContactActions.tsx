import Link from "next/link";
import { site } from "@/lib/site";
export default function ContactActions({ topic }: { topic?: string }) {
  const contact = topic ? `/kontakt?tema=${encodeURIComponent(topic)}` : "/kontakt";
  return <div className="hero-actions">
    <a className="btn btn-gold" href={site.booking} target="_blank" rel="noreferrer">Vybrat termín konzultace</a>
    <Link className="btn btn-dark" href={contact}>Nejdřív napsat dotaz</Link>
  </div>;
}
