import React from 'react';
import { Container, Title, Text, SimpleGrid, Group, Paper, Button, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import Team from '../components/Team';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 80,
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
    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
	  },
  },
  paper: {
    position: 'relative',
    padding: '53px 50px 40px 53px',
    borderRadius: '32px',
    border: '1px solid rgba(202,204,255,.1)',
    backgroundColor: 'rgba(50,60,131,.16)',
    backgroundImage: 'none',
    backgroundPosition: '0 0',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backdropFilter: 'blur(70px)',
    [theme.fn.smallerThan('sm')]: {
    },
  },
  group: {
    padding: 24,
  },
  icon: {
    width: '78px',
    height: '78px',
    maxHeight: '78px',
    maxWidth: '78px',
    marginLeft: '-6px',
    marginBottom: '20px',
    borderRadius: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'hsla(0,0%,100%,.05)'
  },
  serviceTitle: {
    marginBottom: '16px',
    color: '#e7e7e7',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: 700,
  },
  serviceDescription: {
    color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '20px',
    lineHeight: '32px',
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

const Pricing = () => {
  const { classes } = useStyles();

  return (
    <>
    <img 
    src="images/dollar.svg" 
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
        
        <SimpleGrid
        cols={2}
        style={{ gap: '1rem' , marginTop: 50}}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'md' },
          { maxWidth: 755, cols: 1, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        >

          <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
            <Group style={{ padding: '24px' }}>
              <div className={classes.pricing}>
                <Text weight={500} className={classes.priceCost}><span className='text-gradient'>$16K</span></Text>
                <Text weight={500} className={classes.priceDuration}><span className='text-gradient'>USD, per month.</span></Text>
              </div>
              <div className={classes.detail}>
                <Text className={classes.serviceTitle}>Monthly flat rate</Text>
                <Text weight={500} className={classes.serviceDescription}>For new apps and large projects</Text>
              </div>
            </Group>
          </Paper>
          
          <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
            <Group style={{ padding: '24px' }}>
              <div className={classes.pricing}>
                <Text weight={500} className={classes.priceCost}><span className='text-gradient'>$4K</span></Text>
                <Text weight={500} className={classes.priceDuration}><span className='text-gradient'>USD, per month.</span></Text>
              </div>
              <div className={classes.detail}>
                <Text className={classes.serviceTitle}>Monthly retainer rate</Text>
                <Text weight={500} className={classes.serviceDescription}>For maintenance work</Text>
              </div>
            </Group>
          </Paper>
          
        </SimpleGrid>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Link to="/start-project" style={{ textDecoration: 'none' }}>
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