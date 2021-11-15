import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { GlobalInputField } from "../../Styles/InputField";
import { TextArea } from "../../Styles/TextArea";
const Shipping = ({product}) => {
    
    const {_id, ...res} = product;

  const {user} = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      const newOrder = {...data, ...res, status:'pending'}
      fetch('https://aqueous-fortress-70124.herokuapp.com/orders',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(newOrder)
      })
      .then( res => res.json())
      .then( data => {
          if(data.insertedId) {
              alert('Your Order Submitted Succesffully!')
          }
      })

     reset();
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GlobalInputField defaultValue={user?.displayName} {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <GlobalInputField readOnly defaultValue={user?.email} {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <GlobalInputField placeholder='Phone Number' type='number' {...register("number", { required: true })} />
      {errors.number && <span>This field is required</span>}

      <TextArea placeholder='Shipping Address' {...register("address", { required: true })} />
      {errors.address && <span>This field is required</span>}
      <OrderSubmit type="submit" value='SUBMIT ORDER' />
    </form>
  );
};

export default Shipping;


const OrderSubmit = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  padding: 9px 12px;
  font-size: 18px;
  background-color: #a90d90;
  color: white;
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
`;
