import { NavLink } from "react-router-dom";
import classes from "../components/weatherDetails/Weather.module.css";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <span className={`navbar-brand mb-0  ${classes.nav_text}`}>
          Pro-weather App
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
