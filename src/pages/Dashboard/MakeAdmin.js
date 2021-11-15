import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalInputField } from '../../Styles/InputField';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = (e) => {
      e.preventDefault();
      const adminEmail = {email}
      console.log(adminEmail);
      fetch('https://aqueous-fortress-70124.herokuapp.com/users/admin', {
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(adminEmail)
      })
      .then(res => res.json())
      .then( data => {
          if(data.modifiedCount > 0) {
             alert('Admin Make Successfully')
          }
      })
    }
    return (
        <div>
           <div>
               <h2>Make Admin</h2>
           </div>
           <div>
               <form style={{width:'50%'}} onSubmit={handleMakeAdmin}>
                   <GlobalInputField type="email" onBlur={handleOnBlur} />
                   <AdminSubmitInput type="submit" value='Admin' />
               </form>
           </div>
        </div>
    );
};

export default MakeAdmin;


const AdminSubmitInput = styled.input`
   border: 0;
   outline: 0;
   padding: 9px 24px;
   font-size: 18px;
   cursor: pointer;
   &:focus{
       border: 1px solid green;
   }
`