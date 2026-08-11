import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import type { NewsItem } from "../data";
import { archiveNewsByYear } from "../news/archive-data";

export const metadata: Metadata = { title: "Grants" };

const currentGrants: NewsItem[] = [
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab began an industry project with PIE Robotics.",
    detail: "Motion-planning technology for autonomous processes",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab began an industry project with KairosLab.",
    detail: "VLM-based control technology for automated chemical experiments",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab began an industry project with ENOZ.",
    detail: "Humanoid education consulting",
  },
  {
    date: "2026.07",
    category: "Grant",
    title: "RCI Lab began an industry project with Roboe Technologies.",
    detail: "Motion-planning algorithms for robotic cargo unloading",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab joined a Scale-up TIPS project.",
    detail: "Whole-body control for high-payload semi-humanoid robots",
  },
  {
    date: "2026.06",
    category: "Grant",
    title: "RCI Lab began a Gyeonggi RISE Center project.",
    detail: "Behavior Tree-based fault-responsive software for off-road autonomous driving",
  },
  {
    date: "2026.03",
    category: "Grant",
    title: "RCI Lab received an NRF New Researcher grant.",
    detail: "A hybrid Physical AI framework combining generative policies and MPC, from manipulator motion control to humanoid whole-body control (2026–2030)",
  },
  {
    date: "2026.03",
    category: "Grant",
    title: "RCI Lab joined a Rural Development Administration project.",
    detail: "Imitation-learning control for orchard work and agricultural-robot technology standardization (2026–2030)",
  },
  {
    date: "2026.02",
    category: "Grant",
    title: "RCI Lab began the second phase of an industry project with PonyLink.",
    detail: "Core autonomous-navigation technology for quadruped robots",
  },
  {
    date: "2026.01",
    category: "Grant",
    title: "RCI Lab began a commissioned project with KIST.",
    detail: "Manipulator motion, optimal path generation, and control for automated smart-farm harvesting",
  },
];

const grantYears = [
  { year: "2026", items: currentGrants },
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
