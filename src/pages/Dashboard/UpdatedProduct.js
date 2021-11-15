import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../Styles/Container';
import Updated from './Updated';

const UpdatedProduct = () => {
    const {id} = useParams();
    const [UpdatedProduct, setUpdatedProduct] = useState({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchSingleProduct = async () => {
      const url = `https://aqueous-fortress-70124.herokuapp.com/product/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setUpdatedProduct(data);
        });
    };
    useEffect(() => {
      fetchSingleProduct();
    }, [fetchSingleProduct, id]);
    return (
        <div>
            <Container>
                 <div>
                    <Updated UpdatedProduct={UpdatedProduct} />
                 </div>
            </Container>
        </div>
    );
};

export default UpdatedProduct;