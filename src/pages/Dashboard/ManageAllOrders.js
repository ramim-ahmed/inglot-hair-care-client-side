import React, { useContext } from "react";
import styled from "styled-components";
import { AllOrdersContext } from "../../App";
import ManageOrder from "./ManageOrder";
const ManageAllOrders = () => {
  const [allOrders] = useContext(AllOrdersContext);
  return (
    <div style={{marginTop:'20px'}}>
      <CustomTable>
        <thead>
          <tr>
            <th style={{width:'220px'}}>Product</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <br/>
        <tbody>
             {
                 allOrders.map(order => <ManageOrder key={order._id} order={order} />)
             }
        </tbody>
      </CustomTable>
    </div>
  );
};

export default ManageAllOrders;


const CustomTable = styled.table`
      text-align: center;
      border-collapse: collapse;
      & tbody {
          & tr {
             background-color: #F2F2F2;
              & td {
                  padding: 10px;
              }
          }
      }
`
