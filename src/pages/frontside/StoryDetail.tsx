import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import Footer from "@components/web/Footer";
import GoTopButton from "@components/web/GoTopButton";
import Navbar from "@components/web/Navbar";
import StoryChapterList from "@components/web/StoryChapterList";
import StoryDetailHeader from "@components/web/StoryDetailHeader";
import WidgetTypeAdvertisementGroup from "@components/web/WidgetTypeAdvertisementGroup";
import WidgetTypeAdvertisementMedium from "@components/web/WidgetTypeAdvertisementMedium";
import WidgetTypeAdvertisementSmall from "@components/web/WidgetTypeAdvertisementSmall";
import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import StoryService from "@services/frontside/StoryService";
import WidgetService from "@services/frontside/WidgetService";

export default function StoryDetail() {
  const { slug } = useParams();
  const storyState = StoryService.getState();
  const story = storyState.story;

  const widgetTypeAdvertisementGroup = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_GROUP);
  const widgetTypeAdvertisementMedium = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_MEDIUM);
  const widgetTypeAdvertisementSmall = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_SMALL);

  useEffect(() => {
    StoryService.loadBySlug({ slug: slug! });
    StoryService.loadChapterList({ slug: slug!, page: 1 });
    WidgetService.loadWidgetTypeAdvertisement({});
  }, []);

  useEffect(() => {
    document.title = story?.name ?? "Lunar";
  }, [story]);

  return (
    <>
      <Box>
        <Navbar />
        {widgetTypeAdvertisementGroup && <WidgetTypeAdvertisementGroup {...widgetTypeAdvertisementGroup} />}
        <StoryDetailHeader />
        <StoryChapterList />
        {widgetTypeAdvertisementMedium && <WidgetTypeAdvertisementMedium {...widgetTypeAdvertisementMedium} />}
        {widgetTypeAdvertisementSmall && <WidgetTypeAdvertisementSmall {...widgetTypeAdvertisementSmall} />}
      </Box>
      <GoTopButton />
      <Footer />
    </>
  );
}

const Box = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);

  position: relative;
`;
