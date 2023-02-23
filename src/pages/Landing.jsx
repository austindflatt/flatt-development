import React from 'react';
import Hero from '../components/Hero';
import HomeServices from '../components/Services';
import Technologies from '../components/Technologies';
import Why from '../components/WhyUs';
import TellUs from '../components/TellUs';
import Faqs from '../components/FAQs';
import RecentProjects from '../components/RecentProjects';
import Testimonials from '../components/Testimonials';

const Landing = () => {
  return (
    <>
    <Hero />
    <HomeServices />
    <RecentProjects />
    <Technologies />
    <Why />
    {/* <Testimonials /> */}
    <Faqs />
    <TellUs />
    </>
  )
}

export default Landing;