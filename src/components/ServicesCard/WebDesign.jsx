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

export function WebDesign() {
  const { classes } = useStyles();
  
  return (
    <Link to="/services/ux-ui-design" style={{ textDecoration: 'none' }}>
    <Paper withBorder radius="md" p="xs" key="Web Development" className={classes.paper}>
      <Group style={{ padding: '24px' }}>
        <div>
          <div className={classes.icon}>🖌</div>
          <Text className={classes.serviceTitle}>
            UI/UX Design
          </Text>
          <Text weight={500} className={classes.serviceDescription}>
            We help businesses in preparing wireframes and building pixel-perfect web and mobile end-products. We also offer UX Audits.
          </Text>
        </div>
      </Group>
    </Paper>
    </Link>
  );
}