"use client";

import { useEffect, useRef, useState } from "react";
import NewsLatterBox from "../Contact/NewsLatterBox";

type Props = {
  curso: string;
  onRefresh: () => void;
};

const Schedule = ({ curso, onRefresh }: Props) => {
  const [mensaje, setMensaje] = useState("");
  const [token, setToken] = useState<string>("");
  const fechaRef = useRef<HTMLInputElement>(null);
  const horaRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: token,
        subject: "Confirmación de Clase en Vivo",
        html: `<div style="font-family: Arial, sans-serif; padding: 16px;">
    <h2 style="color: #2c3e50;">Confirmación de clase en vivo</h2>
    <p>Hola,</p>
    <p>Tu clase ha sido programada con éxito. Aquí están los detalles:</p>
    <ul>
      <li><strong>Fecha:</strong> ${fechaRef.current?.value}</li>
      <li><strong>Hora:</strong> ${horaRef.current?.value}</li>
    </ul>
    <p>Nos vemos pronto 👋</p>
    <p style="font-size: 12px; color: #888;">Este correo fue enviado desde una dirección no-reply. No respondas directamente.</p>
  </div>
`,
      }),
    });

    setMensaje(
      "✅ Clase agendada correctamente, verifique la confirmación en su correo.",
    );
    if (fechaRef.current) fechaRef.current.value = "";
    if (horaRef.current) horaRef.current.value = "";
    setTimeout(() => setMensaje(""), 6000);
  };

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch("/api/check-auth");
      const data = await res.json();
      setToken(data.token || "");
    };

    fetchToken();
  }, []);

  return (
    <section
      id="contact"
      className="overflow-hidden pt-0 pb-16 md:pb-20 lg:pb-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                ¿Necesitas sesiones individuales? programa tus clases en vivo.
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                ¡Tomar clases en vivo es el impulso que tu aprendizaje necesita!
                Con la guía directa de un profesor, cada sesión se convierte en
                una oportunidad para avanzar con seguridad.
              </p>

              {mensaje && (
                <div className="mb-6 rounded bg-green-100 px-4 py-3 font-semibold text-green-800">
                  {mensaje}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="fecha"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Fecha
                      </label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        required
                        ref={fechaRef}
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="hora"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Hora
                      </label>
                      <input
                        type="time"
                        id="hora"
                        name="hora"
                        required
                        ref={horaRef}
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {token ? (
              <NewsLatterBox
                email={token}
                curso={curso}
                onRefresh={onRefresh}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
