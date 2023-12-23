import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";

export default function BannerTypeAdvertisementMedium(banner: BannerInterface) {
  return (
    <Box onClick={() => window.open("//" + banner.link, "_blank")}>
      <img src={banner.images[0].desktop} alt="banner_medium" />
    </Box>
  );
}

const Box = styled.div`
  width: 720px;
  margin: 0 auto;
  /* border: 1px solid yellow; */

  img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
    border: 0;
    margin: 0;
    padding: 0;
  }

  :hover {
    cursor: pointer;
  }
`;
