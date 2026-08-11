import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { inProgressPublications, publications, type Publication } from "../data";

export const metadata: Metadata = { title: "Publications" };

function PublicationEntry({ paper, showYear = false }: { paper: Publication; showYear?: boolean }) {
  return (
    <article className="publication-entry">
      <div className="publication-entry-top">
        <span>{paper.type}{showYear && ` · ${paper.year}`}</span>
        {paper.note && <strong>{paper.note}</strong>}
      </div>
      <p className="publication-meta">{paper.venue}</p>
      <h3>{paper.title}</h3>
      {paper.authors && <p className="publication-authors">{paper.authors}</p>}
      {paper.links && (
        <div className="paper-links">
          {paper.links.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

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
            <a href="#in-progress">In Progress</a>
            {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
            <p className="publication-key">
              <span><sup>*</sup> Co-authors</span>
              <span><sup>†</sup> Corresponding author</span>
            </p>
          </aside>
          <div className="publication-years">
            <section id="in-progress">
              <h2>In Progress</h2>
              <div>
                {inProgressPublications.map((paper) => (
                  <PublicationEntry paper={paper} showYear key={`${paper.note}-${paper.title}`} />
                ))}
              </div>
            </section>
            {years.map((year) => (
              <section id={`year-${year}`} key={year}>
                <h2>{year}</h2>
                <div>
                  {publications.filter((paper) => paper.year === year).map((paper) => (
                    <PublicationEntry paper={paper} key={paper.title} />
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
