import { 
  Text, 
  Container, 
  Title, 
  SimpleGrid, 
  Image, 
  createStyles 
} from '@mantine/core';
import image from '../blue-hero.jpg';
import EmployeeCard from '../components/EmployeeCard';

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

  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: 0,
    justifyContent: 'center',
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

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  pageTitle: {
    width: '100%',
    maxWidth: '1190px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '40px',
    paddingLeft: '40px',
  },

}));

const About = () => {
  const { classes } = useStyles();

  return (
    <>
    <div className={classes.hero}>
      <Container className={classes.container} size="xl">

      <div className={classes.content}>
        <Title className={classes.title}>About Us</Title>
        <div className="underline-big"></div>
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
          <Title className="page-header">Our Mission</Title>
          <Text className="paragraph">
            Our mission is to build digital products that last. By being reasonable product craftsmen, 
            we're able to avoid surprises and focus on the quality of the software we deliver.
            <br /><br />
            What helps us achieve it is our goal to become the no. 1 JavaScript software development company in the world by focusing on one technology, 
            supporting the ecosystem (open source). We're eager to help technology driven companies achieve their business goals with our help. 
            All that is possible thanks to our great team.
          </Text>
        </div>
        <div>
          <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image
            radius="md"
            src="https://tsh.io/wp-content/uploads/2021/10/story-image.png"
            alt="Random unsplash image"
            />
          </div>
        </div>
      </SimpleGrid>
      <Title className={classes.pageHeader}>
        Meet the team
      </Title>

      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        style={{ marginBottom: 50, paddingTop: 40, }}
      >
        <EmployeeCard />
      </SimpleGrid>
    </Container>
    </>
  )
}

export default About;