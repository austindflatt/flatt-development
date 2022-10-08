import { Text, Container, Title, SimpleGrid, Paper, Group, createStyles } from '@mantine/core';
import image from '../blue-hero.jpg'

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '50vh',
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

  title: {
    color: '#FFF',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    maxWidth: '100%',
    textAlign: 'center',

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

  caseName: {
    textAlign: 'left',
    color: '#213547',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 40,
  },

  caseDescription: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'left',
  },

  serviceTitle: {
    textAlign: 'center',
    color: '#213547',
    fontSize: 16,
    fontWeight: 600,
  },

  serviceDescription: {
    textAlign: 'center',
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    fontSize: 14,
    fontWeight: 300,
  },

  preview: {
    width: '100%',
    height: '425px',
    paddingBottom: 20,
  },

  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: 0,
    justifyContent: 'center',
  },

  description: {
    color: '#FFF',
    maxWidth: 600,
    textAlign: 'center',
    maxWidth: '100%',

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

}));

const Portfolio = () => {
  const { classes } = useStyles();

  return (
    <>
    <div className={classes.hero}>
    <Container className={classes.container} size="xl">
    
    <div className={classes.content}>
    <Text className={classes.description} size="xl" mt="xl">
        CUSTOMER STORIES
        </Text>
      <Title className={classes.title}>See how Flatt Development customers are changing the future of tech.</Title>
      <Text className={classes.description} size="xl" mt="xl">
      We’ve helped fast-growing companies in multiple industries build web, mobile and desktop apps that make an impact.
        </Text>
      </div>
    </Container>
  </div>
    <Container size="xl" className={classes.wrapper}>
            {/* <Title className={classes.servicesHeader}>
            Explore Our Work
        </Title>
        <Text className={classes.subHeader}>
        We build digital solutions for global brands, enterprises, agencies, and startups that want to grow and scale-up.
        </Text> */}
       
    </Container>
    </>
  )
}

export default Portfolio