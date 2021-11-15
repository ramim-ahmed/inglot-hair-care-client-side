import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import { Container } from "../../Styles/Container";

const Explore = () => {
  return (
    <div>
      <ExploreContainer>
        <Container>
          <ExploreContent>
            <div>
              <h1>Explore Our Featured Products</h1>
              <br />
              <h4>
                <Link style={{ color: "#A90D90" }} to="/home">
                  Home
                </Link>
                | <span>Explore</span>
              </h4>
            </div>
          </ExploreContent>
        </Container>
      </ExploreContainer>
      <FeaturedProducts />
    </div>
  );
};

export default Explore;


const ExploreContainer = styled.div`
        background-color: #003F63;
        text-align: center;
`

const ExploreContent = styled.div`
    color: white;
   display: flex;
   height: 375px;
   justify-content: center;
   align-items: center;
`
