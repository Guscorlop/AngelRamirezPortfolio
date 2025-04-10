export default function Navbar() {
    return (
      <header className="bg-red-700 text-white fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <ul className="flex flex-wrap justify-center gap-6">
            {["Home", "Resultados", "Testimonios", "Membresia", "Contactame"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-semibold hover:underline transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  