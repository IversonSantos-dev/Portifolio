"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export const FALLBACK_BLUR_SVG =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='100%25' height='100%25' fill='%23141417'/%3E%3Ctext x='50%25' y='50%25' fill='%23555555' font-family='monospace' font-size='18' text-anchor='middle' dominant-baseline='middle'%3ESYSTEM ARCHITECTURE%3C/text%3E%3C/svg%3E";

interface ProjectImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function ProjectImage({
  src,
  alt,
  fallbackSrc = FALLBACK_BLUR_SVG,
  placeholder = "blur",
  blurDataURL = FALLBACK_BLUR_SVG,
  ...props
}: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
