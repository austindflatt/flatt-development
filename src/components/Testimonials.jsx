import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, Paper, Group, Center, Avatar, Blockquote, createStyles } from '@mantine/core';
import React from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
	"https://decemberlabs.com/wp-content/themes/dlabs/img/home/logos2020/santander.svg",
	"https://decemberlabs.com/wp-content/themes/dlabs/img/home/erfer/santander.svg",
];

const useStyles = createStyles((theme) => ({

	hero: {
		borderTop: '1px solid rgba(60, 60, 60, .12)',
	  },
	  
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
    backgroundColor: '#f9f9f9',
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
    fontSize: 16,
    fontWeight: 600,
  },

  serviceDescription: {
    color: 'rgba(60, 60, 60, .7)',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 300,
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

export default function Testimonials() {
  const { classes } = useStyles();

  return (
	<div className={classes.hero}>
    <Container size="xl" className={classes.wrapper}>
    	<Title className={classes.servicesHeader}>
		Testimonials
        </Title>
        <Text className={classes.subHeader}>
        Some kind words from our clients.
        </Text>
      <SimpleGrid
      cols={2}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
			<Paper radius="md" p="xs" className={classes.paper}>
			<Group style={{ padding: '24px' }}>
      <Blockquote color="indigo">
      The team at Flatt Development provides high-quality development work with an emphasis on client preferences. Their diligent work ethic, reasonable cost structure, and overall attention to detail are key to the partnership’s success
    </Blockquote>
			<Avatar radius="xl" size="lg" src="https://www.devima.solutions/assets/feedbacks/KevinS.png" alt="it's me" />
			<Text weight={500} className={classes.serviceTitle}>
			CEO of an advertising technology startup based in Seattle
            </Text>
	  </Group>
    </Paper>

	<Paper radius="md" p="xs" className={classes.paper}>
			<Group style={{ padding: '24px' }}>
      <Blockquote color="indigo">Flatt Development managed to develop a higher quality product that exceeded the client's expectations. The team always had the client and its company in their best interest. They were able to deliver pixel-perfect designs and provide great communication throughout the project</Blockquote>
			<Avatar radius="xl" size="lg" src="https://www.devima.solutions/assets/feedbacks/cordellCox.jpg" alt="it's me" />
			<Text weight={500} className={classes.serviceTitle}>
			Digital Marketing Coordinatior at Versured
            </Text>
	  </Group>
    </Paper>

	<Paper radius="md" p="xs" className={classes.paper}>
			<Group style={{ padding: '24px' }}>
      <Blockquote color="indigo">Flatt Development led a solid process, quickly integrating the company's feedback into the project. The management team was good at communication and understanding their clients. The company now looks forward to launch</Blockquote>
			<Avatar radius="xl" size="lg" src="https://www.devima.solutions/assets/feedbacks/jacub.png" alt="it's me" />
			<Text weight={500} className={classes.serviceTitle}>
			CEO and Co Founder at Sports Solution
            </Text>
	  </Group>
    </Paper>

	<Paper radius="md" p="xs" className={classes.paper}>
			<Group style={{ padding: '24px' }}>
      <Blockquote color="indigo">Flatt Development' work has met expectations of time and time again. The team is likable and maintains diligent communication with its clients throughout their engagements. Customers can expect a capable team that is always willing to go the extra mile to ensure customer satisfaction</Blockquote>
			<Avatar radius="xl" size="lg" src="https://www.devima.solutions/assets/feedbacks/joonas.jpeg" alt="it's me" />
			<Text weight={500} className={classes.serviceTitle}>
			CEO and founder of eBuildings
            </Text>
	  </Group>
    </Paper>
     
    </SimpleGrid>
    </Container>
	</div>
  );
}