import { Text, Paper, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  paper: {
    position: 'relative',
    padding: '53px 50px 40px 53px',
    borderRadius: '32px',
    border: '1px solid rgba(202,204,255,.1)',
    backgroundColor: 'rgba(50,60,131,.16)',
    backgroundImage: 'none',
    backgroundPosition: '0 0',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backdropFilter: 'blur(70px)',
    [theme.fn.smallerThan('sm')]: {
      padding: '0px',
      textAlign: 'center',
    },
  },
  group: {
    padding: 24,
  },
  icon: {
    width: '78px',
    height: '78px',
    maxHeight: '78px',
    maxWidth: '78px',
    marginLeft: '-6px',
  },
  serviceTitle: {
    marginTop: '0px',
    marginBottom: '0px',
    color: '#e7e7e7',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '36px',
    lineHeight: '45px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '20px',
      display: 'none'
    },
  },
  serviceDescription: {
    color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '20px',
    lineHeight: '32px',
  },
  image: {
    width: '64px',
    [theme.fn.smallerThan('sm')]: {
      width: '40px',
    },
  }
}));

export function TechCard(props) {
  const { classes } = useStyles();
  
  return (
    <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
      <Group style={{ padding: '40px', margin: 'auto', justifyContent: 'center' }}>
        <img src={props.image} loading="lazy" alt="" className={classes.image} />
        <Text className={classes.serviceTitle}>{props.name}</Text>
      </Group>
    </Paper>
  );
}