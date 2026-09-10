import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CEI Itaipu | Uma igreja a serviço do Reino",
    template: "%s | CEI Itaipu",
  },
  description:
    "Conheça o CEI Itaipu, veja a programação, acompanhe as mensagens e planeje sua visita em Itaipu, Niterói.",
  keywords: [
    "CEI Itaipu",
    "igreja em Itaipu",
    "igreja evangélica Niterói",
    "culto em Itaipu",
    "Centro Evangelístico Internacional",
  ],
  icons: {
    icon: withBasePath("/images/cei-logo.png"),
    shortcut: withBasePath("/images/cei-logo.png"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
