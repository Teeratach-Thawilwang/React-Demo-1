import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";

export default function BannerTypeAdvertisementGroup(banner: BannerInterface) {
  return (
    <Box onClick={() => window.open("//" + banner.link, "_blank")}>
      <img src={banner.images[0].desktop} alt="HomeIcon" />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: none;
    border: 0;
    margin: 0;
    padding: 0;
  }

  :hover {
    cursor: pointer;
  }
`;
