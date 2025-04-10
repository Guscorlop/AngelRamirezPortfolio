export default function Hero() {
    return (
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      >
        <div className="bg-black/60 p-6 rounded-lg max-w-xl w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">
            ANGEL RAMIREZ
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Licenciado en entrenamiento deportivo, <br />
            y entrenador personal. El deporte lo es todo.
          </p>
          <a
            href="#contactame"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-lg font-semibold transition"
          >
            Contactame
          </a>
        </div>
      </section>
    );
  }