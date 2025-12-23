import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Hero from "../pages/Hero";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
