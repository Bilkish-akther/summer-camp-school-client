import React from 'react';
import Hero from './Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import Facilities from './Facilities/Facilities';
import Map from './Map/Map';

const Home = () => {
    useTitle('Home | Sound Safari');
    return (
        <section>
            <Hero /> 
            <Facilities />
            <Map />
        </section>
    );
};

export default Home;