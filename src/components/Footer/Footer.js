import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Styles/Container';

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterContent>
                  <div>
                      <p>Copyright ramimdevs 2021</p>
                  </div>
                </FooterContent>
            </Container>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
      background-color: #000000;
`

const FooterContent = styled.div`
       margin: 0px 35px;
       height: 250px;
       color: white;
       display: flex;
       align-items: center;
       justify-content: center;
`