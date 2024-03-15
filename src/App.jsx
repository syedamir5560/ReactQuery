import { Route, Routes } from "react-router-dom"
import NavbarTop from "./Components/NavbarTop"
import Products from "./Components/Products"
import Imagesearch from "./Components/Imagesearch"


function App() {


  return (
    <>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/imagesearch" element={<Imagesearch/>}/>
      </Routes>
       
    </>
  )
}

export default App
