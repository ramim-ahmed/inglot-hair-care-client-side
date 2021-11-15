import React from "react";
import styled from "styled-components";
import { Container } from "../../Styles/Container";
import { ContactInput } from "../../Styles/InputField";
import { TextArea } from "../../Styles/TextArea";

const GetInTouch = () => {
  return (
    <GetInTouchMain>
      <Container>
        <GetInTouchContent>
          <h1>Get In Touch</h1>
          <div style={{margin:'25px 0px'}}>
              <form>
                  <InputContent>
                    <ContactInput type='text' placeholder='First Name' />
                    <ContactInput type='text' placeholder='Last Name' />
                    <ContactInput type='text' placeholder='Email' />
                    <ContactInput type='text' placeholder='Phone Number' />
                  </InputContent>
                  <TextArea placeholder='Your Message' cols="30" rows="10" />
                  <SubmiField type="submit" value='Submit'  />
              </form>
          </div>
        </GetInTouchContent>
      </Container>
    </GetInTouchMain>
  );
};

export default GetInTouch;

const GetInTouchMain = styled.div`
  margin: 100px 0;
  text-align: center;
`;

const GetInTouchContent = styled.div`
  margin: 0px 35px;
  width: 60%;
  margin: 0 auto;
`;

const InputContent = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
`

const SubmiField = styled.input`
      border: 3px solid #A90D90;
      padding: 7px 15px;
      border-radius: 3px;
      background: transparent;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.5s ease-out;
      background-color:#A90D90;
      color: white;
      margin-top: 25px;
`