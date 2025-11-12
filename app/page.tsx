import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import InstagramEmbed from "@/components/InstagramEmbed";

export const metadata: Metadata = {
  title: "Svoboda EFA – Hypotéky, Investice, Renta",
  description:
    "Plán, který obstojí v číslech i realitě. Hypotéka, investice i zajištění bez nátlaku, srozumitelně. Vysočina a celá ČR.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="container" style={{ paddingTop: 28 }}>
        <div
          style={{
            display: "grid",
            gap: 16,
            alignItems: "center",
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Textový sloupec */}
          <div style={{ display: "grid", gap: 16 }}>
