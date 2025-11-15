"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { useRouter } from "next/navigation";

type Props = {
  email: string;
};

const Pricing = ({ email }: Props) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isLogger, setLogger] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/check-auth");
      const data = await res.json();
      setLogger(data.token || "");
    };
    checkAuth();
  }),
    [];

  const handleSetPlan = async (plan: string) => {
    const res = await fetch("/api/update-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, plan: plan }),
    });

    if (res.ok) {
      if (isLogger) {
        router.push("/blog");
      } else {
        router.push("/signin");
      }
      router.refresh();
    } else {
      console.log("Error update user plan");
    }
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <br /> <br />
        <SectionTitle
          title="Precios transparentes y beneficios reales"
          paragraph="Sabemos que cada persona es diferente, por eso creamos planes flexibles y accesibles para que encuentres el que encaje contigo."
          center
          width="665px"
        />
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "text-primary pointer-events-none"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 bg-primary absolute top-[-4px] left-0 flex h-7 w-7 items-center justify-center rounded-full transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "text-primary pointer-events-none"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 bg-center md:grid-cols-2 lg:grid-cols-2">
          <PricingBox
            packageName="Plan Básico"
            price={isMonthly ? "800" : "8,160"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle={
              isMonthly
                ? "Incluye acceso ilimitado a cursos autodirigidos en teoría."
                : "(15% descuento)\nIncluye acceso ilimitado a cursos autodirigidos en teoría."
            }
          >
            <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10">
              <button
                onClick={() => handleSetPlan("Básico")}
                className="bg-primary/80 hover:shadow-signUp flex w-full items-center justify-center rounded-xs p-3 text-base font-semibold text-white transition duration-300 ease-in-out"
              >
                Seleccionar Plan Basico
              </button>
            </div>
            <OfferList text="Instrumentos y composición" status="active" />
            <OfferList text="Módulos breves a ritmo propio" status="active" />
            <OfferList
              text="Seguimiento básico de progreso con métricas"
              status="active"
            />
            <OfferList
              text="Recursos multimedia interactivos"
              status="active"
            />
            <OfferList
              text="Acceso desde cualquier dispositivo"
              status="active"
            />
            <OfferList text="Cursos autodirigidos en teoría" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plan Premium"
            price={isMonthly ? "1,400" : "14,280"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle={
              isMonthly
                ? " Incluye todo lo del Básico, sesiones en vivo ilimitadas con instructores."
                : "(15% descuento)\nIncluye todo lo del Básico, sesiones en vivo ilimitadas con instructores."
            }
          >
            <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10">
              <button
                onClick={() => handleSetPlan("Premium")}
                className="bg-primary/80 hover:shadow-signUp flex w-full items-center justify-center rounded-xs p-3 text-base font-semibold text-white transition duration-300 ease-in-out"
              >
                Seleccionar Plan Premium
              </button>
            </div>

            <OfferList
              text="Recomendaciones IA personalizadas"
              status="active"
            />
            <OfferList text="Certificaciones" status="active" />
            <OfferList text="Recompensas por avances" status="active" />
            <OfferList
              text="Paquete familiar (hasta 3 usuarios)"
              status="active"
            />
            <OfferList
              text="Contenido con géneros locales y colaboraciones"
              status="active"
            />
            <OfferList
              text="Soporte prioritario y métricas avanzadas"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
