import { useEffect } from "react";

import styled from "styled-components";

import Fade from "@components/web/Fade";
import LoginForm from "@components/web/LoginForm";
import RegisterForm from "@components/web/RegisterForm";
import { SignFormState as FormState } from "@enums/frontside/SignFormStateEnum";
import SignFormService from "@services/frontside/SignFormService";

export default function SignForm() {
  const signFormState = SignFormService.getSignFormState();

  useEffect(() => {
    if (signFormState.plane && signFormState.box) {
      SignFormService.setIsShow(true);
    }

    if (signFormState.plane == true && signFormState.box == false) {
      SignFormService.setIsShow(false);
    }

    SignFormService.clearStateArea();
  }, [signFormState.box, signFormState.plane]);

  return (
    <Fade in={signFormState.isShow} timeout={300}>
      <Plane onClick={() => SignFormService.onClickArea("plane")}>
        <Box onClick={() => SignFormService.onClickArea("box")}>
          <HeaderForm>
            <HeaderItem
              $active={signFormState.selector == FormState.LOGIN}
              onClick={() => SignFormService.selectorHandle(FormState.LOGIN)}
            >
              <p>Login</p>
            </HeaderItem>
            <HeaderItem
              $active={signFormState.selector == FormState.REGISTER}
              onClick={() => SignFormService.selectorHandle(FormState.REGISTER)}
            >
              <p>Register</p>
            </HeaderItem>
          </HeaderForm>
          {signFormState.selector == FormState.LOGIN ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Plane>
    </Fade>
  );
}

const Plane = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  width: 325px;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.35);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
`;

const HeaderItem = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;

  p {
    height: 35px;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
    ${(props) =>
      props.$active
        ? `
          border-bottom: 3px solid #000;
          color: #000000;
          `
        : `
          border-bottom: 0px;
          color: #6B6B6B;
    `}
  }

  :hover {
    cursor: pointer;
  }
`;
