import { useEffect, useState } from "react";

import styled from "styled-components";

import icon from "@assets/icon/expand_up_double.svg";

export default function GoTopButton() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= 0) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box $isShow={isShow} onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}>
      <Content>
        <img src={icon} alt="" />
        <p>Top</p>
      </Content>
    </Box>
  );
}

const Box = styled.div<{ $isShow: boolean }>`
  display: ${(props) => (props.$isShow ? "block" : "none")};
  width: 40px;
  height: 60px;
  background-color: #000;
  border-radius: 2px;

  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */

  text-align: center;

  img {
    display: block;
    padding: 0;
    margin: 0 auto 0 auto;
    width: 40px;
    height: 40px;

    /* border: 1px solid red; */
  }

  p {
    display: block;
    width: auto;
    padding: 0;
    margin-top: -5px;
    text-align: center;

    font-size: 16px;
    line-height: 16px;
    /* border: 1px solid red; */
  }
`;
