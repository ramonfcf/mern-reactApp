import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import Input from "../components/Input";
import UserCard from "../components/UserCard";
import propTypes from "prop-types";

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
    const newUser = {
      name,
      email,
      birthdate,
    };

    try {
      const response = await axios({
        method,
        url: url,
        data: newUser,
      });

      setReturnedUser(response.data);
      setName("");
      setEmail("");
      setBirthdate("");
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
