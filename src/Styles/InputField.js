import styled from "styled-components";


export const InputField = styled.input`
      padding: 7px 15px;
      border-radius: 3px 0px 0px 3px;
      font-size: 18px;
      border: none;
      outline: none;
      width: 75%;
      font-size: 18px;
`

export const ContactInput = styled(InputField)`
        background-color: #F1F3F6;
        color: black;
        padding: 14px 9px;
        width: 100%;
`

export const LoginInputField = styled(ContactInput)`
    margin: 10px 0px;
`

export const GlobalInputField = styled(ContactInput)`
           margin: 8px 0px;
           &:focus {
               border: 1px solid gray;
           }
`