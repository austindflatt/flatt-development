import React from 'react'
import Hero from '../components/Hero'
import HomeServices from '../components/Services'
import Cases from '../components/Portfolio'
import Partners from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Tech from '../components/Tech'
import GetThingsDone from '../components/GetThingsDone'
import StartProject from '../components/StartProject'

const Landing = () => {
  return (
    <>
    <Hero />
    <Partners />
    <HomeServices />
    <Tech />
    {/* <Cases /> */}
    {/* <GetThingsDone /> */}
    <Testimonials />
    {/* <StartProject /> */}
    </>
  )
}

export default Landing