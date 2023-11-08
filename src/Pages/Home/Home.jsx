import React from 'react';
import Banner from './Banner/Banner';
import TopSellingitem from './TopSellingItem/TopSellingitem';
import Ads from './Ads/Ads';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSellingitem></TopSellingitem>
            <Ads />       
        </div>
    );
};

export default Home;