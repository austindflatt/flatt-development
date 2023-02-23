import React from 'react';
import { Container, Title, Button, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 80,
  },
  h1: {
    marginTop: 0,
    marginBottom: '1.25rem',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    textAlign: 'center',
    color: '#fff',
    fontSize: '3.13rem',
    lineHeight: 1.2,
    fontWeight: 800,
    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
	  },
  },
  paper: {
    backgroundColor: '#2f2f2f',
    border: '0px solid',
    borderRadius: 12,
    fontWeight: 600,
    [theme.fn.smallerThan('sm')]: {
    },
  },
  group: {
    padding: 24,
  },
  serviceTitle: {
    color: 'rgba(255, 255, 255, .87)',
    fontSize: 16,
    fontWeight: 600,
  },
  serviceDescription: {
    color: 'rgba(235, 235, 235, .6)',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 500,
  },
  list: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: 20,
    },
  },
  listItem: {
    color: '#FFF',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '18px',
    margin: 'auto'
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
  },
  control: {
		paddingLeft: 50,
		paddingRight: 50,
		fontFamily: `Outfit, ${theme.fontFamily}`,
		fontSize: '1.125rem',
		fontWeight: 600,
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
}));

const About = () => {
  const { classes } = useStyles();

  return (
    <>
    <img 
    src="images/glow_hero_right.svg" 
    loading="eager" 
    alt="" 
    class={classes.heroTopRight}>
    </img>
    <Container size="md">
      <div className={classes.wrapper}>
        <Title className={classes.h1}>About Us</Title>
        <div className={classes.desc}>
          We’re fortyfour, a software company that sets itself apart from the rest. Our focus is on creating the most stunning and sophisticated software in the world. Rather than merely serving as developers, we partner with our clients to assist them in building both their software and their business.
          <br /><br />
          Our goal is to develop world changing software solutions for our clients while simultaneously tackling critical global issues through our internal projects. By doing so, we aim to revolutionize conventional approaches across various domains.
        </div>
        <div className={classes.smallHeading}>Interview process</div>
        <div className={classes.desc}>
          As a software company, we distinguish ourselves from the norm beginning with our interview process. We hold the belief that the conventional technical interview process fails to accurately reflect an individual's skill set. To address this issue, we utilize a 'test project' instead.
          <br /><br />
          During the test project, we simulate the tasks that a prospective employee would perform in their role, enabling us to make an informed assessment of their suitability. We believe in creating a simulation that closely emulates real-world scenarios, as opposed to the inadequate approach of presenting abstract 'binary search tree' problems. Given that our company's triumph is reliant on the caliber of talent we hire, we exercise extreme caution in our selection process, hiring fewer than 5% of candidates who complete our interview procedure.
        </div>
        <div className={classes.smallHeading}>
          Our team
        </div>
        <div className={classes.desc}>
          We operate at a rapid pace and hold all team members to exceptionally high standards. Our recruitment strategy centers on selecting extraordinary individuals who demonstrate adaptability, motivation, and exceptional communication skills.
        </div>
        <div className={classes.smallHeading}>
          Startup culture always
        </div>
        <div className={classes.desc}>
          Every member of our team embodies the heart and passion of a startup founder. We love the startup culture and are committed to preserving its essence, irrespective of our expansion.
        </div>
        <div className={classes.smallHeading}>
          Let's work
        </div>
        <div className={classes.desc}>
          If you're a passionate entrepreneur with a software project, we at fortyfour would be delighted to partner with you in creating an elegant and innovative future. Get in touch with us today, and let us begin working together towards this shared goal!
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              color="dark"
              radius="xl"
              size="xl"
              className={classes.control}
              styles={(theme) => ({
                root: {
                  backgroundColor: '#3444da',
                  border: '2px solid #3444da',
                  '&:hover': {
                    backgroundColor: '#050505',
                    boxShadow: '0 0 4px 0 #3444da',
                  },
                },
                leftIcon: {
                  marginRight: 15,
                },
              })}
              >
                Tell Us About Your Project
            </Button>
          </Link>
        </div>
      </div>
    </Container>
    </>
  )
}

export default About;