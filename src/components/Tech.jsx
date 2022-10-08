import { SimpleGrid, Text, Container, Title, createStyles } from '@mantine/core';
import Aws from './TechCard/Aws';
import Mongo from './TechCard/Mongo';
import Next from './TechCard/Next';
import Node from './TechCard/Node';
import React from './TechCard/React';
import Redux from './TechCard/Redux';
import TypeScript from './TechCard/TypeScript';
import Vue from './TechCard/Vue';

const useStyles = createStyles((theme) => ({

	hero: {
		borderTop: '1px solid rgba(60, 60, 60, .12)',
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
  
	tech: {
	  marginLeft: 'auto',
	  marginRight: 'auto'
	},
  
  }));
  
  const Tech = () => {
	const { classes } = useStyles();
  
	return (
		<div className={classes.hero}>
	  <Container size="xl" className={classes.wrapper}>

  
	  <Title className={classes.servicesHeader}>
	  Future-proof technologies
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
	  </div>
	)
  }
  
  export default Tech