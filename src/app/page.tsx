import { existsSync } from "node:fs";
import path from "node:path";
import { getHomeFeatured } from "@/data/work";
import { HEADSHOT_SRC } from "@/components/home/Polaroid";
import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { AboutMe } from "@/components/home/AboutMe";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Experience } from "@/components/home/Experience";
import { BuiltWith } from "@/components/home/BuiltWith";
import { LetsTalk } from "@/components/home/LetsTalk";

export default function Home() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", HEADSHOT_SRC));

  return (
    <>
      <Hero hasPhoto={hasPhoto} />
      <ProofStrip />
      <AboutMe />
      <FeaturedWork projects={getHomeFeatured()} />
      <Experience />
      <BuiltWith />
      <LetsTalk />
    </>
  );
}
