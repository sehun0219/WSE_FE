import { useState } from "react";
import { FormContainer, FormTitle, SubmitButton } from "./styled";
import FormInput from "@/components/common/FormInput";
// http://localhost:8080/user/sing-up
const SignupForm = () => {
  const [name, setName] = useState("");
  const [password, setPassowrd] = useState("");
  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        console.log(`name: ${name}, password: ${password}`);
      }}
    >
      <FormTitle>Sign Up</FormTitle>
      <FormInput
        value={name}
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <FormInput
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassowrd(e.target.value);
        }}
      />
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
