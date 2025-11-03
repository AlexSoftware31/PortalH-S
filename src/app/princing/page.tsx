import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony & Symphony",
  description: "Precios",
  // other metadata
};

type Props = {
  searchParams?: {
    email?: string;
  };
};

const PricesPage = ({ searchParams }: Props) => {
  const email = searchParams?.email ?? "";

  return (
    <>
      <Pricing email={email ?? ""} />
    </>
  );
};

export default PricesPage;
