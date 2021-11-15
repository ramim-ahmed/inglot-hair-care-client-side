import React, { useContext } from 'react';
import styled from 'styled-components';
import { FeaturedProductsContext } from '../../App';
import ProductList from './ProductList';

const ManageProduct = () => {
    const [featuredProducts] = useContext(FeaturedProductsContext)
    return (
        <div>
           <div style={{margin:'25px 0px', textAlign:'center'}}>
           <CustomTable>
        <thead>
          <tr>
            <th style={{width:'110px'}}>Media</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Made</th>
            <th>Action</th>
          </tr>
        </thead>
        <br/>
        <tbody>
             {
                 featuredProducts.map(product => <ProductList key={product._id} product={product} />)
             }
        </tbody>
      </CustomTable>
           </div>
        </div>
    );
};

export default ManageProduct;


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