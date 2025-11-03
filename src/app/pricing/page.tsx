import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony & Symphony",
  description: "Precios",
};

interface PricingPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function PricingPage({ searchParams }: PricingPageProps) {
  const email = typeof searchParams?.email === "string" ? searchParams.email : "";

  return <Pricing email={email} />;
}