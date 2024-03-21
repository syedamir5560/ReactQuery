import { Route, Routes } from "react-router-dom"
import NavbarTop from "./Components/NavbarTop"
import Products from "./Components/Products"
import Imagesearch from "./Components/Imagesearch"
import Cardcontent from "./Components/Cardcontent"
import Sortproducts from "./Components/Sortproducts"
import SortProdPRD from "./Components/SortProdPRD"


function App() {


  return (
    <>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/imagesearch" element={<Imagesearch/>}/>
        <Route path="/product/:productid" element={<Cardcontent/>}/>
        <Route path="/sortproducts" element={<Sortproducts/>}/>
        <Route path="/sortprodprd" element={<SortProdPRD/>}/>
      </Routes>
       
    </>
  )
}

export default App
