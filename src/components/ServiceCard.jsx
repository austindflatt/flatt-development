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
    marginBottom: '20px',
    borderRadius: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'hsla(0,0%,100%,.05)'
  },
  serviceTitle: {
    marginBottom: '16px',
    color: '#e7e7e7',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: 700,
  },
  serviceDescription: {
    color: '#a9a9a9',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '20px',
    lineHeight: '32px',
  },
}));

export function ServiceCard(props) {
  const { classes } = useStyles();
  
  return (
    <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
      <Group style={{ padding: '24px' }}>
        <div>
          <div className={classes.icon}><img src={props.image} loading="lazy" alt={props.title} /></div>
          <Text className={classes.serviceTitle}>{props.title}</Text>
          <Text weight={500} className={classes.serviceDescription}>{props.description}</Text>
        </div>
      </Group>
    </Paper>
  );
}