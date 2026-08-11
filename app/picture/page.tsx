import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/PageIntro";
import { pictureYears } from "./data";

export const metadata: Metadata = { title: "Pictures" };

export default function PicturePage() {
  return (
    <>
      <PageIntro
        eyebrow="PICTURES"
        title="Moments from RCI Lab."
        description="Group photos, celebrations, and everyday life in the lab, collected year by year."
      />
      <section className="section">
        <div className="shell archive-page">
          <div className="archive-toolbar">
            <nav aria-label="Picture years">
              {pictureYears.map(({ year }) => <a href={`#year-${year}`} key={year}>{year}</a>)}
            </nav>
          </div>
          {pictureYears.map(({ year, photos }) => (
            <section className="archive-year" id={`year-${year}`} key={year}>
              <div className="archive-year-heading">
                <p className="eyebrow">YEAR</p>
                <h2>{year}</h2>
                <span>{photos.length} photos</span>
              </div>
              <div className="picture-grid">
                {photos.map((photo, index) => (
                  <figure key={photo.src}>
                    <Image
                      src={photo.src}
                      alt={`RCI Lab ${year} photo ${index + 1}`}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
