import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Estamos aquí para escucharte. Contáctanos para recibir más información sobre nuestros cursos o asistencia personalizada."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
