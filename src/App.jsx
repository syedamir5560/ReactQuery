import { Route, Routes } from "react-router-dom"
import NavbarTop from "./Components/NavbarTop"
import Products from "./Components/Products"


function App() {


  return (
    <>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Products/>}/>
      </Routes>
       
    </>
  )
}

export default App
