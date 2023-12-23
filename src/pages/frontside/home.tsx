import { useEffect } from "react";

import styled from "styled-components";

import Footer from "@components/web/Footer";
import GoTopButton from "@components/web/GoTopButton";
import Navbar from "@components/web/Navbar";
import WidgetList from "@components/web/WidgetList";
import WidgetService from "@services/frontside/WidgetService";

export default function Home() {
  useEffect(() => {
    document.title = "Lunar: Home";
    WidgetService.loadIndex({});
  }, []);

  return (
    <>
      <Box>
        <Navbar />
        <WidgetList />
      </Box>
      <GoTopButton />
      <Footer />
    </>
  );
}

const Box = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);
`;
