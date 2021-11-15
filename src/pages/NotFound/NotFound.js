import React from 'react';
import { useParams } from 'react-router-dom';

const NotFound = () => {
    const {pageName} = useParams();
    return (
        <div>
            <h1>{pageName} page not found 404!!!</h1>
        </div>
    );
};

export default NotFound;