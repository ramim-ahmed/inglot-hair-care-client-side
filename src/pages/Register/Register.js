import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { LoginInputField } from "../../Styles/InputField";

const Register = () => {

  const {createUser} = useAuth();

  const history = useHistory();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    if(data.password !== data.confirm_password) {
        return alert('password not matcth. please try again later');
    }
    createUser(data.name, data.email, data.password, history, location);
    reset();
  };


  return (
    <div>
      <RegisterRow>
        <RegisterColumn>
          <RegisterContent>
            <div>
              <h1>Register Now</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <LoginInputField
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span style={{ color: "red", textAlign: "left" }}>
                  This field is required
                </span>
              )}
              <LoginInputField
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red", textAlign: "left" }}>
                  This field is required
                </span>
              )}
              <LoginInputField
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span style={{ color: "red", textAlign: "left" }}>
                  This field is required
                </span>
              )}

              <LoginInputField
                placeholder="Confirm Password"
                type="password"
                {...register("confirm_password", { required: true })}
              />
              {errors.confirm_password && (
                <span style={{ color: "red", textAlign: "left" }}>
                  This field is required
                </span>
              )}
              <RegisterButton type="submit" value="Register" />
            </form>
            <div style={{ textAlign: "center", margin: "20px 0px" }}>
              <p>
                Already have an account ? <Link to="/login">Login</Link>{" "}
              </p>
            </div>
          </RegisterContent>
        </RegisterColumn>
      </RegisterRow>
    </div>
  );
};

export default Register;

const RegisterRow = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterColumn = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const RegisterContent = styled.div``;

const RegisterButton = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background-color: #a90d90;
  color: white;
  padding: 9px 12px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: transparent;
    border: 2px solid #a90d90;
    color: black;
  }
`;
