import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

import bookmarkIcon from "@assets/icon/bookmark.svg";
import categoryIcon from "@assets/icon/category.svg";
import homeIcon from "@assets/icon/home.svg";
import searchIcon from "@assets/icon/search_icon.svg";
import signinIcon from "@assets/icon/signin_icon.svg";
import SignFormService from "@services/frontside/SignFormService";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <TabNavbar>
        <Logo onClick={() => (location.pathname != "/" ? navigate("/") : null)}>
          <p>Lunar</p>
        </Logo>
        <Button onClick={() => (location.pathname != "/" ? navigate("/") : null)}>
          <img src={homeIcon} alt="HomeIcon" />
          <p>หน้าแรก</p>
        </Button>
        <Button onClick={() => (location.pathname != "/category" ? navigate("/category") : null)}>
          <img src={categoryIcon} alt="CategoryIcon" />
          <p>หมวดหมู่</p>
        </Button>
        <Button onClick={() => (location.pathname != "/category" ? navigate("/bookmark") : null)}>
          <img src={bookmarkIcon} alt="BookmarkIcon" />
          <p>บุ๊กมาร์ค</p>
        </Button>
        <SearchElement>
          <img src={searchIcon} alt="SearchIcon" />
          <input type="text" placeholder="ค้นหา" />
        </SearchElement>
        <Button onClick={() => SignFormService.setIsShow(true)}>
          <img src={signinIcon} alt="SinginIcon" />
          <p>เข้าสู่ระบบ</p>
        </Button>
      </TabNavbar>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #152027;
  display: flex;
  justify-content: center;
`;

const TabNavbar = styled.div`
  width: 1000px;
  height: 60px;
  background-color: #152027;
  display: flex;

  Button:last-child {
    margin-right: 0px;
    margin-left: auto;
  }
`;

const Logo = styled.div`
  margin: 0 32px 0 0;
  padding: 0;
  width: 135px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  p {
    font-size: 50px;
    font-family: Berkshire Swash;
    font-weight: normal;
    background: linear-gradient(to bottom right, #2e2774, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  background-color: transparent;
  border: 0px transparent;

  img {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }

  p {
    font-size: 18px;
  }

  :hover {
    cursor: pointer;
  }
`;

const SearchElement = styled.div`
  display: flex;
  align-items: center;

  background-color: #5c5c5c;
  width: 100px;
  height: 30px;
  margin: auto 25px auto 0;
  padding: 0;
  border-radius: 7px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-right: 7px;
  }

  input {
    margin: 0px;
    padding: 0px;
    width: 66px;
    height: 100%;
    font-size: 18px;
    background-color: #5c5c5c;
    color: #ffffff;
    border: 0 transparent;
    border-radius: 7px;
    outline: none;
    transition: width 0.5s;

    &::placeholder {
      color: #ffffff;
    }
  }

  input:focus {
    background-color: #5c5c5c;
    border-radius: 7px;
    width: 300px;
    transition: width 0.5s;
  }
`;
