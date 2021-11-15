import React from 'react';
import styled from 'styled-components';
import subscribebg from '../../assets/subscribe-bg.png';
import { SubscribeButton } from '../../Styles/Button';
import { Container } from '../../Styles/Container';
import { InputField } from '../../Styles/InputField';
const Subscribe = () => {
    return (
        <SubscribeMain>
            <Container>
                <SubscribeContent>
                        <div>
                            <h1>Subscribe</h1>
                            <p>All you need to turn your non-wash days into great hair days! For great hair that’s fast and that lasts.</p>
                            <InputBox>
                                  <InputField type='text' placeholder='write your mail here'  />
                                 <SubscribeButton>Subscribe</SubscribeButton>
                            </InputBox>
                        </div>
                </SubscribeContent>
            </Container>
        </SubscribeMain>
    );
};

export default Subscribe;



const SubscribeMain = styled.div`
      background: url(${subscribebg});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 100px 0;
`

const SubscribeContent = styled.div`
     margin: 0px 35px;
     height: 300px;
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     color: white;
`
const InputBox = styled.div`
 margin-top: 25px;
`