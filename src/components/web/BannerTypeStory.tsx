import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/BannerInterface";

export default function BannerTypeStory(banner: BannerInterface) {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(banner.link)}>
      <img src={banner.images[0].desktop} />
      <Title>{banner.title}</Title>
    </Box>
  );
}

const Box = styled.div`
  width: 250px;
  height: 400px;
  /* border: 1px solid red; */

  img {
    display: block;
    width: 230px;
    height: 325px;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    transition: 100ms ease-in-out;
  }

  :hover {
    cursor: pointer;
  }

  &:hover > div {
    transform: scale(101%);
    transition: 200ms ease-in-out;
  }

  &:hover > img {
    transform: scale(100.5%);
    transition: 200ms ease-in-out;
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.35);
  }
`;

const Title = styled.div`
  width: 230px;
  height: 55px;
  margin: 0px 10px 10px 10px;
  font-size: 20px;
`;
