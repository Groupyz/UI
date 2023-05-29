import * as React from "react";
import WelcomePage from "./pages/welcome/WelcomePage";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
