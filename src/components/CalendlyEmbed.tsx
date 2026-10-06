"use client";

import { InlineWidget } from "react-calendly";
import { site } from "@/data/site";

export default function CalendlyEmbed() {
  return <InlineWidget url={site.calendly} styles={{ height: "700px", width: "100%" }} />;
}
