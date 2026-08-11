import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "./components/HeroVideo";
import { AuthorNames } from "./components/AuthorNames";
import { graduateStudents, newsItems, publications, researchInterns } from "./data";

type HomeResearchFeature = {
  number: string;
  title: string;
  subtitle: string;
  topics: string[];
  image: string;
  youtubeId?: string;
};

const homeResearchFeatures: HomeResearchFeature[] = [
  {
    number: "01",
    title: "Humanoid Control",
    subtitle: "Locomotion and loco-manipulation",
    topics: ["Locomotion", "Whole-body motion", "Physical AI"],
    image: "/research-humanoid.jpg",
    youtubeId: "E4ZXpKlxoBE",
  },
  {
    number: "02",
    title: "Whole-body Control",
    subtitle: "Dynamic coordination for complex robots",
    topics: ["Whole-body control", "Hierarchical QP", "Mobile manipulation"],
    image: "/research-wholebody.jpg",
    youtubeId: "5Xwo2iPRB4Q",
  },
  {
    number: "03",
    title: "Optimal Control",
    subtitle: "Real-time decisions under constraints",
    topics: ["MPPI", "DDP", "Trajectory optimization"],
    image: "/research-prmppi.png",
    youtubeId: "nkt-hxeWGN4",
  },
  {
    number: "04",
    title: "Constrained Motion Planning",
    subtitle: "Planning on complex constraint manifolds",
    topics: ["Motion planning", "Closed-chain", "RRT"],
    image: "/research-constrained-motion.jpg",
    youtubeId: "bnW1Kop4qRw",
  },
  {
    number: "05",
    title: "Visual Language Action",
    subtitle: "Language-guided robot behavior",
    topics: ["VLA", "Robot learning", "Manipulation"],
    image: "/research-vla.jpg",
    youtubeId: "5N-yzaBzCzg",
  },
  {
    number: "06",
    title: "Visual Language Navigation",
    subtitle: "Semantic maps for embodied navigation",
    topics: ["VLN", "Semantic mapping", "Embodied AI"],
    image: "/vln.jpg",
  },
];

export default function Home() {
  const featuredPublications = publications
    .filter((paper) => paper.type.startsWith("International"))
    .sort((a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10))
    .slice(0, 3);

  return (
    <>
      <section className="recruit-strip">
        <div className="shell recruit-strip-inner">
          <p>
            <span>OPEN POSITIONS</span>
            RCI Lab is recruiting motivated undergraduate researchers and graduate students.
          </p>
          <Link href="/contact#join">Recruitment details →</Link>
        </div>
      </section>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">ROBOT CONTROL · PHYSICAL AI · INTELLIGENCE</p>
            <h1>
              Robots that move with
              <span>purpose.</span>
            </h1>
            <p className="hero-lead">
              We build control and intelligence that help robots move, collaborate, and make
              decisions in complex, human-centered environments.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/research">
                Explore our research
              </Link>
              <Link className="button button-ghost" href="/people">
                Meet the team <span>↗</span>
              </Link>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>2023</dt>
                <dd>Established</dd>
              </div>
              <div>
                <dt>{graduateStudents.length}</dt>
                <dd>Graduate researchers</dd>
              </div>
              <div>
                <dt>{researchInterns.length}</dt>
                <dd>Research interns</dd>
              </div>
            </dl>
          </div>

          <div className="hero-media">
            <HeroVideo />
          </div>
        </div>
      </section>

      <section className="section research-home">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Control Everything.<br />In the Real World.</h2>
            </div>
            <p>
              From optimal control to Physical AI, our work connects rigorous methods with
              experiments on real robotic systems.
            </p>
          </div>
          <div className="research-feature-grid">
            {homeResearchFeatures.map((feature) => (
              <article className="research-feature" key={feature.number}>
                {feature.youtubeId ? (
                  <a
                    className="research-feature-media"
                    href={`https://www.youtube.com/watch?v=${feature.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={feature.image}
                      alt={`${feature.title} research preview`}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                    <span className="watch-chip">Watch experiment ↗</span>
                    <span className="research-feature-number">{feature.number}</span>
                  </a>
                ) : (
                  <div className="research-feature-media">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} research preview`}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                    <span className="research-feature-number">{feature.number}</span>
                  </div>
                )}
                <div className="research-feature-copy">
                  <p>{feature.subtitle}</p>
                  <h3>{feature.title}</h3>
                  <ul>
                    {feature.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link section-link" href="/research">
            View all research themes <span>→</span>
          </Link>
        </div>
      </section>

      <section className="section publication-home">
        <div className="shell publication-layout">
          <div className="publication-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Recent publications</h2>
            <p>
              Research across robot control, motion planning, navigation, and learning-enabled
              robotic systems.
            </p>
            <p className="publication-author-key">
              <span><sup>*</sup> Co-first authors</span>
              <span><sup>†</sup> Corresponding authors</span>
            </p>
            <Link className="text-link" href="/publications">Browse publications <span>→</span></Link>
          </div>
          <div className="publication-list">
            {featuredPublications.map((paper, index) => (
              <article key={paper.title}>
                <span className="publication-index">0{index + 1}</span>
                <div>
                  <p className="publication-meta">
                    {paper.venue} · {paper.year}
                    {paper.jcr && <span className="jcr-badge">JCR Top {paper.jcr}</span>}
                  </p>
                  <h3>{paper.title}</h3>
                  {paper.authors && (
                    <p className="publication-authors"><AuthorNames names={paper.authors} /></p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-home">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">LAB UPDATES</p>
              <h2>Latest news</h2>
            </div>
            <Link className="text-link" href="/news">All news <span>→</span></Link>
          </div>
          <div className="news-list">
            {newsItems.slice(0, 10).map((item) => (
              <article key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <span className={`news-tag tag-${item.category.toLowerCase()}`}>{item.category}</span>
                <div>
                  <h3>{item.title}</h3>
                  {item.detail && <p>{item.detail}</p>}
                </div>
                {item.href && <a href={item.href} target="_blank" rel="noreferrer" aria-label="Open related link">↗</a>}
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
