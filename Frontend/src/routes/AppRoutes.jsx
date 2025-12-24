import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import LandingMain from "../pages/Landing/LandingMain";
import ManagerMain from "../pages/Manager/ManagerMain";
import ManagerRegister from "../pages/Manager/ManagerRegister";
import ManagerLogin from "../pages/Manager/ManagerLogin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/manager" element={<ManagerMain />} />
        <Route path="/manager/register" element={<ManagerRegister />} />
        <Route path="/manager/login" element={<ManagerLogin />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
