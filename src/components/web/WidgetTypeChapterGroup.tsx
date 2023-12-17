import React, { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import expandRight from "@assets/icon/expand_right.svg";
import BannerTypeChapter from "@components/web/BannerTypeChapter";
import PaginationTab from "@components/web/PaginationTab";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";
import WidgetService from "@services/frontside/WidgetService";

export default React.memo(function WidgetTypeChapterGroup(widget: WidgetDetailInterface) {
  const headerElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const navigate = useNavigate();
  const chapterBanners = createChapterBanner(widget);
  const row = getRow(widget);

  function navigatePagination(page: number) {
    WidgetService.loadWidgetDetail({ slug: widget.slug, page: page });
    headerElementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const paginateProps = {
    ...widget.paginate!,
    navigatePagination,
  };

  return (
    <Box>
      <Header ref={headerElementRef}>
        <Title onClick={() => navigate("/widget/" + widget.slug)}>
          <p>{widget.title}</p>
        </Title>
        <LinkDetail onClick={() => navigate("/widget/" + widget.slug)}>
          <p>ดูทั้งหมด</p>
          <img src={expandRight} alt="HomeIcon" />
        </LinkDetail>
      </Header>
      <Content $row={row}>{chapterBanners}</Content>
      <BoxPagination>
        <PaginationTab {...paginateProps} />
      </BoxPagination>
    </Box>
  );
});

const Box = styled.div`
  width: 1100px;
  height: 100%;
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

const Content = styled.div<{ $row: number }>`
  width: calc(100% - 100px);
  height: calc(415px * ${(props) => props.$row});
  margin: 0 auto 0px auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  /* border: 1px solid orange; */
`;

const BoxPagination = styled.div`
  /* border: 1px solid red; */
  width: calc(100% - 100px);
  margin: 0 auto 0px auto;
`;

function createChapterBanner(widget: WidgetDetailInterface) {
  return widget.item?.map((banner, _key) => {
    return <BannerTypeChapter {...banner} key={banner.id} />;
  });
}

function getRow(widget: WidgetDetailInterface): number {
  const perPage = widget.item?.reduce((sum, _banner) => sum + 1, 0) ?? 0;
  const row = Math.ceil(perPage / 4);
  return row;
}
