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
import Collaboration from './Collaboration';

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
            <Collaboration></Collaboration>
            <ContractInfo></ContractInfo>
        </div>
    );
};

export default Home;