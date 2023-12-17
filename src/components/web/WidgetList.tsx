import { useMemo } from "react";

import styled from "styled-components";

import WidgetTypeAdvertisementGroup from "@components/web/WidgetTypeAdvertisementGroup";
import WidgetTypeChapterGroup from "@components/web/WidgetTypeChapterGroup";
import WidgetTypeStoryList from "@components/web/WidgetTypeStoryList";
import { WidgetTypeEnum } from "@enums/frontside/WidgetTypeEnum";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";
import WidgetService from "@services/frontside/WidgetService";

export default function WidgetList() {
  const widgetListState = WidgetService.getwidgetListState();
  const widgets = useMemo(() => widgetListState.widgetList, [widgetListState.widgetList]);
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
      case WidgetTypeEnum.STORY_LIST:
        return <WidgetTypeStoryList {...widget} key={widget.id} />;
      case WidgetTypeEnum.CHAPTER_GROUP:
        return <WidgetTypeChapterGroup {...widget} key={widget.id} />;
    }
  });
}
