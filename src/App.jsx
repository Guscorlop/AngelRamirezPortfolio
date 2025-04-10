import Navbar from './components/Navbar'
import Hero from './sections/Home'
import Resultados from './sections/Resultados'
import Testimonios from './sections/Testimonios'


function App() {
  
  return (
    <>
      <Navbar/>
      <main className="pt-[64px]"> {/* para que el navbar fijo no tape el contenido */}
        <Hero />
        <Resultados />
        <Testimonios />
      </main>
    </>
  )
}

export default App
