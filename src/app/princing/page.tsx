import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony & Symphony",
  description: "Precios",
  // other metadata
};

const PricesPage = () => {
  return (
    <>
      <Pricing/>
    </>
  );
};

export default PricesPage;
