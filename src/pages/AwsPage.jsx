import { Text, Container, Title, SimpleGrid, Image, Group, Button, createStyles } from '@mantine/core';
import image from '../blue-hero.jpg';
import teamTable from '../code.avif';
import { Link } from "react-router-dom";
import React from '../components/TechCard/React';

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
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: '#FFF',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    maxWidth: '100%',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
      textAlign: 'center'
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
      textAlign: 'center'
    },
  },

  description: {
    color: '#FFF',
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
      textAlign: 'center'
    },

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
      textAlign: 'center'
    },
  },
    
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
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

  icon: {
    backgroundColor: '#e5e5e5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    borderRadius: '6px',
    width: '48px',
    height: '48px',
    fontSize: '24px'
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

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  serviceTitle: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  },

  serviceDescription: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 300,
  },

  control: {
    fontWeight: 400,
    transition: 'color .25s,border-color .25s,background-color .25s',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  group: {
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
    },
  },

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  storyHeader: {
    textAlign: 'left',
    color: '#FFF',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 50,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
    },
  },

  storyParagraph: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'left',
  },

  pageTitle: {
    width: '100%',
    maxWidth: '1190px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '40px',
    paddingLeft: '40px',
  },

  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: 0,
    justifyContent: 'center',
  }

}));

const AwsPage = () => {
  const { classes } = useStyles();

  return (
    <>
    <div className={classes.hero}>
      <Container className={classes.container} size="xl">
      
      <div className={classes.content}>
        <Title className={classes.title}>Infrastructure services with AWS </Title>
		<Text className={classes.description} size="xl" mt="xl">
		Leverage the potential of Amazon to power your business.
        </Text>

		<Group className={classes.group} style={{ marginTop: 24 }}>

        <Link to="/contact">
        <Button 
        radius="xl" 
        size="md" 
        className={classes.control}
        styles={(theme) => ({
          root: {
            backgroundColor: '#3451fe',
            borderColor: '#3475fe',
  
            '&:hover': {
              backgroundColor: theme.fn.darken('#3475fe', 0.05),
            },
          },
  
          leftIcon: {
            marginRight: 15,
          },
        })}
        >
          Start a project
        </Button>
        </Link>

		<Link to="/contact">
        <Button 
        radius="xl" 
        size="md" 
        className={classes.control}
        styles={(theme) => ({
          root: {
            color: '#FFF',
            backgroundColor: '#3a3a3a',
            borderColor: '#484848',
  
            '&:hover': {
              backgroundColor: theme.fn.darken('#484848', 0.05),
            },
          },
  
          leftIcon: {
            marginRight: 15,
          },
        })}
        >
          Book a meeting
        </Button>
        </Link>

        </Group>

        </div>
      </Container>
    </div>
    <Container size="xl" className={classes.wrapper}>
        <SimpleGrid
      cols={2}
      spacing={50}
      breakpoints={[
        { maxWidth: 980, cols: 1, spacing: 'md' },
        { maxWidth: 755, cols: 1, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
      style={{ paddingBottom: '50px', }}
    >
<div>
<Title className="page-header">
Why we use AWS at Flatt Development
        </Title>
    <Text className="paragraph">
    Amazon rolled their cloud infrastructure services quite a long time ago – back in 2006. However, initially they were mostly used by individual users and small businesses. Over time, they grew in capabilities and sophistication to become one of the biggest cloud infrastructure services providers.
        </Text>
        </div>
        <div>
        <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
        radius="md"
        src={teamTable}
        height="400px"
        alt="Random unsplash image"
      />
      </div>
        </div>

        </SimpleGrid>

		<Title className={classes.servicesHeader}>
    Build responsive and engaging user interfaces with React
      </Title>

     


    </Container>
</>
  )
}

export default AwsPage