import type { Metadata } from "next";

/** The phone-frame tester is a tool for checking layouts, not a page for visitors. */
export const metadata: Metadata = {
  title: "Mobile preview",
  robots: { index: false, follow: false },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
