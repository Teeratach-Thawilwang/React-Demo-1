import React from "react";

import styled from "styled-components";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerTypeAdvertisementSmall from "@components/web/BannerTypeAdvertisementSmall";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";

export default React.memo(function WidgetTypeAdvertisementSmall(widget: WidgetDetailInterface) {
  const banners = createSlideBanner(widget);

  return (
    <Box>
      <Content>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          spaceBetween={40}
          slidesPerView={2}
          slidesPerGroup={2}
          slidesPerGroupSkip={2}
          grabCursor={true}
          loop={true}
          speed={350}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {banners}
        </Swiper>
      </Content>
    </Box>
  );
});

const Box = styled.div`
  width: 1000px;
  height: 250px;
  margin: 20px auto 0px auto;
  /* border: 1px solid yellow; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 170px;
  /* border: 1px solid red; */
`;

function createSlideBanner(widget: WidgetDetailInterface) {
  return widget.item?.map((banner) => {
    return (
      <SwiperSlide key={banner.id}>
        <BannerTypeAdvertisementSmall {...banner} />
      </SwiperSlide>
    );
  });
}
