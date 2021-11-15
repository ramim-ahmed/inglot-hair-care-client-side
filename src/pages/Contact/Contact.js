import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import { Container } from "../../Styles/Container";

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <Container>
          <ContactContent>
            <div>
              <h1>Connect With US.</h1>
              <br />
              <h4>
                <Link style={{ color: "#A90D90" }} to="/home">
                  Home
                </Link>{" "}
                | <span>Contact</span>
              </h4>
            </div>
          </ContactContent>
        </Container>
      </ContactContainer>
      <GetInTouch />
    </div>
  );
};

export default Contact;


const ContactContainer = styled.div`
       background-color: #003F63;
       text-align: center;
`

const ContactContent = styled.div`
     color: white;
   display: flex;
   height: 375px;
   justify-content: center;
   align-items: center;
`