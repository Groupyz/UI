import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import LoginSignup from "./pages/login_signup/LoginSignup";
import QrPage from "./pages/qr/instructionsComponent";
import AddGroups from "./pages/add_groups/addGroups";
import Dashboard from "./pages/dashboard/dashboard";
import NoMatch from "./components/NoMatch";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/addgroups" element={<AddGroups />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
