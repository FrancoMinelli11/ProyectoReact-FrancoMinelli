import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Category, Hombres, ItemDetail, NotFound } from "../pages"
import { NavBar } from "../components"

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Hombres/>}/>
        <Route path="/item/:id" element={<ItemDetail/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}
