import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import NoMatch from "./components/NoMatch";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
