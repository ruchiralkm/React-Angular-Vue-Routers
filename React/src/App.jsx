import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
