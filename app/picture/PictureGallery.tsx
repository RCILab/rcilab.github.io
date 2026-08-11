import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { pictureYears } from "./data";

export function yearHref(year: string) {
  return year === pictureYears[0].year ? "/picture/" : `/picture/${year}/`;
}

export function PictureGallery({ year }: { year: string }) {
  const active = pictureYears.find((entry) => entry.year === year) ?? pictureYears[0];

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
              {pictureYears.map(({ year: y }) => (
                <Link
                  href={yearHref(y)}
                  className={y === active.year ? "active" : undefined}
                  aria-current={y === active.year ? "page" : undefined}
                  key={y}
                >
                  {y}
                </Link>
              ))}
            </nav>
          </div>
          <section className="archive-year" id={`year-${active.year}`}>
            <div className="archive-year-heading">
              <p className="eyebrow">YEAR</p>
              <h2>{active.year}</h2>
              <span>{active.photos.length} photos</span>
            </div>
            <div className="picture-grid">
              {active.photos.map((photo, index) => (
                <figure key={photo.src}>
                  <Image
                    src={photo.src}
                    alt={`RCI Lab ${active.year} photo ${index + 1}`}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
