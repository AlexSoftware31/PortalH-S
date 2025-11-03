import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony & Symphony",
  description: "Precios",
  // other metadata
};

const PricingPage = ({ searchParams }: { searchParams: { email?: string } }) => {
  const email = searchParams?.email ?? "";

  return (
    <>
      <Pricing email={email ?? ""} />
    </>
  );
};

export default PricingPage;
