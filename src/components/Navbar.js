export default function Navbar({ vista, setVista }) {
  return (
    <div className="flex justify-center mb-8">
      {/* Contenedor Base: Cristal Blanco Traslúcido (Efecto de la imagen) */}
      <div className="relative flex p-2 bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-xl group overflow-hidden">
        
        {/* Botón Productos */}
        <button 
          onClick={() => setVista("productos")}
          className={`peer/btn1 relative z-10 flex items-center gap-3 w-40 px-5 py-3 text-sm font-medium transition-all duration-500 
            ${vista === "productos" ? "text-white" : "text-gray-500 hover:text-gray-800"}`}
        >
          {/* Icono de Casa (SVG de la imagen) */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z"/>
          </svg>
          <span className="tracking-wide">Productos</span>
        </button>

        {/* Botón Gestión */}
        <button 
          onClick={() => setVista("gestion")}
          className={`peer/btn2 relative z-10 flex items-center gap-3 w-40 px-5 py-3 text-sm font-medium transition-all duration-500 
            ${vista === "gestion" ? "text-white" : "text-gray-500 hover:text-gray-800"}`}
        >
          {/* Icono de Actualizar */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 512 512">
            <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c51.9,0,99.3-19.1,136-50.6c11.1-9.5,12.5-26,3-37.1 c-9.5-11.1-26-12.5-37.1-3C328.7,399.2,293.7,416,256,416c-88.4,0-160-71.6-160-160s71.6-160,160-160c40,0,76.5,14.7,104.7,38.9 l-30.1,30.1c-15.6,15.6-4.6,42.4,17.5,42.4H448c13.3,0,24-10.7,24-24V112c0-22.1-26.8-33.1-42.4-17.5l-31.9,31.9 C358.5,88.1,310.2,64.3,256,48z"/>
          </svg>
          <span className="tracking-wide">Gestión</span>
        </button>

        {/* INDICADOR MÓVIL: Efecto Agua Oscura Líquida */}
        <div className={`absolute inset-y-2 left-2 w-40 rounded-[1.8rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none
          /* Color Negro Mate con transparencia de agua */
          bg-[#1a1a1a]/90 backdrop-blur-md
          /* Borde brillante superior para simular relieve de gota */
          border-t border-white/20
          /* Sombra externa para despegarlo del fondo blanco */
          shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]
          /* Lógica de movimiento */
          ${vista === "productos" ? "translate-x-0" : "translate-x-[160px]"}
          peer-hover/btn1:!translate-x-0 peer-hover/btn2:!translate-x-[160px]`}
        >
          {/* Brillo de superficie (Glint) para el acabado "Premium" */}
          <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40"></div>
        </div>

      </div>
    </div>
  );
}