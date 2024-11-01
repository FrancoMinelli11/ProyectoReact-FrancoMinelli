import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Category, Home, ItemDetail, NotFound } from "../pages"
import { NavBar } from "../components"
import { CartDetails } from "../components/CartDetails"

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item/:id" element={<ItemDetail/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/cart-details" element={<CartDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}
