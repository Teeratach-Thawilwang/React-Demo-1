import { useState } from "react";

import styled from "styled-components";

import starIcon from "@assets/icon/star.svg";
import viewCountIcon from "@assets/icon/view_count_icon.svg";
import { StoryInterface } from "@models/interfaces/frontside/StoryInterface";
import StoryService from "@services/frontside/StoryService";

export default function StoryDetailHeader() {
  const [isFull, setIsFull] = useState(false);
  const storyState = StoryService.getState();
  const story = storyState.story;
  let description = createDescription(story, { isFull, setIsFull });

  if (story == null) {
    // add loading screen
    return <Box></Box>;
  }

  return (
    <Box>
      <img src={story?.cover_image.desktop} alt="cover_image" />
      <Title>{story?.name}</Title>
      <Author>ผู้แต่ง: {story.author.customer_name}</Author>
      <Rating>
        <Score>
          <img src={starIcon} alt="score_icon" />
          {story?.score}
        </Score>
        <View>
          <img src={viewCountIcon} alt="view_count_icon" />
          {story?.view_count.toLocaleString()}
        </View>
      </Rating>
      {description}
    </Box>
  );
}

const Box = styled.div`
  width: 1000px;
  /* border: 1px solid red; */
  margin: 100px auto 0px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1px;

  img {
    width: 400px;
  }
`;

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
`;

const Author = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin-top: 10px;
`;

const Rating = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 10px;
`;

const Score = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-right: 10px;

  img {
    width: 30px;
    height: 30px;
  }
`;

const View = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  img {
    width: 30px;
    height: 30px;
  }
`;

const Description = styled.div<{ $isFull: boolean }>`
  /* border: 1px solid red; */
  margin: 20px 50px 0px 50px;

  font-size: 20px;
  font-weight: normal;
  white-space: normal;

  height: ${(props) => (props.$isFull ? "auto" : "80px")};
  overflow-y: hidden;
`;

const Button = styled.div<{ $isFull: boolean }>`
  /* border: 1px solid red; */
  width: 900px;
  height: 30px;
  color: #fed47e;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(38, 38, 38, 0.6);
  ${(props) => (props.$isFull ? "" : `box-shadow: 0 -5px 30px 30px #262626;`)}

  &:hover {
    cursor: pointer;
  }
`;

function createDescription(story: StoryInterface | null, stateOnClick: { isFull: boolean; setIsFull: any }) {
  if (story == null) {
    return null;
  }
  if (story != null && story.description.length > 200) {
    return (
      <>
        <Description $isFull={stateOnClick.isFull}>&ensp;&ensp;&ensp;&ensp;{story?.description}</Description>
        <Button
          $isFull={stateOnClick.isFull}
          onClick={() => {
            stateOnClick.setIsFull(!stateOnClick.isFull);
          }}
        >
          {stateOnClick.isFull ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
        </Button>
      </>
    );
  }

  if (story != null && story.description.length < 200) {
    return (
      <>
        <Description $isFull={true}>&ensp;&ensp;&ensp;&ensp;{story?.description}</Description>
      </>
    );
  }
}
