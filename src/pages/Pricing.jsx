import React from 'react';
import { Container, Title, Text, Group, Paper, Button, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import Team from '../components/Team';

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

const Pricing = () => {
  const { classes } = useStyles();

  return (
    <>
    <img 
    src="" 
    loading="eager" 
    alt="" 
    class={classes.heroTopRight}>
    </img>
    <Container size="md">
      <div className={classes.wrapper}>
        <Title className={classes.h1}>Transparent Pricing</Title>
        <div className={classes.desc}>
          We charge a flat monthly rate based on the amount of work you need. Our contract is month-to-month, so it’s easy to scale the work up or down as your needs change.
        </div>
        
        <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
          <Group style={{ padding: '24px' }}>
            <div>
              <Text className={classes.serviceTitle}>Web Apps</Text>
              <Text weight={500} className={classes.serviceDescription}></Text>
            </div>
          </Group>
          </Paper>

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

export default Pricing;