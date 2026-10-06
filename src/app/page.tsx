import { existsSync } from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";
import { HEADSHOT_SRC } from "@/components/home/Polaroid";
import { Hero } from "@/components/home/Hero";
import { AboutMe } from "@/components/home/AboutMe";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { BuiltWith } from "@/components/home/BuiltWith";
import { LetsTalk } from "@/components/home/LetsTalk";

export default function Home() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", HEADSHOT_SRC));

  return (
    <div className="paper font-body">
      <Hero hasPhoto={hasPhoto} />
      <AboutMe />
      <FeaturedWork projects={projects} />
      <BuiltWith />
      <LetsTalk />
    </div>
  );
}
