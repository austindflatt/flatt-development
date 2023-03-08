import { Container, Title, SimpleGrid, createStyles } from '@mantine/core';
import { ServiceCard } from './ServiceCard';
import services from '../data/services.json';

const useStyles = createStyles((theme) => ({
  servicesHeader: {
    textAlign: 'center',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '5rem',
    color: '#FFF',
    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: '2.5rem',
		},
  },
  servicesWrap: {
    display: 'flex',
    maxWidth: '37.94rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'column',
    gridRowGap: '1.5rem',
  },
}));

export default function HomeServices() {
  const { classes } = useStyles();

  return (
    <>
    <Container size="xl">
      <Title className={classes.servicesHeader}>Our Services</Title>
      <div className={classes.servicesWrap}>
      {services.map((service, key) => {
        return (
          <ServiceCard
          key={key} 
          title={service.title} 
          description={service.description} 
          image={service.image}
          />
        )
      })}
      </div>
    </Container>
    </>
  );
}