import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";

export default function BannerTypeAdvertisementSmall(banner: BannerInterface) {
  return (
    <Box onClick={() => window.open("//" + banner.link, "_blank")}>
      <img src={banner.images[0].desktop} alt="banner_small" />
    </Box>
  );
}

const Box = styled.div`
  width: 480px;
  height: 150px;
  /* border: 1px solid green; */

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    margin: 0;
    padding: 0;
  }

  :hover {
    cursor: pointer;
  }
`;
