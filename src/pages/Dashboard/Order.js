import styled from 'styled-components';

const Order = ({order, handleOrderDelete}) => {

    const { _id, title, price, status} = order;
    
    return (
        <OrderCard>
            <h3>{title}</h3>
            <h4>${price}</h4>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4>Order Status : {status}</h4>
                <DeleteButton onClick={ () => handleOrderDelete(_id)}>Delete</DeleteButton>
            </div>
        </OrderCard>
    );
};

export default Order;

const OrderCard = styled.div`
background-color: #F0F0EB;
padding: 12px;
border-radius: 10px;
`

const DeleteButton = styled.button`
       border: 0;
       outline: 0;
       background: transparent;
       background: #FF665A;
       color: white;
       padding: 10px;
       border-radius: 10px;
       cursor: pointer;
       &:focus{
            border: 1px solid green;
       }
`