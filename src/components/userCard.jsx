import propTypes from "prop-types";
import formatBirthdate from "../hooks/useFormatBirthdate";

const UserCard = ({ user }) => {
  return (
    <div className="card my-3">
      <div className="card-body d-flex">
        <div className="me-auto">
          <h6 className="card-subtitle mb-2">
            Name: <span className="text-">{user.name}</span>
          </h6>
          <h6 className="card-subtitle">
            <span></span>Email: {user.email}
          </h6>
        </div>
        <div>
          <span className="badge bg-dark rounded-pill py-3 font-weight-bold">
            Birthdate: {formatBirthdate(user.birthdate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    birthdate: propTypes.string.isRequired,
  }).isRequired,
};
