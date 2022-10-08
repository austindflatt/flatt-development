import { Paper, Group, createStyles } from '@mantine/core';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  servicesHeader: {
    textAlign: 'center',
    color: '#213547',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 5,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
    },
  },

  paper: {
    backgroundColor: '#f9f9f9',
    border: '0px solid',
    borderRadius: 12,
    fontWeight: 600,

    '&:hover': {
      boxShadow: '1px 5px 64px 0 #e7e7ec',
    },

    [theme.fn.smallerThan('sm')]: {

    },
  },

  group: {
    padding: 24,
  },

  serviceTitle: {
    color: 'rgba(255, 255, 255, .87)',
    fontSize: 16,
    fontWeight: 600,
  },

  subHeader: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 4,
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },

  control: {
    fontWeight: 400,
    transition: 'color .25s,border-color .25s,background-color .25s',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  tech: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

}));

const Node = () => {
  const { classes } = useStyles();

  return (
    <Link to="/services/node-js" style={{ textDecoration: 'none' }}>
    <Paper radius="md" p="xs" className={classes.paper}>
      <Group style={{ padding: '24px' }}>
        <img src="https://tsh.io/wp-content/uploads/2022/01/nodejs.svg" loading="lazy" width="195" height="56" alt="node logo" class="technology-logo" className={classes.tech} />
      </Group>
    </Paper>
    </Link>
  )
}

export default Node