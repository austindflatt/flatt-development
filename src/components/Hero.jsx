import React from 'react';
import { createStyles, Container, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '13.5rem',
    // paddingBottom: '5.63rem',
    color: '#e1e3f1',
  },
  bgImages: {
    display: 'block'
  },
  heroleft: {
    left: 0,
    top: 0,
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '26.75rem',
  },
  heroRight: {
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 'auto',
    width: '100%',
    maxWidth: '36.88rem',
  },
  wrapper: {
    position: 'relative',
    maxWidth: '45rem',
    margin: 'auto',
    animation: 'fadein 1s',
  },
  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,
    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },
  title: {
    color: '#e7e7e7',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontWeight: 800,
    fontSize: '3.62rem',
    lineHeight: 1.2,
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.2,
      textAlign: 'center',
    },
  },
  description: {
    color: 'hsla(0,0%,100%,.8)',
    fontFamily: `Outfit`,
    fontSize: '1.25rem',
    lineHeight: 1.4,
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      textAlign: 'center',
    },
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
  scrollDown: {
    height: '4.38rem',
    marginTop: '2.23rem',
    animation: 'bounce 2s infinite',
  },
  heroBgShape: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 'auto',
    zIndex: -1,
    width: '100%',
  },
  labHeroRight: {
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 'auto',
    width: '100%',
    maxWidth: '36.88rem',
    position: 'absolute',
    animation: 'fadein 1s',
  },
  labHeroLeft: {
    left: 0,
    top: 0,
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '26.75rem',
    position: 'absolute',
    animation: 'fadein 1s',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}));

function Hero() {
  const { classes } = useStyles();

  return (
    <>
    <div className={classes.bgImages}>
      <div className={classes.labHeroRight} />
      <img 
      src="images/glowtopright.svg" 
      loading="eager" 
      alt="" 
      class={classes.labHeroRight}
      />
      <img 
      src="images/glowtopleft.svg" 
      loading="eager" 
      alt="" 
      class={classes.labHeroLeft}
      />
    </div>
    <Container size="xl">
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Title className={classes.title}>
            Beautifully Developed <span className="text-gradient">Software & Apps</span>
          </Title>
          <Text className={classes.description} mt={30}>
            We are your partner for product development, including design, development, quality assurance, and launching.
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/start-project" style={{ textDecoration: 'none' }}>
              <Button
              color="dark"
              radius="xl"
              size="xl"
              className={classes.control}
              mt={40}
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
            src="images/hero_arrow.svg" 
            loading="lazy" 
            alt="Scroll Down" 
            className={classes.scrollDown}
            />
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}

export default Hero;