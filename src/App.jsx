import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import SplashScreen from "./component/common/SplashScreen";
import Layout from "./component/layout/Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <SplashScreen
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/service" element={<Service />} />

          <Route
            path="/servicedetails"
            element={<ServiceDetails />}
          />

          <Route path="/about" element={<About />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;