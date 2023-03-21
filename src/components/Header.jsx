import { createStyles, Header, Container, Drawer, HoverCard, Center, Box, Anchor, Divider, SimpleGrid, Text, Title, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { ArrowDown, ArrowUp } from 'tabler-icons-react';
import BurgerMenu from './Burger';

const HEADER_HEIGHT = 75;

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    position: 'absolute',
    borderBottom: '0px solid',
    left: 0,
    top: 0,
    right: 0,
    bottom: 'auto',
    paddingTop: '20px',
    paddingBottom: '20px',
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
    color: '#FFFFFF',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.1,
    transition: '.25s',
    '&:hover': {
      opacity: .6,
    },
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
    fontWeight: 400,
    '&:hover': {
      color: '#5658ff',
    },
    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),
    '&:active': theme.activeStyles,
  },
  dropdown: {
    backgroundColor: '',
  },
  linkDropdown: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#FFF',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      padding: 10,
      borderRadius: '50px',
      backgroundColor: 'hsla(0, 0%, 100%, .07)',
      color: '#ebebeb'
    },
  },
  navlink: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#FFF',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: '.2s',
    padding: '10px 15px',
    '&:hover': {
      opacity: '.8'
    },
  },
  linkActive: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#ebebeb',
    fontWeight: 700,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: '.2s',
    padding: '10px 15px',
  },
  control: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontWeight: 600,
    transition: 'color .25s,border-color .25s,background-color .25s',
  },
  down: {
    position: 'static',
    margin: 0,
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(45deg)',
  }
}));

export default function HeaderMenu() {
  const [opened, { open, toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [active, setActive] = useState(0);

  return (
    <Header className={classes.root}>
      <Container className={classes.header} size="xl">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title className={classes.title}>
          <img className="logo" src="images/logo.png" alt='logo' />
        </Title>
      </Link>
      
      <Group spacing={5} className={classes.links}>
        {/* <HoverCard width={500} position="bottom" radius="md" shadow="md" withinPortal className={classes.dropdown}>
          <HoverCard.Target>
            <div className={classes.linkDropdown}>
              <Box component="span" mr={1}>
                Offerings 
              </Box>
              <div className={classes.menuIcon} aria-hidden="true"></div>
            </div>
          </HoverCard.Target>
          <HoverCard.Dropdown sx={{ overflow: 'hidden', backgroundColor: '#19192c', borderRadius: '8px', border: 'none' }} >
            <SimpleGrid cols={2} spacing={0}>
              Software Development
            </SimpleGrid>
          </HoverCard.Dropdown>
        </HoverCard> */}
        <NavLink
        className={({ isActive }) =>
        isActive ? `${classes.linkActive}` : `${classes.navlink}`}
        to="/about"
        >
          About
        </NavLink>
        <NavLink
        className={({ isActive }) =>
        isActive ? `${classes.linkActive}` : `${classes.navlink}`}
        to="/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
        className={({ isActive }) =>
        isActive ? `${classes.linkActive}` : `${classes.navlink}`}
        to="/careers"
        >
          Careers
        </NavLink>
      </Group>
      
      <Group spacing={5} className={classes.links}>
        <Link to="/start-project" style={{ textDecoration: 'none' }}>
          <Button 
          radius="xl" 
          size="lg" 
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
            Start a project
          </Button>
        </Link>
      </Group>

      {/* <Burger opened={open} onClick={null} className={classes.burger} color="#FFF" size="md" /> */}

      <BurgerMenu opened={open} onClick={null} className={classes.burger} color="#FFF" size="md" />

      </Container>
    </Header>
  );
}