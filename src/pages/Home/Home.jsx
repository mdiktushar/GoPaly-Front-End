import React from 'react';
import Banner from './components/Banner';
import Gallery from './components/gallery';
import Welcome from './components/Welcome';
import FeedBack from './components/FeedBack';

const Home = () => {
    return (
        <>
        <Banner />
        <Welcome />
        <Gallery />
        <div id='body'>
            
        </div>
        <FeedBack />
        </>
    );
};

export default Home;