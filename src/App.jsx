import Navbar from './components/Navbar'
import Hero from './sections/Home'
import Resultados from './sections/Resultados'
import Testimonios from './sections/Testimonios'
import Membresias from './sections/Membresias'
import Programas from './sections/Programas'
import SocialSection from './sections/SocialMedia'


function App() {
  
  return (
    <>
      <Navbar/>
      <main className="pt-[64px]"> {/* para que el navbar fijo no tape el contenido */}
        <Hero />
        <Resultados />
        <Testimonios />
        <Membresias />
        <Programas />
        <SocialSection />
      </main>
    </>
  )
}

export default App
