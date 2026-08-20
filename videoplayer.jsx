"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(src);
      hls.attachMedia(video);

      return () => hls.destroy();
    }

    video.src = src;
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      width="100%"
      style={{ background: "black" }}
    />
  );
}
