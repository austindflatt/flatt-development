import { Container, Title, SimpleGrid, createStyles } from '@mantine/core';
import { TechCard } from './TechCard';
import tech from '../data/tech.json';

const useStyles = createStyles((theme) => ({
  servicesHeader: {
		color: '#ababab',
    opacity: .9,
		fontFamily: `Outfit, ${theme.fontFamily}`,
		fontSize: '1.5rem',
		lineHeight: 1.2,
		fontWeight: 500,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '.115em',
    [theme.fn.smallerThan('md')]: {
      fontSize: '1rem',
		  width: '100%',
		},
  },
  technologiesWrap: {
    position: 'relative',
    display: 'flex',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    gridRowGap: '2.5rem',
    fontSize: '1.5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: '6.25rem',
    [theme.fn.smallerThan('md')]: {
      gridRowGap: '1rem',
		},
  },
  techBox: {
    width: '100%',
  },
  techLogosHolder: {
    position: 'relative',
    overflow: 'hidden',
    padding: '5rem 5.5rem',
    border: '1px solid rgba(141,165,252,.14)',
    borderRadius: '10.375rem',
    backgroundColor: 'rgba(63,66,214,.09)',
    [theme.fn.smallerThan('md')]: {
      padding: '2.25rem 2rem',
		},
  },
  marquee: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightCorner: {
    position: 'absolute',
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: '100%',
  },
  leftCorner: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 'auto',
    bottom: 0,
    zIndex: 1,
    height: '100%',
  },
  marqueeTrack: {
    whiteSpace: 'nowrap',
    willChange: 'transform',
    animation: 'marquee 10s linear infinite',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: '0 0 auto',
  },
  marqueeList: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  marqueeFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
}));

export default function Technologies() {
  const { classes } = useStyles();

  return (
    <>
    <Container size="xl">
      <div className={classes.technologiesWrap}>
      <Title className={classes.servicesHeader}>Technologies We Work With</Title>
      <div className={classes.techBox}>
        <div className={classes.techLogosHolder}>
          <div className={classes.marquee}>
            <img 
            src="images/right-corner.png" 
            loading="lazy" 
            alt="" 
            class={classes.rightCorner}
            />
            <img 
            src="images/left-corner.png" 
            loading="lazy" 
            alt="" 
            class={classes.leftCorner}
            />
            <div className={classes.marqueeTrack}>
              <div className={classes.marqueeList}>
                <div role="list" className={classes.marqueeFlex}>
                  {tech.map((tech, key) => {
                    return (
                      <TechCard key={key} name={tech.title} image={tech.image} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 3, spacing: 'sm' },
        { maxWidth: 600, cols: 3, spacing: 'sm' },
      ]}
      >
        
      </SimpleGrid> */}
      </div>
    </Container>
    </>
  );
}