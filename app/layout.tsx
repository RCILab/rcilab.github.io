import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rcilab.github.io"),
  title: {
    default: "RCI Lab | Robot Control and Intelligence Laboratory",
    template: "%s | RCI Lab",
  },
  description:
    "Robot Control and Intelligence Laboratory at Kyung Hee University, led by Prof. Sanghyun Kim.",
  keywords: [
    "RCI Lab",
    "robotics",
    "robot control",
    "humanoid",
    "optimal control",
    "Kyung Hee University",
  ],
  icons: { icon: "/rci-lab-logo.png" },
  openGraph: {
    title: "RCI Lab",
    description: "Robot Control and Intelligence Laboratory at Kyung Hee University",
    type: "website",
    images: ["/research-overview.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
