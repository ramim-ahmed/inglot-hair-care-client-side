import React from "react";
import styled from "styled-components";
import { Container } from "../../Styles/Container";

const Shampoo = () => {
  return (
    <ShampooContainer>
      <Container>
        <ShampooContent>
          <ShampooTitle>
            <h1>Shampoo</h1>
          </ShampooTitle>
          <ShampooDescription>
            <p>
              Looking for gorgeous, healthy-looking hair? It all starts with the
              right shampoo. And luckily we've got a shampoo solution for every
              hair type so you can feel salon-fresh every day.
            </p>
            <br/>
            <p>
              Smoother, shinier, stronger-looking hair starts in the shower –
              with a great clarifying shampoo. Whether you want to add volume,
              control frizz, define those curls, or simply keep your strands
              clean, TRESemmé salon-professional formulas are designed to offer
              easy cleansing solutions. Choosing the right shampoo is key to a
              successful hairstyle, so take time to consider your needs. Think
              about this: are you working with the locks you want or the ones
              you have? Do you want to create cool waves or work to define the
              curls you've been blessed with?
            </p>
          </ShampooDescription>
        </ShampooContent>
      </Container>
    </ShampooContainer>
  );
};

export default Shampoo;

const ShampooContainer = styled.div`
  background-color: black;
  color: white;
`;

const ShampooContent = styled.div`
  margin: 0px 35px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 25px;
  @media(max-width:768px){
     flex-direction: column;
  }
`;

const ShampooTitle = styled.div`
  flex: 1;
  & h1 {
      font-size: 45px;
  }
  @media(max-width:768px){
     flex: 0;
     margin: 20px 0px;
  }
`;

const ShampooDescription = styled.div`
  flex: 3;
  @media(max-width:768px){
     flex: 0;
     margin: 20px 0px;
  }
`;
