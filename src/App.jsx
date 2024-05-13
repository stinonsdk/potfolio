import Workflow  from "./components/Workflow"
import Feature from "./components/Feature"
import Navbar from "./components/Navbar"
import Welcomepage from "./components/Welcomepage"
import Pricing from "./components/Pricing"
import About from "./components/About"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>

    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Welcomepage />
      <Feature />
      <Workflow />
      <Pricing />
      <About />
      <Footer />
    </div>
   
    </>
   
  )
}

export default App
