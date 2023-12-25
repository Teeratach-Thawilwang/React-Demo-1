import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { CategoryInterface } from "@models/interfaces/frontside/CategoryInterface";

export default function CategroyStoryItem(story: CategoryInterface) {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`/story/${story.slug}`)}>
      <img src={story.images![0].desktop} />
      <Title>{story.name}</Title>
    </Box>
  );
}

const Box = styled.div`
  width: 250px;
  height: 380px;
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
  height: 35px;
  margin: 0px 10px 10px 10px;
  font-size: 20px;

  white-space: nowrap; /* ป้องกันขึ้นบรรทัดใหม่ */
  overflow: hidden; /* ทำให้เนื้อหาที่เกินซ่อนไว้ */
  text-overflow: ellipsis;

  /* border: 1px solid red; */
`;
