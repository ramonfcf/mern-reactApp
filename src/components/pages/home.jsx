import useGetAllUsers from "../../hooks/useGetAllUsers";
import UserCard from "../userCard";
import Loading from "../loading";

export default function Home() {
  const { response, error, loading } = useGetAllUsers();

  return (
    <div className="container">
      <h3 className="pt-3">You can see all users here</h3>
      {error && (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      )}{" "}
      {loading && <Loading />}
      {response && (
        <ul className="list-group">
          {response.map((user, index) => (
            <li key={index} className="list-group-item">
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
