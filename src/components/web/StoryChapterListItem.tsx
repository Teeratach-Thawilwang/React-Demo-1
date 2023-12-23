import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import favoriteFillIcon from "@assets/icon/favorite_fill.svg";
import viewCountIcon from "@assets/icon/view_count_icon.svg";
import { ChapterListItemInterface } from "@models/interfaces/frontside/ChapterListItemInterface";
import { formatNumber } from "@utils/Helpers";

export default function StoryChapterListItem(props: { chapter: ChapterListItemInterface; slug: string }) {
  const navigate = useNavigate();
  const chapter = props.chapter;
  const slug = props.slug;
  return (
    <Box onClick={() => navigate(`/story/${slug}/${chapter.chapter_number}`)}>
      <img src={chapter.cover_image.thumnail} alt="chapter_image_thumbnail" />
      <ChapterName>
        ตอนที่: {chapter.chapter_number} - {chapter.name}
      </ChapterName>
      <ChapterReleaseDate>{new Date(chapter.release_date).toLocaleDateString()}</ChapterReleaseDate>
      <Score>
        <img src={favoriteFillIcon} alt="score_icon" />
        {chapter.score}
      </Score>
      <View>
        <img src={viewCountIcon} alt="view_count_icon" />
        {formatNumber(chapter.view_count)}
      </View>
    </Box>
  );
}

const Box = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  height: 100px;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin: 5px;
    border-radius: 3px;
  }

  &:hover {
    cursor: pointer;
    background-color: #152027;
  }
`;

const ChapterName = styled.div`
  /* border: 1px solid red; */
  width: 540px;
  font-size: 18px;
  color: #fff;

  white-space: nowrap; /* ป้องกันขึ้นบรรทัดใหม่ */
  overflow: hidden; /* ทำให้เนื้อหาที่เกินซ่อนไว้ */
  text-overflow: ellipsis;
`;

const ChapterReleaseDate = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
  color: #dedede;
  width: 100px;
  margin-left: 70px;
`;

const Score = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 16px;
  width: 60px;

  margin-left: 20px;

  img {
    width: 25px;
    height: 25px;
  }
`;

const View = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 16px;
  width: 100px;

  margin-left: 10px;

  img {
    width: 25px;
    height: 25px;
  }
`;
