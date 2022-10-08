import { createStyles, Header, Container, Title, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";


const HEADER_HEIGHT = 75;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    backgroundColor: '#FFF',
    // backgroundColor: 'rgba(255,255,255,.7)',
    // backdropFilter: 'saturate(50%) blur(8px)',
    borderBottom: '0px solid'
    // hover color #9499ff
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    border: '0px solid',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  title: {
    color: '#213547',
    fontFamily: '"Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.1,
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: '#213547',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color: '#3451fe',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: '#2f2f2f',
      color: '#3451fe',
    },
  },

  control: {
    fontWeight: 600,
    transition: 'color .25s,border-color .25s,background-color .25s',
  },
  
}));

export default function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [active, setActive] = useState(0);

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header} size="xl">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Title className={classes.title}> <img className="logo" src="https://austinflatt-public-assets.s3.us-east-2.amazonaws.com/public/fd__full-logo-dark.svg" alt='logo' /></Title>
      </Link>
        <Group spacing={5} className={classes.links}>
        <NavLink to="/cases" className={classes.link}>
      Work
    </NavLink>

        <NavLink to="/services" className={classes.link}>
      Services
    </NavLink>

    <NavLink to="/about" className={classes.link}>
      About Us
    </NavLink>

    <a href="https://www.linkedin.com/company/flattdevelopment/jobs" target="_blank" rel="noreferrer" className={classes.link}>
      Careers
    </a>

    <Link to="/contact" style={{ textDecoration: 'none' }}>
    <Button 
        radius="xl" 
        size="sm" 
        className={classes.control}
        styles={(theme) => ({
          root: {
            backgroundColor: '#3451fe',
            borderColor: '#3475fe',
  
            '&:hover': {
              backgroundColor: theme.fn.darken('#3475fe', 0.05),
            },
          },
  
          leftIcon: {
            marginRight: 15,
          },
        })}
        >
          Start a project
        </Button>
        </Link>

        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
<NavLink to="/cases" className={classes.link}>
      Work
    </NavLink>

    <NavLink to="/services" className={classes.link}>
      Services
    </NavLink>

    <NavLink to="/about" className={classes.link}>
      About Us
    </NavLink>

    <a href="https://www.linkedin.com/company/flattdevelopment/jobs/" target="_blank" rel="noreferrer" className={classes.link}>
      Careers
    </a>

    <NavLink to="/contact" className={classes.link}>
      Start a project
    </NavLink>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}