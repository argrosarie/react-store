import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Brand</NavLink>
        </li>
        <li>
          <NavLink to="/all">All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/furniture">Furniture</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
      </ul>
      <ul>
        <li>rosario@testing.com</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>🛒2</li>
      </ul>
    </nav>
  );
};

export default Navbar;
