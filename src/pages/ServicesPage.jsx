import { SimpleGrid, Text, Container, Title, createStyles } from '@mantine/core';
import { Consult } from '../components/ServicesCard/Consult';
import { MobileDev } from '../components/ServicesCard/MobileDev';
import { WebApps } from '../components/ServicesCard/WebApps';
import { WebDesign } from '../components/ServicesCard/WebDesign';
import { WebDev } from '../components/ServicesCard/WebDev';
import { WebMaintenance } from '../components/ServicesCard/WebMaintenance';
import Aws from '../components/TechCard/Aws';
import Mongo from '../components/TechCard/Mongo';
import Next from '../components/TechCard/Next';
import Node from '../components/TechCard/Node';
import React from '../components/TechCard/React';
import Redux from '../components/TechCard/Redux';
import TypeScript from '../components/TechCard/TypeScript';
import Vue from '../components/TechCard/Vue';
import image from '../blue-hero.jpg'
import { Outlet } from 'react-router-dom';

const useStyles = createStyles((theme) => ({

  hero: {
    position: 'relative',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 'calc( (var(--vh, 1vh) * 50) )',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // paddingBottom: theme.spacing.xl * 15,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: '25vh',
      paddingTop: theme.spacing.xl * 3,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: '#FFF',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.5,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.5,
      textAlign: 'left'
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.5,
      textAlign: 'left'
    },
  },

  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  servicesHeader: {
    textAlign: 'center',
    color: '#000',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 5,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
    },
  },

  paper: {
    backgroundColor: '#f9f9f9',
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

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  control: {
    fontWeight: 400,
    transition: 'color .25s,border-color .25s,background-color .25s',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    width: '100%',
    padding: 0,
    justifyContent: 'center',
  },

  tech: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

}));

const Services = () => {
  const { classes } = useStyles();

  return (
    <>
<div className={classes.hero}>
      <Container className={classes.container} size="xl">
      
      <div className={classes.content}>
        <Title className={classes.title}>Services</Title>
        <div className="underline-big"></div>
        </div>
      </Container>
    </div>
    <Container size="xl" className={classes.wrapper}>
      <Title className={classes.servicesHeader}>How can we help you?</Title>
      <Text className={classes.subHeader}>
        We provide end-to-end services across a range of platforms, technologies, and design methodologies
      </Text>

      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        style={{ marginBottom: 80 }}
      >
        <WebDev />
        <MobileDev />
        <WebApps />
        <WebDesign />
        <WebMaintenance />
        <Consult />
        <Outlet />
      </SimpleGrid>

      <Title className={classes.servicesHeader}>
        Choose technologies with support over hype
      </Title>
      <Text className={classes.subHeader}>
      Just like you, we choose only the best technologies to work with that are scalable and flexible.
      </Text>

      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 2, spacing: 'sm' },
        ]}
      >
        <Node />
        <React />
        <Redux />
        <TypeScript />
        <Vue />
        <Next />
        <Aws />
        <Mongo />
      </SimpleGrid>
      
    </Container>
    </>
  )
}

export default Services