import React from 'react';
import { Container, Title, Button, Accordion, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import Team from '../components/Team';
import TellUs from '../components/TellUs';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 0,
    position: 'relative',
  },
  h1: {
    marginTop: '1.25rem',
    marginBottom: '1.25rem',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    textAlign: 'center',
    color: '#fff',
    fontSize: '3.13rem',
    lineHeight: 1.2,
    fontWeight: 800,
    animation: 'fadein 1s',
    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'center',
	  },
  },
  desc: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#ababab',
    fontSize: '1.25rem',
    lineHeight: 1.6,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: '1.25rem',
    animation: 'fadein 1s',
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
  serviceDescription: {
    color: 'rgba(235, 235, 235, .6)',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 500,
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
  bgShape: {
    zIndex: -1,
    width: '100%',
    position: 'absolute',
    top: '0%',
    bottom: 'auto',
    left: '0%',
    right: '0%',
    animation: 'fadein 1s',
  },
}));

const FaqPage = () => {
  const { classes } = useStyles();

  return (
    <>
    <div className={classes.hero}>
    <img
    src="images/ellipse.svg" 
    loading="eager" 
    alt="" 
    class={classes.bgShape}>
    </img>
    </div>
    <Container size="lg">
      <div className={classes.wrapper}>
      <Container size="md">
        <Title className={classes.h1}>You have questions? <span className="text-gradient">We have answers</span></Title>
        <div className={classes.desc}>
          Sometimes, you just want a straight answer about how things work. Here’s a list of common questions, and how we handle business.
        </div>
        </Container>
        <Title className={classes.h1}>What it's like to work with us</Title>
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
              Does Flatt Development have its own NDA (non-disclosure agreement) that I can sign before I share my idea?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
              We do! You can download a PDF and sign our Mutual NDA by clicking here. You can also email us directly at hello@flattdevelopment.com and we’ll be happy to send you a copy.
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
              Where should I be located to work with Flatt Development?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            You can be anywhere, as long as you have an internet connection that is compatible with Zoom. Our partners are working on their businesses from many parts of the world!
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
              Do you work with clients in countries outside of the United States?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Absolutely! We have partnered with companies and individuals from many countries such as Canada, Mexico, Ireland, United Kingdom, France, Thailand, Kuwait, Egypt, New Zealand, Australia, and China since 2009. Potential partners who live abroad need to be available within reasonable EST business hours, however.
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
              What kind of clients has Flatt Development worked with in the past?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            We’ve built our processes and capabilities to work for a broad range of organization sizes — from early-stage startups to large enterprises. Working in a diversity of spaces is essential to our team’s continuous proficiency and growth.
            We are selective with the industries we work with, but we never turn down an incredible opportunity just because we haven’t worked with a specific industry before. We are continually leveraging our acquired capabilities from past projects into new ones. We discuss this further in our Process Page.
            <br />
            That being said, what are some of the industries that we know very well? Here’s a shortlist: Healthcare, investing, online retail, dating, real estate, the stock market, internal business operations, gaming, theme parks, casinos, education, sports, government, hospitality, and environmental management.
            <br />
            Use our Work Page to look through our select catalog of work. Don’t see your industry above? Want to see if our team could work in your industry? Contact us via our Start Project page or send an email to hello@flattdevelopment.com. We’re happy to help!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="working">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              What it’s like to work with Flatt Development?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Though every partner’s project is different, we often break our projects into distinct phases that you can read about in our Process Page.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="proposal">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              Does Flatt Development charge me to receive a proposal?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Our project proposal is always free! That being said, we require any potential client of ours to sign an LOI (Letter of Intent) first before we proceed forward on an official proposal. Our proposals do expire 28-days (four full weeks) from the initial date you received it.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="proposal-expired">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              What happens if my proposal expires?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            If your proposal expires after the 28-day expiration, you won’t be able to re-open it for one calendar year. This allows us at Flatt Development to ensure we’re creating proposals for those who are serious about proceeding forward with us and give other organizations the opportunity to work with us; without worrying about a potential conflict of interest.
            Until you sign a Letter of Intent (LOI) with us, there is no time on the clock or expiration date to worry about. We recommend moving forward with a proposal only if you’re determined to begin working with us within 1-2 months from that specific date to avoid having it expire on you prematurely.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="loi">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              What is a Letter of Intent (LOI)?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Before we begin working on a formal proposal for you, we kindly ask all of our clients to sign and execute a Letter of Intent (LOI) with us. This is a small agreement that discusses everything you should expect in the proposal planning process (Discovery) with us. For example, all of our proposals have a 28-day expiration. If you do not move forward with us after 28-days, you either can let the proposal expire or sign the contract agreement to proceed forward on your project with us.
            Our LOIs also works to avoid any possible conflicts of interest. The LOI allows both us, a fair, transparent way to plan accordingly before working together. Carefully setting the agreed upon terms before anything is underway has allowed for many smooth project turnarounds.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="communicate">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              How does Flatt Development communicate with clients? How do I communicate with Flatt Development?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Strong communication makes working together significantly easier, and we take this seriously. That is why for all of our partners, we work together to determine how much communication is needed. Some projects require weekly meetings. For others, bi-weekly and monthly meetings suffice. We are always a call, Slack, Zoom meeting or email away. And most of all, we feel accountable for your product’s success. We incorporate you into our process and work with you directly to drive things forward. We’ll also provide you with a progress board in Jira, a state-of-the-art project management platform.
            <br />
            When it comes to our remote meetings, we traditionally use Zoom. This allows you to chat with us, screenshare, and more. Zoom is supported on any web browser, operating system, and even available as a mobile app for both the iPhone and Android. Each Zoom meeting comes with a call-in number that you can use, in case you ever find yourself on the road without a reliable internet connection and need to dial-in old school!
            <br />
            Outside of our weekly, bi-weekly, and monthly calls, you’ll know the personal emails of all of the people on your team. You’ll be able to Slack message us, call us or email us at any time, and you’ll always hear back from us within one business day. We’re your team and we have your back.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="collab">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              How do we collaborate in the Design Phase?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`,
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            You’ll have access to provide us feedback on everything through the following tools: Figma (primarily via the ‘comment’ tool), Google Workspace, Slack and Jira. This allows for you to not only track our work in real-time, but provide us your timely feedback as well.
          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>

      <Title className={classes.h1}>Project planning and logistics</Title>

      <Accordion
      chevronPosition="right"
      defaultValue="none"
      chevronSize={50}
      variant="separated"
      >
        <Accordion.Item className={classes.item} value="billing">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              How does Flatt Development’s billing structure work?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
              When it comes to any project with us that will require over 40 hours of work, we bill at a set rate. You’ll always know upfront how much it will cost to build your new website or app with us.
              <br />
              After we’ve worked together to establish the requirements of the project, our team will determine the scope of work required. We will provide you with an exact budget requirement, and a realistic estimate on the timeframe we expect your project to take. We do not believe in billing large projects by the hour, week, or month, to decrease potential inaccuracies in the final scope of work. This also keeps us in check, and it is in our best interest to keep projects timely and high-quality.
              <br />
              When it comes to set-rate projects, smaller ones are usually broken into two payments with 50% due upfront, and 50% upon completion, ready for launch.
              <br />
              For larger set-rate projects such as building a mobile or web app, these projects are broken into multiple, equal payments for the duration of the project. For example, if you were quoted at $100,000 (USD) with an estimated timeframe of nine months of work with us, you would have a payment plan of ten payments of $10,000 (USD) throughout the entire project, owed monthly. The final payment would not be due until upon completion, ready for launch.
              <br />
              If a project requested is under 40 hours of work, such as a small tweak/task, we would work with you to come up with a fair hourly rate. These type of projects we usually skip over the proposal process defined in Discovery, to help save and maximize time efficiency for our partners.
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="delays">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              How does Flatt Development remain accountable for project delays?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
             In the circumstances of a delay caused by us, we would push back a payment plan accordingly to the delay we have caused. For example, if we caused a 10-day delay due to us taking longer on wireframes for you, all future payment due dates will be pushed back by ten days to offset the difference.
             <br />
             This is easily enforced since we agree upon the timed milestones before and during Discovery. It’s our expectation to always manage our clients fairly, and this is one of the ways we ensure we always hold ourselves accountable to do just that.
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="eta">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              How long does an average project with Flatt Development take to complete?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
             This answer in regards to project timeframes will vary by the type of project and client that we are working with. That said, here is a breakdown of the average time committed per project type with us over the last 24 months:
             <br />
              Branding: 1-2 Months
              <br />
              WordPress/ E-Commerce Site: 2-3 Months
              <br />
              Non-Functional Prototype (NFP): 2-3 Months
              <br />
              Website Application: 5-6 Months
              <br />
              Cross-Platform iOS/ Android Application: 6-8 Months
              <br/>
              When we provide the timeframe estimates above, this assumes that we are creating something from scratch. When starting at zero, you’ll need us to create the user interface design, backend programming, iOS/Android or web frontend programming, administrator backend, frontend website, branding, and server setup/configuration.
              <br />
              During the project proposal stage, you’ll receive a breakdown of how long each phase will take and what is going to be done during the expected timeframes. Please note, however, that all projected project timelines are estimated.
              <br />
              If you’re interested in receiving a more exact timeframe estimate on your website or app idea, you can email us directly at hello@flattdevelopment.com. We’d be more than happy to help you!
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="revisions">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              Does Flatt Development set a limit to the amount of revisions/feedback during a project?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Nope, never. We never want you to feel you have sacrificed the quality of your product, ever. You’ll have the ability to provide us as much feedback and revisions through the Design phase on every single wireframe, high fidelity, and product flow provided to you. Only once you have approved each deliverable, we will move forward on the next phase of your project with us.
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment-methods">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              How does Flatt Development accept payments?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            We’re able to accept payments through three different methods. The most common way for our partners is ACH/Direct Deposit (bank-to-bank). We also accept ACH transfers through Quickbooks, and credit/debit card through Quickbooks (though this does add a 1.0% – 3.0% processing fee to each payment that you make). We also accept checks to our business mailing address!
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="refs">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              Does Flatt Development provide references from active and previous clients?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Of course! Drop us an email at hello@flattdevelopment.com, and we will be more than happy to direct you to our references. If you’re able to provide us with more details about what it is you’re trying to have built too, we can give you specific references matching that type of project to be the best fit.
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="tech">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              What does Flatt Development program with for their websites and applications?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            For our websites and web applications, our method of choice when it comes to programming is the MERN stack. For most websites/eCommerce websites, you’ll traditionally find us working with WordPress and WooCommerce. We also use AWS.
            <br />
            For our iOS and Android applications, we support React Native. All of our iOS and Android applications use a REST API to communicate data.
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="nda">
          <Accordion.Control 
          style={{ 
            color: '#ebebeb', 
            fontFamily: `Outfit`, 
            fontSize: '1.125rem', 
            fontWeight: '700', 
            backgroundColor: '#000' 
          }}>
              Will Flatt Development sign my NDA?
            </Accordion.Control>
          <Accordion.Panel 
          style={{ 
            backgroundColor: '#000', 
            fontFamily: `Outfit`, 
            color: 'hsla(0,0%,67.1%,.8)',
            lineHeight: '1.75rem',
          }}>
            Per policy, we can’t sign your NDA since as an agency, businesses pitch us ideas that may be similar to yours. We can’t prevent ourselves from hearing other businesses’ ideas or functionalities that may be similar in purpose. However, we don’t want businesses to ever think that we are stealing their ideas or not taking the protection of their intellectual property (IP) seriously. We offer our own bilateral NDA that makes sure that your idea is still protected between us and everything that you share is maintained with strict confidentiality. You can download our NDA here.
            </Accordion.Panel>
        </Accordion.Item>
        </Accordion>

        <Title className={classes.h1}>About Flatt Development</Title>

      </div>
    </Container>
    <TellUs />
    </>
  )
}

export default FaqPage;