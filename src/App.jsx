import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleColumn from "./components/SingleColumn";
import NavBar from "./components/NavBar";
import AllUsers from "./components/pages/AllUsers";
import Home from "./components/pages/Home";
import CreateUser from "./components/pages/CreateUser";
import { authenticate } from "./hooks/useAuthentication";

await authenticate();

function App() {
  return (
    <>
      <BrowserRouter>
        <SingleColumn>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/all-users" element={<AllUsers />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </SingleColumn>
      </BrowserRouter>
    </>
  );
}

export default App;