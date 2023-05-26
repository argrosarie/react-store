import { NavLink } from "react-router-dom";
const Navbar = () => {
  const categories = [
    { to: "/", text: "Brand" },
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
    <nav>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <NavLink to={category.to}>{category.text}</NavLink>
          </li>
        ))}
      </ul>
      <ul>
        <li>rosario@testing.com</li>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink to={route.to}>{route.text}</NavLink>
          </li>
        ))}
        <li>🛒2</li>
      </ul>
    </nav>
  );
};

export default Navbar;
