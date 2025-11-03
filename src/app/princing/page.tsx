"use client";

import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Harmony & Symphony",
//   description: "Precios",
//   // other metadata
// };

const PricesPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <>
      <Pricing email={email ?? ""}/>
    </>
  );
};

export default PricesPage;
