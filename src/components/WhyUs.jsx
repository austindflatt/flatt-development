import { Container, Title, Button, SimpleGrid, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import data from '../data/why.json';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: '#f9f9fb',
    paddingTop: 80,
    paddingBottom: 80,
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
  whyWrap: {
    position: 'relative',
    marginTop: '80px',
    zIndex: 1,
  },
  detailWrap: {
    display: 'flex',
    margin: '3.75rem auto 5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumnGap: '1rem',
    gridRowGap: '1rem',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '2rem',
      marginBottom: '3rem',
      gridColumnGap: '0.7rem',
      gridRowGap: '0.7rem'
      },
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
  whyDetailInner: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    display: 'flex',
    padding: '1.5rem 2rem',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumnGap: '0.75rem',
    border: '1px solid rgba(156,175,223,.11)',
    borderRadius: '12rem',
    backgroundImage: 'linear-gradient(180deg,rgba(50,60,131,.16),rgba(50,60,131,.16))',
    fontSize: '1.25rem',
    lineHeight: 1,
    [theme.fn.smallerThan('sm')]: {
      padding: '0.8rem 1rem',
      gridColumnGap: '0.5rem',
      fontSize: '.9rem',
    },
  },
  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.125rem',
    fontWeight: 400,
    transition: 'color .25s,border-color .25s,background-color .25s',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
  bgImages: {
    display: 'block'
  },
  whyUsRight: {
    position: 'absolute',
    zIndex: -1,
    left: '50%',
    top: '5rem',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '61.06rem',
    transform: 'translate(-50%,0)',
  },
  whyUsLeft: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: '-15rem',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: '20.63rem',
  }
}));

export default function Why() {
  const { classes } = useStyles();

  return (
    <>
    <Container size="xl">
      <div className={classes.whyWrap}>
        <Title className={classes.h1}>Why Flatt Development</Title>
        <div className={classes.smallHeading}>Amazing Development, Seamless Workflow</div>
        <div className={classes.desc}>
          Our dedicated team of engineers is committed to developing with care to ensure our clients' complete satisfaction.
        </div>
        <div 
        className={classes.detailWrap} 
        style={{
          opacity: 1, 
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
          transformStyle: 'preserve-3d' 
        }}>
          <SimpleGrid
          cols={4}
          data-aos="fade-up"
          spacing="lg"
          breakpoints={[
            { maxWidth: 1150, cols: 2, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 2, spacing: 'sm' },
          ]}
          >
            {data.map((why, key) => {
              return (
                <div className={classes.whyDetailInner} key={key}>
                <img 
                src="images/check-v2.svg" 
                loading="lazy" 
                alt={why.title}
                class={classes.whyIcon}
                style={{ width: '30px', marginRight: '5px' }} 
                />
                <div>{why.title}</div>
              </div>
            )})}
          </SimpleGrid>
        </div>
        <div className={classes.glowOverlay}></div>
        <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center' }}>
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
  );
}