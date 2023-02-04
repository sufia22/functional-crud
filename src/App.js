import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add";
import Edit from "./Pages/Edit/Edit";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/user/:id" element={<Single />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
