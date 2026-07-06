"use client";

import { useMemo, useState } from "react";
import { getBusinessConfig } from "@/lib/business-config";

const whatsappNumber = getBusinessConfig().contact.whatsappNumber;

const serviceOptions = [
  "Ingeniería civil",
  "Ingeniería eléctrica",
  "Ingeniería mecánica",
  "Automatización industrial",
  "Telecomunicaciones",
  "Software aplicado",
  "Necesito orientación",
];

export default function ContactRequestForm() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");

  const payload = useMemo(() => {
    const lines = [
      "Nueva solicitud desde la web IDEC.",
      fullName ? `Nombre y apellido: ${fullName}.` : null,
      company ? `Empresa o proyecto: ${company}.` : null,
      email ? `Correo electrónico: ${email}.` : null,
      phone ? `Teléfono: ${phone}.` : null,
      service ? `Servicio de interés: ${service}.` : null,
      message ? `Mensaje: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`;
  }, [company, email, fullName, message, phone, service]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(payload, "_blank", "noopener,noreferrer");
  };

  const fieldClassName =
    "h-[2.625rem] w-full rounded-[1rem] border border-white/7 bg-white/[0.04] px-3.5 text-sm placeholder:text-gray-600 text-gray-900 transition-colors focus:border-blue-400/40 focus:bg-white/[0.055] focus:outline-none";

  return (
    <div className="relative flex justify-between  overflow-hidden rounded-[1.5rem] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-8 gap-8 shadow-[0_18px_44px_rgba(2,6,23,0.16)] backdrop-blur-lg">
      <div className="relative">
        <span className="inline-flex text-gray-500 max-w-full items-center rounded-full bg-gray-200 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
          Solicitud inicial
        </span>
        <h2 className="font-display mt-2.5 text-3xl font-medium leading-[1.05] tracking-[-0.04em]">
          Cuéntanos el contexto y te respondemos con el siguiente paso.
        </h2>
        <p className="mt-2 max-w-[30rem] leading-6 text-gray-700">
          Envíanos la información clave y coordinamos una conversación técnica
          con el enfoque adecuado.
        </p>
      </div>

      <form
        className="relative mt-[1.125rem] space-y-3.5"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="">
            <span className="text-xs font-medium text-gray-600">
              Nombre y apellido
            </span>
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Tu nombre completo"
              className={fieldClassName}
            />
          </label>
          <label className="">
            <span className="text-xs font-medium text-gray-600">
              Empresa o proyecto
            </span>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Nombre de empresa o proyecto"
              className={fieldClassName}
            />
          </label>
        </div>

        <div className="grid gap-3.5 pb-4 sm:grid-cols-2">
          <label className="">
            <span className="text-xs font-medium text-gray-600">
              Correo electrónico
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="correo@empresa.com"
              className={fieldClassName}
            />
          </label>
          <label className="">
            <span className="text-xs font-medium text-gray-600">Teléfono</span>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+593 ..."
              className={fieldClassName}
            />
          </label>
        </div>

        <label className="pb-4">
          <span className="text-xs font-medium text-gray-600">
            Servicio de interés
          </span>
          <select
            value={service}
            onChange={(event) => setService(event.target.value)}
            className={fieldClassName}
          >
            {serviceOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#0b1628] text-red-400"
              >
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="mt-4">
          <span className="text-xs font-medium text-gray-600">Mensaje</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Cuéntanos brevemente qué necesitas resolver."
            rows={3}
            className="w-full rounded-[1rem] border border-white/7 bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/34 transition-colors focus:border-blue-400/40 focus:bg-white/[0.055] focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="h-12 border text-sm rounded-3xl bg-blue-500 w-full justify-center text-white"
        >
          Enviar solicitud
        </button>

        <p className="text-xs leading-6 text-gray-600">
          La solicitud se envía por WhatsApp para acelerar la primera
          coordinación.
        </p>
      </form>
    </div>
  );
}
