export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Sección de Blog</h1>

      {/* Navegación secundaria simple */}
      <nav className="mb-6 space-x-4">
        <span className="underline">Artículos recientes</span>
        <span className="underline">Noticias</span>
        <span className="underline">Tutoriales</span>
      </nav>

      {/* Contenido dinámico */}
      <div>{children}</div>
    </section>
  );
}
