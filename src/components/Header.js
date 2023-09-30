import Logo from "../assets/images/Asset 16@4x.png";
import '../assets/scss/all.scss';

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={Logo} alt="Little Lemon logo" className="logo"></img>
      </a>
    </header>
  );
};

export default Header;
