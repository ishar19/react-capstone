import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Display from "./pages/Display";
import Browse from "./pages/Browse";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/display" element={<Display />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
