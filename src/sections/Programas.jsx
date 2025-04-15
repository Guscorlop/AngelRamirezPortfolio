import programas from "../data/programas";

const Programas = () => {
  return (
    <section
      id="programas"
      className="bg-black text-white py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-gym.jpg')" }}
    >
      <div className="max-w-6xl mx-auto bg-black bg-opacity-80 p-8 rounded-xl">
        <div className="flex justify-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12 border-b-4 border-red-600 pb-2 inline-block">
            Programas de Entrenamiento Online
            </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {programas.map((programa, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-red-600 transition-shadow"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-2">
                {programa.nombre}
              </h3>
              <p className="text-gray-300 mb-4">{programa.descripcion}</p>

              <h4 className="text-lg font-semibold text-red-400 mb-2">
                Este programa incluye:
              </h4>
              <ul className="list-disc list-inside text-gray-200 mb-6 space-y-1">
                {programa.incluye.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {programa.planes.map((plan, i) => (
                  <div
                    key={i}
                    className="border border-red-500 p-4 rounded-lg text-center bg-gray-800 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <h5 className="text-xl font-semibold">{plan.duracion}</h5>
                    <p className="text-2xl font-bold">{plan.precio}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programas;
