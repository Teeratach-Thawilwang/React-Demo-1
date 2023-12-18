import styled from "styled-components";

export default function Footer() {
  return (
    <Box>
      <p>© Copyright 2023 Lunarian.com All Rights Reserved.</p>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 50px;
  background-color: #152027;
  font-size: 18px;
  font-weight: lighter;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;
