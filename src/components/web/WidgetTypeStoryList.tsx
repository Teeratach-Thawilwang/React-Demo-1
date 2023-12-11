import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import expandRight from "@assets/icon/expand_right.svg";
import BannerTypeStory from "@components/web/BannerTypeStory";
import SwiperButton from "@components/web/SwiperButton";
import { WidgetListInterface } from "@models/interfaces/WidgetListInterface";

export default function WidgetTypeStoryList(widget: WidgetListInterface) {
  const navigate = useNavigate();
  const storyBanners = createSlideBanner(widget);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Box>
      <Header>
        <Title onClick={() => navigate("/category")}>
          <p>{widget.title}</p>
        </Title>
        <LinkDetail onClick={() => navigate("/category")}>
          <p>ดูทั้งหมด</p>
          <img src={expandRight} alt="HomeIcon" />
        </LinkDetail>
      </Header>
      <Content>
        <SwiperButton swiperRef={swiperRef} direction="Previous" />
        <Swiper
          slidesPerView={4}
          slidesPerGroupSkip={4}
          grabCursor={true}
          loop={true}
          speed={150}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        >
          {storyBanners}
        </Swiper>
        <SwiperButton swiperRef={swiperRef} direction="Next" />
      </Content>
    </Box>
  );
}

const Box = styled.div`
  width: 1100px;
  height: 500px;
  margin: 20px auto 0px auto;

  /* border: 1px solid red; */
`;

const Header = styled.div`
  display: flex;
  height: 70px;
  /* border: 1px solid red; */
  padding-left: 70px;
`;

const Title = styled.div`
  margin: auto 10px 0px 0px;

  p {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }

  :hover {
    cursor: pointer;
  }
`;

const LinkDetail = styled.div`
  display: flex;
  margin: 0;

  p {
    display: flex;
    margin: auto 0px 5px 0px;
    font-size: 16px;
    font-weight: normal;
  }

  img {
    margin: auto 0px 4px 0px;
    width: 25px;
    height: 25px;
  }

  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid orange; */
`;

function createSlideBanner(widget: WidgetListInterface) {
  return widget.item?.map((banner, _key) => {
    return (
      <SwiperSlide key={banner.id}>
        <BannerTypeStory {...banner} />
      </SwiperSlide>
    );
  });
}
