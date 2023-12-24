import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { CatagorySliceInterface } from "@models/interfaces/frontside/CatagorySliceInterface";
import CatagoryService from "@services/frontside/CatagoryService";

export default function CategoryDropDownCard(props: { isShow: boolean; onClick: (isShow: boolean) => void }) {
  const categoryState = CatagoryService.getState();
  const elements = createCategoryChoice(categoryState);

  useEffect(() => {
    if (categoryState.catagories == null) {
      CatagoryService.loadIndex({});
    }
  }, []);

  return <Box $isShow={props.isShow}>{elements}</Box>;
}

const Box = styled.div<{ $isShow: boolean }>`
  display: ${(props) => (props.$isShow ? "block" : "none")};
  position: absolute;
  min-width: 100px;
  background-color: #f1f1f1;
  border-radius: 2px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.8);
  margin-left: 8px;
  z-index: 99;
`;

const Item = styled.div`
  /* border: 1px solid red; */
  height: 40px;
  color: #000;
  font-size: 18px;
  white-space: nowrap;

  display: flex;
  justify-content: left;
  align-items: center;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

function createCategoryChoice(state: CatagorySliceInterface) {
  const navigate = useNavigate();
  return state.catagories?.data.map((category) => {
    return (
      <Item onClick={() => navigate(`/category/${category.slug}`)} key={category.id}>
        &ensp;{category.name}&ensp;
      </Item>
    );
  });
}
