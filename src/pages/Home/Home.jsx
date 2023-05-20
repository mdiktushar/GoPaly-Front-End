import React from 'react';
import Banner from './components/Banner';
import Gallery from './components/gallery';
import About from './components/About';
import FeedBack from './components/FeedBack';
import ShowByCategory from './components/ShowByCategory';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <>
        <Banner />
        <Gallery />
        <div id='body'>
            <ShowByCategory />
        </div>
        <About />
        <FeedBack />
        </>
    );
};

export default Home;