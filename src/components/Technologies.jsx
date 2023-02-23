import { Container, Title, SimpleGrid, createStyles } from '@mantine/core';
import { TechCard } from './TechCard';
import tech from '../data/tech.json';

const useStyles = createStyles((theme) => ({
  servicesHeader: {
    textAlign: 'center',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginTop: '5rem',
    marginBottom: '5rem',
    color: '#FFF',
    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: '2.5rem',
		},
  },
}));

export default function Technologies() {
  const { classes } = useStyles();

  return (
    <>
    <Container size="xl">
      <Title className={classes.servicesHeader}>Technologies We Work With</Title>
      <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 3, spacing: 'sm' },
        { maxWidth: 600, cols: 3, spacing: 'sm' },
      ]}
      >
        {tech.map((tech, key) => {
          return (
            <TechCard key={key} name={tech.title} image={tech.image} />
          )
        })}
      </SimpleGrid>
    </Container>
    </>
  );
}