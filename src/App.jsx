import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Gestion from "./components/Gestion";

function App() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [vista, setVista] = useState("productos");

  const API = "https://nctp9pz2ie.execute-api.us-west-1.amazonaws.com/productos";

  const obtenerProductos = () => {
    fetch(API).then(res => res.json()).then(data => setProductos(data));
  };

  useEffect(() => { obtenerProductos(); }, []);

  const agregar = () => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio })
    }).then(() => { setNombre(""); setPrecio(""); obtenerProductos(); });
  };

  const eliminar = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => obtenerProductos());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar vista={vista} setVista={setVista} />
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm">
        {vista === "productos" ? (
          <Productos lista={productos} />
        ) : (
          <Gestion 
            lista={productos} 
            onAdd={agregar} 
            onDelete={eliminar}
            nombre={nombre} setNombre={setNombre}
            precio={precio} setPrecio={setPrecio}
          />
        )}
      </div>
    </div>
  );
}

export default App;