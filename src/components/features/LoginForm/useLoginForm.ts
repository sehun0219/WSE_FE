import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "@/apis/user";
import { UserContext } from "@/store/UserContext";

const links = [
  { text: "이메일 찾기", href: "" },
  { text: "비밀번호 찾기", href: "" },
  { text: "회원가입", href: "" },
];

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // react Router 에서 제공하는 hook 히스토리 객체에 접근, 반환할수있음
  const userContext = useContext(UserContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await postUserLogin({
        email,
        password,
      });
      if (!data) throw new Error("Login failed");
      userContext?.login(data);

      alert("Login successful");
      navigate("/");
    } catch (err: any) {
      alert(`${err.message}`);
      console.error(err);
    }
  };

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    showPassword,
    setPassword,
    setShowPassword,
    links,
  };
};
