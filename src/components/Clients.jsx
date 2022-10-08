import { Text, Container, Title, SimpleGrid, createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({

	hero: {
    paddingTop: '60px',
    paddingBottom: '60px',
    backgroundColor: '#f9f9f9',
	  },
	  
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  servicesHeader: {
    textAlign: 'center',
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

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  partners: {
    opacity: 1,
    transition: '.30s',

    '&:hover': {
      opacity: 0.5,
    },

  },

  clientLogos: {
    justifyItems: 'center',
    webkitBoxAlign: 'center',
    webkitAlignItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: '0.6fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto'
  },

  trustedBy: {
    fontSize: '18px',
    whiteSpace: 'nowrap',
  },



}));

export default function Partners() {
  const { classes } = useStyles();

  return (
	<div className={classes.hero}>
    <Container size="xl">
      <div className={classes.clientLogos}>

      <div className={classes.trustedBy}>Trusted by:</div>
    
      <SimpleGrid
      cols={5}
      spacing="sm"
      breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
      ]}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
		{/* <div><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></div> */}
		<div><a href='https://www.accenture.com/us-en' target="_blank" rel="noreferrer" className={classes.partners}><img src="https://decemberlabs.com/wp-content/themes/dlabs/img/home/logos2020/accenture.svg" alt="Santander" title="Santander" /></a></div>
		<div><a href='https://www.carebridgehealth.com/' target="_blank" rel="noreferrer" className={classes.partners}><img src="https://decemberlabs.com/wp-content/themes/dlabs/img/home/logos2020/carebridge.svg" alt="Santander" title="Santander" /></a></div>
		<div><a href='https://flattdevelopment.com' target="_blank" rel="noreferrer" className={classes.partners}><img src="https://decemberlabs.com/wp-content/themes/dlabs/img/home/logos2020/apollo.svg" alt="Santander" title="Santander" /></a></div>
		<div><a href='https://www.brain.fm/' target="_blank" rel="noreferrer" className={classes.partners}><img src="https://decemberlabs.com/wp-content/themes/dlabs/img/home/logos2020/brainfm.svg" alt="Santander" title="Santander" /></a></div>
    <div><a href='https://flattdevelopment.com' target="_blank" rel="noreferrer" className={classes.partners}><img src="https://decemberlabs.com/wp-content/themes/dlabs/img/home/logos2020/stickyio.svg" alt="Santander" title="Santander" /></a></div>

    </SimpleGrid>
      </div>
    	
      
    </Container>
	</div>
  );
}