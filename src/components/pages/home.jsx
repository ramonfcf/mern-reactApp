import useGetAllUsers from "../hooks/useGetAllUsers";
import formatBirthdate from "../hooks/useFormatBirthdate";

export default function Home() {
  const { response, error, loading } = useGetAllUsers();

  return (
    <div>
      <h1>Home</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      )}{" "}
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {response && (
        <div className="mt-5">
          <ul className="list-group">
            {response.map((user, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Name: {user.name}</div>
                  email: {user.email}
                </div>
                <span className="badge bg-primary rounded-pill">
                  Birthdate: {formatBirthdate(user.birthdate)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
