import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hombres, NotFound } from "../pages"

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Hombres/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}
