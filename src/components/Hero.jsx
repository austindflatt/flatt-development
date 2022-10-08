import { createStyles, Container, Title, Group, Button, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import image from '../code3.avif'

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgb(0 0 0 / 46%) 35%, rgb(0 52 255) 100%), url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '100px',
    paddingBottom: '100px',
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

  company: {
    color: 'transparent',
    background: '-webkit-linear-gradient( 120deg, #3451fe 30%, #47caff )',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    maxWidth: 600,

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

  title: {
    color: '#FFF',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    maxWidth: 600,

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

  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: 0,
    justifyContent: 'center',
  }
}));

export default function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Container className={classes.container} size="xl">
      
      <div className={classes.content}>
        {/* <Title className={classes.company}>Flatt Development</Title> */}
        <Title className={classes.title}>Custom Product & Software Development</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Build scalable web and mobile applications with Louisville’s top Node.js, ReactJS, TypeScript, and React Native engineers.
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
  );
}