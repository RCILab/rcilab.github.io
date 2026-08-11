import type { Metadata } from "next";
import { pictureYears } from "./data";
import { PictureGallery } from "./PictureGallery";

export const metadata: Metadata = { title: "Pictures" };

export default function PicturePage() {
  return <PictureGallery year={pictureYears[0].year} />;
}
