import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarScreen";

import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import LandingPage from "./components/Landing";

import BookPanel from "./screens/BookPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<Homescreen />} />
        <Route path="/book/:flightid" element={<Bookingscreen />} />
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/profile" element={<BookPanel />} />
      </Routes>
    </div>
  );
}

export default App;
