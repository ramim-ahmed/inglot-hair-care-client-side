import React from "react";
import styled from "styled-components";
import bannerBg from "../../assets/newLetters-bg.webp";
import { Button } from "../../Styles/Button";
import { Container } from "../../Styles/Container";
const Banner = () => {
  return (
    <BannerDiv style={{ backgroundImage: `url(${bannerBg})` }}>
        <Container>
            <BannerContent>
                <div>
                    <h1>Strenth your hair and Growth.</h1>
                    <h1>Make Glamarous Classics Curls</h1>
                    <Button>Connect With Us</Button>
                </div>
            </BannerContent>
        </Container>
    </BannerDiv>
  );
};

export default Banner;

const BannerDiv = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const BannerContent = styled.div`
  margin: 0 35px;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  & div {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 18px;
      border-radius: 5px;
    & h1 {
      font-size: 45px;
      margin: 6px 0;
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
  }
`;
