import PropTypes from "prop-types";
import formatBirthdate from "../hooks/useFormatBirthdate";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import EditUserModal from "./EditUserModal";
import { getToken } from "../hooks/useAuthentication";

const UserCard = ({ user }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/users/${user._id}`,
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error(error);
      return <ErrorMessage message="Error deleting user" />;
    }
  };

  return (
    <div className="card my-3">
      <div className="card-body d-flex">
        <div className="me-auto">
          <h6 className="card-subtitle mb-2">
            Name: <span className="text">{user.name}</span>
          </h6>
          <h6 className="card-subtitle">Email: {user.email}</h6>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-dark rounded-pill py-2 font-weight-bold">
            Birthdate: {formatBirthdate(user.birthdate)}
          </span>
          <span className="px-2">|</span>
          <button
            className="btn btn-danger ms-2 btn-sm p-1"
            onClick={handleDelete}
          >
            Delete
          </button>
          <span>
            <EditUserModal user={user} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    birthdate: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func,
};
