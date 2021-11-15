import { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Styles/Container";
import Shipping from "../Shipping/Shipping";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSingleProduct = async () => {
    const url = `https://aqueous-fortress-70124.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [fetchSingleProduct, id]);
  const { title, category, photo, price, rating, stock, made, description } =
    product;

  
  return (
    <div>
      <Container>
        <DetailsContentWrapper>
          <ProductDetailsContent>
            <div>
              <img style={{ width: "350px" }} src={photo} alt="" />
            </div>
            <div style={{ paddingRight: "25px" }}>
              <h2>{title}</h2>
              <h3 style={{ opacity: "0.6" }}>Category : {category}</h3>
              <h4>{description}</h4>
              <h4>Made In : {made}</h4>
              <h4>Price : ${price}</h4>
              <h4>Available {stock} Stock</h4>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              />
            </div>
          </ProductDetailsContent>
          <ShippingStatement>
            <h2 style={{ margin: "10px 0", textAlign: "center" }}>
              Order Shipping Statement
            </h2>
            <Shipping product={product} />
          </ShippingStatement>
        </DetailsContentWrapper>
      </Container>
    </div>
  );
};

export default ProductDetails;

const DetailsContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 30px 0px;
`;

const ProductDetailsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
`;

const ShippingStatement = styled.div``;

