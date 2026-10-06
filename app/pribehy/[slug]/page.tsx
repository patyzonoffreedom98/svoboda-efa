import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/lib/stories";
import ContactActions from "@/components/ContactActions";
export const dynamicParams = false;
export function generateStaticParams() { return stories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find(item => item.slug === slug);
  return story ? { title: `${story.title} | Patrik Svoboda, EFA`, description: story.summary, alternates: { canonical: `/pribehy/${slug}` } } : {};
}
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find(item => item.slug === slug);
  if (!story) notFound();
  return <main id="main-content" className="section"><article className="container story-detail">
    <Link href="/#pribehy" className="text-link">← Všechny příběhy z praxe</Link>
    <p className="section-label">{story.category}</p><h1>{story.title}</h1><p className="story-lead">{story.summary}</p>
    {story.sections.map((section, index) => <section key={index} className="story-section">{section.heading && <h2>{section.heading}</h2>}{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
    <p className="story-note">{story.note}</p>
    <aside className="calculator-contact"><h2>Řešíte podobnou situaci?</h2><p>Začneme vaším příběhem. První konzultace je bezplatná a zabere 30–60 minut.</p><ContactActions topic={story.category} /></aside>
  </article></main>;
}
