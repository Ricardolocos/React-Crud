export default function Productos({ lista = [] }) {
  if (!lista) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#06141B] px-2 tracking-tight">
        Catálogo de Productos
      </h2>

      {/* Contenedor Principal: Cristal Gélido (usando #CCD0CF con transparencia) */}
      <div className="p-4 bg-[#CCD0CF]/30 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-xl">
        <div className="grid grid-cols-1 gap-4">
          
          {lista.length > 0 ? (
            lista.map((p) => (
              <div 
                key={p.id} 
                className="relative flex justify-between items-center p-5 rounded-[1.8rem] transition-all duration-300 group overflow-hidden
                           /* Fondo usando el Azul Profundo de la paleta: #06141B */
                           bg-[#06141B]/90 backdrop-blur-md
                           /* Borde sutil usando el tono medio: #4A5C6A */
                           border-t border-[#4A5C6A]/50
                           /* Sombra de profundidad */
                           shadow-[0_8px_20px_rgba(6,20,27,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]"
              >
                {/* Brillo líquido de superficie */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#9BA8AB]/5 to-[#CCD0CF]/20 opacity-40 pointer-events-none"></div>

                {/* Contenido del Producto */}
                <div className="relative z-10 flex items-center gap-3">
                  {/* Punto indicador usando el tono azul acero #4A5C6A */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9BA8AB] shadow-[0_0_10px_rgba(155,168,171,0.8)]"></div>
                  <span className="font-medium text-[#CCD0CF] tracking-wide">{p.nombre}</span>
                </div>

                {/* Precio resaltado en el gris más claro */}
                <span className="relative z-10 text-white font-bold text-lg drop-shadow-md">
                  ${p.precio}
                </span>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-[#253745] italic font-medium">
              No hay productos en el inventario.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}