// app/page.tsx
export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold">Usuarios</h2>
          <p className="text-3xl font-bold mt-2">150</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Ver más
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold">Ventas</h2>
          <p className="text-3xl font-bold mt-2">75</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Ver más
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow p-6 text-gray-800">
          <h2 className="text-lg font-semibold">Reportes</h2>
          <p className="text-3xl font-bold mt-2">12</p>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            Ver más
          </button>
        </div>

      </div>
    </main>
  );
}
