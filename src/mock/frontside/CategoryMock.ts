import { CategoryTypeEnum } from "@enums/frontside/CategoryTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { CategoryInterface } from "@models/interfaces/frontside/CategoryInterface";
import { CategoryListInterface } from "@models/interfaces/frontside/CategoryListInterface";
import { CategoryStoryInterface } from "@models/interfaces/frontside/CategoryStoryInterface";
import { CategoryIndexParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryIndexParameterInterface";
import { CategoryStoryParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryStoryParameterInterface";
import { shuffleArray } from "@utils/Helpers";

class CategoryMock {
  private data: CategoryInterface[] = data;

  public index(_params: CategoryIndexParameterInterface, shouldSuccess: boolean): Promise<CategoryListInterface> {
    return new Promise((resolve, reject) => {
      const response = { data: this.data };
      setTimeout(
        () => {
          if (shouldSuccess) {
            resolve(response);
          } else {
            reject("Failed");
          }
        },
        import.meta.env.VITE_MOCK_API_RESPONSE_TIME,
      );
    });
  }

  public getStoryByCategorySlug(params: CategoryStoryParameterInterface, shouldSuccess?: boolean): Promise<CategoryStoryInterface | null> {
    return new Promise((resolve, reject) => {
      let page = params.page ?? 1;
      let stories = shuffleArray(defaultStories).map((story: CategoryInterface, key: number) => {
        story.id = (page - 1) * 16 + key;
        return story;
      });
      let response: CategoryStoryInterface = {
        data: stories,
        current: page,
        next: page + 1,
        previous: page - 1 > 0 ? page - 1 : null,
        last: null,
        total: null,
      };
      setTimeout(
        () => {
          if (shouldSuccess) {
            resolve(response);
          } else {
            reject("Failed");
          }
        },
        import.meta.env.VITE_MOCK_API_RESPONSE_TIME,
      );
    });
  }
}

const data: CategoryInterface[] = [
  {
    id: 1,
    slug: "แฟนตาซี",
    name: "แฟนตาซี",
    type: CategoryTypeEnum.MANGA,
  },
  {
    id: 2,
    slug: "โรแมนติก",
    name: "โรแมนติก",
    type: CategoryTypeEnum.MANGA,
  },
  {
    id: 3,
    slug: "สยองขวัญ",
    name: "สยองขวัญ",
    type: CategoryTypeEnum.MANGA,
  },
  {
    id: 4,
    slug: "แฟนตาซี",
    name: "แฟนตาซี",
    type: CategoryTypeEnum.NOVEL,
  },
  {
    id: 5,
    slug: "โรแมนติก",
    name: "โรแมนติก",
    type: CategoryTypeEnum.NOVEL,
  },
  {
    id: 6,
    slug: "สยองขวัญ",
    name: "สยองขวัญ",
    type: CategoryTypeEnum.NOVEL,
  },
  {
    id: 7,
    slug: "ผจญภัย",
    name: "ผจญภัย",
    type: CategoryTypeEnum.NOVEL,
  },
  {
    id: 8,
    slug: "ต่อสู้",
    name: "ต่อสู้",
    type: CategoryTypeEnum.NOVEL,
  },
];

const defaultStories: CategoryInterface[] = [
  {
    id: 1,
    name: "One Piece",
    slug: "one-piece",
    type: CategoryTypeEnum.MANGA,
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
    name: "One Punch Man",
    slug: "one-punch-man",
    type: CategoryTypeEnum.MANGA,
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
    name: "Boruto",
    slug: "boruto",
    type: CategoryTypeEnum.MANGA,
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
    name: "Dr.stone",
    slug: "Dr.stone",
    type: CategoryTypeEnum.MANGA,
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
    name: "One Piece",
    slug: "one-piece",
    type: CategoryTypeEnum.MANGA,
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
    id: 6,
    name: "One Punch Man",
    slug: "one-punch-man",
    type: CategoryTypeEnum.MANGA,
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
    id: 7,
    name: "Boruto",
    slug: "boruto",
    type: CategoryTypeEnum.MANGA,
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
    id: 8,
    name: "Dr.stone",
    slug: "Dr.stone",
    type: CategoryTypeEnum.MANGA,
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
    id: 9,
    name: "One Piece",
    slug: "one-piece",
    type: CategoryTypeEnum.MANGA,
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
    id: 10,
    name: "One Punch Man",
    slug: "one-punch-man",
    type: CategoryTypeEnum.MANGA,
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
    id: 11,
    name: "Boruto",
    slug: "boruto",
    type: CategoryTypeEnum.MANGA,
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
    name: "Dr.stone",
    slug: "Dr.stone",
    type: CategoryTypeEnum.MANGA,
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
    id: 13,
    name: "One Piece",
    slug: "one-piece",
    type: CategoryTypeEnum.MANGA,
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
    name: "One Punch Man",
    slug: "one-punch-man",
    type: CategoryTypeEnum.MANGA,
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
    name: "Boruto",
    slug: "boruto",
    type: CategoryTypeEnum.MANGA,
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
    id: 16,
    name: "Dr.stone",
    slug: "Dr.stone",
    type: CategoryTypeEnum.MANGA,
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
];

export default new CategoryMock();
