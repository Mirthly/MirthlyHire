import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Messages from "./pages/Messages";
import Community from "./pages/Community";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/explore" element={<Dashboard />}></Route>
      <Route path="/messages" element={<Messages />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/about" element={<About />}></Route>

    </Routes>
  );
};

export default App;
