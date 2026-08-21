import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const siteUrl = "https://sandrozdb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sandro Ferreira | Consultoria, IA, Dados e Automação",
  description: "Portfólio profissional de Sandro Ferreira com projetos e experiências em consultoria, inteligência artificial, dados, automação, IoT, cloud e tecnologia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sandro Ferreira | Consultoria, IA, Dados e Automação",
    description: "Transformo problemas reais em soluções com dados, inteligência artificial e automação.",
    url: siteUrl,
    siteName: "Sandro Ferreira",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sandro Ferreira — Consultoria, Inteligência Artificial, Dados e Automação" }],
  },
  twitter: { card: "summary_large_image", title: "Sandro Ferreira | Consultoria, IA, Dados e Automação", description: "Tecnologia aplicada à resolução de problemas reais.", images: ["/opengraph-image"] },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>{children}<Analytics /></body>
    </html>
  );
}
