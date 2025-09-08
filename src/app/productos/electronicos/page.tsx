export default function ElectronicosPage() {
  const productos = ["Laptop Gamer", "Smartphone Pro", "Auriculares Bluetooth"];

  return (
    <main>
      <h2 className="text-xl font-bold mb-2">Productos &gt; Electrónicos</h2>
      <p className="mb-4">{productos.length} productos encontrados</p>
      <ul className="list-disc pl-6 space-y-2">
        {productos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </main>
  );
}
