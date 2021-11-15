import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../assets/gif-loading-icon-20.jpg';
import useAuth from '../../hooks/useAuth';
const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading) {
        return <div className='loading'><img src={Loading} alt="" /></div>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;