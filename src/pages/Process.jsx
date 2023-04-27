import React from 'react';
import { Container, Title, Text, SimpleGrid, Group, Paper, Button, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Bolt } from 'tabler-icons-react';
import TellUs from '../components/TellUs';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 80,
    position: 'relative',
  },
  h1: {
    marginTop: 0,
    marginBottom: '.5rem',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    textAlign: 'center',
    color: '#fff',
    fontSize: '3.13rem',
    lineHeight: 1.2,
    fontWeight: 800,
    animation: 'fadein 1s',
    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
	  },
  },
  card: {
    width: '100%',
    position: 'relative',
    padding: '3rem',
    borderRadius: '1.875rem',
    border: '4px solid #252d43',
    backgroundColor: 'rgba(50,60,131,.16)',
    backgroundImage: 'none',
    backgroundPosition: '0 0',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backdropFilter: 'blur(70px)',
    [theme.fn.smallerThan('sm')]: {
    },
  },
  description: {
    color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.125rem',
    lineHeight: '1.7',
  },
  grid: {
    width: 'auto',
  },
  
  smallHeading: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#ebebeb',
    fontSize: '2rem',
    lineHeight: '1.28125',
    textAlign: 'center',
    marginBottom: '1.25rem',
  },
  desc: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#ababab',
    fontSize: '1.25rem',
    lineHeight: 1.6,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: '1.25rem',
    animation: 'fadein 1s',
  },
  control: {
		paddingLeft: 50,
		paddingRight: 50,
		fontFamily: `Outfit, ${theme.fontFamily}`,
		fontSize: '1.125rem',
		fontWeight: 400,
		transition: 'color .25s,border-color .25s,background-color .25s',
		justifyContent: 'center',
		alignItems: 'center',
	
		[theme.fn.smallerThan('md')]: {
		  width: '100%',
		},
  },
  heroTopRight: {
    position: 'absolute',
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 'auto',
    width: '100%',
    maxWidth: '50.25rem',
  },
  pricing: {
    display: 'flex',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: 'auto',
  },
  priceCost: {
    display: 'flex',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '45px',
    fontWeight: 700,
    webkitTextFillColor: 'transparent',
    flexFlow: 'wrap',
    background: 'linear-gradient(to right, rgb(68, 126, 232), rgb(123, 84, 140), rgb(253, 177, 127)) text',
  },
  priceDuration: {
    display: 'flex',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '15px',
    fontWeight: 700,
    webkitTextFillColor: 'transparent',
    flexFlow: 'wrap',
    background: 'linear-gradient(to right, rgb(68, 126, 232), rgb(123, 84, 140), rgb(253, 177, 127)) text',
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    webkitBoxPack: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: 'auto',
  },
}));

const Process = () => {
  const { classes } = useStyles();

  return (
    <>
    {/* <img 
    src="images/dollar.svg" 
    loading="eager" 
    alt="" 
    class={classes.heroTopRight}>
    </img> */}
    <Container size="lg">
      <div className={classes.wrapper}>
        <Title className={classes.h1}>Our Process</Title>
        <div className={classes.desc}>
          Building apps that flatten the competition.
        </div>
        <Paper
        radius="md"
        className={classes.card}
        >
          <div className={classes.grid}>
            <div>
              <Text className={classes.description}>
                "We believe our partners’ success is our success. How do we turn your idea into a scalable, marketable, and profitable digital product? It’s a journey that starts with our very first Zoom. We have honed our methodology to what we know not only guarantees a successful app launch—but puts you on the path for long-term success."
              </Text>
            </div>
          </div>
        </Paper>
        <Title>Phase 1</Title>
        <Title>Discovery & Documentation</Title>
        <Text>We carefully scope out your digital product from start-to-finish by defining all of the design and development requirements. This part of our process is very collaborative, and it happens before any contract is signed. We want to ensure you feel 100% confident before moving forward with us, and that you’ll receive everything you’ve asked for — and the things you didn’t know to ask for. We’ll work with you to optimize your budget and timeline based on the features and functionality that are most important to bring your idea to life. Everything we lay out together here sets the stage for Phase Two.</Text>

        <Title>Phase 2</Title>
        <Title>Wire-framing</Title>
        <Text>We build the foundation of your app by creating black-and-white visual guides. These wireframes (also called low-fidelities) serve as blueprint concepts of every single screen, function and pop-up to be accounted for in your app’s future development.</Text>

        <Title>Phase 3</Title>
        <Title>High-Fidelities</Title>
        <Text>Once wire-framing is complete, we bring your design blueprint to life with beautiful, pixel-perfect high-fidelity mockups showcasing each and every app screen. These show exactly what your app will look like to future users. This is where your vision truly starts to come to life.</Text>

        <Title>Phase 4</Title>
        <Title>Product Flows & Prototyping</Title>
        <Text>With every screen of your application diligently designed and approved by you via our regular meetings, we’ll define the logic between those screens. This phase determines where each screen will appear once programmed, where data is sent, received, and how everything will function once the application is fully programmed. These are the product flows our development team will use to program your app from A-to-Z. We’ll also provide you with a non-functioning prototype, or NFP. This way, you can test out the flow of your app for yourself before we head into development, or use your prototype to gain traction.</Text>

        <Title>Phase 5</Title>
        <Title>Programming Your Application</Title>
        <Text>Here’s where we make it happen. Bringing your app’s design to life, one line of code at a time. We assign developers best-suited for the technologies selected during the Scoping and Documentation phase of your app. Our developers are agile—and we always keep you in the loop with regularly scheduled meetings throughout development, so we can review and assess what we’re building together. All of the code that runs your app, including backend partners and API sources, will be fully implemented and ready for testing.</Text>

        <Title>Phase 6</Title>
        <Title>Quality Assurance</Title>
        <Text>While we implement incremental testing throughout programming, quality assurance is about perfecting your digital product for launch. We’ll run it through stress tests to confirm everything is working as intended and all documented bugs are resolved. We’ll make sure your product works on all supported devices and is primed for launch to handle real-world usage from the get-go.</Text>

        <Title>Phase 7</Title>
        <Title>Getting You Ready For Launch</Title>
        <Text>We’ll do everything we can to help you position your product for a successful launch, and provide post-launch support with our 30-Day Bug Warranty and Maintenance Window. But our partnership doesn’t have to end there. Our team is ready and waiting to provide ongoing support for your app as it grows, too!</Text>

      </div>
    </Container>
    <TellUs />
    </>
  )
}

export default Process;