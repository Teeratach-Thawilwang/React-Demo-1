import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";

export default function BannerTypeStoryWindow(banner: BannerInterface) {
  return (
    <Box onClick={() => window.open("//" + banner.link, "_blank")}>
      <Left>
        <img src={banner.images[0].desktop} alt="HomeIcon" />
      </Left>
      <Right>
        <img src={banner.images[1].desktop} alt="HomeIcon" />
        <img src={banner.images[2].desktop} alt="HomeIcon" />
      </Right>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 450px;
  /* border: 1px solid red; */

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 480px;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    margin: 0;
    padding: 0;
    border-radius: 10px;
  }

  :hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  width: 480px;
  height: 215px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    margin: 0;
    padding: 0;

    border-radius: 10px;
  }

  :nth-child(2) {
    margin-top: 20px;
  }

  :hover {
    cursor: pointer;
  }
`;
