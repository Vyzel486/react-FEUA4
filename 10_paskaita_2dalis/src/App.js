import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
};

export default App;
