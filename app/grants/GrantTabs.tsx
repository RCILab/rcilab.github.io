"use client";

import { useState } from "react";
import type { Grant, GrantCategory } from "./data";

const CATEGORIES: { value: GrantCategory; label: string }[] = [
  { value: "Government", label: "Government" },
  { value: "Industry", label: "Industry" },
  { value: "Technology Transfer", label: "Tech Transfer" },
];

function GrantEntry({ grant }: { grant: Grant }) {
  return (
    <article className="publication-entry">
      <div className="publication-entry-top">
        <span>{grant.agency}</span>
      </div>
      <p className="publication-meta">
        {[grant.period, grant.program].filter(Boolean).join(" · ")}
        {grant.ongoing && <span className="jcr-badge">Ongoing</span>}
      </p>
      <h3>{grant.title}</h3>
    </article>
  );
}

export function GrantTabs({ grants }: { grants: Grant[] }) {
  const [activeCategory, setActiveCategory] = useState<GrantCategory>("Government");
  const activeGrants = grants.filter((grant) => grant.category === activeCategory);
  const years = [...new Set(activeGrants.map((grant) => grant.year))]
    .sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10));

  return (
    <div className="shell">
      <div className="publication-filter-bar">
        <div className="publication-type-tabs" role="tablist" aria-label="Grant category">
          {CATEGORIES.map(({ value, label }) => (
            <button
              className={activeCategory === value ? "active" : undefined}
              type="button"
              role="tab"
              aria-selected={activeCategory === value}
              aria-controls="grant-panel"
              key={value}
              onClick={() => setActiveCategory(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="publication-page" id="grant-panel" role="tabpanel">
        <aside>
          <p className="eyebrow">INDEX</p>
          {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
        </aside>

        <div className="publication-years" key={activeCategory}>
          {years.map((year) => (
            <section id={`year-${year}`} key={year}>
              <h2>{year}</h2>
              <div>
                {activeGrants.filter((grant) => grant.year === year).map((grant) => (
                  <GrantEntry grant={grant} key={`${grant.agency}-${grant.title}`} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
