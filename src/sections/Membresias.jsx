import membresias from "../data/membresias";

const colorMap = {
  red: "bg-red-600 text-white",
  blue: "bg-blue-600 text-white",
  green: "bg-green-600 text-white",
  yellow: "bg-yellow-500 text-black",
  purple: "bg-purple-600 text-white",
  orange: "bg-orange-500 text-black",
};

const Membresias = () => {
  return (
    <section
  id="membresia"
  className="py-12 bg-black text-white px-4"

>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 border-b-4 inline-block border-red-600 pb-2">
          Membresías
        </h2>
        <p className="text-gray-300 mt-2">Entrenamiento personalizado</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {membresias.map((plan, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-700 flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <div className={`${colorMap[plan.color]} p-6 text-center`}>
              <h3 className="text-xl font-bold">{plan.titulo}</h3>
              <p className="text-4xl font-extrabold mt-2">{plan.precio}</p>
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <p className="mb-6 text-gray-200">{plan.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membresias;
