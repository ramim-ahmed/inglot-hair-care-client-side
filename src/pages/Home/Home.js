import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import OurBranded from '../../components/OurBranded/OurBranded';
import Shampoo from '../../components/Shampoo/Shampoo';
import Subscribe from '../../components/Subscribe/Subscribe';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Shampoo />
            <OurBranded />
            <FeaturedProducts slice="true" />
            <Subscribe />
            <Testimonials />
            <GetInTouch />
        </div>
    );
};

export default Home;