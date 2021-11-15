import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductList = ({ product }) => {
  const { _id, title, photo, category, price, stock, made, description } =
    product;

  const handleDeleteProduct = (_id) => {
    const proceed = window.confirm("Are You Sure Want To Delete Product ???");
    if (proceed) {
      const url = `https://aqueous-fortress-70124.herokuapp.com/deleteProduct/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product Successfully Deleted!!");
          }
        });
    }
  };

  return (
    <tr>
      <td>
        <img style={{ width: "80px" }} src={photo} alt="" />
      </td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>${price}</td>
      <td>{stock}</td>
      <td>{made}</td>
      <td>
        <Link to={`/dashboard/manageProduct/updated/${_id}`}>
          <ActionButton>Edit</ActionButton>
        </Link>
        <ActionButton onClick={() => handleDeleteProduct(_id)}>
          Delete
        </ActionButton>
      </td>
    </tr>
  );
};

export default ProductList;

const ActionButton = styled.button`
  border: 0;
  outline: 0;
  padding: 3px 9px;
  background-color: #003f63;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2px;
  &:focus {
    border: 1px solid #90cbfb;
  }
`;
