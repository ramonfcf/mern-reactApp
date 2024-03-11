import { useState } from "react";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
import axios from "axios";
import Input from "../Input";
import UserCard from "../UserCard";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [returnedUser, setReturnedUser] = useState(null);
  const [error, setError] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      birthdate,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/api/v1/users",
        user
      );
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
      <h1>You can create a user here</h1>
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
        {returnedUser && <SuccessMessage message={"User created"} />}
        {returnedUser && <UserCard user={returnedUser} />}
        <Button onClick={submitForm} text="Create User" />
      </form>
    </div>
  );
};

export default CreateUser;
