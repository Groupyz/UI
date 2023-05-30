import * as React from "react";
import Homepage from "./pages/home/Homepage";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
