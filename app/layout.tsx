import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auton Health — A 1ª IA de causa raiz da saúde integrativa",
  description:
    "A primeira IA focada 100% em ajudar profissionais da saúde a identificar e tratar a causa raiz. Criada por profissionais, para profissionais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
