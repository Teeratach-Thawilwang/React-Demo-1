import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import Footer from "@components/web/Footer";
import Navbar from "@components/web/Navbar";
import SignForm from "@components/web/SignForm";
import WidgetDetail from "@components/web/WidgetDetail";
import WidgetTypeAdvertisementGroup from "@components/web/WidgetTypeAdvertisementGroup";
import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import WidgetService from "@services/frontside/WidgetService";

export default function Widget() {
  const { slug } = useParams();
  const widget = WidgetService.getWidgetDetail(slug);
  const widgetTypeAdvertisementGroup = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_GROUP);

  useEffect(() => {
    WidgetService.loadWidgetDetail({ slug: slug! });
    WidgetService.loadWidgetTypeAdvertisement({});
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = widget?.title ?? "Lunar";
  }, [widget]);

  return (
    <Box>
      <Navbar />
      <SignForm />
      {widgetTypeAdvertisementGroup && <WidgetTypeAdvertisementGroup {...widgetTypeAdvertisementGroup} />}
      {widget && <WidgetDetail {...widget} />}
      <Footer />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
`;
