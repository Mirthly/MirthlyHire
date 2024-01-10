import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Job from "./pages/Job";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/dashboard" element={<Job />}></Route>
    </Routes>
  );
};

export default App;
