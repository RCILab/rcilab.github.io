"use client";

import { useState } from "react";
import type { Patent, Publication } from "../data";

type PublicationKind = "Journal" | "Conference" | "Patent";
type PublicationScope = "International" | "Domestic";

function matchesSelection(
  paper: Publication,
  kind: PublicationKind,
  scope: PublicationScope,
) {
  return paper.type === `${scope} ${kind}`;
}

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

function PatentEntry({ patent }: { patent: Patent }) {
  return (
    <article className="publication-entry patent-entry">
      <div className="publication-entry-top">
        <span>Patent</span>
        <strong>{patent.status}</strong>
      </div>
      {(patent.number || patent.jurisdiction) && (
        <p className="publication-meta">
          {[patent.number, patent.jurisdiction].filter(Boolean).join(" · ")}
        </p>
      )}
      <h3>{patent.title}</h3>
      <p className="publication-authors">{patent.inventors}</p>
    </article>
  );
}

export function PublicationTabs({
  inProgressPublications,
  publications,
  patents,
}: {
  inProgressPublications: Publication[];
  publications: Publication[];
  patents: Patent[];
}) {
  const [activeKind, setActiveKind] = useState<PublicationKind>("Journal");
  const [activeScope, setActiveScope] = useState<PublicationScope>("International");
  const activeInProgress = inProgressPublications.filter((paper) =>
    matchesSelection(paper, activeKind, activeScope),
  );
  const activePublications = publications.filter((paper) =>
    activeKind !== "Patent" && matchesSelection(paper, activeKind, activeScope),
  );
  const activePatents = activeKind === "Patent" ? patents : [];
  const years = [...new Set(
    (activeKind === "Patent" ? activePatents : activePublications).map((item) => item.year),
  )];
  const hasPublications = activeKind === "Patent"
    ? activePatents.length > 0
    : activeInProgress.length > 0 || activePublications.length > 0;

  return (
    <div className="shell">
      <div className="publication-filter-bar">
        <div className="publication-type-tabs" role="tablist" aria-label="Publication format">
          {(["Journal", "Conference", "Patent"] as const).map((kind) => (
            <button
              className={activeKind === kind ? "active" : undefined}
              type="button"
              role="tab"
              aria-selected={activeKind === kind}
              aria-controls="publication-panel"
              key={kind}
              onClick={() => setActiveKind(kind)}
            >
              {kind}
            </button>
          ))}
        </div>
        {activeKind !== "Patent" && (
          <div className="publication-scope-tabs" role="tablist" aria-label="Publication scope">
            {(["International", "Domestic"] as const).map((scope) => (
              <button
                className={activeScope === scope ? "active" : undefined}
                type="button"
                role="tab"
                aria-selected={activeScope === scope}
                aria-controls="publication-panel"
                key={scope}
                onClick={() => setActiveScope(scope)}
              >
                {scope}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="publication-page" id="publication-panel" role="tabpanel">
        <aside>
          <p className="eyebrow">INDEX</p>
          {activeKind !== "Patent" && activeInProgress.length > 0 && <a href="#in-progress">In Progress</a>}
          {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
          {activeKind !== "Patent" && (
            <p className="publication-key">
              <span><sup>*</sup> Co-first authors</span>
              <span><sup>†</sup> Corresponding authors</span>
            </p>
          )}
        </aside>

        <div className="publication-years" key={`${activeScope}-${activeKind}`}>
          {!hasPublications && (
            <p className="publication-empty">
              No {activeKind === "Patent" ? "patents" : `${activeScope.toLowerCase()} ${activeKind.toLowerCase()} publications`} are listed yet.
            </p>
          )}
          {activeKind !== "Patent" && activeInProgress.length > 0 && (
            <section id="in-progress">
              <h2>In Progress</h2>
              <div>
                {activeInProgress.map((paper) => (
                  <PublicationEntry paper={paper} showYear key={`${paper.note}-${paper.title}`} />
                ))}
              </div>
            </section>
          )}
          {years.map((year) => (
            <section id={`year-${year}`} key={year}>
              <h2>{year}</h2>
              <div>
                {activeKind === "Patent"
                  ? activePatents.filter((patent) => patent.year === year).map((patent) => (
                    <PatentEntry patent={patent} key={`${patent.status}-${patent.number ?? patent.title}`} />
                  ))
                  : activePublications.filter((paper) => paper.year === year).map((paper) => (
                    <PublicationEntry paper={paper} key={paper.title} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
