import React from 'react';
import Navbar from './Navbar';
import Designation from './Designation';
import SocialLinks from './SocialLinks';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Education from './Education';
import MyProject from './MyProject';
import ContractInfo from './ContractInfo';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Designation></Designation>
            {/* <SocialLinks></SocialLinks> */}
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Education></Education>
            <MyProject></MyProject>
            <ContractInfo></ContractInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;