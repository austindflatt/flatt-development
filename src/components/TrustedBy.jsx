import { Container, Button, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
	trustedByContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridRowGap: '2.5rem',
    paddingTop: '3rem',
    paddingBottom: '3.75rem',
	},
  trustLogoCard: {
    position: 'relative',
    background: 'linear-gradient(104.62deg, rgba(50, 69, 244, 0.3) 9.73%, rgba(158, 211, 240, 0.3) 89.64%)',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    maxWidth: '73.125rem',
    padding: '1px',
    alignItems: 'center',
    borderRadius: '17rem',
    [theme.fn.smallerThan('sm')]: {
      borderRadius: '1rem',
		},
  },
  trustLogoCardInner: {
    gridColumnGap: '5.94rem',
    position: 'relative',
    display: 'flex',
    width: '100%',
    padding: '5rem 2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    gridRowGap: '4rem',
    borderRadius: '17rem',
    backgroundColor: '#050505',
    backgroundImage: 'linear-gradient(180deg,rgba(95,90,159,.04),rgba(95,90,159,.04))',
    [theme.fn.smallerThan('sm')]: {
      borderRadius: '1rem',
		},
  },
  trustedByLogo: {
    width: '7.25rem',
    height: '2.5rem',
    opacity: '.7',
    objectFit: 'contain',
  },
	heading: {
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
      fontSize: '1.5rem',
		  width: '100%',
		},
	},
  video: {
    position: 'relative',
    paddingTop: '10rem',
    paddingBottom: '12rem',
  },
  bgLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    zIndex: 1,
    height: '100%',
    transform: 'translate(-50%,0)',
  },
}));

export default function TrustedBy() {
  const { classes } = useStyles();

  return (
    <>
    <Container size="xl">
      <div className={classes.trustedByContainer}>
        <h2 className={classes.heading}>Trusted By</h2>
        <div className={classes.trustLogoCard}>
          <div className={classes.trustLogoCardInner}>
            <img 
            src="images/webflow.webp" 
            loading="lazy" 
            alt="Our Partners - Webflow" 
            class={classes.trustedByLogo}
            />
            <img 
            src="images/abel.png" 
            loading="lazy" 
            alt="Our Partners - Webflow" 
            class={classes.trustedByLogo}
            />
          </div>
        </div>
      </div>
      {/* <div data-w-id="b7f489eb-4d52-bde6-3206-785bd44c574e" class={classes.video}>
        <img 
        src="images/bg-line.svg" 
        loading="lazy" 
        alt="Bgg line" 
        class={classes.bgLine}
        />
      </div> */}
    </Container>
    </>
  );
}