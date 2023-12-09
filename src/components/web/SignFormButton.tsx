import { SignFormButtonPropsInterface } from "@models/interfaces/SignFormButtonPropsInterface";
import styled from "styled-components";

export default function SignFormButton(props: SignFormButtonPropsInterface) {
  return <Box {...props}></Box>;
}

const Box = styled.div<SignFormButtonPropsInterface>`
  width: 285px;
  height: 50px;
  margin: 0 20px ${(props) => props.$marginBottom ?? "10px"} 20px;
  padding: 0;

  font-size: 20px;
  font-weight: normal;
  font-family: Kanit;

  border: 0 transparent;
  border-radius: 5px;

  color: #ffffff;
  background-color: ${(props) => props.$bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
