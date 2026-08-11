import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = { title: "Join Us" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="JOIN US"
        title="Build intelligent robots with us."
        description="Explore open positions, prepare the essential foundations, and find RCI Lab at Kyung Hee University Global Campus in Yongin."
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <p className="eyebrow">LAB CONTACT</p>
            <h2>Robot Control and Intelligence Laboratory</h2>
            <dl>
              <div><dt>Professor</dt><dd>Prof. Sanghyun Kim</dd></div>
              <div><dt>Email</dt><dd><span className="obfuscated-email">kim87 at khu.ac.kr</span></dd></div>
              <div><dt>Phone</dt><dd><a href="tel:+82312012436">+82 31-201-2436</a></dd></div>
              <div><dt>Address</dt><dd>Room 7004, Woojungwon<br />Kyung Hee University Global Campus<br />1732 Deogyeong-daero, Giheung-gu<br />Yongin-si, Gyeonggi-do, Republic of Korea</dd></div>
            </dl>
            <a className="text-link" href="https://www.google.com/maps/place/%EA%B2%BD%ED%9D%AC%EB%8C%80%ED%95%99%EA%B5%90+%EA%B5%AD%EC%A0%9C%EC%BA%A0%ED%8D%BC%EC%8A%A4+%EC%9A%B0%EC%A0%95%EC%9B%90/" target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a>
          </div>

          <aside className="join-card" id="join">
            <p className="eyebrow">OPEN POSITIONS</p>
            <h2>Join RCI Lab</h2>
            <p>
              We welcome motivated undergraduate researchers and prospective students for the
              integrated M.S./Ph.D. program.
            </p>
            <p lang="ko">
              RCI Lab에서는 로봇 제어와 Physical AI 연구에 함께할 학부연구생 및
              석·박사통합과정 학생을 모집합니다. 특히 수학적 사고력과 프로그래밍 역량을
              바탕으로 실제 로봇의 문제를 함께 풀어갈 지원자를 찾고 있습니다.
            </p>
            <dl>
              <div><dt>Eligibility</dt><dd>Undergraduate students in their third year, second semester or above</dd></div>
              <div><dt>Areas</dt><dd>Control, planning, robot learning, humanoids, manipulation, navigation</dd></div>
              <div><dt>Contact</dt><dd>Send your CV and research interests to kim87 at khu.ac.kr</dd></div>
            </dl>
            <p className="application-email"><strong>Application email</strong><span>kim87 at khu.ac.kr</span></p>
          </aside>
        </div>
      </section>

      <section className="section join-preparation">
        <div className="shell">
          <div className="join-preparation-heading">
            <p className="eyebrow">BEFORE YOU JOIN</p>
            <h2>Recommended foundations</h2>
            <p>
              You do not need to have completed all of the following before applying. If some
              topics are new to you, that is fine—we expect you to pick up the core ideas once
              you join the lab. Topics marked <strong>Must-Know</strong> are the essential
              foundations we expect you to be comfortable with before joining.
            </p>
          </div>

          <div className="preparation-groups">
            <section>
              <h3>Mathematics</h3>
              <article>
                <div><h4>Linear Algebra</h4><span>Must-Know</span></div>
                <p><a href="https://youtu.be/QVKj3LADCnA" target="_blank" rel="noreferrer">Video lectures ↗</a></p>
              </article>
            </section>

            <section>
              <h3>Learning</h3>
              <article>
                <div><h4>Machine Learning Basics</h4><span>Must-Know</span></div>
                <p>
                  Murphy, <a href="https://probml.github.io/pml-book/book1.html" target="_blank" rel="noreferrer"><em>Probabilistic Machine Learning: An Introduction</em> ↗</a>
                  <br />Stanford CS229, Andrew Ng (<a href="https://youtu.be/jGwO_UgTS7I" target="_blank" rel="noreferrer">lecture series ↗</a>)
                </p>
              </article>
              <article>
                <div><h4>Deep Reinforcement Learning</h4></div>
                <p>Berkeley CS285 (<a href="https://youtu.be/SupFHGbytvA" target="_blank" rel="noreferrer">lecture series ↗</a>)</p>
              </article>
            </section>

            <section>
              <h3>Robotics</h3>
              <article>
                <div><h4>Modern Robotics: Mechanics, Planning, and Control</h4><span>Must-Know</span></div>
                <p>
                  <a href="https://hades.mech.northwestern.edu/images/7/7f/MR.pdf" target="_blank" rel="noreferrer">Textbook (PDF) ↗</a>
                  <br /><a href="https://www.youtube.com/playlist?list=PLggLP4f-rq02vX0OQQ5vrCxbJrzamYDfx" target="_blank" rel="noreferrer">Video lectures ↗</a>
                </p>
              </article>
              <article>
                <div><h4>Advanced Robotics</h4></div>
                <p>MIT Underactuated Robotics (<a href="https://youtu.be/uyyBT-MHhLE" target="_blank" rel="noreferrer">lecture series ↗</a>)</p>
              </article>
            </section>

            <section>
              <h3>Optimization</h3>
              <article>
                <div><h4>Convex Optimization</h4></div>
                <p>Stanford EE364A (<a href="https://youtu.be/kV1ru-Inzl4" target="_blank" rel="noreferrer">lecture series ↗</a>)</p>
              </article>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
