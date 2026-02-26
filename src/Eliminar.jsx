export default function Eliminar() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      {/* Card principal */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl flex overflow-hidden">
        
       

        {/* Contenido */}
        <main className="flex-1 p-10 bg-gray-50">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              📦 Gestión de Productos
            </h1>

            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Agregar
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />

            <input
              type="number"
              placeholder="Precio"
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Lista productos */}
          <div className="space-y-4">
            
            <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div>
                <p className="font-semibold text-gray-800">
                  FLAG, SENSOR TR:823
                </p>
                <p className="text-sm text-gray-500">$21</p>
              </div>
              <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition">
                Eliminar
              </button>
            </div>

            <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div>
                <p className="font-semibold text-gray-800">hola</p>
                <p className="text-sm text-gray-500">$1</p>
              </div>
              <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition">
                Eliminar
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}