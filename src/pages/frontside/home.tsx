import Navbar from "@components/web/Navbar";
import SignForm from "@components/web/SignForm";
import { useAppSelector } from "@store/store";
import styled, { keyframes } from "styled-components";

export default function Home() {
  const signFormState = useAppSelector((state) => state.signForm);
  // console.log('home ' + signFormState.isShow)

  return (
    <div>
      <Navbar />
      {signFormState.isShow ? <SignForm /> : null}
    </div>
  );
}

const SignFormOverride = styled(SignForm)<{ $isShow?: boolean }>`
  visibility: ${(props) => (props.$isShow ? "visible" : "hidden")};
  animation: ${(props) => (props.$isShow ? fadeIn : fadeOut)} 2s linear;
  transition: visibility 2s linear;
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
