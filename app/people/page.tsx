import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { alumni, graduateStudents, researchInterns } from "../data";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <>
      <PageIntro
        eyebrow="PEOPLE"
        title="A team built around real robots and hard problems."
        description="RCI Lab brings together researchers in control, planning, learning, interaction, and robotic systems at Kyung Hee University."
      />
      <section className="section professor-section">
        <div className="shell professor-card">
          <div className="professor-photo">
            <Image src="/sanghyun-kim.jpg" alt="Professor Sanghyun Kim" fill sizes="(max-width: 700px) 70vw, 320px" priority />
          </div>
          <div className="professor-copy">
            <p className="eyebrow">PRINCIPAL INVESTIGATOR</p>
            <h2>Sanghyun Kim <span>김상현</span></h2>
            <p className="professor-role">Assistant Professor · Department of Mechanical Engineering<br />Principal Investigator (PI), RCI Lab</p>
            <p>
              Prof. Kim leads RCI Lab at Kyung Hee University. His research focuses on robot
              control and intelligence, including redundant and whole-body control, optimal
              control, human–robot interaction, and Physical AI.
            </p>
            <div className="profile-links">
              <a className="profile-email" href="mailto:kim87@khu.ac.kr">kim87@khu.ac.kr</a>
              <a href="https://scholar.google.com/citations?user=OAMAACIAAAAJ&hl=ko&oi=sra" target="_blank" rel="noreferrer">Google Scholar ↗</a>
              <a href="/sanghyun-kim-cv.pdf" target="_blank" rel="noreferrer">CV ↗</a>
              <Link href="/awards">Awards ↗</Link>
            </div>
          </div>
          <dl className="professor-history">
            <div><dt>2023–Now</dt><dd><strong>Kyung Hee University</strong><br />Assistant Professor</dd></div>
            <div><dt>2020–2023</dt><dd><strong>Korea Institute of Machinery &amp; Materials</strong><br />Senior Researcher</dd></div>
            <div><dt>2020</dt><dd><strong>University of Edinburgh</strong><br />Research Associate</dd></div>
            <div><dt>2012–2020</dt><dd><strong>Seoul National University</strong><br />Ph.D.</dd></div>
            <div><dt>2005–2012</dt><dd><strong>Seoul National University</strong><br />B.S.</dd></div>
          </dl>
        </div>
      </section>

      <section className="section people-section">
        <div className="shell">
          <div className="people-heading"><p className="eyebrow">TEAM</p><h2>Graduate students</h2><span>{graduateStudents.length} researchers</span></div>
          <div className="member-grid">
            {graduateStudents.map((member) => (
              <article className="member-card" key={member.name}>
                <div className="member-photo">
                  <Image src={member.image} alt={member.name} fill sizes="92px" />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.program} {member.joined && <span>· {member.joined}</span>}</p>
                  <strong>{member.focus}</strong>
                  <span className="member-email">{member.email}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section interns-section">
        <div className="shell">
          <div className="people-heading"><p className="eyebrow">TEAM</p><h2>Research interns</h2></div>
          <div className="member-grid">
            {researchInterns.map((member) => (
              <article className="member-card" key={member.name}>
                <div className="member-photo">
                  <Image src={member.image} alt={member.name} fill sizes="92px" />
                </div>
                <div><h3>{member.name}</h3><p>{member.program}</p><strong>{member.focus}</strong><span className="member-email">{member.email}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alumni-section">
        <div className="shell">
          <div className="people-heading"><p className="eyebrow">ALUMNI</p><h2>Where they are now</h2></div>
          <div className="alumni-list">
            {alumni.map((person) => (
              <article key={person.name}><h3>{person.name}</h3><p>{person.degree} · Joined {person.joined}</p><span>{person.affiliation}</span></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
