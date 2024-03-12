import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    username: import.meta.env.VITE_APP_NAME,
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

const authenticate = async () => {
  if (localStorage.getItem("expiresIn") < Date.now()) deleteToken();
  if (localStorage.getItem("token")) return;

  try {
    const response = await api.post("/auth/authenticate", {});

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("expiresIn", Date.now() + 3600000);
  } catch (error) {
    console.error("Error authenticating", error);
  }
};

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiresIn");
};

export { authenticate, getToken };
