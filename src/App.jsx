import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NoPage from "./components/NoPage"
import Header from "./components/Header"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Work from "./pages/Work"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
