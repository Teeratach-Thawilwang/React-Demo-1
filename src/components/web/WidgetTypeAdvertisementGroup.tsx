import React from "react";

import styled from "styled-components";

import BannerTypeAdvertisementGroup from "@components/web/BannerTypeAdvertisementGroup";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";

export default React.memo(function WidgetTypeAdvertisementGroup(widget: WidgetInterface) {
  const images = widget.item?.map((banner: BannerInterface) => {
    return <BannerTypeAdvertisementGroup {...banner} key={banner.id} />;
  });

  return <Box>{images}</Box>;
});

const Box = styled.div`
  width: 720px;
  margin: 20px auto 55px auto;

  /* border: 1px solid red; */
`;
