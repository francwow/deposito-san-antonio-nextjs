import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
