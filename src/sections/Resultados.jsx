import { useState } from "react";
import resultados from "../data/resultados";

export default function Resultados() {
  const [activo, setActivo] = useState(0);

  const handleDotClick = (index) => setActivo(index);

  return (
    <section id="resultados" className="bg-black text-white py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">Resultados</h2>

      <div className="max-w-4xl mx-auto mb-6">
        <img
          src={resultados[activo].imagen}
          alt={resultados[activo].alt}
          className="w-full max-h-[400px] object-cover rounded"
        />
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {resultados.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activo ? "bg-red-600" : "bg-white"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <a
        href="#contactame"
        className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-lg font-semibold transition"
      >
        Contactame
      </a>
    </section>
  );
}
