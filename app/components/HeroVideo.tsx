"use client";

import { useEffect, useRef } from "react";

const DEFAULT_VOLUME = 0.25;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = DEFAULT_VOLUME;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label="RCI Lab research overview video"
      controls
      playsInline
      poster="/research-overview.jpg"
      preload="metadata"
      onLoadedMetadata={(event) => {
        event.currentTarget.volume = DEFAULT_VOLUME;
      }}
    >
      <source src="/rci-lab-overview.mp4" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );
}
