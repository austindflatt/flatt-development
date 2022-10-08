import { Text, Paper, Group, createStyles } from '@mantine/core';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  
  paper: {
    backgroundColor: '#f9f9f9',
    border: '0px solid',
    borderRadius: 12,
    fontWeight: 600,
    transition: 'all .2s ease',

    '&:hover': {
      boxShadow: '1px 5px 64px 0 #e7e7ec',
    },
    
    [theme.fn.smallerThan('sm')]: {
    },
  },
  
  group: {
    padding: 24,
  },
  
  icon: {
    backgroundColor: '#e5e5e5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    borderRadius: '6px',
    width: '48px',
    height: '48px',
    fontSize: '24px'
  },
  
  serviceTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  
  serviceDescription: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 300,
  },
}));

export function WebDev() {
  const { classes } = useStyles();
  
  return (
    <Link to="/services/web-development" style={{ textDecoration: 'none' }}>
    <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
      <Group style={{ padding: '24px' }}>
        <div>
          <div className={classes.icon}>🧬</div>
          <Text className={classes.serviceTitle}>
            Web Development
          </Text>
          <Text weight={500} className={classes.serviceDescription}>
            We develop highly scalable web apps and well-tested products that are ready to handle millions of users daily.
          </Text>
        </div>
      </Group>
    </Paper>
    </Link>
  );
}