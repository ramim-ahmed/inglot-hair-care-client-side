import React, { useContext } from "react";
import styled from "styled-components";
import { TestimonialContext } from "../../App";
import { Container } from "../../Styles/Container";
import Testimonial from "../Testimonial/Testimonial";
const Testimonials = () => {
  const [testimonials] = useContext(TestimonialContext);
  return (
    <TestimonialContainer>
      <Container>
        <div style={{textAlign:'center', marginTop:'25px'}}>
          <h1>Testimonials</h1>
        </div>
        <TesmonialContentWrapper>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial._id} testimonial={testimonial} />
          ))}
        </TesmonialContentWrapper>
      </Container>
    </TestimonialContainer>
  );
};

export default Testimonials;

const TestimonialContainer = styled.div`
  margin: 100px 0;
  background-color: #F6F6F6;
  padding: 25px 0;
`;

const TesmonialContentWrapper = styled.div`
  margin: 50px 35px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;
