import axios from "axios";
import PropTypes from "prop-types";

import Button from "../../atoms/Button/Button";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import EditUserModal from "../EditUserModal/EditUserModal";
import { getToken } from "../../../hooks/useAuthentication";
import formatBirthdate from "../../../hooks/useFormatBirthdate";

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
      <div class="card-header">
        <strong>{user.name}</strong>
      </div>
      <div class="card-body">
        <p class="card-title">
          <span className="font-weight-bold">
            <strong>Email: </strong>
          </span>
          {user.email}
        </p>
        <p class="card-text font-weight-bold">
          <strong>Birthdate: </strong>
          {formatBirthdate(user.birthdate)}
        </p>
        <p class="card-text">
          <Button
            text="Delete"
            color="danger"
            size="small"
            onClick={handleDelete}
          />
          <span>
            <EditUserModal user={user} />
          </span>
        </p>
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
