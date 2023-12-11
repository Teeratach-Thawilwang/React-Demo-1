import { useEffect } from "react";

import styled from "styled-components";

import Navbar from "@components/web/Navbar";
import SignForm from "@components/web/SignForm";
import WidgetList from "@components/web/WidgetList";
import { WidgetListApiParameter } from "@models/interfaces/WidgetListApiParameter";
import { useAppDispatch } from "@store/Store";
import { getWidgetListAsync } from "@store/slices/WidgetSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Should use WidgetService
    const params: WidgetListApiParameter = {
      shouldSuccess: true,
      useMock: true,
    };
    dispatch(getWidgetListAsync(params));
  }, []);

  return (
    <Box>
      <Navbar />
      <SignForm />
      <WidgetList />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
`;
