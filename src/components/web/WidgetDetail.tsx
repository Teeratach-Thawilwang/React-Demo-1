import React, { MutableRefObject, useRef } from "react";

import styled from "styled-components";

import BannerTypeChapter from "@components/web/BannerTypeChapter";
import PaginationTab from "@components/web/PaginationTab";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";
import WidgetService from "@services/frontside/WidgetService";

export default React.memo(function WidgetDetail(widget: WidgetDetailInterface) {
  const headerElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
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
        <Title>
          <p>{widget.title}</p>
        </Title>
      </Header>
      <Content $row={row}>{chapterBanners}</Content>
      {"paginate" in widget ? (
        <BoxPagination>
          <PaginationTab {...paginateProps} />
        </BoxPagination>
      ) : null}
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
