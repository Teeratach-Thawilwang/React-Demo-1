import React from "react";

import styled from "styled-components";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerTypeStoryWindow from "@components/web/BannerTypeStoryWindow";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";

export default React.memo(function WidgetTypeStoryWindow(widget: WidgetDetailInterface) {
  const banners = createSlideBanner(widget);

  return (
    <Box>
      <Content>
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
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
  height: 490px; // Banner content's height + 20px
  margin: 55px auto 0px auto;
  /* border: 1px solid yellow; */

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  height: 470px; // Banner content's height + 20px
  /* border: 1px solid red; */

  /* This config need for parent element's Swiper*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

function createSlideBanner(widget: WidgetDetailInterface) {
  return widget.item?.map((banner) => {
    return (
      <SwiperSlide key={banner.id}>
        <BannerTypeStoryWindow {...banner} />
      </SwiperSlide>
    );
  });
}
