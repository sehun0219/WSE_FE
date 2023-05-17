import axios from "axios";
import { FormContainer, FormTitle, SubmitButton, PasswordHint } from "./styled";
import FormInput from "@/components/common/FormInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// signUp interface
interface SignUpData {
  name: string;
  password: string;
}

// http://localhost:8080/user/sing-up
const SignUpForm = () => {
  // use state : 컴포넌트 랜더링에 관여, 업데이트할 항목이 생기면 랜더링이 일어남
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const passWordHint = `Your password should be at least 8 characters long and include a combination of letters, numbers, and special characters.`;

  // 비번 유효성검사
  const isValidPassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  // name이 바뀔때 입력된 값으로 name을 바꿔줌
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // 비번이 바뀔때 비번을 바꿔줌, 유효성검사도함
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    setIsPasswordValid(isValidPassword(password)); // isValidPassword는 비밀번호 유효성 검사 함수
  };
  // 입력이되면 디폴트로 유지, 백앤드로 sign up data를 보냄,
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signUpData: SignUpData = {
      name,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/user/sign-up",
        signUpData
      );
      console.log(response.data);
      // 추가적인 작업: 응답 처리, 로그인 페이지로 리디렉션 등
      if (response.status === 200) {
        alert(`Welcome to WES, ${name}`);
        navigate("/");
        // 사인업 버튼대신  Welcome ${사용자이름} , Log out 이 표시 되어야 함.
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      alert(`Please check your name and password`);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Sign Up</FormTitle>
      <FormInput
        value={name}
        type="text"
        placeholder="Name"
        onChange={handleChangeName}
      />
      <FormInput
        value={password}
        type="password"
        placeholder="Password"
        onChange={handleChangePassword}
      />
      {!isPasswordValid && <PasswordHint>{passWordHint}</PasswordHint>}
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  );
};

export default SignUpForm;
