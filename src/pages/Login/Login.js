import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { Container } from "../../Styles/Container";
import { LoginInputField } from "../../Styles/InputField";

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const {signInUser} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       console.log(data);
        signInUser(data.email, data.password, history, location);
    }
  return (
    <div>
      <Container>
        <LoginRow>
          <LoginColumn>
            <LoginContent>
              <div>
                <h1>Login Now</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <LoginInputField placeholder='Email' {...register("email", { required: true })} />
                {errors.email && <span style={{color:'red', textAlign:'left'}}>This field is required</span>}
                <LoginInputField placeholder='Password' type='password' {...register("password", { required: true })} />
                {errors.password && <span style={{color:'red', textAlign:'left'}}>This field is required</span>}
                <LoginButton type="submit" value='Login' />
              </form>
              <div style={{textAlign:'center', margin:'20px 0px'}}>
                  <p>don't have an account ? <Link to='/register'>Create One</Link> </p>
              </div>
            </LoginContent>
          </LoginColumn>
        </LoginRow>
      </Container>
    </div>
  );
};

export default Login;

const LoginRow = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginColumn = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const LoginContent = styled.div``;

const LoginButton = styled.input`
        width: 100%;
        border: 0;
        outline: 0;
        background-color: #A90D90;
        color: white;
        padding: 9px 12px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover {
          background:transparent;
          border: 2px solid #A90D90;
          color: black;
        }
`
