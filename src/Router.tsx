import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SignUp from "@/pages/Users/SignUp";
import SignIn from "@/pages/Users/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
