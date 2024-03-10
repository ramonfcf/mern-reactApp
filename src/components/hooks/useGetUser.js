import { useState, useEffect } from "react";

const useGetUser = (userId) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(import.meta.env.VITE_API_URL + `/api/v1/users/${userId}`);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + `/api/v1/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
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
  }, [userId]);

  return { response, error, loading };
};

export default useGetUser;
