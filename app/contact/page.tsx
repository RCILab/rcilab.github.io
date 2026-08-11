import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title="Visit, collaborate, or join us."
        description="RCI Lab is based in the Department of Mechanical Engineering at Kyung Hee University Global Campus in Yongin."
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <p className="eyebrow">LAB CONTACT</p>
            <h2>Robot Control and Intelligence Laboratory</h2>
            <dl>
              <div><dt>Professor</dt><dd>Prof. Sanghyun Kim</dd></div>
              <div><dt>Email</dt><dd><a href="mailto:kim87@khu.ac.kr">kim87@khu.ac.kr</a></dd></div>
              <div><dt>Phone</dt><dd><a href="tel:+82312012436">+82 31-201-2436</a></dd></div>
              <div><dt>Address</dt><dd>Room 7004, Woojungwon<br />Kyung Hee University Global Campus<br />1732 Deogyeong-daero, Giheung-gu<br />Yongin-si, Gyeonggi-do, Republic of Korea</dd></div>
            </dl>
            <a className="text-link" href="https://maps.google.com/?q=Kyung+Hee+University+Global+Campus" target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a>
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
              석·박사통합과정 학생을 모집합니다.
            </p>
            <dl>
              <div><dt>Eligibility</dt><dd>Undergraduate students in their third year, second semester or above</dd></div>
              <div><dt>Areas</dt><dd>Control, planning, robot learning, humanoids, manipulation, navigation</dd></div>
              <div><dt>Contact</dt><dd>Send your CV and research interests to kim87@khu.ac.kr</dd></div>
            </dl>
            <a className="button button-primary" href="mailto:kim87@khu.ac.kr?subject=RCI%20Lab%20Application">Email your application</a>
          </aside>
        </div>
      </section>
    </>
  );
}
