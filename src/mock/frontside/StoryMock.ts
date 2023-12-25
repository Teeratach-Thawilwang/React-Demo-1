import { faker } from "@faker-js/faker";

import { CategoryTypeEnum } from "@enums/frontside/CategoryTypeEnum";
import { ImageCollectionEnum } from "@enums/frontside/ImageCollectionEnum";
import { ChapterListInterface } from "@models/interfaces/frontside/ChapterListInterface";
import { StoryInterface } from "@models/interfaces/frontside/StoryInterface";
import { StoryShowParameterInterface } from "@models/interfaces/frontside/apiParameter/StoryShowParameterInterface";

class StoryMock {
  private data: StoryInterface = data;

  public show(_params: StoryShowParameterInterface, shouldSuccess: boolean): Promise<StoryInterface> {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (shouldSuccess) {
            resolve(this.data);
          } else {
            reject("Failed");
          }
        },
        import.meta.env.VITE_MOCK_API_RESPONSE_TIME,
      );
    });
  }

  public chapterList(params: StoryShowParameterInterface, shouldSuccess: boolean): Promise<ChapterListInterface> {
    return new Promise((resolve, reject) => {
      const response = createChaptersMock(1000, params.page ?? 1);
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

const data: StoryInterface = {
  id: 1,
  slug: "one-piece",
  name: "one piece",
  description: `วันพีซ เป็นเรื่องราวในยุคทองของโจรสลัด โจรสลัดทุกคนมีเป้าหมายเดียวกันคือเพื่อค้นหา สมบัติในตำนานที่เรียกว่า "วันพีซ" โดยผู้ที่เคยครอบครองวันพีซนั้นมีอยู่คนเดียวตามที่เปิดเผยคือ ราชาแห่งโจรสลัด โกลด์ ดี โรเจอร์ ซึ่งหลังจากที่ ได้ครอบครองวันพีซแล้ว โกลด์ ดี โรเจอร์ ได้เป็นราชาโจรสลัด ชายผู้ได้ทั้ง ความมั่งคั่ง ชื่อเสียงและอำนาจ ผู้ที่ได้ทุกอย่างในโลกมาครอบครองนั้น ได้สั่งสลายกลุ่ม จากนั้นแยกย้ายกันไปไม่มีใครรู้อีก 1 ปีต่อมา ก็ได้มอบตัวและยอมรับโทษการประหารชีวิตที่เกาะโพลสตาร์ ที่เมืองโล้คทาวน์บ้านเกิดของตน และก่อนตายได้มีคนถามโรเจอร์เรื่องสมบัติของโรเจอร์ โรเจอร์ได้ทิ้งคำพูดสุดท้ายที่เปลี่ยนยุคสมัยของโจรสลัดว่า "สมบัติของฉันน่ะเหรอ อยากได้ก็เอาไปสิ ไปหาเอาเลย ฉันเอาทุกอย่างบนโลกไปไว้ที่นั่นหมดแล้ว" จากนั้นก็ถูกประหารทันที แล้วเหล่าคนดูในลานประหารก็โห่ร้องกันอย่างดีใจ กับคนที่ทราบข่าวก็ออกเดินเรือไปเป็นโจรสลัดกัน โจรสลัดทั้งหลายจึงมุ่งหน้าสู่ แกรนด์ไลน์ เพื่อตามหาวันพีซ`,
  author: {
    customer_id: 20,
    customer_name: "เออิจิโร โอดะ",
  },
  score: faker.number.float({ min: 2, max: 5, precision: 0.1 }),
  view_count: faker.number.int({ min: 123456, max: 1000000 }),
  type: CategoryTypeEnum.MANGA,
  cover_image: {
    id: 1,
    original: "/mock/widget/one-piece-web-cover-1.jpg",
    desktop: "/mock/widget/one-piece-web-cover-1.jpg",
    mobile: "/mock/widget/one-piece-web-cover-1.jpg",
    thumnail: "/mock/widget/one-piece-web-cover-1.jpg",
    collection_name: ImageCollectionEnum.MANGA_IMAGE,
  },
  chapters: null,
};

function createChaptersMock(total: number, page: number, perPage: number = 20): ChapterListInterface {
  let data: any[] = [];
  for (let i = total - (page - 1) * perPage; i > total - page * perPage; i--) {
    let seed = {
      id: i,
      chapter_number: i,
      name: faker.string.alphanumeric(100),
      score: faker.number.float({ min: 2, max: 5, precision: 0.1 }),
      view_count: faker.number.int({ min: 100, max: 10000000 }),
      release_date: faker.date.future(),
      cover_image: {
        id: 1,
        original: "/mock/widget/onepeice-thumnail-1.png",
        desktop: "/mock/widget/onepeice-thumnail-1.png",
        mobile: "/mock/widget/onepeice-thumnail-1.png",
        thumnail: "/mock/widget/onepeice-thumnail-1.png",
        collection_name: ImageCollectionEnum.MANGA_IMAGE,
      },
    };

    data = [...data, seed];
  }

  return {
    data: data,
    current: page,
    next: page * perPage > total ? null : page + 1,
    previous: page > 1 ? page - 1 : null,
    last: Math.ceil(total / perPage),
    total: total,
  };
}

export default new StoryMock();
