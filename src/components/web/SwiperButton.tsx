import { RefObject } from "react";

import styled from "styled-components";

import { SwiperClass } from "swiper/react";

import expandLeft from "@assets/icon/expand_left.svg";
import expandRight from "@assets/icon/expand_right.svg";

interface SwiperButton {
  swiperRef: RefObject<SwiperClass | null>;
  direction: "Previous" | "Next";
}

export default function SwiperButton(props: SwiperButton) {
  let element;
  if (props.direction == "Previous") {
    element = (
      <Button onClick={() => props.swiperRef?.current?.slidePrev()}>
        <img src={expandLeft} alt="SwipeLeftIcon" />
      </Button>
    );
  }

  if (props.direction == "Next") {
    element = (
      <Button onClick={() => props.swiperRef?.current?.slideNext()}>
        <img src={expandRight} alt="SwipeRightIcon" />
      </Button>
    );
  }

  return <>{element}</>;
}

const Button = styled.div`
  img {
    width: 50px;
    height: 50px;
  }

  :hover {
    cursor: pointer;
  }
`;
