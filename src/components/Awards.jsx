import { Container, Title, Paper, Image, Text, createStyles } from '@mantine/core';
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
  awardsWrapper: {
    position: 'relative',
    display: 'flex',
  },
  awardLeftColumn: {
    position: 'relative',
    width: '40%',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  awardCircleWrapper: {
    position: 'sticky',
    top: '117px',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  awardCircleOuterWrap: {
    position: 'relative',
    width: '22vw',
    height: '22vw',
    maxHeight: '19.5rem',
    maxWidth: '19.5rem',
    padding: '1px',
    flex: '0 0 auto',
    borderRadius: '50%',
    backgroundColor: '#181941',
  },
  awardCircleOuter: {
    width: '100%',
    height: '100%',
    padding: '2.6rem',
    flex: '0 0 auto',
    borderRadius: '50%',
    backgroundColor: '#050505',
    backgroundImage: 'linear-gradient(180deg,rgba(109,97,243,.06),rgba(109,97,243,.06))',
  },
  awardCircleInnerWrap: {
    width: '100%',
    height: '100%',
    padding: '1px',
    flex: '0 0 auto',
    borderRadius: '50%',
    backgroundColor: '#181941',
  },
  awardCircleInner: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#050505',
    backgroundImage: 'linear-gradient(180deg,rgba(109,97,243,.12),rgba(109,97,243,.12))',
  },
  awardTitle: {
    marginTop: 0,
    marginBottom: 0,
    backgroundImage: 'linear-gradient(104deg,#3279f4 8.37%,#9ed3f0 89%)',
    fontSize: '25px',
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: '.13rem',
    textTransform: 'uppercase',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  awardLine: {
    width: '100%',
    height: '1px',
    borderTop: '3px dashed rgba(164,183,216,.8)',
  },
  awardTitleWrapper: {
    display: 'none',
    // [theme.fn.smallerThan('md')]: {
    //   display: 'block',
    // },
  },
  awardTitleMobile: {
    marginTop: 0,
    marginBottom: 0,
    color: '#eee',
    fontSize: '3.13rem',
    lineHeight: 1.2,
    fontWeight: 700,
  },
  awardsLogoWrapper: {
    width: '60%',
    marginTop: '5rem',
    bordeRadius: '20px',
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
  awardsLogoHolder: {
    display: 'flex',
    width: '100%',
    padding: '4rem 2.8rem',
    flexDirection: 'column',
    gridRowGap: '5rem',
    border: '1px solid rgba(202,204,255,.1)',
    borderRadius: '20px',
    backgroundColor: 'rgba(50,60,131,.16)',
  },
  awardItem: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridColumnGap: '2.25rem',
    gridRowGap: '1rem',
    gridTemplateColumns: '0.5fr 1fr',
    gridTemplateRows: 'auto',
    paddingRight: '60px',
  },
  awardImgWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  awardManifest: {
    width: '100%',
    maxWidth: '127px',
  },
  awardTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  awardCompanyName: {
    color: '#f4305f',
    fontSize: '1.125rem',
    lineHeight: '116%',
    fontWeight: 700,
    letterSpacing: '-.03em',
    textTransform: 'uppercase',
  },
  awardCompanyClutch: {
    color: '#c9a56b',
    fontSize: '1.125rem',
    lineHeight: '116%',
    fontWeight: 700,
    letterSpacing: '-.03em',
    textTransform: 'uppercase',
  },
  awardName: {
    marginTop: '8px',
    marginBottom: 0,
    color: '#eee',
    fontSize: '1.75rem',
    lineHeight: '116%',
    fontWeight: 700,
  },
  awardClutch: {
    width: '100%',
    maxWidth: '185px',
  }
}));

export default function Awards() {
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: 750px)`);

  return (
    <>
    <Container size="xl">
    <div className={classes.paddingSection}>
      <div className={classes.awardsWrapper}>
        <div className={classes.awardLeftColumn}>
          <div
          className={classes.awardCircleWrapper}
          style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
          >
            <div 
            className={classes.awardCircleOuterWrap}
            style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
            >
              <div className={classes.awardCircleOuter}>
                <div className={classes.awardCircleInnerWrap}>
                  <div className={classes.awardCircleInner}>
                    <div className={classes.awardTitle}>AWARDS</div>
                  </div>
                </div>
              </div>
            </div>
            <div 
            className={classes.awardLine}
            style={{ willChange: 'opacity', opacity: 1 }}
            >
            </div>
          </div>
        </div>
        <div className={classes.awardTitleWrapper}>
          <h2 className={classes.awardTitleMobile}>Awards</h2>
        </div>
        <div 
        className={classes.awardsLogoWrapper}
        style={{ willChange: 'opacity', opacity: 1 }}
        >
          <div className={classes.awardsLogoHolder}>
            <div className={classes.awardItem}>
              <div className={classes.awardImgWrapper}>
                <img 
                src="images/manifest.png" 
                loading="lazy" 
                alt="Manifest badge" 
                className={classes.awardManifest}
                />
              </div>
              <div className={classes.awardManifest}>
                <div className={classes.awardCompanyName}>The Manifest</div>
                <h2 className={classes.awardName}>Most Reviewed Software Development Agencies</h2>
              </div>
            </div>
            <div className={classes.awardItem}>
              <div className={classes.awardImgWrapper}>
                <img 
                src="images/clutch_top_app_2023.png" 
                loading="lazy" 
                alt="Clutch Badge" 
                className={classes.awardClutch}
                />
              </div>
              <div className={classes.awardManifest}>
                <div className={classes.awardCompanyClutch}>Clutch</div>
                <h2 className={classes.awardName}>Top App Development Companies</h2>
              </div>
            </div>
          </div>
        </div>
        <img 
        src="images/award-shadow.webp" 
        loading="lazy" 
        sizes="(max-width: 991px) 90vw, 840px" 
        alt="" 
        className={classes.glow}
        />
      </div>
    </div>
    </Container>
    </>
  );
}