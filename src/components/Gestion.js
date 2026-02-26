export default function Gestion({ lista, onAdd, onDelete, nombre, setNombre, precio, setPrecio }) {
  return (
    <div className="space-y-6">
      {/* Título Estilo NORD */}
      <h2 className="text-xl font-bold tracking-[0.25em] uppercase text-[#06141B] px-2 antialiased">
        Panel de Control
      </h2>
      
      {/* FORMULARIO: Cristal Blanco Traslúcido */}
      <div className="p-4 bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-xl">
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            className="flex-1 bg-white/50 border border-white/20 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9BA8AB] transition-all placeholder:text-[#4A5C6A]" 
            placeholder="Nombre del producto" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
          <input 
            className="w-full md:w-32 bg-white/50 border border-white/20 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9BA8AB] transition-all placeholder:text-[#4A5C6A]" 
            type="number" 
            placeholder="Precio" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
          />
          <button 
            onClick={onAdd} 
            className="bg-[#06141B] text-[#CCD0CF] px-6 py-3 rounded-2xl font-bold hover:bg-[#11212D] active:scale-95 transition-all shadow-lg"
          >
            Agregar
          </button>
        </div>
      </div>

      {/* LISTA DE ELIMINAR: Efecto Agua Oscura */}
      <div className="grid grid-cols-1 gap-3">
        {lista.map((p) => (
          <div 
            key={p.id} 
            className="relative flex justify-between items-center p-4 rounded-[1.8rem] bg-[#06141B]/90 backdrop-blur-md border-t border-white/10 shadow-lg overflow-hidden group"
          >
            {/* Reflejo de cristal líquido */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col">
              <span className="text-[#CCD0CF] font-medium tracking-wide">{p.nombre}</span>
              <span className="text-[#9BA8AB] text-sm">${p.precio}</span>
            </div>

            <button 
              onClick={() => onDelete(p.id)} 
              className="relative z-10 text-red-400 hover:text-red-200 hover:bg-red-500/20 px-4 py-2 rounded-xl transition-all text-sm font-bold border border-red-500/20"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}