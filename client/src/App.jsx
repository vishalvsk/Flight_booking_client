import "./App.css";
import Navbar from "./components/NavbarScreen";
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
