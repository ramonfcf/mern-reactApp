import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleColumn from "./components/singleColumn";
import NavBar from "./components/navBar";
import Home from "./components/pages/home";
import CreateUser from "./components/pages/createUser";

import "./App.css";

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
            <Route path="/create" element={<CreateUser />} />
          </Routes>
          <Routes>
            <Route path="/edit" element={<h2>Edit</h2>} />
          </Routes>
          <Routes>
            <Route path="/delete" element={<h2>Delete</h2>} />
          </Routes>
        </SingleColumn>
      </BrowserRouter>
    </>
  );
}

export default App;