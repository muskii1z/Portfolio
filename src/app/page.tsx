import { projects } from "@/data/projects";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  const featuredProject = projects[0];

  return <HomeHero featuredProject={featuredProject} />;
}
