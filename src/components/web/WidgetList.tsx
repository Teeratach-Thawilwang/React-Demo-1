import { useMemo } from "react";

import styled from "styled-components";

import { WidgetType } from "@enums/WidgetType";
import { WidgetListApiInterface } from "@models/interfaces/WidgetListApiInterface";
import { useAppSelector } from "@store/Store";

import WidgetTypeAdvertisementGroup from "./WidgetTypeAdvertisementGroup";
import WidgetTypeStoryList from "./WidgetTypeStoryList";

export default function WidgetList() {
  const widgetState = useAppSelector((state) => state.widget);
  const widgets = useMemo(() => widgetState.widget, [widgetState.widget]);
  const element = widgetManager(widgets);

  return <Box>{element}</Box>;
}

const Box = styled.div`
  width: 100%;

  margin: 0;
`;

function widgetManager(widget: WidgetListApiInterface | null) {
  return widget?.data.map((widget, _key) => {
    switch (widget.type) {
      case WidgetType.ADVERTISEMENT_GROUP:
        return <WidgetTypeAdvertisementGroup {...widget} key={widget.id} />;
      case WidgetType.STORY_LIST:
        return <WidgetTypeStoryList {...widget} key={widget.id} />;
    }
  });
}
