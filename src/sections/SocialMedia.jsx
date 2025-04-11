import { socialMedia, socialImages } from "@/data/socialMedia";

export default function SocialSection() {
  return (
    <section className="bg-black text-white px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-red-600">Redes sociales</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Lista de redes */}
        <div className="grid grid-cols-2 gap-4">
          {socialMedia.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={item.icon} alt={item.name} className="w-8 h-8 rounded-full bg-white p-1" />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">{item.username}</p>
              </div>
            </div>
          ))}
          <button className="col-span-1 w-full mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold">
            Contáctame
          </button>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-2 gap-4">
          {socialImages.map((img, i) => (
            <img key={i} src={img} alt={`social-${i}`} className="rounded-xl object-cover w-full h-40 sm:h-52" />
          ))}
        </div>
      </div>
    </section>
  );
}
