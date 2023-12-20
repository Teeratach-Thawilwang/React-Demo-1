import { useMemo } from "react";

import styled from "styled-components";

import WidgetTypeAdvertisementGroup from "@components/web/WidgetTypeAdvertisementGroup";
import WidgetTypeAdvertisementMedium from "@components/web/WidgetTypeAdvertisementMedium";
import WidgetTypeAdvertisementSmall from "@components/web/WidgetTypeAdvertisementSmall";
import WidgetTypeChapterGroup from "@components/web/WidgetTypeChapterGroup";
import WidgetTypeStoryList from "@components/web/WidgetTypeStoryList";
import WidgetTypeStoryWindow from "@components/web/WidgetTypeStoryWindow";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";
import WidgetService from "@services/frontside/WidgetService";

export default function WidgetList() {
  const widgetState = WidgetService.getState();
  const widgets = useMemo(() => widgetState.widgets, [widgetState.widgets]);
  const element = widgetManager(widgets);
  return <Box>{element}</Box>;
}

const Box = styled.div`
  width: 100%;
  margin: 0;
`;

function widgetManager(widget: WidgetListInterface | null) {
  return widget?.data.map((widget) => {
    switch (widget.type) {
      case WidgetTypeEnum.ADVERTISEMENT_GROUP:
        return <WidgetTypeAdvertisementGroup {...widget} key={widget.id} />;
      case WidgetTypeEnum.ADVERTISEMENT_SMALL:
        return <WidgetTypeAdvertisementSmall {...widget} key={widget.id} />;
      case WidgetTypeEnum.ADVERTISEMENT_MEDIUM:
        return <WidgetTypeAdvertisementMedium {...widget} key={widget.id} />;
      case WidgetTypeEnum.STORY_LIST:
        return <WidgetTypeStoryList {...widget} key={widget.id} />;
      case WidgetTypeEnum.STORY_WINDOW:
        return <WidgetTypeStoryWindow {...widget} key={widget.id} />;
      case WidgetTypeEnum.CHAPTER_GROUP:
        return <WidgetTypeChapterGroup {...widget} key={widget.id} />;
    }
  });
}
