import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";
import { shuffleArray } from "@utils/Helpers";

const defaultStoryWindowBanners: BannerInterface[] = [
  {
    id: 1,
    name: "banner - One Piece",
    title: "One Piece",
    type: BannerTypeEnum.STORY_WINDOW,
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
      {
        id: 2,
        original: "/mock/widget/one-piece-mobile-cover-1.jpg",
        desktop: "/mock/widget/one-piece-mobile-cover-1.jpg",
        mobile: "/mock/widget/one-piece-mobile-cover-1.jpg",
        thumnail: "/mock/widget/one-piece-mobile-cover-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
      {
        id: 3,
        original: "/mock/widget/one-piece-web-cover-2.jpg",
        desktop: "/mock/widget/one-piece-web-cover-2.jpg",
        mobile: "/mock/widget/one-piece-web-cover-2.jpg",
        thumnail: "/mock/widget/one-piece-web-cover-2.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
  {
    id: 2,
    name: "banner - One Punch Man",
    title: "One Punch Man",
    type: BannerTypeEnum.STORY_WINDOW,
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
      {
        id: 2,
        original: "/mock/widget/onepunchman-mobile-cover-1.jpg",
        desktop: "/mock/widget/onepunchman-mobile-cover-1.jpg",
        mobile: "/mock/widget/onepunchman-mobile-cover-1.jpg",
        thumnail: "/mock/widget/onepunchman-mobile-cover-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
      {
        id: 3,
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
    type: BannerTypeEnum.STORY_WINDOW,
    link: "/story/boruto",
    images: [
      {
        id: 1,
        original: "/mock/widget/boruto-web-cover-1.png",
        desktop: "/mock/widget/boruto-web-cover-1.png",
        mobile: "/mock/widget/boruto-web-cover-1.png",
        thumnail: "/mock/widget/boruto-web-cover-1.png",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
      {
        id: 2,
        original: "/mock/widget/boruto-thumnail-1.jpg",
        desktop: "/mock/widget/boruto-thumnail-1.jpg",
        mobile: "/mock/widget/boruto-thumnail-1.jpg",
        thumnail: "/mock/widget/boruto-thumnail-1.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
      {
        id: 3,
        original: "/mock/widget/boruto-web-cover-1.png",
        desktop: "/mock/widget/boruto-web-cover-1.png",
        mobile: "/mock/widget/boruto-web-cover-1.png",
        thumnail: "/mock/widget/boruto-web-cover-1.png",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
  {
    id: 4,
    name: "banner - Bleach",
    title: "Bleach",
    type: BannerTypeEnum.STORY_WINDOW,
    link: "/story/bleach",
    images: [
      {
        id: 1,
        original: "/mock/widget/bleach-1.webp",
        desktop: "/mock/widget/bleach-1.webp",
        mobile: "/mock/widget/bleach-1.webp",
        thumnail: "/mock/widget/bleach-1.webp",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
      {
        id: 2,
        original: "/mock/widget/bleach-2.jpg",
        desktop: "/mock/widget/bleach-2.jpg",
        mobile: "/mock/widget/bleach-2.jpg",
        thumnail: "/mock/widget/bleach-2.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
      {
        id: 3,
        original: "/mock/widget/bleach-3.jpg",
        desktop: "/mock/widget/bleach-3.jpg",
        mobile: "/mock/widget/bleach-3.jpg",
        thumnail: "/mock/widget/bleach-3.jpg",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    ],
  },
];

const widgetTypeStoryWindowMocks: WidgetInterface = {
  id: 6,
  sequence: 6,
  slug: "story-window-6",
  title: "story window",
  type: WidgetTypeEnum.STORY_WINDOW,
  item: shuffleArray(defaultStoryWindowBanners),
};

export function widgetTypeStoryWindowMock(slug: string): WidgetInterface {
  widgetTypeStoryWindowMocks.slug = slug;
  return widgetTypeStoryWindowMocks;
}
