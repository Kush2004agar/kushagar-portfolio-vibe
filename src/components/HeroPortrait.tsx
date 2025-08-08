import React, { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/removeBackground";

interface HeroPortraitProps {
  src: string;
  alt: string;
  className?: string;
}

const HeroPortrait: React.FC<HeroPortraitProps> = ({ src, alt, className }) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let objectUrl: string | null = null;

    const run = async () => {
      try {
        const resp = await fetch(src);
        const blob = await resp.blob();
        const imgEl = await loadImage(blob);
        const outBlob = await removeBackground(imgEl);
        objectUrl = URL.createObjectURL(outBlob);
        if (isMounted) setProcessedSrc(objectUrl);
      } catch (e) {
        console.warn("Falling back to original image due to processing error", e);
      }
    };

    run();
    return () => {
      isMounted = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src]);

  return (
    <img
      src={processedSrc || src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

export default HeroPortrait;
