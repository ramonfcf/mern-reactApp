import { useEffect, useState } from "react";

const useGetAllUsers = (token) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/v1/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setResponse(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  });

  return { response, error, loading };
};

export default useGetAllUsers;
