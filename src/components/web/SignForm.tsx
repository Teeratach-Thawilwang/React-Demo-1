import expandLeftIcon from "@assets/icon/expand_left_dark.svg";

import { useEffect } from "react";

import styled from "styled-components";

import Fade from "@components/web/Fade";
import ForgotPasswordForm from "@components/web/ForgetPasswordForm";
import LoginForm from "@components/web/LoginForm";
import RegisterForm from "@components/web/RegisterForm";
import { SignFormState as FormState, SignFormState } from "@enums/frontside/SignFormStateEnum";
import SignFormService from "@services/frontside/SignFormService";

export default function SignForm() {
  const signFormState = SignFormService.getState();
  let formHeader = getFormHeader(signFormState.selector);
  let formElement = getFormElement(signFormState.selector);

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
          <HeaderForm>{formHeader}</HeaderForm>
          {formElement}
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

  /* border: 1px solid red; */
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

const HeaderForgotPassword = styled.div`
  display: flex;
  width: 100%;

  p {
    text-align: center;
    width: 325px;
    height: 35px;
    margin: 0 35px 0 0;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }

  img {
    width: 35px;
    height: 35px;
    margin-right: 0px;
  }

  img:hover {
    cursor: pointer;
  }
`;

function getFormElement(selector: string) {
  switch (selector) {
    case SignFormState.LOGIN:
      return <LoginForm />;
    case SignFormState.REGISTER:
      return <RegisterForm />;
    case SignFormState.FORGOT_PASSWORD:
      return <ForgotPasswordForm />;
    default:
      return <LoginForm />;
  }
}

function getFormHeader(selector: string) {
  if (selector === SignFormState.FORGOT_PASSWORD) {
    return (
      <HeaderForgotPassword>
        <img src={expandLeftIcon} alt="BackIcon" onClick={() => SignFormService.selectorHandle(FormState.LOGIN)} />
        <p>Chang Password</p>
      </HeaderForgotPassword>
    );
  } else {
    return (
      <>
        <HeaderItem $active={selector == FormState.LOGIN} onClick={() => SignFormService.selectorHandle(FormState.LOGIN)}>
          <p>Login</p>
        </HeaderItem>
        <HeaderItem $active={selector == FormState.REGISTER} onClick={() => SignFormService.selectorHandle(FormState.REGISTER)}>
          <p>Register</p>
        </HeaderItem>
      </>
    );
  }
}
