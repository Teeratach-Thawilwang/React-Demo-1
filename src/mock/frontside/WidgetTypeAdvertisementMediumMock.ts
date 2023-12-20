import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetInterface";
import { shuffleArray } from "@utils/Helpers";

const defaultAdvertisementMediumBanners: BannerInterface[] = [
  {
    id: 1,
    name: "banner 1",
    title: "banner 1",
    type: BannerTypeEnum.ADVERTISEMENT_MEDIUM,
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
    type: BannerTypeEnum.ADVERTISEMENT_MEDIUM,
    link: "www.google.com",
    images: [
      {
        id: 1,
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
    type: BannerTypeEnum.ADVERTISEMENT_MEDIUM,
    link: "www.google.com",
    images: [
      {
        id: 1,
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
    type: BannerTypeEnum.ADVERTISEMENT_MEDIUM,
    link: "www.google.com",
    images: [
      {
        id: 1,
        original: "/mock/widget/advertise_4.gif",
        desktop: "/mock/widget/advertise_4.gif",
        mobile: "/mock/widget/advertise_4.gif",
        thumnail: "/mock/widget/advertise_4.gif",
        collection_name: ImageCollectionEnum.BANNER,
      },
    ],
  },
];

const widgetTypeAdvertisementMediumMocks: WidgetDetailInterface = {
  id: 5,
  sequence: 5,
  slug: "medium-advertisement",
  title: "ป้ายโฆษณาขนาดปานกลาง",
  type: WidgetTypeEnum.ADVERTISEMENT_MEDIUM,
  item: shuffleArray(defaultAdvertisementMediumBanners),
};

export function widgetTypeAdvertisementMediumMock(slug: string): WidgetDetailInterface {
  widgetTypeAdvertisementMediumMocks.slug = slug;
  return widgetTypeAdvertisementMediumMocks;
}
