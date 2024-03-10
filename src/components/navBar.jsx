import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="navbar-brand">
          <Link to="/create" className="navbar-brand">
            Create
          </Link>
          <Link to="/edit" className="navbar-brand">
            Edit
          </Link>
          <Link to="/delete" className="navbar-brand">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
