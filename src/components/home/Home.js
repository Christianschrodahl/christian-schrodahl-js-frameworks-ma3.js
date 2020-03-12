import React from 'react';
import Heading from "../layout/Heading";
import HomeContent from "./HomeContent";

export function Home() {
    return (
        <>
            <Heading title="Home" />
            <HomeContent>
            this is a child paragraph from homecontent
            </HomeContent>
        </>
    );
}

export default Home;