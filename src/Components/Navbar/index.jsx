import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  const categories = [
    { to: "/", text: "Home" },
    { to: "/all", text: "All" },
    { to: "/clothes", text: "Clothes" },
    { to: "/furniture", text: "Furniture" },
    { to: "/toys", text: "Toys" },
  ];

  const routes = [
    { to: "/my-orders", text: "My Orders" },
    { to: "/my-account", text: "My Account" },
    { to: "/sign-in", text: "Sign In" },
  ];
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {categories.map((category, index) => (
          <li key={index} className="first:font-semibold first:text-lg">
            <NavLink
              to={category.to}
              className={({ isActive }) => ` ${isActive ? activeStyle : ""}`}
            >
              {category.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">rosario@testing.com</li>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              className={({ isActive }) => ` ${isActive ? activeStyle : ""}`}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        <li className="flex items-center">
          <ShoppingBagIcon className="w-4 h-4 text-black" />
          <span>{context.count}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
