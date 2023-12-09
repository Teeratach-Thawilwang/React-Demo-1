import styled, { keyframes } from "styled-components";
import SignFormButton from "@components/web/SignFormButton";
import { SignFormButtonPropsInterface } from "@models/interfaces/SignFormButtonPropsInterface";
import { fill } from "@store/slices/signFormSlice";
import { useAppDispatch, useAppSelector } from "@store/store";

export default function RegisterForm(props: { out: boolean }) {
  const dispatch = useAppDispatch();
  const signFormState = useAppSelector((state) => state.signForm);
  const registerProps: SignFormButtonPropsInterface = { $bgColor: "#152027" };

  function setSignFormData(event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(fill({ [event.target.name]: event.target.value }));
  }

  return (
    <Box $out={props.out}>
      <Input
        name="email"
        placeholder=" อีเมล"
        value={signFormState.email ?? undefined}
        onChange={(e) => setSignFormData(e)}
      />
      <Input
        name="nickname"
        placeholder=" ชื่อเล่น"
        value={signFormState.nickname ?? undefined}
        onChange={(e) => setSignFormData(e)}
      />
      <Input
        name="password"
        placeholder=" รหัสผ่านอย่างน้อย 8 ตัวอักษร"
        value={signFormState.password ?? undefined}
        onChange={(e) => setSignFormData(e)}
      />
      <Input
        name="confirmPassword"
        placeholder=" ยืนยันรหัสผ่าน"
        value={signFormState.confirmPassword ?? undefined}
        onChange={(e) => setSignFormData(e)}
      />
      <SignFormButton {...registerProps}>Register</SignFormButton>
    </Box>
  );
}

const Box = styled.div<{ $out: Boolean }>`
  margin: 0;
  padding: 0;

  visibility: ${(props) => (props.$out ? "hidden" : "visible")};
  animation: ${(props) => (props.$out ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
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

const fadeIn = keyframes`
  from {
    transform: translate(10px, 0px);
    opacity: 0;
  }

  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translate(0px, 0px);
    opacity: 0;
  }

  to {
    transform: translate(-10px, 0px);
    opacity: 1;
  }
`;
