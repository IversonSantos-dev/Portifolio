"use client";

import React from "react";

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain-overlay pointer-events-none fixed inset-0 z-30 opacity-30 mix-blend-overlay"
    />
  );
}
