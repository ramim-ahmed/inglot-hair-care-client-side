import React from "react";
import styled from "styled-components";
import Dove from '../../assets/dove.png';
import HeaderAndShoulders from "../../assets/head and shoulders.png";
import Pantene from '../../assets/Pantene-logo.png';
import Sunsilk from '../../assets/sunsilk.png';
import Tresemme from "../../assets/tresemme.png";
import { Container } from "../../Styles/Container";
const OurBranded = () => {
  return (
    <TopBrandedContainer>
      <Container>
        <BrandedContent>
          <div>
            <h1>Our Top Brand</h1>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
            <TopBrandContentWrapper>
              <div>
                <BrandImg src={Tresemme} alt="" />
              </div>
              <div>
                <BrandImg src={Dove} alt="" />
              </div>
              <div>
                <BrandImg src={Pantene} alt="" />
              </div>
              <div>
                <BrandImg src={Sunsilk} alt="" />
              </div>
              <div>
                <BrandImg src={HeaderAndShoulders} alt="" />
              </div>
            </TopBrandContentWrapper>
          </div>
        </BrandedContent>
      </Container>
    </TopBrandedContainer>
  );
};

export default OurBranded;

const TopBrandedContainer = styled.div`
   margin: 100px 0;
`
const BrandedContent = styled.div`
  margin: 0 35px;
  text-align: center;
`;

const BrandImg = styled.img`
  width: 200px;
`;
const TopBrandContentWrapper = styled.div`
  display: grid;
  margin-top: 60px;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media(max-width:768px){
      grid-template-columns: repeat(1, 1fr);
  }
  
`;
