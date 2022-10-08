import { Text, Container, Title, SimpleGrid, createStyles } from '@mantine/core';
import { Consult } from './ServicesCard/Consult';
import { MobileDev } from './ServicesCard/MobileDev';
import { WebApps } from './ServicesCard/WebApps';
import { WebDesign } from './ServicesCard/WebDesign';
import { WebDev } from './ServicesCard/WebDev';
import { WebMaintenance } from './ServicesCard/WebMaintenance';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  servicesHeader: {
    textAlign: 'center',
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
    backgroundColor: '#2f2f2f',
    border: '0px solid',
    borderRadius: 12,
    fontWeight: 600,

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

}));

export default function HomeServices() {
  const { classes } = useStyles();

  return (
    <Container size="xl" className={classes.wrapper}>
            <Title className={classes.servicesHeader}>
        Services
        </Title>
        <Text className={classes.subHeader}>
        We provide end-to-end services across a range of platforms, technologies, and design methodologies
        </Text>
      <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <WebDev />
      <MobileDev />
      <WebApps />
      <WebDesign />
      <WebMaintenance />
      <Consult />
    </SimpleGrid>
    </Container>
  );
}