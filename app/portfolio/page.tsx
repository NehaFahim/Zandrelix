import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  description:
    "Explore Zandrelix's recent work — websites, e-commerce stores, web apps and branding projects that turned ideas into real business results.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar active="Portfolio" />
      <Portfolio />
    </>
  );
}
