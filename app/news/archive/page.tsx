import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../../components/PageIntro";
import { archiveNewsByYear } from "../archive-data";

export const metadata: Metadata = { title: "News Archive" };

export default function NewsArchivePage() {
  return (
    <>
      <PageIntro
        eyebrow="NEWS ARCHIVE"
        title="Earlier milestones from RCI Lab."
        description="An internal archive of publications, awards, grants, service, and lab milestones from 2023 through 2025."
      />
      <section className="section">
        <div className="shell archive-page">
          <div className="archive-toolbar">
            <Link className="text-link" href="/news"><span>←</span> Back to latest news</Link>
            <nav aria-label="Archive years">
              {archiveNewsByYear.map(({ year }) => <a href={`#year-${year}`} key={year}>{year}</a>)}
            </nav>
          </div>
          {archiveNewsByYear.map(({ year, items }) => (
            <section className="archive-year" id={`year-${year}`} key={year}>
              <div className="archive-year-heading">
                <p className="eyebrow">YEAR</p>
                <h2>{year}</h2>
                <span>{items.length} updates</span>
              </div>
              <div className="news-page-list">
                {items.map((item, index) => (
                  <article key={`${item.date}-${item.title}`}>
                    <span className="news-sequence">{String(index + 1).padStart(2, "0")}</span>
                    <time>{item.date}</time>
                    <span className={`news-tag tag-${item.category.toLowerCase()}`}>{item.category}</span>
                    <div>
                      <h2>{item.title}</h2>
                      {item.detail && <p>{item.detail}</p>}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
