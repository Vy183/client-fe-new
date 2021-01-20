import React from "react";
import SlickBanner from "../SlickBanner/SlickBanner";
import TabBar from "../TabBar/TabBar";
import Review from "../Review/Review";
import AboutCinema from '../AboutCinema/AboutCinema';

const HomePage = (props) => {
    return (
        <>
            <SlickBanner />
            <TabBar />
            <Review />
            <AboutCinema/>
        </>
    );
};

export default HomePage;
