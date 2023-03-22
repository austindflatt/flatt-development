import { createStyles } from '@mantine/core';
import { NavLink } from "react-router-dom";

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
}));

const BurgerMenu = () => {
  const { classes } = useStyles();

  return (
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li><NavLink
              className={({ isActive }) =>
              isActive ? `${classes.linkActive}` : `${classes.navlink}`}
              to="/work"
              >
                Our Work
              </NavLink></li>
              <li><NavLink
              className={({ isActive }) =>
              isActive ? `${classes.linkActive}` : `${classes.navlink}`}
              to="/about"
              >
                About
              </NavLink></li>
              {/* <li><NavLink
              className={({ isActive }) =>
              isActive ? `${classes.linkActive}` : `${classes.navlink}`}
              to="/pricing"
              >
                Pricing
              </NavLink></li> */}
              <li><NavLink
              className={({ isActive }) =>
              isActive ? `${classes.linkActive}` : `${classes.navlink}`}
              to="/careers"
              >
                Careers
              </NavLink></li>
              <li><NavLink
              className={({ isActive }) =>
              isActive ? `${classes.linkActive}` : `${classes.navlink}`}
              to="/start-project"
              >
                Start a project
              </NavLink></li>
              <li><NavLink
              className={({ isActive }) =>
              isActive ? `${classes.linkActive}` : `${classes.navlink}`}
              to="https://client.flattdevelopment.com"
              >
                Client login
              </NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu;