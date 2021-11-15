import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BuyNowButton } from '../../Styles/Button';

const Product = ({product}) => {
    const {_id, title, description, photo, price} = product;

    const history = useHistory();
    const handleDetails = () => {
       history.push(`/explore/details/${_id}`)
    }
    return (
        <ProductCard>
                <CardMedia>
                    <img src={photo} alt="" />
                </CardMedia>
                <CardBody>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </CardBody>
                <CardFooter>
                   <h2>${price}</h2>
                   <BuyNowButton onClick={ ()=> handleDetails(_id) } >Buy Now</BuyNowButton>
                </CardFooter>
        </ProductCard>
    );
};

export default Product;

const ProductCard = styled.div`
  border: 1px solid lightgrey;
  border-radius: 3px;
`
const CardMedia = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
   & img {
       width: 250px;
   }
`

const CardBody = styled.div`
   padding: 10px;
`
const CardFooter = styled.div`
    background-color: #F2F2F2;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`