import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../Styles/Container';

const About = () => {
    return (
        <AboutContainer>
           <Container>
                <AboutContent>
                         <div>
                            <h1>About Coming soooon...</h1>
                            <br/>
                            <h4><Link style={{color:'#A90D90'}} to='/home'>Home</Link> | <span>About</span></h4>
                         </div>
                </AboutContent>
           </Container>
        </AboutContainer>
    );
};

export default About;

const AboutContent = styled.div`
   color: white;
   display: flex;
   height: 375px;
   justify-content: center;
   align-items: center;
`

const AboutContainer = styled.div`
        background-color: #003F63;
        text-align: center;
`