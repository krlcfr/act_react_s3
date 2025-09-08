import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Sitio Next.js",
  description: "Actividad práctica de enrutamiento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <Link href="/" style={{ marginRight: "15px" }}>Inicio</Link>
          <Link href="/productos" style={{ marginRight: "15px" }}>Productos</Link>
          <Link href="/blog" style={{ marginRight: "15px" }}>Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
