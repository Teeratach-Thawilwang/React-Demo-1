import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";

export default function BannerTypeChapter(banner: BannerInterface) {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(banner.link)}>
      <img src={banner.images[0].desktop} />
      <Title>{banner.title}</Title>
      <Name>{banner.name}</Name>
    </Box>
  );
}

const Box = styled.div`
  width: 250px;
  height: 415px;
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
  height: 30px;
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  /* border: 1px solid red; */

  white-space: nowrap; /* ป้องกันขึ้นบรรทัดใหม่ */
  overflow: hidden; /* ทำให้เนื้อหาที่เกินซ่อนไว้ */
  text-overflow: ellipsis;
`;

const Name = styled.div`
  width: 230px;
  height: 30px;
  margin: 0px 10px 10px 10px;
  font-size: 16px;
  opacity: 0.7;
  /* border: 1px solid red; */

  white-space: nowrap; /* ป้องกันขึ้นบรรทัดใหม่ */
  overflow: hidden; /* ทำให้เนื้อหาที่เกินซ่อนไว้ */
  text-overflow: ellipsis;
`;
