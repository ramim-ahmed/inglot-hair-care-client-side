import styled from "styled-components";

export const Button = styled.button`
      border: 3px solid #A90D90;
      padding: 7px 15px;
      border-radius: 3px;
      background: transparent;
      font-size: 18px;
      color: white;
      cursor: pointer;
      transition: all 0.5s ease-out;
      &:hover {
          background-color:#A90D90;
          color: white;
      }
`

export const BuyNowButton = styled(Button)`
     color: black;
     padding: 4px 9px;
`

export const SubscribeButton = styled(Button)`
        border-radius: 0px 3px 3px 0px;
        border: none;
        background-color:#A90D90;
`

export const AddProductButton = styled(Button)`

`