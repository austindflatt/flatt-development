import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
	},
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
	item: {
		backgroundColor: '#000',
		color: '#FFF',
		borderRadius: '1.25rem',
		border: '1px solid rgba(202,204,255,.1)',
		overflow: 'hidden',
    '&[data-active]': {
      backgroundColor: 'transparent',
      borderColor: 'rgba(202,204,255,.1)',
    },
	},
	control: {
		fontSize: theme.fontSizes.lg,
		padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
		color: theme.black,
		'&:hover': {
		  backgroundColor: 'transparent',
    },
	},
	content: {
		paddingLeft: theme.spacing.xl,
		lineHeight: 1.6,
		color: theme.black,
	},
	icon: {
		marginLeft: theme.spacing.md,
  },
	gradient: {
    backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
		  theme.colors[theme.primaryColor][5]
		} 100%)`,
	},
	button: {
		display: 'block',
		marginTop: theme.spacing.md,
		'@media (max-width: 755px)': {
		  display: 'block',
		  width: '100%',
		},
	},
}));

export default function Faqs() {
  const { classes } = useStyles();

  return (
  	<>
    <Container size="xs" className={classes.wrapper}>
      <Title className={classes.servicesHeader}>FAQs</Title>
      <Accordion
      chevronPosition="right"
      defaultValue="none"
      chevronSize={50}
      variant="separated"
      >
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              What is your project minimum?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
              $12k minimum
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              Where are you based from?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Our main HQ is in Louisville, KY but our team is all around the world and fully remote.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="process">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              What is your process?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            At a high level, we do design, development, and QA in parallel. After all the modules are complete, we do one round of end to end testing. We then prepare for launch with a launch checklist. After launch, we usually set up a 24/7 support for 3-5 days to make sure the platform is stable.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="maintenance">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              Do you help with maintenance after the project?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Yes, 1-2 months of free maintenance is included based on project size.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
    </>
  );
}