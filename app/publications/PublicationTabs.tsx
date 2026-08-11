"use client";

import { useState } from "react";
import type { Publication } from "../data";

type PublicationKind = "Journal" | "Conference";
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

export function PublicationTabs({
  inProgressPublications,
  publications,
}: {
  inProgressPublications: Publication[];
  publications: Publication[];
}) {
  const [activeKind, setActiveKind] = useState<PublicationKind>("Journal");
  const [activeScope, setActiveScope] = useState<PublicationScope>("International");
  const activeInProgress = inProgressPublications.filter((paper) =>
    matchesSelection(paper, activeKind, activeScope),
  );
  const activePublications = publications.filter((paper) =>
    matchesSelection(paper, activeKind, activeScope),
  );
  const years = [...new Set(activePublications.map((paper) => paper.year))];
  const hasPublications = activeInProgress.length > 0 || activePublications.length > 0;

  return (
    <div className="shell">
      <div className="publication-filter-bar">
        <div className="publication-type-tabs" role="tablist" aria-label="Publication format">
          {(["Journal", "Conference"] as const).map((kind) => (
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
      </div>

      <div className="publication-page" id="publication-panel" role="tabpanel">
        <aside>
          <p className="eyebrow">INDEX</p>
          {activeInProgress.length > 0 && <a href="#in-progress">In Progress</a>}
          {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
          <p className="publication-key">
            <span><sup>*</sup> Co-authors</span>
            <span><sup>†</sup> Corresponding author</span>
          </p>
        </aside>

        <div className="publication-years" key={`${activeScope}-${activeKind}`}>
          {!hasPublications && (
            <p className="publication-empty">
              No {activeScope.toLowerCase()} {activeKind.toLowerCase()} publications are listed yet.
            </p>
          )}
          {activeInProgress.length > 0 && (
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
                {activePublications.filter((paper) => paper.year === year).map((paper) => (
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
