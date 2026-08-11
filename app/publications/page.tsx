import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { publications } from "../data";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const years = [...new Set(publications.map((paper) => paper.year))];

  return (
    <>
      <PageIntro
        eyebrow="PUBLICATIONS"
        title="Ideas tested, documented, and shared."
        description="Selected journal articles and conference papers from RCI Lab. For the complete and most current record, refer to the principal investigator’s Google Scholar profile."
      />
      <section className="section">
        <div className="shell publication-page">
          <aside>
            <p className="eyebrow">INDEX</p>
            {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
            <p className="publication-key">* co-first or corresponding authorship as indicated in the original record.</p>
          </aside>
          <div className="publication-years">
            {years.map((year) => (
              <section id={`year-${year}`} key={year}>
                <h2>{year}</h2>
                <div>
                  {publications.filter((paper) => paper.year === year).map((paper) => (
                    <article className="publication-entry" key={paper.title}>
                      <div className="publication-entry-top">
                        <span>{paper.type}</span>
                        {paper.note && <strong>{paper.note}</strong>}
                      </div>
                      <p className="publication-meta">{paper.venue}</p>
                      <h3>{paper.title}</h3>
                      <p className="publication-authors">{paper.authors}</p>
                      {paper.links && (
                        <div className="paper-links">
                          {paper.links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
