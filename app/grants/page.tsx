import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import type { NewsItem } from "../data";
import { newsItems } from "../data";
import { archiveNewsByYear } from "../news/archive-data";

export const metadata: Metadata = { title: "Grants" };

// Current-year grants come straight from the news feed so the two pages never drift apart.
const grantsByYear = new Map<string, NewsItem[]>();
for (const item of newsItems) {
  if (item.category !== "Grant") continue;
  const year = item.date.slice(0, 4);
  grantsByYear.set(year, [...(grantsByYear.get(year) ?? []), item]);
}

const grantYears = [
  ...[...grantsByYear.entries()].map(([year, items]) => ({ year, items })),
  ...archiveNewsByYear
    .map(({ year, items }) => ({
      year,
      items: items.filter((item) => item.category === "Grant"),
    }))
    .filter(({ items }) => items.length > 0),
];

export default function GrantsPage() {
  return (
    <>
      <PageIntro
        eyebrow="GRANTS"
        title="Research supported by ambitious partnerships."
        description="Government-funded programs and industry collaborations advancing RCI Lab's work in control, Physical AI, manipulation, and autonomous systems."
      />
      <section className="section">
        <div className="shell archive-page">
          <div className="archive-toolbar">
            <nav aria-label="Grant years">
              {grantYears.map(({ year }) => (
                <a href={`#year-${year}`} key={year}>{year}</a>
              ))}
            </nav>
          </div>
          {grantYears.map(({ year, items }) => (
            <section className="archive-year" id={`year-${year}`} key={year}>
              <div className="archive-year-heading">
                <p className="eyebrow">YEAR</p>
                <h2>{year}</h2>
                <span>{items.length} projects</span>
              </div>
              <div className="news-page-list">
                {items.map((item, index) => (
                  <article key={`${item.date}-${item.title}`}>
                    <span className="news-sequence">{String(index + 1).padStart(2, "0")}</span>
                    <time>{item.date}</time>
                    <span className="news-tag tag-grant">Grant</span>
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
