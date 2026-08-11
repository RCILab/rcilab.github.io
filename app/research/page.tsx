import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/PageIntro";
import { facilities, researchAreas } from "../data";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="RESEARCH"
        title="Control, intelligence, and robotic systems."
        description="We develop methods that connect dynamics, optimization, learning, and interaction—and validate them on robots operating beyond controlled demos."
      />
      <section className="section">
        <div className="shell research-catalog">
          {researchAreas.map((area) => (
            <article className="research-row" key={area.number}>
              <a className="research-row-media" href={`https://www.youtube.com/watch?v=${area.videoId}`} target="_blank" rel="noreferrer">
                <Image src={area.image} alt={`${area.title} research video thumbnail`} fill sizes="(max-width: 800px) 100vw, 44vw" />
                <span className="watch-chip">Watch experiment ↗</span>
              </a>
              <div className="research-row-copy">
                <p className="research-number">{area.number} / 08</p>
                <h2>{area.title}</h2>
                <h3>{area.subtitle}</h3>
                <p>{area.description}</p>
                <ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section facilities-band">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">INFRASTRUCTURE</p><h2>Platforms for ambitious experiments.</h2></div>
            <p>Facilities at Kyung Hee University and the Advanced Institute of Convergence Technology.</p>
          </div>
          <div className="facility-grid">
            {facilities.map((facility, index) => (
              <div key={facility}><span>{String(index + 1).padStart(2, "0")}</span><p>{facility}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
