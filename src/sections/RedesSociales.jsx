import { socialMedia } from "@/data/socialMedia";

const RedesSociales = () => {
  return (
    <section id="redessociales" className="bg-black text-white px-6 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 border-b-4 border-red-600 inline-block pb-2">
        Redes sociales
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {socialMedia.map(({ name, username, icon: Icon }, idx) => (
          <div key={idx} className="flex items-center gap-4 justify-center">
            <div className="text-3xl text-red-600">
              <Icon />
            </div>
            <div className="text-left">
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-300">{username}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="https://wa.link/mpf4m6" target="_blank"
        className="inline-block bg-red-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition"
      >
        CONTACTAME
      </a>
    </section>
  );
};

export default RedesSociales;
