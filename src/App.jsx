import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/organisms/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import AllUsers from "./components/pages/AllUsers/AllUsers";
import SingleColumn from "./components/templates/SingleColumn";
import CreateUser from "./components/pages/CreateUser/CreateUser";
import { authenticate } from "./hooks/useAuthentication";

const auth = async () => {
  await authenticate();
};

auth();

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
