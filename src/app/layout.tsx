import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Componentes reutilizables",
  description: "Creando comonentes reutilizables con NextTS y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-200 mx-auto max-w-6xl p-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
