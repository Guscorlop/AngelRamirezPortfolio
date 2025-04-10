import testimonios from "../data/testimonios";
import { FaStar } from "react-icons/fa";

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-black py-8 px-4 text-white overflow-hidden">
      <div className="flex gap-6 animate-scroll w-[200%]">
        {[...testimonios, ...testimonios].map((item, index) => (
        <div className="bg-white text-black rounded-2xl p-4 w-[90vw] max-w-[600px] mx-4 shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-16 h-16 rounded-[30%] object-cover bg-red-600"
            />
            
            <div>
              <p className="font-bold">{item.nombre}</p>
              <p className="text-sm">{item.descripcion}</p>
              {/* Estrellas ahora están debajo del bloque completo */}
                <div className="flex gap-1 mt-2 ">
                    {Array.from({ length: item.calificacion }).map((_, i) => (
                    <FaStar key={i} className="text-red-600" />
                    ))}
                </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}
