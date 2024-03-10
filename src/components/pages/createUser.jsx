import { useState } from "react";
import Button from "../button";
import ErrorMessage from "../errorMessage";
import SuccessMessage from "../successMessage";
import axios from "axios";
import Input from "../input";

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
        "http://localhost:8080/api/v1/users",
        user
      );
      setReturnedUser(response.data);
    } catch (error) {
      const {
        response: {
          data: { message },
        },
      } = error;
      setError({ message });
    }
  };

  return (
    <div className="container py-5">
      <h1>Create User</h1>
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
        <Button onClick={submitForm} />
      </form>
    </div>
  );
};

export default CreateUser;
