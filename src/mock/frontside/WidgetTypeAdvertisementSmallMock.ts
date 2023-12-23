import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";
import { shuffleArray } from "@utils/Helpers";

const defaultAdvertisementSmallBanners: BannerInterface[] = [
  {
    id: 1,
    name: "banner 1",
    title: "banner 1",
    type: BannerTypeEnum.ADVERTISEMENT_SMALL,
    link: "www.google.com",
    images: [
      {
        id: 1,
        original: "/mock/widget/advertise_1.gif",
        desktop: "/mock/widget/advertise_1.gif",
        mobile: "/mock/widget/advertise_1.gif",
        thumnail: "/mock/widget/advertise_1.gif",
        collection_name: ImageCollectionEnum.BANNER,
      },
    ],
  },
  {
    id: 2,
    name: "banner 2",
    title: "banner 2",
    type: BannerTypeEnum.ADVERTISEMENT_SMALL,
    link: "www.google.com",
    images: [
      {
        id: 2,
        original: "/mock/widget/advertise_2.gif",
        desktop: "/mock/widget/advertise_2.gif",
        mobile: "/mock/widget/advertise_2.gif",
        thumnail: "/mock/widget/advertise_2.gif",
        collection_name: ImageCollectionEnum.BANNER,
      },
    ],
  },
  {
    id: 3,
    name: "banner 3",
    title: "banner 3",
    type: BannerTypeEnum.ADVERTISEMENT_SMALL,
    link: "www.google.com",
    images: [
      {
        id: 2,
        original: "/mock/widget/advertise_3.gif",
        desktop: "/mock/widget/advertise_3.gif",
        mobile: "/mock/widget/advertise_3.gif",
        thumnail: "/mock/widget/advertise_3.gif",
        collection_name: ImageCollectionEnum.BANNER,
      },
    ],
  },
  {
    id: 4,
    name: "banner 4",
    title: "banner 4",
    type: BannerTypeEnum.ADVERTISEMENT_SMALL,
    link: "www.google.com",
    images: [
      {
        id: 2,
        original: "/mock/widget/advertise_4.gif",
        desktop: "/mock/widget/advertise_4.gif",
        mobile: "/mock/widget/advertise_4.gif",
        thumnail: "/mock/widget/advertise_4.gif",
        collection_name: ImageCollectionEnum.BANNER,
      },
    ],
  },
];

const widgetTypeAdvertisementSmallMocks: WidgetInterface = {
  id: 7,
  sequence: 7,
  slug: "small-advertisement",
  title: "ป้ายโฆษณา",
  type: WidgetTypeEnum.ADVERTISEMENT_SMALL,
  item: [],
};

export function widgetTypeAdvertisementSmallMock(slug: string): WidgetInterface {
  let items = shuffleArray(defaultAdvertisementSmallBanners);

  widgetTypeAdvertisementSmallMocks.slug = slug;
  widgetTypeAdvertisementSmallMocks.item = items;
  return widgetTypeAdvertisementSmallMocks;
}
