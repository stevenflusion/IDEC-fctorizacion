import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import N8nChatWidget from "@/components/ui/N8nChatWidget";

export const metadata: Metadata = {
  title: "IDEC · Ingeniería y Tecnología",
  description: "Soluciones IDEC en ingeniería civil, eléctrica, mecánica y tecnología aplicada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-site-theme="light">
      <head />
      <body className="bg-background-light font-sans text-slate-950 antialiased dark:bg-background-dark">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Providers>{children}</Providers>
          </main>
        </div>
        <N8nChatWidget />
      </body>
    </html>
  );
}
