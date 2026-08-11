import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/rci-lab-logo.png" alt="RCI Lab" width={92} height={100} />
          <div>
            <strong>Robot Control and Intelligence Laboratory</strong>
            <p>Engineering robots that move intelligently in the human world.</p>
          </div>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/research">Research</Link>
          <Link href="/people">People</Link>
          <Link href="/publications">Publications</Link>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href="mailto:kim87@khu.ac.kr">kim87@khu.ac.kr</a>
          <p>Room 7004, Woojungwon<br />Kyung Hee University Global Campus</p>
          <p>+82 31-201-2436</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} RCI Lab, Kyung Hee University.</span>
        <span>Yongin, Republic of Korea</span>
      </div>
    </footer>
  );
}
