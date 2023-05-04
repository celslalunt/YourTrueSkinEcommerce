import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Products } from "../components/product";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Outlet />
  </div>
  );
};
