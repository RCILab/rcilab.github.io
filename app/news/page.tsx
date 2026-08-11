import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { newsItems } from "../data";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="NEWS"
        title="What is happening at RCI Lab."
        description="Publications, awards, grants, service, and lab milestones from our robotics community."
      />
      <section className="section">
        <div className="shell news-page-list">
          {newsItems.map((item, index) => (
            <article key={`${item.date}-${item.title}`}>
              <span className="news-sequence">{String(index + 1).padStart(2, "0")}</span>
              <time>{item.date}</time>
              <span className={`news-tag tag-${item.category.toLowerCase()}`}>{item.category}</span>
              <div>
                <h2>{item.title}</h2>
                {item.detail && <p>{item.detail}</p>}
              </div>
              {item.href && <a href={item.href} target="_blank" rel="noreferrer" aria-label="Open related link">↗</a>}
            </article>
          ))}
          <p className="archive-note">
            Looking for earlier updates? Browse the <Link href="/news/archive">RCI Lab news archive →</Link> for news from 2023–2025.
          </p>
        </div>
      </section>
    </>
  );
}
