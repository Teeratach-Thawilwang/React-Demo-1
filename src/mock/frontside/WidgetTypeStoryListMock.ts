import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";
import { shuffleArray } from "@utils/Helpers";

const defaultStoryListBanners: BannerInterface[] = [
  {
    id: 1,
    name: "banner - One Piece",
    title: "One Piece",
    type: BannerTypeEnum.STORY,
    link: "/story/one-piece",
    images: [
      {
        id: 1,
        original: "/mock/widget/one-piece-web-cover-1.jpg",
        desktop: "/mock/widget/one-piece-web-cover-1.jpg",
        mobile: "/mock/widget/one-piece-web-cover-1.jpg",
        thumnail: "/mock/widget/one-piece-web-cover-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
  {
    id: 2,
    name: "banner - One Punch Man",
    title: "One Punch Man",
    type: BannerTypeEnum.STORY,
    link: "/story/one-punch-man",
    images: [
      {
        id: 1,
        original: "/mock/widget/onepunchman-web-cover-1.jpg",
        desktop: "/mock/widget/onepunchman-web-cover-1.jpg",
        mobile: "/mock/widget/onepunchman-web-cover-1.jpg",
        thumnail: "/mock/widget/onepunchman-web-cover-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
  {
    id: 3,
    name: "banner - Boruto",
    title: "Boruto",
    type: BannerTypeEnum.STORY,
    link: "/story/boruto",
    images: [
      {
        id: 1,
        original: "/mock/widget/boruto-web-cover-1.png",
        desktop: "/mock/widget/boruto-web-cover-1.png",
        mobile: "/mock/widget/boruto-web-cover-1.png",
        thumnail: "/mock/widget/boruto-thumnail-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
  {
    id: 4,
    name: "banner - Dr.stone",
    title: "Dr.stone",
    type: BannerTypeEnum.STORY,
    link: "/story/dr.stone",
    images: [
      {
        id: 1,
        original: "/mock/widget/dr.strone-web-cover-1.jpg",
        desktop: "/mock/widget/dr.strone-web-cover-1.jpg",
        mobile: "/mock/widget/dr.strone-web-cover-1.jpg",
        thumnail: "/mock/widget/dr.strone-web-cover-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
  {
    id: 5,
    name: "banner - Boxer Kali",
    title: "Boxer Kali",
    type: BannerTypeEnum.STORY,
    link: "/story/boxer-kali",
    images: [
      {
        id: 1,
        original: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
        desktop: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
        mobile: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
        thumnail: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
];

const widgetTypeStoryListMock1: WidgetInterface = {
  id: 2,
  sequence: 2,
  slug: "โปรโมท-1",
  title: "กำลังเป็นที่นิยม",
  type: WidgetTypeEnum.STORY_LIST,
  item: shuffleArray(defaultStoryListBanners),
};

const widgetTypeStoryListMock2: WidgetInterface = {
  id: 3,
  sequence: 3,
  slug: "โปรโมท-2",
  title: "เรื่องใหม่ล่าสุด",
  type: WidgetTypeEnum.STORY_LIST,
  item: shuffleArray(defaultStoryListBanners),
};

export function widgetTypeStoryListMock(slug: string): WidgetInterface {
  let data: any;
  switch (slug) {
    case "โปรโมท-1":
      data = widgetTypeStoryListMock1;
      break;
    case "โปรโมท-2":
      data = widgetTypeStoryListMock2;
      break;
  }

  return data;
}
