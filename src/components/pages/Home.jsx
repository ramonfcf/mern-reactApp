import { useState } from "react";
import useGetAllUsers from "../../hooks/useGetAllUsers";
import UserCard from "../UserCard";
import Loading from "../Loading";
import SearchBar from "../SearchBar";

export default function Home() {
  const { response, error, loading } = useGetAllUsers();
  const [searchedUser, setSearchedUser] = useState("");

  const searchedUserLowCase = searchedUser.toLowerCase();

  const checkIfTextIncludes = (text, searchTerm) => {
    return text.toLowerCase().includes(searchTerm);
  };

  const filteredUsers = response?.filter((user) => {
    const { name, email, birthdate } = user;

    return (
      checkIfTextIncludes(name, searchedUserLowCase) ||
      checkIfTextIncludes(email, searchedUserLowCase) ||
      checkIfTextIncludes(birthdate, searchedUserLowCase)
    );
  });

  return (
    <div className="container">
      <h3 className="pt-3">You can see all users here</h3>
      <SearchBar
        type="text"
        onChange={setSearchedUser}
        value={searchedUser}
        placeholder={"Name, email or birthdate"}
      />
      {error && (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      )}
      {loading && <Loading />}
      {response && (
        <ul className="list-group">
          {filteredUsers.map((user, index) => (
            <li key={index} className="list-group-item">
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
