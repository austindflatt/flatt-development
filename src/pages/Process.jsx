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
  title: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#fff',
    fontSize: '3.13rem',
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
  phaseWrap: {
    width: '100%',
    maxWidth: '67.81rem',
    gridRowGap: '2.75rem',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    position: 'relative',
  },
  phaseGrid: {
    gridTemplateColumns: 'minmax(100px,max-content) 1fr',
    gridColumnGap: '3.75rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
  },
  layout: {
    width: '100%',
    flex: '0 auto',
  },
  phaseCard: {
    width: '100%',
    position: 'relative',
  },
  phaseCardInner: {
    backgroundColor: 'rgba(50,60,131,.16)',
    border: '1px solid rgba(202,204,255,.1)',
    borderRadius: '2rem',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  phaseContentWrap: {
    zIndex: 1,
    gridColumnGap: '1.5rem',
    gridRowGap: '1.5rem',
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  phaseCircle: {
    width: '10.25rem',
    height: '10.25rem',
    backgroundColor: 'rgba(255,255,255,.05)',
    borderRadius: '100%',
    flex: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  phaseIcon: {
    width: '3.5rem',
    height: '3.5rem',
    objectFit: 'contain',
  },
  phaseNumber: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '3.13rem',
    fontWeight: 800,
  },
  phaseDetail: {
    width: '100%',
    gridRowGap: '1rem',
    flexDirection: 'column',
    display: 'flex',
  },
  phaseTitle: {
    color: 'rgba(255,255,255,.8)',
    fontSize: '1.75rem',
    fontWeight: 700,
  },
  phaseDesc: {
    color: 'rgba(187,187,187,.8)',
    fontSize: '1.125rem',
    lineHeight: 1.55556,
  }
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

        <Title className={classes.h1} style={{ marginTop: '5.25rem', marginBottom: '1.25rem', }}>The 7 Phases of Development</Title>

        <div className={classes.phaseWrap}>
          <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">1</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>Discovery & Documentation</div>
                        <p className={classes.phaseDesc}>We carefully scope out your digital product from start-to-finish by defining all of the design and development requirements. This part of our process is very collaborative, and it happens before any contract is signed. We want to ensure you feel 100% confident before moving forward with us, and that you’ll receive everything you’ve asked for — and the things you didn’t know to ask for. We’ll work with you to optimize your budget and timeline based on the features and functionality that are most important to bring your idea to life. Everything we lay out together here sets the stage for Phase Two.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">2</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>Wire-framing</div>
                        <p className={classes.phaseDesc}>We build the foundation of your app by creating black-and-white visual guides. These wireframes (also called low-fidelities) serve as blueprint concepts of every single screen, function and pop-up to be accounted for in your app’s future development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">3</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>High-Fidelities</div>
                        <p className={classes.phaseDesc}>Once wire-framing is complete, we bring your design blueprint to life with beautiful, pixel-perfect high-fidelity mockups showcasing each and every app screen. These show exactly what your app will look like to future users. This is where your vision truly starts to come to life.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">4</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>Product Flows & Prototyping</div>
                        <p className={classes.phaseDesc}>With every screen of your application diligently designed and approved by you via our regular meetings, we’ll define the logic between those screens. This phase determines where each screen will appear once programmed, where data is sent, received, and how everything will function once the application is fully programmed. These are the product flows our development team will use to program your app from A-to-Z. We’ll also provide you with a non-functioning prototype, or NFP. This way, you can test out the flow of your app for yourself before we head into development, or use your prototype to gain traction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">5</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>Programming Your Application</div>
                        <p className={classes.phaseDesc}>Bringing your app’s design to life, one line of code at a time. We assign developers best-suited for the technologies selected during the Scoping and Documentation phase of your app. Our developers are agile—and we always keep you in the loop with regularly scheduled meetings throughout development, so we can review and assess what we’re building together. All of the code that runs your app, including backend partners and API sources, will be fully implemented and ready for testing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">6</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>Quality Assurance</div>
                        <p className={classes.phaseDesc}>While we implement incremental testing throughout programming, quality assurance is about perfecting your digital product for launch. We’ll run it through stress tests to confirm everything is working as intended and all documented bugs are resolved. We’ll make sure your product works on all supported devices and is primed for launch to handle real-world usage from the get-go.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.phaseGrid} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className={classes.layout}>
              <div className={classes.phaseCard}>
                <div className={classes.phaseCardInner}>
                  <div className={classes.phaseContentWrap}>
                    <div className={classes.phaseCircle}>
                      <div className={classes.phaseNumber}><span className="text-gradient">7</span></div>
                    </div>
                      <div className={classes.phaseDetail}>
                        <div className={classes.phaseTitle}>Getting You Ready For Launch</div>
                        <p className={classes.phaseDesc}>We’ll do everything we can to help you position your product for a successful launch, and provide post-launch support with our 30-Day Bug Warranty and Maintenance Window. But our partnership doesn’t have to end there. Our team is ready and waiting to provide ongoing support for your app as it grows, too!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          
      </div>
    </Container>
    <TellUs />
    </>
  )
}

export default Process;