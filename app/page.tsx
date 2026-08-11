import Image from "next/image";
import Link from "next/link";
import { facilities, newsItems, publications, researchAreas } from "./data";

export default function Home() {
  const featuredPublications = publications.slice(0, 3);

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
                <dt>8</dt>
                <dd>Research themes</dd>
              </div>
              <div>
                <dt>17</dt>
                <dd>Graduate researchers</dd>
              </div>
            </dl>
          </div>

          <div className="hero-media">
            <video
              aria-label="RCI Lab research overview video"
              controls
              playsInline
              poster="/research-overview.jpg"
              preload="metadata"
            >
              <source src="/rci-lab-overview.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </section>

      <section className="section research-home">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Control for the real world.</h2>
            </div>
            <p>
              From optimal control to Physical AI, our work connects rigorous methods with
              experiments on real robotic systems.
            </p>
          </div>
          <div className="research-feature-grid">
            {researchAreas.slice(0, 4).map((area) => (
              <article className="research-feature" key={area.number}>
                <a href={`https://www.youtube.com/watch?v=${area.videoId}`} target="_blank" rel="noreferrer">
                  <div className="research-feature-media">
                    <Image src={area.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
                    <span>{area.number}</span>
                  </div>
                </a>
                <div className="research-feature-copy">
                  <p>{area.subtitle}</p>
                  <h3>{area.title}</h3>
                  <ul>
                    {area.topics.map((topic) => <li key={topic}>{topic}</li>)}
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
            <Link className="text-link" href="/publications">Browse publications <span>→</span></Link>
          </div>
          <div className="publication-list">
            {featuredPublications.map((paper, index) => (
              <article key={paper.title}>
                <span className="publication-index">0{index + 1}</span>
                <div>
                  <p className="publication-meta">{paper.venue} · {paper.year}</p>
                  <h3>{paper.title}</h3>
                  <p className="publication-authors">{paper.authors}</p>
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
            {newsItems.slice(0, 5).map((item) => (
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

      <section className="section facilities-home">
        <div className="shell facilities-layout">
          <div>
            <p className="eyebrow">BUILT TO EXPERIMENT</p>
            <h2>A diverse robotics testbed.</h2>
            <p className="section-copy">
              RCI Lab validates ideas on full-size humanoids, mobile manipulators, multi-robot
              platforms, extended-reality interfaces, and high-performance compute systems.
            </p>
          </div>
          <ul className="facility-list">
            {facilities.slice(0, 6).map((facility, index) => (
              <li key={facility}><span>{String(index + 1).padStart(2, "0")}</span>{facility}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="join-banner">
        <div className="shell join-banner-inner">
          <div>
            <p className="eyebrow">JOIN RCI LAB</p>
            <h2>Build the next generation of intelligent robots with us.</h2>
          </div>
          <Link className="button button-light" href="/contact#join">View open positions</Link>
        </div>
      </section>
    </>
  );
}
