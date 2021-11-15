import React from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
const Testimonial = ({testimonial}) => {
    const {name, photo, country, designation, commnents, rating} = testimonial;
    return (
        <TestimonialCard>
             <TestimonialMedia>
                     <img src={photo} alt="" />
             </TestimonialMedia>
             <TestimonialCardBody>
                 <div>
                    <h3>{name}</h3>
                    <h5>{country}</h5>
                 </div>
                 <h4>{designation}</h4>
                 <p>{commnents}</p>
                 <Rating 
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                 />
             </TestimonialCardBody>
        </TestimonialCard>
    );
};

export default Testimonial;


const TestimonialCard = styled.div`
    background-color: white;
    padding: 15px;
    text-align: center;
`

const TestimonialMedia = styled.div`
   & img {
       border-radius: 50%;
   }
`

const TestimonialCardBody = styled.div`

`