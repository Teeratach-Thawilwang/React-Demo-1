import { MutableRefObject, useRef } from "react";

import styled from "styled-components";

import PaginationTab from "@components/web/PaginationTab";
import StoryChapterListItem from "@components/web/StoryChapterListItem";
import { StoryInterface } from "@models/interfaces/frontside/StoryInterface";
import StoryService from "@services/frontside/StoryService";

export default function StoryChapterList() {
  const headerElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const storyState = StoryService.getState();
  const story = storyState.story;
  let chapters = null;
  let pagination = null;

  if (story == null) {
    // add loading screen
    return <Box></Box>;
  }

  if (story != null) {
    chapters = createChapterItem(story);
  }

  if (story.chapters != null) {
    function navigatePagination(page: number) {
      StoryService.loadChapterList({ slug: story!.slug, page: page });
      headerElementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const paginateProps = {
      current: story.chapters!.current,
      next: story.chapters!.next,
      previous: story.chapters!.previous,
      last: story.chapters!.last,
      total: story.chapters!.total,
      navigatePagination: navigatePagination,
    };
    pagination = (
      <BoxPagination>
        <PaginationTab {...paginateProps} />
      </BoxPagination>
    );
  }

  return (
    <Box ref={headerElementRef}>
      {chapters}
      {pagination}
    </Box>
  );
}

const Box = styled.div`
  /* border: 1px solid red; */
  width: 1000px;
  margin: 20px auto 0px auto;

  position: relative;
  z-index: 99;
`;

const BoxPagination = styled.div`
  /* border: 1px solid red; */
  width: 1000px;
  margin: 0 auto 0px auto;
`;

function createChapterItem(story: StoryInterface | null) {
  //   const navigate = useNavigate();
  if (story?.chapters == null) {
    return null;
  }
  return story.chapters.data.map((chapter) => {
    const propsParams = {
      chapter: { ...chapter },
      slug: story.slug,
    };
    return <StoryChapterListItem {...propsParams} key={chapter.id} />;
  });
}
