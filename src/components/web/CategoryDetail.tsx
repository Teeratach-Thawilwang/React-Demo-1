import React, { MutableRefObject, useRef } from "react";

import styled from "styled-components";

import CategroyStoryItem from "@components/web/CategroyStoryItem";
import PaginationTab from "@components/web/PaginationTab";
import { CategoryStoryInterface } from "@models/interfaces/frontside/CategoryStoryInterface";
import { CategoryStorySliceInterface } from "@models/interfaces/frontside/slices/CategoryStorySliceInterface";
import CategoryService from "@services/frontside/CategoryService";

export default React.memo(function CategoryDetail(props: { slug: string }) {
  const headerElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const category = CategoryService.getCategoryBySlug(props.slug);
  const categoryStoryState = CategoryService.getCategoryStoryState();
  const stories = createStoryItem(categoryStoryState);
  const row = getRow(categoryStoryState.stories!);

  function navigatePagination(page: number) {
    CategoryService.loadStoryByCategorySlug({ slug: props.slug, page: page });
    headerElementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const paginateProps = {
    current: categoryStoryState.stories!.current,
    next: categoryStoryState.stories!.next,
    previous: categoryStoryState.stories!.previous,
    last: categoryStoryState.stories!.last,
    total: categoryStoryState.stories!.total,
    navigatePagination,
  };

  return (
    <Box>
      <Header ref={headerElementRef}>
        <Title>
          <p>{category?.name}</p>
        </Title>
      </Header>
      <Content $row={row}>{stories}</Content>
      {row == 4 ? (
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

function createStoryItem(state: CategoryStorySliceInterface | null) {
  if (state == null) {
    return null;
  }

  return state.stories?.data.map((story, _key) => {
    return <CategroyStoryItem {...story} key={story.id} />;
  });
}

function getRow(categoryStoryState: CategoryStoryInterface): number {
  const perPage = categoryStoryState.data.reduce((sum, _story) => sum + 1, 0) ?? 0;
  const row = Math.ceil(perPage / 4);
  return row;
}
