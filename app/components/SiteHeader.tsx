import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="university-bar">
        <div className="shell university-inner">
          <a href="https://www.khu.ac.kr" target="_blank" rel="noreferrer">
            Kyung Hee University ↗
          </a>
          <a href="https://me.khu.ac.kr" target="_blank" rel="noreferrer">
            Department of Mechanical Engineering ↗
          </a>
        </div>
      </div>
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="RCI Lab home">
          <Image src="/rci-lab-logo.png" alt="" width={70} height={76} priority />
          <span>
            <strong>RCI LAB</strong>
            <small>Robot Control &amp; Intelligence</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
          <Link className="nav-cta" href="/contact#join">
            Join us
          </Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks />
            <Link href="/contact#join">Join us</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
