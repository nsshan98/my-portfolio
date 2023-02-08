import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PricingCards from '../components/PricingCards';
import ProjectPage from '../components/ProjectPage';
import ProjectWork from '../components/ProjectWork';

const Project = () => {
  return (
    <div>
        <Navbar/>
        <ProjectPage/>
        <ProjectWork/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Project