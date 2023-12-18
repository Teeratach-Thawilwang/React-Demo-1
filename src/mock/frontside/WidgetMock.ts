import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { widgetTypeAdvertisementGroupMock } from "@mock/frontside/WidgetTypeAdvertisementGroupMock";
import { widgetTypeChapterGroupMock } from "@mock/frontside/WidgetTypeChapterGroupMock";
import { widgetTypeStoryListMock } from "@mock/frontside/WidgetTypeStoryListMock";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";
import { WidgetListApiParameter } from "@models/interfaces/frontside/WidgetListApiParameter";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";

import { widgetTypeAdvertisementMediumMock } from "./WidgetTypeAdvertisementMediumMock";
import { widgetTypeAdvertisementSmallMock } from "./WidgetTypeAdvertisementSmallMock";
import { widgetTypeStoryWindowMock } from "./WidgetTypeStoryWindowMock";

class WidgetMock {
  private data: WidgetDetailInterface[] = [
    widgetTypeAdvertisementGroupMock("โฆษณาเดือนธันวาคม"),
    widgetTypeStoryListMock("โปรโมท-1"),
    widgetTypeStoryListMock("โปรโมท-2"),
    widgetTypeChapterGroupMock(1),
    widgetTypeAdvertisementMediumMock("ป้ายโฆษณา-medium"),
    widgetTypeStoryWindowMock("โปรโมท-3"),
    widgetTypeAdvertisementSmallMock("ป้ายโฆษณา-small"),
  ];

  public index(_params: WidgetListApiParameter, shouldSuccess: boolean): Promise<WidgetListInterface> {
    return new Promise((resolve, reject) => {
      const response: WidgetListInterface = {
        current: 1,
        next: null,
        previous: null,
        last: 1,
        total: 7,
        data: this.data,
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

  public show(slug: string, page?: number, shouldSuccess?: boolean): Promise<WidgetDetailInterface> {
    return new Promise((resolve, reject) => {
      let response: any = null;
      switch (slug) {
        case "โปรโมท-1":
          response = widgetTypeStoryListMock(slug);
          break;

        case "โปรโมท-2":
          response = widgetTypeStoryListMock(slug);
          break;

        case "last-updated":
          response = widgetTypeChapterGroupMock(page ?? 1);
          break;

        case "โฆษณาเดือนธันวาคม":
          response = widgetTypeAdvertisementGroupMock(slug);
          break;
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

  public getAdvertisement(shouldSuccess: boolean): Promise<WidgetListInterface> {
    return new Promise((resolve, reject) => {
      let data = this.data.filter((widget) => {
        return (
          widget.type === WidgetTypeEnum.ADVERTISEMENT_SMALL ||
          widget.type === WidgetTypeEnum.ADVERTISEMENT_MEDIUM ||
          widget.type === WidgetTypeEnum.ADVERTISEMENT_GROUP
        );
      });

      const response: WidgetListInterface = {
        current: 1,
        next: null,
        previous: null,
        last: 1,
        total: 3,
        data: data,
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

export default new WidgetMock();
