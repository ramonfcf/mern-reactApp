import PropTypes from "prop-types";
import formatBirthdate from "../hooks/useFormatBirthdate";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import EditUserModal from "./EditUserModal";

const UserCard = ({ user }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/users/${user._id}`
      );

      window.location.reload();
    } catch (error) {
      console.error(error);
      return <ErrorMessage message="Error deleting user" />;
    }
  };

  // const handleEdit = () => {};

  return (
    <div className="card my-3">
      <div className="card-body d-flex">
        <div className="me-auto">
          <h6 className="card-subtitle mb-2">
            Name: <span className="text">{user.name}</span>
          </h6>
          <h6 className="card-subtitle">Email: {user.email}</h6>
        </div>
        <div>
          <span className="badge bg-dark rounded-pill py-2 font-weight-bold">
            Birthdate: {formatBirthdate(user.birthdate)}
          </span>
          {/* <button
            className="btn btn-primary ms-2 btn-sm p-1"
            onClick={handleEdit}
          >
            Edit
          </button> */}
          <button
            className="btn btn-danger ms-2 btn-sm p-1"
            onClick={handleDelete}
          >
            Delete
          </button>
          <span>
            <EditUserModal />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func,
};
