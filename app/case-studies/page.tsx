import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  description:
    "A closer look at how Zandrelix helped JSM Advertising with a full digital transformation — the challenge, the solution and the results.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar active="Case Studies" />
      <CaseStudy />
    </>
  );
}
