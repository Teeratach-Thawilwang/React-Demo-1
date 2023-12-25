import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import CategoryDetail from "@components/web/CategoryDetail";
import Footer from "@components/web/Footer";
import GoTopButton from "@components/web/GoTopButton";
import Navbar from "@components/web/Navbar";
import WidgetTypeAdvertisementGroup from "@components/web/WidgetTypeAdvertisementGroup";
import WidgetTypeAdvertisementMedium from "@components/web/WidgetTypeAdvertisementMedium";
import WidgetTypeAdvertisementSmall from "@components/web/WidgetTypeAdvertisementSmall";
import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import CategoryService from "@services/frontside/CategoryService";
import WidgetService from "@services/frontside/WidgetService";

export default function Category() {
  const { slug } = useParams();
  const category = CategoryService.getCategoryBySlug(slug);
  const story = CategoryService.getCategoryStoryState();
  const widgetTypeAdvertisementGroup = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_GROUP);
  const widgetTypeAdvertisementMedium = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_MEDIUM);
  const widgetTypeAdvertisementSmall = WidgetService.getWidgetTypeAdvertisement(BannerTypeEnum.ADVERTISEMENT_SMALL);

  useEffect(() => {
    CategoryService.loadIndex({});
    CategoryService.loadStoryByCategorySlug({ slug: slug! });
    WidgetService.loadWidgetTypeAdvertisement({});
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = category?.name ?? "Lunar";
  }, [category]);

  return (
    <>
      <Box>
        <Navbar />
        {widgetTypeAdvertisementGroup && <WidgetTypeAdvertisementGroup {...widgetTypeAdvertisementGroup} />}
        {story.stories && <CategoryDetail slug={slug!} />}
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
`;
