// 로그인 페이지 만드는 법
// 1. 아이디와 비밀번호 입력 텍스트필드를 만든다.
// 2. 로그인버튼 사용자가 입력한 아이디와 비번을 전송한다. post
// 3. 로그인 유효성검사 -
// 입력한아이디와 비번을 서버로 전송 -> 전송되면 유효성검사 서버나 클라이언트 둘다 가능 (서버에서해보자)
// 이메일 검증  데이터베이스에서 클라이언트가 제공한 이메일로 사용자를 조회 -> 만약 사용자가 존재하지 않으면 에러메시지 반환
// 비번 검증   사용자가 제공한 비번을 해시함수로 변환하고 디비에 저장된 해시와 비교 두해시가 일치하지 않으면 에러메시지 반환
//  인증       위 단계를 모두 통과했으면 사용자가 인증되었음을 의미하며, 서버는 토큰을 생성해서 클라이언트에 반환, 클라이언트는 이 토큰을 사용해서 후속 요청에서 자신을 인증함

// 그러면 디비에서 클라이언트가 제공한 이메일로 사용자를 어떻게 조회할까?
// 우린 이미 몽구스를 사용해서 사용자 스키마와 모델을 정의했다.
//  models 폴더에 user.ts가 그 역할임
// 클라이언트로부터 로그인 요청을 받는 express라우트를 작성 ==> routers 폴더에 user.ts에서 post한게 그거임
// findOne 메소드를 사용해서 이메일로 사용자를 찾아본다. ==> controllers 폴더에서 UserCtor.ts가 함수들 적어주는곳임

// 4. 에러메시지 표시 - 아이디나 비번이 잘못입력되었거나 서버에 문제가 있는 경우 사용자에게 에러를 표시 [백엔드에서 구현]
// 5. 비밀번호 보이기/숨김 - 비밀번호를 보이거나 숨길수있는 기능이 제공 [이 기능을 구현하기 위해서는 비밀번호 입력필드의 type 속성을 동적으로 바꾸어주어야함 'type' 을 password 에서 text로 바꿔야함.]
// useState를 이용해서 비밀번호가 보일지 말지 결정하는 상태를 생성해야함

// 6. 비밀번호 찾기/아이디 찾기 링크만들기 **** [추후에 구글 smtp 설정해서 이메일 보내보자]
// 이메일을 통해 사용자를 인증하는 과정이 필요함 => 당장 이메일 보낼수있는 서버가 없으니 alert로 알려주기

// 아이디 찾기
// 사용자가 등록한 이메일 또는 연락처를 입력하도록 요청
// 입력한 정보를 서버에 전송하고 해당 정보와 일치하는 사용자를 찾음
// 사용자를 찾으면 해당 사용자의 아이디를 이메일 또는 문자로 보내줌.. 사용자가 없으면 오류메시지

// 가입한 email 찾기
// 가입할때 입력한 이름 전화번호등 계정 생성시 등록한 개인정보를 입력하도록 요청한다.
// 사용자가 제공한 정보를 서버로 전송한다. 해당정보가 일치하는 계정을 db에서 찾는다.
// 계정을 찾으면 이메일의 일부만 공개해서 사용자에게 알려준다.(개인정보보호)
// 일치하는 계정을 찾이 못한경우 사용자에게 이를 알리고 다시 요청한다.

// 비밀번호 찾기
// 사용자가 아이디 또는 이메일을 입력하도록 요청
// 입력한 이메일이 디비에 있는지 확인
// 있으면 사용자에게 이메일을 보내고 이메일에는 비밀번호를 재설정할수있는 링크를 포함해줌
// 이메일을 보낼수 없기때문에 비번 alert로 알려줌

// 7. 회원가입링크 - 아직 회원이 아닌사람들을 위한 링크

// 8. 소셜 로그인 - 깃헙 로그인 구글 로그인
// 백엔드 작업
// 각 플렛폼에서 OAuth 인증정보를 얻어와야함 [깃헙, 구글]
// 깃헙에서 에플리케이션등록하고 Client ID와 Client Secret을 얻어야함.
// 구글은 클라우드콘솔에서 OAuth 2.0 클라이언트 ID를 만들어야 함

// 로직 = 사용자가 로그인 버튼을 클릭하면, 백앤드 서버로 로그인요청이 됨
// 백앤드 서버에서 깃헙이나 구글로 리다이렉트 하는 url을 생성, 이 url이 클라이언트로 반환
// 클라이언트에서 이 url을 써서 사용자가 깃헙이나 구글에 로그인하게함
// 로그인 후 사용자를 특정 url로 리다이렉트 함. 이때 깃헙이나 구글은 이 url에 인증정보를 첨부함
// 백앤드 서버에서 이 인증정보를 통해서 사용자의 깃헙 혹은 구글 계정을 확인함
// 이 과정은 passport라는 미들웨어를 사용해서 할수있음

// 프론엔드 작업
// 사용자가 깃헙으로 로긴 혹은 구글로 로긴 버튼을 누르면 백엔드로 로그인 요청을 보내는 로직이 필요함
// 백엔드는 이요청을 받아서 깃헙이나 구글로 로그인 페이지로 리다이렉트하는 url을 반환함
// 프론트엔드에서는 이 url로 사용자를 리다이렉트함.

// 9. 쿠키/세션 또는 jwt 등을 이용한 로그인 유지

import { useState, FormEvent } from "react";
import {
  FormContainer,
  FormTitle,
  SubmitButton,
  CheckboxContainer,
  CheckboxLabel,
  FindLoginInfo,
} from "./styled";
import FormInput from "@/components/common/FormInput";
import { LoginData } from "@/interface/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// http://localhost:8080/user/login
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // react Router 에서 제공하는 hook 히스토리 객체에 접근, 반환할수있음

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData: LoginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        loginData
      );
      if (response.status === 200) {
        alert("Login successful");
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(user));
        navigate("/");
      }
    } catch (e) {
      alert(`Please check your name and password`);
      console.error(e);
    }
  };
  const links = [
    { text: "이메일 찾기", href: "" },
    { text: "비밀번호 찾기", href: "" },
    { text: "회원가입", href: "" },
  ];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>
      <FormInput
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <FormInput
        value={password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <CheckboxContainer>
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
        />
        <CheckboxLabel>Show password</CheckboxLabel>
      </CheckboxContainer>
      <SubmitButton type="submit">Enter</SubmitButton>
      <FindLoginInfo>
        {links.map((link) => (
          <p key={link.text}>
            <a href={link.href}>{link.text}</a>
          </p>
        ))}
      </FindLoginInfo>
    </FormContainer>
  );
};

export default LoginForm;
