import "../assets/scss/all.scss";
import Header from "./Header";
import "@material-design-icons/font/filled.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="">
      <div className="container">
        <div className="navbar">
          <Header className="logo" />
          <button type="button" className="navbar-btn">
            <span className="material-icons">menu</span>
          </button>
          <ul className="navbar-menu">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-item">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="nav-item">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order" className="nav-item">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-item">
                Login
              </Link>
            </li>
          </ul>
          <div className="navbar-dropdown">
            <ul>
              <li>
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="nav-item">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="nav-item">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/order" className="nav-item">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-item">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
