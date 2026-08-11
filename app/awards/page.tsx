import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { awards } from "../data";

export const metadata: Metadata = { title: "Awards" };

export default function AwardsPage() {
  return (
    <>
      <PageIntro
        eyebrow="AWARDS"
        title="Recognition along the way."
        description="Paper awards, competition prizes, and honors received by RCI Lab and its principal investigator."
      />
      <section className="section">
        <div className="shell news-page-list">
          {awards.map((award, index) => (
            <article key={`${award.year}-${award.title}`}>
              <span className="news-sequence">{String(index + 1).padStart(2, "0")}</span>
              <time>{award.year}</time>
              <span className="news-tag tag-award">Award</span>
              <div>
                <h2>{award.title}</h2>
                <p>{award.detail ? `${award.org} · ${award.detail}` : award.org}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
