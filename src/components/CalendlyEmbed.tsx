"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <InlineWidget
      url="https://calendly.com/musab-work17/30min"
      styles={{ height: "700px", width: "100%" }}
    />
  );
}
