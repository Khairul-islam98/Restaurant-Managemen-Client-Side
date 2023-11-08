import React from 'react';
import Banner from './Banner/Banner';
import TopSellingitem from './TopSellingItem/TopSellingitem';
import Ads from './Ads/Ads';
import Testmoni from './Testmoni/Testmoni';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant Management || Home </title>
            </Helmet>
            <Banner></Banner>
            <TopSellingitem></TopSellingitem>
            <Ads />
            <Testmoni></Testmoni>
        </div>
    );
};

export default Home;