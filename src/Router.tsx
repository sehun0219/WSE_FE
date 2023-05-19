import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SignUp from "@/pages/Users/SignUp";
import SignIn from "@/pages/Users/Login";
import Profile from "./components/features/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
