import { createStyles, Container, Group, Title, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    color: '#FFF',
    marginTop: '75px',
    paddingTop: '0px',
    paddingBottom: '40px',
    // backgroundImage: 'url(images/footer_glow.png)',
    backgroundPosition: 50% 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  inner: {
    marginTop: '75px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  title: {
    maxWidth: '214px',
    marginBottom: '20px',
    objectFit: 'contain',
    color: '#FFFFFF',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.1,
    transition: '.25s',
    '&:hover': {
      opacity: .6,
    },
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  footerText: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: 'hsla(0,0%,92.2%,.8)',
    fontSize: '14px',
    lineHeight: '180%',
    fontWeight: 400,
    maxWidth: 300,
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  footerCopyright: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    marginTop: '43px',
    color: 'hsla(0,0%,92.2%,.8)',
    fontSize: '14px',
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  link: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#ababab',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none',
    },
  },
  social: {
    marginTop: '32px',
    [theme.fn.smallerThan('sm')]: {
      marginBottom: theme.spacing.xl,
      justifyContent: 'center',
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  footerGradient: {
    left: 0,
    top: 'auto',
    right: 'auto',
    bottom: 0,
    width: '100%',
    maxWidth: '40.63rem',
    position: 'absolute',
  },
  bgFooterImg: {
    left: '50%',
    top: 0,
    right: 0,
    bottom: 0,
    display: 'block',
    transform: 'translate(-50%,0)',
    position: 'absolute',
  },
  grid: {
    gap: '496px',
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container size="lg" className={classes.wrapper}>
        <div className={classes.inner}>
          <SimpleGrid 
          cols={2} 
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'md' },
            { maxWidth: 755, cols: 1, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]} 
          className={classes.grid}
          >
            <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Title className={classes.title}>
                  <img src="images/logo.png" className="logo" loading="lazy" alt="" width='214px' />
                </Title>
              </Link>
              {/* <p className={classes.footerText}>Flatt Development is a software development company created in Louisville, KY.</p> */}
              <div className={classes.social}>
                <a href='https://www.facebook.com/flattdevelopment' target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="30" height="35" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
                <a href='https://twitter.com/flattdev' target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="30" height="35" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href='https://instagram.com/flattdevelopment' target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="30" height="35" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href='https://linkedin.com/company/flattdevelopment' target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="30" height="35" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <Group className={classes.links}>
                <Link
                className={classes.link}
                to="/about"
                size="sm"
                >
                  About
                </Link>
                <Link
                className={classes.link}
                to="/pricing"
                size="sm"
                >
                  Pricing
                </Link>
                <Link
                className={classes.link}
                to="/careers"
                size="sm"
                >
                  Careers
                </Link>
                {/* <Link
                className={classes.link}
                to="/privacy-policy"
                size="sm"
                >
                  Privacy Policy
                </Link>
                <Link
                className={classes.link}
                to="/terms-conditions"
                size="sm"
                >
                  Terms and Conditions
                </Link> */}
              </Group>
              <p className={classes.footerCopyright}>
                Copyrights © 2023. Flatt Development, LLC. All rights reserved.
              </p>
            </div>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}