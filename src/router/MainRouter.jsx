import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hombres, ItemDetail, NotFound } from "../pages"

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Hombres/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/item/:id" element={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}
