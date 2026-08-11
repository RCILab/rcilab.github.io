import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pictureYears } from "../data";
import { PictureGallery } from "../PictureGallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return pictureYears.slice(1).map(({ year }) => ({ year }));
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  const { year } = await params;
  return { title: `Pictures · ${year}` };
}

export default async function PictureYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  if (!pictureYears.slice(1).some((entry) => entry.year === year)) notFound();
  return <PictureGallery year={year} />;
}
