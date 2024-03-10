import { useEffect, useState } from "react";

const usePatchUser = (userId, data) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + `/api/v1/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
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
  }, [userId, data]);

  return { response, error, loading };
};

export default usePatchUser;
