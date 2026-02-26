export default function Gestion({ lista, onAdd, onDelete, nombre, setNombre, precio, setPrecio }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Panel de Control</h2>
      
      {/* Formulario */}
      <div className="flex gap-2">
        <input className="border p-2 rounded-lg flex-1" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input className="border p-2 rounded-lg w-24" type="number" placeholder="Precio" value={precio} onChange={(e)=>setPrecio(e.target.value)} />
        <button onClick={onAdd} className="bg-black text-white px-4 py-2 rounded-lg">Agregar</button>
      </div>

      {/* Lista con Eliminar */}
      <div className="flex space-y-2">
        {lista.map((p) => (
          <div key={p.id} className="flex justify-between items-center bg-white p-3 border rounded-xl">
            <span>{p.nombre} - <span className="text-gray-500">${p.precio}</span></span>
            <button onClick={() => onDelete(p.id)} className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg transition">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}