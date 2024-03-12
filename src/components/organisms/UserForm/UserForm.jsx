import { useState } from "react";

import axios from "axios";
import propTypes from "prop-types";

import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import UserCard from "../UserCard/UserCard";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import { getToken } from "../../../hooks/useAuthentication";
import SuccessMessage from "../../atoms/SuccessMessage/SuccessMessage";

const UserForm = ({ user, title, method = "POST" }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [birthdate, setBirthdate] = useState(user ? user.birthdate : "");
  const [responseData, setReturnedUser] = useState(null);
  const [error, setError] = useState(null);

  const url =
    import.meta.env.VITE_API_URL +
    "/api/v1/users" +
    (user ? `/${user._id}` : "");

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios({
        method,
        url: url,
        headers: {
          Authorization: getToken(),
        },
        data: {
          name,
          email,
          birthdate,
        },
      });

      setReturnedUser(response.data);
      setName("");
      setEmail("");
      setBirthdate("");

      if (method === "PATCH") refreshPage();
    } catch (error) {
      const {
        response: {
          data: { message },
        },
      } = error;
      setError({ message });
      setReturnedUser(null);
    }
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="container py-5">
      {title && <h1>{title}</h1>}
      <form onSubmit={submitForm}>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value, setError(null))}
          label="Name"
          placeholder="Enter name"
        />
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value, setError(null))}
          label="Email"
          placeholder="Enter email"
        />
        <Input
          type="date"
          value={birthdate}
          onChange={(event) => setBirthdate(event.target.value, setError(null))}
          label="Birthdate"
          placeholder="Enter birthdate"
        />
        {error && <ErrorMessage error={error.message} />}
        {responseData && (
          <SuccessMessage
            message={method === "POST" ? "User created" : " User updated"}
          />
        )}
        {responseData && <UserCard user={responseData} />}
        <Button
          onClick={submitForm}
          text={method === "POST" ? "Create User" : "Update User"}
        />
      </form>
    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  user: propTypes.object,
  method: propTypes.string,
  buttonMessage: propTypes.string,
  title: propTypes.string,
};
