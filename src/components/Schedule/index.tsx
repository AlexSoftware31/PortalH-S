"use client";

import { useRef, useState } from "react";

const Schedule = () => {
  const [mensaje, setMensaje] = useState("");
  const fechaRef = useRef<HTMLInputElement>(null);
  const horaRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("✅ Clase agendada correctamente");
    if (fechaRef.current) fechaRef.current.value = "";
    if (horaRef.current) horaRef.current.value = "";
    setTimeout(() => setMensaje(""), 4000); 
  };

  return (
    <section id="contact" className="overflow-hidden pt-0 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Necesitas sesiones individuales? programa tus clases en vivo.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                ¡Tomar clases en vivo es el impulso que tu aprendizaje necesita! Con la guía directa de un profesor, cada sesión se convierte en una oportunidad para avanzar con seguridad.
              </p>

               {mensaje && (
                <div className="mb-6 rounded bg-green-100 px-4 py-3 text-green-800 font-semibold">
                  {mensaje}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="fecha"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Fecha
                      </label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        required
                        ref={fechaRef}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="hora"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Hora
                      </label>
                      <input
                        type="time"
                        id="hora"
                        name="hora"
                        required
                        ref={horaRef}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
