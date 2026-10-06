/** Card and block colors a case study can use. */
export type Accent = "ink" | "idea" | "learn" | "warm" | "done";

export type Media = {
  src: string;
  alt: string;
  caption?: string;
  /** How to frame the image: an iPhone frame, a browser frame, or none. */
  frame?: "phone" | "browser" | "none";
};

export type Video =
  | { kind: "youtube"; id: string; title: string }
  | { kind: "file"; src: string; poster?: string };

export type Metric = {
  value: string;
  label: string;
  /** Qualifier shown under the label, e.g. "averaged over 3 runs". */
  note?: string;
};

export type Decision = {
  title: string;
  why: string;
  result: string;
  alternatives?: string;
};

export interface CaseStudy {
  slug: string;
  title: string;
  kind: "own" | "client";
  /** For client work. `public: false` means the client is described, never named. */
  client?: { name: string; public: boolean; via?: string };
  /** One line, used on cards and as the meta description. */
  tagline: string;
  role: string;
  timeline: string;
  year: number;
  status: "live" | "shipped" | "in-progress" | "archived";
  tier: "featured" | "archive";
  /** Lower comes first. The home page shows the first four featured studies. */
  order: number;
  /** Excluded from every getter, so unfinished studies never ship. */
  draft?: boolean;

  links: { live?: string; repo?: string; video?: string; appStore?: string; playStore?: string };
  stack: string[];
  /** The first two appear on cards. */
  metrics: Metric[];

  problem?: string;
  whatIBuilt?: string[];
  /** `steps` stands in for a diagram until one exists. */
  architecture?: { diagram?: Media; steps?: string[] };
  evaluation?: { approach: string; results?: Metric[] };
  decisions?: Decision[];
  results?: string[];
  learned?: string[];

  media: { cover?: Media; screenshots: Media[]; video?: Video };
  accent?: Accent;
  seo?: { title?: string; description?: string };
}
