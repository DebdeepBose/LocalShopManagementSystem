import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <aside className="w-52 bg-gray-600 ">MY LAYOUT SIDEBAR</aside>

      <main className="flex-1 p-4">
        <h1>Layout Works</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
