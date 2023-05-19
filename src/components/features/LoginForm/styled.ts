import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  gap: 1em;
  width: 300px;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

export const FormTitle = styled.h2`
  margin-bottom: 1em;
  text-align: center;
`;

export const SubmitButton = styled.button`
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const CheckboxContainer = styled.div`
  margin: 5px 0;
`;

export const CheckboxLabel = styled.label`
  margin-left: 2px;
  font-size: 16px;
`;

export const FindLoginInfo = styled.label`
  margin-left: 2px;
  font-size: 12px;
`;
