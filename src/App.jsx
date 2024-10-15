import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"
import ShowJob from "./pages/ShowJob"
import AddJob from "./pages/AddJob"
import "@fontsource/dm-sans"; // Defaults to weight 400
import "@fontsource/dm-sans/400.css"; // Specify weight
import "@fontsource/dm-sans/400-italic.css"; // Specify weight and style
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import EditJob from "./pages/EditJob"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<AddJob />} />
      <Route path="/jobs/:id" element={<ShowJob />} />
      <Route path="/jobs/:id/edit" element={<EditJob />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}