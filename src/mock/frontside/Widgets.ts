import { BannerType } from "@enums/BannerType";
import { ImageCollection } from "@enums/ImageCollection";
import { WidgetType } from "@enums/WidgetType";
import { WidgetListApiInterface } from "@models/interfaces/WidgetListApiInterface";
import { WidgetListApiParameter } from "@models/interfaces/WidgetListApiParameter";
import { WidgetListInterface } from "@models/interfaces/WidgetListInterface";

export const dataList: WidgetListInterface[] = [
  {
    id: 1,
    sequence: 1,
    name: "โฆษณาเดือนธันวาคม",
    title: "โฆษณาเดือนธันวาคม",
    type: WidgetType.ADVERTISEMENT_GROUP,
    item: [
      {
        id: 1,
        name: "banner 1",
        title: "banner 1",
        type: BannerType.ADVERTISEMENT_GROUP,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/advertise_1.gif",
            desktop: "/mock/widget/advertise_1.gif",
            mobile: "/mock/widget/advertise_1.gif",
            thumnail: "/mock/widget/advertise_1.gif",
            collection_name: ImageCollection.BANNER,
          },
        ],
      },
      {
        id: 2,
        name: "banner 2",
        title: "banner 2",
        type: BannerType.ADVERTISEMENT_GROUP,
        link: "www.google.com",
        images: [
          {
            id: 2,
            original: "/mock/widget/advertise_2.gif",
            desktop: "/mock/widget/advertise_2.gif",
            mobile: "/mock/widget/advertise_2.gif",
            thumnail: "/mock/widget/advertise_2.gif",
            collection_name: ImageCollection.BANNER,
          },
        ],
      },
      {
        id: 3,
        name: "banner 3",
        title: "banner 3",
        type: BannerType.ADVERTISEMENT_GROUP,
        link: "www.google.com",
        images: [
          {
            id: 2,
            original: "/mock/widget/advertise_3.gif",
            desktop: "/mock/widget/advertise_3.gif",
            mobile: "/mock/widget/advertise_3.gif",
            thumnail: "/mock/widget/advertise_3.gif",
            collection_name: ImageCollection.BANNER,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    sequence: 2,
    name: "โปรโมท 1",
    title: "กำลังเป็นที่นิยม",
    type: WidgetType.STORY_LIST,
    item: [
      {
        id: 1,
        name: "banner - One Piece",
        title: "One Piece",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/one-piece-web-cover-1.jpg",
            desktop: "/mock/widget/one-piece-web-cover-1.jpg",
            mobile: "/mock/widget/one-piece-web-cover-1.jpg",
            thumnail: "/mock/widget/one-piece-web-cover-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 2,
        name: "banner - One Punch Man",
        title: "One Punch Man",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/onepunchman-web-cover-1.jpg",
            desktop: "/mock/widget/onepunchman-web-cover-1.jpg",
            mobile: "/mock/widget/onepunchman-web-cover-1.jpg",
            thumnail: "/mock/widget/onepunchman-web-cover-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 3,
        name: "banner - Boruto",
        title: "Boruto",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/boruto-web-cover-1.png",
            desktop: "/mock/widget/boruto-web-cover-1.png",
            mobile: "/mock/widget/boruto-web-cover-1.png",
            thumnail: "/mock/widget/boruto-thumnail-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 4,
        name: "banner - Dr.stone",
        title: "Dr.stone",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/dr.strone-web-cover-1.jpg",
            desktop: "/mock/widget/dr.strone-web-cover-1.jpg",
            mobile: "/mock/widget/dr.strone-web-cover-1.jpg",
            thumnail: "/mock/widget/dr.strone-web-cover-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 5,
        name: "banner - Boxer Kali",
        title: "Boxer Kali",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            desktop: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            mobile: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            thumnail: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    sequence: 3,
    name: "โปรโมท 2",
    title: "เรื่องใหม่ล่าสุด",
    type: WidgetType.STORY_LIST,
    item: [
      {
        id: 1,
        name: "banner - Boruto",
        title: "Boruto",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/boruto-web-cover-1.png",
            desktop: "/mock/widget/boruto-web-cover-1.png",
            mobile: "/mock/widget/boruto-web-cover-1.png",
            thumnail: "/mock/widget/boruto-thumnail-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 2,
        name: "banner - Boxer Kali",
        title: "Boxer Kali",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            desktop: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            mobile: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            thumnail: "/mock/widget/boxer-kali-chapter-thumnail.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 3,
        name: "banner - One Piece",
        title: "One Piece",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/one-piece-web-cover-1.jpg",
            desktop: "/mock/widget/one-piece-web-cover-1.jpg",
            mobile: "/mock/widget/one-piece-web-cover-1.jpg",
            thumnail: "/mock/widget/one-piece-web-cover-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 4,
        name: "banner - One Punch Man",
        title: "One Punch Man",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/onepunchman-web-cover-1.jpg",
            desktop: "/mock/widget/onepunchman-web-cover-1.jpg",
            mobile: "/mock/widget/onepunchman-web-cover-1.jpg",
            thumnail: "/mock/widget/onepunchman-web-cover-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
      {
        id: 5,
        name: "banner - Dr.stone",
        title: "Dr.stone",
        type: BannerType.STORY,
        link: "www.google.com",
        images: [
          {
            id: 1,
            original: "/mock/widget/dr.strone-web-cover-1.jpg",
            desktop: "/mock/widget/dr.strone-web-cover-1.jpg",
            mobile: "/mock/widget/dr.strone-web-cover-1.jpg",
            thumnail: "/mock/widget/dr.strone-web-cover-1.jpg",
            collection_name: ImageCollection.MANGA_IMAGE,
          },
        ],
      },
    ],
  },
];

export const widgetResponse: WidgetListApiInterface = {
  current: 1,
  next: 2,
  previous: null,
  last: 2,
  total: 2,
  data: dataList,
};

export function widgetListApi(
  params: WidgetListApiParameter,
): Promise<WidgetListApiInterface> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.shouldSuccess) {
        resolve(widgetResponse);
      } else {
        reject("Failed");
      }
    }, 300);
  });
}

export function widgetList(
  shouldSuccess: boolean,
): Promise<WidgetListInterface[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSuccess) {
        resolve(dataList);
      } else {
        reject("Failed");
      }
    }, 1000);
  });
}
