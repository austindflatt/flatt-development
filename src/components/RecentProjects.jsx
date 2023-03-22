import { Title, Paper, Image, Text, createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useRef } from 'react';
import work from '../data/work.json';

const useStyles = createStyles((theme) => ({
  servicesHeader: {
    textAlign: 'center',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginTop: '5rem',
    marginBottom: '5rem',
    color: '#FFF',
    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: '2.5rem',
    },
  },
  slide: {
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  card: {
    width: '100%',
    position: 'relative',
    padding: '3rem',
    borderRadius: '1.875rem',
    border: '4px solid #252d43',
    backgroundColor: 'rgba(50,60,131,.16)',
    backgroundImage: 'none',
    backgroundPosition: '0 0',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backdropFilter: 'blur(70px)',
    [theme.fn.smallerThan('sm')]: {
    },
  },
  title: {
    color: '#ebebeb',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '2.25rem',
    fontWeight: '900',
    marginBottom: '1.3rem',
  },
  description: {
	  color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.125rem',
    lineHeight: '1.7',
  },
  grid: {
    width: '100%',
    display: 'grid',
    gridAutoColumns: '1fr',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'minmax(max-content,max-content) 1fr',
  },
  controls: {
    ref: useRef('controls'),
    transition: 'opacity 150ms ease',
    backgroundColor: '#000',
  },
  projectDetail: {
    alignSelf: 'center',
  }
}));

export default function RecentProjects() {
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: 750px)`);

  return (
    <>
    <Title className={classes.servicesHeader}>Our Recent Projects</Title>
    <div data-aos="fade-up">
    <Carousel
	  dragFree={mobile ? false : true}
	  withControls={mobile ? false : false}
	  withIndicators={mobile}
	  withKeyboardEvents={true}
    //   getEmblaApi={setEmbla}
    skipSnaps={mobile ? false : true}
    speed={1}
    slideSize="53.333333%"
    slideGap="lg"
    loop
    align="center"
    slidesToScroll={mobile ? 1 : 3}
    initialSlide={3}
    //   opacity=".4"
	  style={{ 
      transition: 'opacity .5s', 
      control: {
        backgroundColor: '#000',
        cursor: 'default',
      }, 
    }}
    >
		{work.map((project, key) => {
      return (
      <Carousel.Slide key={key} className={classes.slide}>
        <Paper
        radius="md"
        className={classes.card}
        >
          <div className={classes.grid}>
            <div>
              <Image
              radius="lg"
              src={project.image}
              alt={project.title}
              width="19.25rem"
              height="19.875rem"
              />
            </div>
            <div className={classes.projectDetail}>
              <Title className={classes.title}>{project.title}</Title>
              <Text className={classes.description}>{project.description}</Text>
            </div>
          </div>
        </Paper>
      </Carousel.Slide>
    )})}
    </Carousel>
    </div>
    </>
  );
}