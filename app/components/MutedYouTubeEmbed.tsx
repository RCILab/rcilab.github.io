"use client";

import { useRef } from "react";

type MutedYouTubeEmbedProps = {
  title: string;
  videoId: string;
};

export function MutedYouTubeEmbed({ title, videoId }: MutedYouTubeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function mutePlayer() {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "mute", args: [] }),
      "https://www.youtube-nocookie.com",
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&mute=1&playsinline=1&rel=0`}
      title={`${title} research video`}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      onLoad={mutePlayer}
    />
  );
}
