import React, { useContext } from "react";
import styled from "styled-components";
import { FeaturedProductsContext } from "../../App";
import { Container } from "../../Styles/Container";
import Product from "../Product/Product";
// import Product from "../Product/Product";

const FeaturedProducts = ({ slice }) => {
  const [featuredProducts] = useContext(FeaturedProductsContext);
  let sliceProduct;
  if (slice === "true") {
    sliceProduct = featuredProducts.slice(0, 6);
  } else {
    sliceProduct = featuredProducts.slice();
  }
  return (
    <FeaturedProductsContainer>
      <Container>
        <FeaturedContent>
          <FeaturedTitle>
            <h1>Our Featured Products</h1>
            <p>Choose your fav brand shampoo and make sunshine hair</p>
          </FeaturedTitle>
          <ProductsContent>
            {sliceProduct.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </ProductsContent>
        </FeaturedContent>
      </Container>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;

const FeaturedProductsContainer = styled.div`
  margin: 100px 0px;
`;

const FeaturedContent = styled.div`
  margin: 0 35px;
`;

const FeaturedTitle = styled.div`
  text-align: center;
`;

const ProductsContent = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  @media(max-width:990px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width:680px){
    grid-template-columns: repeat(1, 1fr);
  }
`;
