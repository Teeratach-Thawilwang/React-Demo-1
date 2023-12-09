import styled from "styled-components";

import SignFormButton from "@components/web/SignFormButton";
import { SignFormButtonPropsInterface } from "@models/interfaces/SignFormButtonPropsInterface";
import { useAppDispatch, useAppSelector } from "@store/Store";
import { fill } from "@store/slices/SignFormSlice";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const signFormState = useAppSelector((state) => state.signForm);

  function setSignFormData(event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(fill({ [event.target.name]: event.target.value }));
  }

  return (
    <Box>
      <Input
        name="email"
        placeholder=" อีเมล"
        value={signFormState.email ?? undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSignFormData(e)
        }
      />
      <Input
        name="password"
        type="password"
        placeholder=" รหัสผ่าน"
        value={signFormState.password ?? undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSignFormData(e)
        }
      />
      <SignFormButton {...loginProps}>Login</SignFormButton>
      <ForgotPassword>ลืมรหัสผ่าน ?</ForgotPassword>
      <SignFormButton {...loginFacebookProps}>
        เข้าสู่ระบบด้วย Facebook
      </SignFormButton>
      <SignFormButton {...loginGoolgeProps}>
        เข้าสู่ระบบด้วย Google
      </SignFormButton>
    </Box>
  );
}

const Box = styled.div`
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  width: 285px;
  height: 25px;
  margin: 0 20px 20px 20px;
  padding: 0;

  font-size: 18px;
  font-weight: normal;
  font-family: Kanit;

  border: 0 transparent;
  border-bottom: 1px solid #000;
  border-radius: 0;
  outline: none;

  background-color: #fff;
  color: #000;

  &::placeholder {
    color: #787878;
  }
`;

const ForgotPassword = styled.div`
  width: 285px;
  height: 20px;
  margin: 0 20px 10px 20px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: normal;
  font-family: Kanit;

  border: 0 transparent;

  background-color: transparent;
  color: #d0463b;

  &:hover {
    cursor: pointer;
  }
`;

const loginProps: SignFormButtonPropsInterface = { $bgColor: "#152027" };
const loginFacebookProps: SignFormButtonPropsInterface = {
  $bgColor: "#4168B5",
};
const loginGoolgeProps: SignFormButtonPropsInterface = {
  $bgColor: "#D0463B",
  $marginBottom: "20px",
};
