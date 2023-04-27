import React from 'react';
import { Container, Title, Paper, Image, Text, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import TellUs from '../components/TellUs';
import work from '../data/work.json';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 0,
    position: 'relative',
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
    animation: 'fadein 1s',
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
    animation: 'fadein 1s',
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
    animation: 'fadein 1s',
  },
  marginTop: {
    margin: '4rem',
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
    marginBottom: '2.5rem',
    [theme.fn.smallerThan('sm')]: {
    },
  },
  title: {
    color: '#ebebeb',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '2.25rem',
    fontWeight: '900',
    marginBottom: '1.3rem',
  },
  description: {
	  color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.125rem',
    lineHeight: '1.7',
  },
  grid: {
    width: '100%',
    display: 'grid',
    gridAutoColumns: '1fr',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'minmax(max-content,max-content) 1fr',
  },
  controls: {
    ref: useRef('controls'),
    transition: 'opacity 150ms ease',
    backgroundColor: '#000',
  },
  projectDetail: {
    alignSelf: 'center',
  }
}));

const Work = () => {
  const { classes } = useStyles();

  return (
    <>
    <img
    src="images/glow_hero_right.svg" 
    loading="eager" 
    alt="" 
    class={classes.heroTopRight}>
    </img>
    <Container size="xl">
      <div className={classes.wrapper}>
        <Title className={classes.h1}>Our Work</Title>
        <div className={classes.desc}>
          We develop the most beautiful designs with care and develop with extreme precision.
        </div>
        <div className={classes.marginTop}>
          {work.map((project, key) => {
            return (
            <Paper
            radius="md"
            className={classes.card}
            >
              <div className={classes.grid}>
                <div>
                  <Image
                  radius="lg"
                  src={project.image}
                  alt={project.title}
                  width="19.25rem"
                  height="19.875rem"
                  />
                </div>
                <div className={classes.projectDetail}>
                  <Title className={classes.title}>{project.title}</Title>
                  <Text className={classes.description}>{project.description}</Text>
                </div>
              </div>
            </Paper>
          )})}
        </div>
      </div>
    </Container>
    <TellUs />
    </>
  )
}

export default Work;