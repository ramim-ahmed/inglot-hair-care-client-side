import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const UserContext = createContext();

const AuthContext = ({children}) => {

    const AllAuthContext = useFirebase();

    return (
        <UserContext.Provider value={AllAuthContext}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;