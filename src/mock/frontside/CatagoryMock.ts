import { CatagoryTypeEnum } from "@enums/frontside/CatagoryTypeEnum";
import { CatagoryIndexParameterInterface } from "@models/interfaces/frontside/CatagoryIndexParameterInterface";
import { CatagoryInterface } from "@models/interfaces/frontside/CatagoryInterface";
import { CatagoryListInterface } from "@models/interfaces/frontside/CatagoryListInterface";
import { CatagoryShowParameterInterface } from "@models/interfaces/frontside/CatagoryShowParameterInterface";

class CatagoryMock {
  private data: CatagoryInterface[] = data;

  public index(_params: CatagoryIndexParameterInterface, shouldSuccess: boolean): Promise<CatagoryListInterface> {
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

  public show(params: CatagoryShowParameterInterface, shouldSuccess?: boolean): Promise<CatagoryInterface | null> {
    return new Promise((resolve, reject) => {
      const catagory = this.data.filter((catagory) => catagory.slug === params.slug);
      let response: CatagoryInterface | null = null;
      if (catagory) {
        response = catagory[0];
      }
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

const data: CatagoryInterface[] = [
  {
    id: 1,
    slug: "แฟนตาซี",
    name: "แฟนตาซี",
    type: CatagoryTypeEnum.MANGA,
  },
  {
    id: 2,
    slug: "โรแมนติก",
    name: "โรแมนติก",
    type: CatagoryTypeEnum.MANGA,
  },
  {
    id: 3,
    slug: "สยองขวัญ",
    name: "สยองขวัญ",
    type: CatagoryTypeEnum.MANGA,
  },
  {
    id: 4,
    slug: "แฟนตาซี",
    name: "แฟนตาซี",
    type: CatagoryTypeEnum.NOVEL,
  },
  {
    id: 5,
    slug: "โรแมนติก",
    name: "โรแมนติก",
    type: CatagoryTypeEnum.NOVEL,
  },
  {
    id: 6,
    slug: "สยองขวัญ",
    name: "สยองขวัญ",
    type: CatagoryTypeEnum.NOVEL,
  },
];

export default new CatagoryMock();
