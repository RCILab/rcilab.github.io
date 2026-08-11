import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { inProgressPublications, patents, publications } from "../data";
import { PublicationTabs } from "./PublicationTabs";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="PUBLICATIONS"
        title="Ideas tested, documented, and shared."
        description="Journal articles, conference papers, and patents from RCI Lab. For citation updates, refer to the principal investigator’s Google Scholar profile."
      />
      <section className="section">
        <PublicationTabs
          inProgressPublications={inProgressPublications}
          publications={publications}
          patents={patents}
        />
      </section>
    </>
  );
}
