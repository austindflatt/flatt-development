import { Text, Container, Title, SimpleGrid, createStyles } from '@mantine/core';
import React from 'react';

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

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  caseName: {
    textAlign: 'left',
    color: '#213547',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 20,
  },

  caseDescription: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'left',
  },

  preview: {
    width: '100%',
    height: '700px',
    paddingBottom: 20,

    [theme.fn.smallerThan('sm')]: {
      height: '250px'
    },

  }

}));

export default function Cases() {
  const { classes } = useStyles();

  return (
	<div className={classes.hero}>
    <Container size="xl" className={classes.wrapper}>
    	<Title className={classes.servicesHeader}>
			Featured Cases
        </Title>
        <Text className={classes.subHeader}>
        We are proud to work with truly innovative clients. Here are some of the companies we’ve had the privilege to work with.
        </Text>
      <SimpleGrid
      cols={1}
      spacing={50}
      breakpoints={[
        { maxWidth: 1280, cols: 1, spacing: 'md' },
        { maxWidth: 980, cols: 1, spacing: 'md' },
        { maxWidth: 755, cols: 1, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <div className={classes.project}>
      <img src='https://decemberlabs.com/wp-content/themes/dlabs/img/works/bg_trade_full.png' alt='hi' className={classes.preview} />
    <Title className={classes.caseName}>
			Versured
        </Title>
      <Text className={classes.caseDescription} size="xl" mt="xl">
      Vesured invited us to join forces with their in-house teams to reinvent one of their most critical (and complicated) digital infrastructures — the quotation engine. Versured wanted to improve the user experience of obtaining and managing quotations for both customers and employees to make the flow continuous and simple at the same time.
        </Text>
    </div>

    <div className={classes.project}>
    <img src='https://decemberlabs.com/wp-content/themes/dlabs/img/works/sinq.png' alt='hi' className={classes.preview} />
    <Title className={classes.caseName}>
    Tutor House
        </Title>
      <Text className={classes.caseDescription} size="xl" mt="xl">
      The main challenge of the Tutor House was to create a strict vetting procedure of all tutors, including an ID check, to allow using the platform only to verified and qualified tutors, especially for those teachers who provide tuition in-person.
        </Text>
    </div>
     
    </SimpleGrid>
    </Container>
	</div>
  );
}