import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { inProgressPublications, publications } from "../data";
import { PublicationTabs } from "./PublicationTabs";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="PUBLICATIONS"
        title="Ideas tested, documented, and shared."
        description="Selected journal articles and conference papers from RCI Lab. For the complete and most current record, refer to the principal investigator’s Google Scholar profile."
      />
      <section className="section">
        <PublicationTabs
          inProgressPublications={inProgressPublications}
          publications={publications}
        />
      </section>
    </>
  );
}
