import React, { useContext } from "react";
import styled from "styled-components";
import { MyOrderContext } from "../../App";
import Order from "./Order";

const MyOrder = () => {
  const [myOrder] = useContext(MyOrderContext);
      
  const handleOrderDelete = (_id) => {
    const url = `https://aqueous-fortress-70124.herokuapp.com/order/delete/${_id}`
    const proceed = window.confirm('Are You Sure Want To Delele ??');
    if(proceed){
        fetch(url, {
            method:'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            if(data.deleleCount > 0){
                alert('Your Successfully Deleted');
            }
        })
    }
}


  return (
    <OrderContainer>
      {myOrder.map((order) => (
        <Order key={order._id} order={order} handleOrderDelete={handleOrderDelete} />
      ))}
    </OrderContainer>
  );
};

export default MyOrder;

const OrderContainer = styled.div`
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       gap: 25px;
       margin-top: 20px;
`
