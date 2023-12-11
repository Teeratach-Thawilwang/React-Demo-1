import styled from "styled-components";

import { BannerInterface } from "@models/interfaces/BannerInterface";
import { WidgetListInterface } from "@models/interfaces/WidgetListInterface";

import BannerTypeAdvertisementGroup from "./BannerTypeAdvertisementGroup";

export default function WidgetTypeAdvertisementGroup(
  widget: WidgetListInterface,
) {
  const images = widget.item?.map((banner: BannerInterface, key) => {
    return <BannerTypeAdvertisementGroup {...banner} key={key} />;
  });

  return <Box>{images}</Box>;
}

const Box = styled.div`
  width: 720px;
  margin: 20px auto 0px auto;
`;
