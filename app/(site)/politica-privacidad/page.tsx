export default function PoliticaPrivacidadPage() {
  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height))] py-12 md:py-16">
      <div className="mx-auto mt-10 w-full max-w-[1360px] px-[clamp(32px,6vw,96px)]">
        <h1 className="mb-8 text-center text-4xl font-medium md:text-3xl">
          Política de Privacidad
        </h1>
        <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <iframe
            src="/politica-privacidad-idec.pdf"
            title="Política de Privacidad IDEC"
            className="h-[70vh] w-full bg-white md:h-[80vh]"
          />
        </div>
        <p className="mt-6 text-center text-sm text-gray-400">
          Si no podés visualizar el documento, podés{" "}
          <a
            href="/politica-privacidad-idec.pdf"
            download
            className="text-blue-400 underline transition-colors hover:text-blue-300"
          >
            descargarlo aquí
          </a>
          .
        </p>
      </div>
    </section>
  );
}
