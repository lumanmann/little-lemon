import Logo from "../assets/images/Asset 16@4x.png";
import "../assets/scss/all.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Little Lemon logo" className="logo"></img>
      </Link>
    </header>
  );
};

export default Header;
