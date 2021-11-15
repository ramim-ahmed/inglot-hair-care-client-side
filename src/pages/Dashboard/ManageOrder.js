import React from "react";
import { useForm } from "react-hook-form";

const ManageOrder = ({order}) => {
  const { register, handleSubmit } = useForm();
  const {_id, title, name, email, number, address, status} = order;
  
  const onSubmit = data => {

    const status = {...data};

    fetch(`https://aqueous-fortress-70124.herokuapp.com/updateOrderStatus/${_id}`, {
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(status)
    })
    .then( res => res.json())
    .then( data => {
      if(data.modifiedCount){
        alert('status udpated !!!')
      }
    })

  };

  return (
    <tr>
      <td>{title}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>{address}</td>
      <td>
      <form onSubmit={handleSubmit(onSubmit)}>
      <select className='update-field' {...register("status")}>
        <option value={status}>{status}</option>
        <option value="Aproved">Aproved</option>
      </select>
      <input className='status-updated-button' type="submit" value='update'/>
    </form>
      </td>
    </tr>
  );
};

export default ManageOrder;
