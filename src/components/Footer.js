import Logo from "../assets/images/Asset 18@4x.png";
import Instagram from "../assets/images/logo-instagram.png";
import Facebbok from "../assets/images/logo-facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <img src={Logo} alt="logo" className="footer-logo"></img>
          <ul className="footer-nav">
            <li className="footer-title">Doormat Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
          <ul className="footer-contact">
            <li className="footer-title">Contact</li>
            <li>Adress:</li>
            <li>
              <address>1020 W Madison St, Chicago, IL 60607</address>
            </li>
            <li>Phone:</li>
            <li>
              <a href="tel:1-312-888-3041">(312) 888-3041</a>
            </li>
            <li>Email:</li>
            <li>
              <a href="mailto:contact@little.lemon.com">
                contact@little.lemon.com
              </a>
            </li>
          </ul>
          <div>
            <p className="footer-title">Social Media</p>
            <ul className="flex social-media">
              <li>
                <a>
                  <img src={Instagram} alt="instagram"></img>
                </a>
              </li>
              <li>
                <a>
                  <img src={Facebbok} alt="facebbok"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
