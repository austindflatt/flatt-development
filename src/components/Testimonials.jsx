import { Title, Paper, Image, Text, createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useRef } from 'react';

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
      marginBottom: '2.5rem',},
    },
  slide: {
    width: '100%',
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
    fontSize: '1.25rem',
    fontWeight: '900',
  },
  title2: {
    color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.125rem',
    lineHeight: '1.7',
  },
  description: {
    color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.125rem',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
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
  pagePadding: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  clutchWrapBtn: {
    display: 'flex',
    marginTop: '5rem',
    justifyContent: 'center',
  },
  clutchBtnBox: {
    display: 'flex',
    overflow: 'hidden',
    padding: '0.3rem 1.5rem',
    justifyContent: 'center',
    borderRadius: '5.625rem',
    backgroundColor: 'hsla(0,0%,100%,.8)',
    transition: '.4s',
    '&:hover': {
      backgroundColor: '#FFF',
    },
  },
  reviewEmbed: {
    width: '14.6rem',
    padding: '1.25rem',
  },
  clutchWidget: {

  },
}));

export default function Testimonials() {
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: 750px)`);

  return (
    <>
    <Title className={classes.servicesHeader}>Hear from our clients</Title>
    <div data-aos="fade-up">
    <Carousel
	  dragFree={mobile ? false : true}
	  withControls={mobile ? false : false}
	  withIndicators={mobile}
	  withKeyboardEvents={true}
    //   getEmblaApi={setEmbla}
    skipSnaps={mobile ? false : true}
    speed={1}
    slideSize="33.333333%"
    slideGap="xl"
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
      <Carousel.Slide key="1" className={classes.slide}>
        <Paper
        radius="md"
        className={classes.card}
        >
          <div className={classes.grid}>
            {/* <div>
              <Image
              radius="lg"
              src="https://www.jpmorgan.com/content/dam/jpm/commercial-banking/bankers/generic_headshot_icon_800x800.png"
              alt="Random unsplash image"
              width="19.25rem"
              height="19.875rem"
              />
            </div> */}
            <div>
              <Text className={classes.description}>
                "Austin is great to work with, diligent and he clearly explains all the steps in the process."
              </Text>
              <Title className={classes.title}>Daniel Warner</Title>
              <Text className={classes.title2}>Abel Lending Co-Founder</Text>
            </div>
          </div>
        </Paper>
      </Carousel.Slide>
    </Carousel>
    </div>
    
    <div className={classes.pagePadding}>
      <div className={classes.clutchWrapBtn}>
        <a 
        href="https://widget.clutch.co/widgets/get/2?ref_domain=www.flattdevelopment.com&amp;amp;uid=2002100&amp;amp;rel_nofollow=true&amp;amp;ref_path=/" 
        target="_blank" 
        className={classes.clutchBtnBox}>
          <div className={classes.reviewEmbed}>
            <div 
            className={classes.clutchWidget}
            data-nofollow="true" 
            data-url="https://widget.clutch.co" 
            data-widget-type="2" 
            data-height="auto" 
            data-clutchcompany-id="2002100">
              <iframe 
              className="review-frame" 
              id="iframe-0.8698521848731224" 
              width="100%" 
              src="https://widget.clutch.co/widgets/get/2?ref_domain=www.flattdevelopment.com&amp;uid=2002100&amp;rel_nofollow=true&amp;ref_path=/" 
              height="45px"
              style={{ border: 'none', display: 'block' }} 
              title="[object Object]2">
              </iframe>
            </div>
          </div>
        </a>
      </div>
    </div>

    </>
  );
}