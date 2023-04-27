import { Container, Title, Paper, Image, Text, SimpleGrid, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  glow: {
    position: 'absolute',
    left: '50%',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    zIndex: -1,
    width: '100%',
    maxWidth: '52.5rem',
    transform: 'translate(-45%,0)',
  },
  paddingSection: {
    paddingTop: '6.25rem',
    paddingBottom: '6.25rem',
  },
  awardWrapper: {
    paddingTop: '6.25rem',
    paddingBottom: '6.25rem',
  },
  clutchBadgeGrid: {
    gridColumnGap: '4.06rem',
    gridRowGap: '4.06rem',
    textAlign: 'left',
    gridTemplateR: 'auto',
    gridTemplateColumns: '1fr 1fr',
    gridAutoColumns: '1fr',
    alignItems: 'center',
    display: 'grid',
  },
  clutchBadge: {
    width: '100%',
  },
  heading: {
    marginTop: 0,
    marginBottom: '1.25rem',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    textAlign: 'center',
    color: '#fff',
    fontSize: '3.13rem',
    lineHeight: 1.2,
    fontWeight: 800,
    animation: 'fadein 1s',
    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
	  },
  },
  primaryTextGradient: {

  },
}));

export default function Awards() {
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: 750px)`);

  return (
    <>
    <Container size="xl">
    <div className={classes.awardWrapper}>
    <div className={classes.clutchBadgeGrid}>
      <img src="images/clutch-award.png" loading="lazy" alt="Top Rated By Clutch" className={classes.clutchBadge} />
      <Title className={classes.heading}>
        <span className="text-gradient">#1</span> app development company in Kentucky on <span className="text-gradient">clutch</span></Title></div>
      </div>
    </Container>
    </>
  );
}

{/* <img 
                src="images/clutch_top_app_2023.png" 
                loading="lazy" 
                alt="Clutch Badge" 
                className={classes.awardClutch}
                /> */}