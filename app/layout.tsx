import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Depósito San Antonio E Hijos S.A.S",
  description:
    "Somos una Empresa colombiana que se desempeña en varios campos de actividad petrolera y de construcción. Con ventas al retal y de línea con productos nuevos y de segunda mano. Nos caracterizamos por brindar un servicio de calidad con precios más asequibles para nuestros clientes, contribuyendo al desarrollo de Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${materialSymbols.variable}`} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
