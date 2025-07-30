import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./About";
import EditorPage from "./EditorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/preview" element={<EditorPage />} />
    </Routes>
  );
}

export default App;
