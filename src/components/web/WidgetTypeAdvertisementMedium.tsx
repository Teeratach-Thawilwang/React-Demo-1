import React from "react";

import styled from "styled-components";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerTypeAdvertisementMedium from "@components/web/BannerTypeAdvertisementMedium";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";

export default React.memo(function WidgetTypeAdvertisementMedium(widget: WidgetInterface) {
  const banners = createSlideBanner(widget);

  return (
    <Box>
      <Content>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          slidesPerGroupSkip={1}
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
  width: 720px;
  height: 220px;
  margin: 55px auto 0px auto;

  /* border: 1px solid red; */
`;

const Content = styled.div`
  width: 100%;
  height: 200px; // Banner content's height + 20px
  /* border: 1px solid red; */

  /* This config need for parent element's Swiper*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

function createSlideBanner(widget: WidgetInterface) {
  return widget.item?.map((banner) => {
    return (
      <SwiperSlide key={banner.id}>
        <BannerTypeAdvertisementMedium {...banner} key={banner.id} />
      </SwiperSlide>
    );
  });
}
