import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  </>
);

export default App;
