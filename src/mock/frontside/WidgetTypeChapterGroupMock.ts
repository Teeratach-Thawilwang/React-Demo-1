import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";
import { shuffleArray } from "@utils/Helpers";

const defaultChapterGroupBanners: BannerInterface[] = [
  {
    id: 1,
    name: "ตอนที่ 55: วันปกติทั่วไปของนักวิทยาศาสตร์เฒ่า",
    title: "Boruto",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boruto/55",
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
    id: 2,
    name: "ตอนที่ 14: อภินิหารหมัดเออิโนะ มารุจิ",
    title: "Boxer Kali",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boxer-kali/14",
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
  {
    id: 3,
    name: "ตอนที่ 1109: นิกะ",
    title: "One Piece",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/one-piece/1109",
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
    id: 4,
    name: "ตอนที่ 218: ปีศาจร้ายไซบ็อก",
    title: "One Punch Man",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/one-punch-man/218",
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
    id: 5,
    name: "ตอนที่ 354: เรือรบไอนํ้า",
    title: "Dr.stone",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/dr.stone/354",
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
    id: 6,
    name: "ตอนที่ 55: วันปกติทั่วไป",
    title: "Boruto",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boruto/55",
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
    id: 7,
    name: "ตอนที่ 14: อภินิหาร",
    title: "Boxer Kali",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boxer-kali/14",
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
  {
    id: 8,
    name: "ตอนที่ 1109: นิกะ",
    title: "One Piece",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/one-piece/1109",
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
    id: 9,
    name: "ตอนที่ 218: ปีศาจร้ายไซบ็อก",
    title: "One Punch Man",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/one-punch-man/218",
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
    id: 10,
    name: "ตอนที่ 354: เรือรบไอนํ้า",
    title: "Dr.stone",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/dr.stone/354",
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
    id: 11,
    name: "ตอนที่ 55: วันปกติทั่วไป",
    title: "Boruto",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boruto/55",
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
    id: 12,
    name: "ตอนที่ 14: อภินิหาร",
    title: "Boxer Kali",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boxer-kali/14",
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
  {
    id: 13,
    name: "ตอนที่ 1109: นิกะ",
    title: "One Piece",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/one-piece/1109",
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
    id: 14,
    name: "ตอนที่ 218: ปีศาจร้ายไซบ็อก",
    title: "One Punch Man",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/one-punch-man/218",
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
    id: 15,
    name: "ตอนที่ 354: เรือรบไอนํ้า",
    title: "Dr.stone",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/dr.stone/354",
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
    id: 16,
    name: "ตอนที่ 55: วันปกติทั่วไป",
    title: "Boruto",
    type: BannerTypeEnum.CHAPTER,
    link: "/story/boruto/55",
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
];

const widgetTypeChapterGroupMocks: WidgetInterface = {
  id: 4,
  sequence: 4,
  slug: "last-updated",
  title: "อัปเดตล่าสุด",
  type: WidgetTypeEnum.CHAPTER_GROUP,
  item: defaultChapterGroupBanners,
  paginate: {
    current: 1,
    next: 2,
    previous: null,
    last: null,
    total: null,
  },
};

export function widgetTypeChapterGroupMock(page: number): WidgetInterface {
  let banners = shuffleArray(defaultChapterGroupBanners).map((banner: BannerInterface, key: number) => {
    banner.id = (page - 1) * 16 + key;
    return banner;
  });

  let paginate = {
    current: page,
    next: page + 1,
    previous: page - 1 > 0 ? page - 1 : null,
    last: null,
    total: null,
  };
  return {
    ...widgetTypeChapterGroupMocks,
    item: banners,
    paginate: paginate,
  };
}
