import React from "react";

import styled from "styled-components";

import BannerTypeAdvertisementGroup from "@components/web/BannerTypeAdvertisementGroup";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";

export default React.memo(function WidgetTypeAdvertisementGroup(widget: WidgetDetailInterface) {
  const images = widget.item?.map((banner: BannerInterface, key) => {
    return <BannerTypeAdvertisementGroup {...banner} key={key} />;
  });

  return <Box>{images}</Box>;
});

const Box = styled.div`
  width: 720px;
  margin: 20px auto 0px auto;
`;
