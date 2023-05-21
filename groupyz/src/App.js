import * as React from "react";
import Dashboard from "./components/Dashboard";
import HelloWorldNEW from "./components/HelloWorldNEW";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
