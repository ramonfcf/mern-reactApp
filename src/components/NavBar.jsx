import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="navbar-brand">
          <span className="navbar-brand">|</span>
          <Link to="/all-users" className="navbar-brand">
            All Users
          </Link>
          <span className="navbar-brand">|</span>
          <Link to="/create" className="navbar-brand">
            Create User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
