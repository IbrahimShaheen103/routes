import { Link } from "react-router-dom";
import logo from "./logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} width={140} height={50} alt="logo" />
      </div>
      <Link to="/" className="navlink">
        Home
      </Link>
      <Link to="/about" className="navlink">
        About
      </Link>
      <Link to="/create" className="navlink">
        Create
      </Link>
      <Link to="/list" className="navlink">
        Listing
      </Link>
    </nav>
  );
};

export default Navbar;
