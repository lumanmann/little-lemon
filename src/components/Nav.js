import "../assets/scss/all.scss";
import Header from "./Header";
import "@material-design-icons/font/filled.css";

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
              <a href="#" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Reservations
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Order Online
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Login
              </a>
            </li>
          </ul>
          <div className="navbar-dropdown">
            <ul>
              <li>
                <a href="#" className="nav-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
