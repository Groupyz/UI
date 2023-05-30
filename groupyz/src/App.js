import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import NoMatch from "./components/NoMatch";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  // all routes defined in the app
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
  ];

  const location = useLocation();
  const hideHeaderFooter = !routes.find(
    (route) => route.path === location.pathname
  );

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
