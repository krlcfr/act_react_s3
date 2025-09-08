import Link from "next/link";

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Sección de Productos</h1>

      {/* Navegación secundaria */}
      <nav className="mb-6 space-x-4">
        <Link href="/productos/electronicos" className="underline">Electrónicos</Link>
        <Link href="/productos/ropa" className="underline">Ropa</Link>
      </nav>

      {/* Contenido dinámico */}
      <div>{children}</div>
    </section>
  );
}
