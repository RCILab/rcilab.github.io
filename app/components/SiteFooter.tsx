import Image from "next/image";
import { NavigationLink } from "./NavigationLink";

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
          <NavigationLink href="/people">People</NavigationLink>
          <NavigationLink href="/research">Research</NavigationLink>
          <NavigationLink href="/publications">Publications</NavigationLink>
          <NavigationLink href="/grants">Grants</NavigationLink>
          <NavigationLink href="/news">News</NavigationLink>
          <NavigationLink href="/picture">Pictures</NavigationLink>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <span className="footer-email">kim87 at khu.ac.kr</span>
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
