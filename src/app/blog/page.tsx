import Link from "next/link";

const articulos = [
  { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
  { slug: "react-server-components", titulo: "React Server Components" },
  { slug: "app-router-guia", titulo: "Guía del App Router" },
];

export default function BlogPage() {
  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-6 space-y-2">
        {articulos.map((a) => (
          <li key={a.slug}>
            <Link href={`/blog/${a.slug}`} className="underline">
              {a.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
