import { useEffect } from "react";

import styled from "styled-components";

import Footer from "@components/web/Footer";
import GoTopButton from "@components/web/GoTopButton";
import Navbar from "@components/web/Navbar";
import SignForm from "@components/web/SignForm";
import WidgetList from "@components/web/WidgetList";
import WidgetService from "@services/frontside/WidgetService";

export default function Home() {
  useEffect(() => {
    document.title = "Lunar: Home";
    WidgetService.loadWidgetList({});
  }, []);

  return (
    <Box>
      <Navbar />
      <SignForm />
      <WidgetList />
      <Footer />
      <GoTopButton />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
`;
