import axios from "axios";
import { FormContainer, FormTitle, SubmitButton, PasswordHint } from "./styled";
import FormInput from "@/components/common/FormInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpData } from "@/interface/user";

// http://localhost:8080/user/sing-up
const SignUpForm = () => {
  // use state : 컴포넌트 랜더링에 관여, 업데이트할 항목이 생기면 랜더링이 일어남
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const passWordHint = `Your password should be at least 8 characters long and include a combination of letters, numbers, and special characters.`;

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

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
      email,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/user/sign-up",
        signUpData
      );
      console.log(response.data);

      // 추가적인 작업: 응답 처리, 로그인 페이지로 리디렉션
      if (response.status === 200) {
        alert(`Sign-up successful, Welcome ${name}`);
        // 기본적으로 백앤드에서 뭔가를 받아서 로컬스토리지에 저장한다음 그정보를 브라우저가 갖고있게해줘야함
        // 백엔드에서 오는 데이터는 response 가 되고 그 안에 데이터가 있음
        // 그 데이터는 제이슨으로 받아지고 스트링으로 저장해서 로컬스토리지에 저장되어야함
        // 여기서 data를 set하고 홈으로가서 get함.
        window.localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      alert(`Please check your name and password`);
      console.log("err", error);
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
        value={email}
        type="text"
        placeholder="Email"
        onChange={handleEmail}
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
