import Link from "next/link";

const productos = [
  { id: "1", nombre: "Laptop" },
  { id: "2", nombre: "Smartphone" },
  { id: "3", nombre: "Tablet" },
];

export default function ProductosPage() {
  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ul className="list-disc pl-6 space-y-2">
        {productos.map((p) => (
          <li key={p.id}>
            <Link href={`/productos/${p.id}`} className="underline">
              {p.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
