import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { grants } from "./data";
import { GrantTabs } from "./GrantTabs";

export const metadata: Metadata = { title: "Grants" };

export default function GrantsPage() {
  return (
    <>
      <PageIntro
        eyebrow="GRANTS"
        title="Research supported by ambitious partnerships."
        description="Government programs, industry collaborations, and technology transfers advancing RCI Lab's work in control, Physical AI, manipulation, and autonomous systems."
      />
      <section className="section">
        <GrantTabs grants={grants} />
      </section>
    </>
  );
}
