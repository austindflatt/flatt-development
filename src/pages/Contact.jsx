import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Button, Title, SimpleGrid, List, ThemeIcon, Input, Select, Textarea, createStyles } from '@mantine/core';
import { Check } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  servicesHeader: {
    textAlign: 'center',
    color: '#000',
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 40,

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

  serviceDescription: {
    color: 'rgba(235, 235, 235, .6)',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 500,
  },

  control: {
    fontWeight: 400,
    transition: 'color .25s,border-color .25s,background-color .25s',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  list: {

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 20,
    },
  },

  listItem: {
  },

  check: {
    backgroundColor: '#3451fe'
  }

}));

const Contact = () => {
  const { classes } = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID_KEY}`, `${process.env.REACT_APP_TEMPLATE_ID_KEY}`, form.current, `${process.env.REACT_APP_PUBLIC_ID_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container size="xl" className={classes.wrapper}>
            <Title className={classes.servicesHeader}>
            Let’s discuss your next project.
        </Title>
      <SimpleGrid
      cols={2}
      spacing="xl"
      breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <div>

      <iframe width="100%" height="350" src="https://www.youtube.com/embed/a8mK8WhGg" style={{ marginBottom: 25 }} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      <List
      spacing="xs"
      size="md"
      center
      className={classes.list}
      icon={
        <ThemeIcon size={24} radius="xl" className={classes.check}>
          <Check size={16} />
        </ThemeIcon>
      }
    >
      <List.Item className={classes.listItem}>We will respond to you within 24 hours.</List.Item>
      <List.Item className={classes.listItem}>We’ll sign an NDA if requested.</List.Item>
      <List.Item className={classes.listItem}>You'll be talking to product and tech experts.</List.Item>
    </List>
      </div>
      <div>
      <form ref={form} onSubmit={sendEmail}>
      <Input
      placeholder="Your Name"
      styles={(theme) => ({ 
        input: { marginBottom: 10, border: '0px solid', backgroundColor: '#f9f9f9', color: 'rgba(60, 60, 60, .7)' },
        placeholder: { color: 'rgba(235, 235, 235, .6)' },
        inputFocus: { backgroundColor: '#42b883' }
      })}
      size="md"
      name="from_name"
    />
    <Input
      placeholder="Your Number"
      styles={(theme) => ({
        input: { marginBottom: 10, border: '0px solid', backgroundColor: '#f9f9f9', color: 'rgba(60, 60, 60, .7)' },
        placeholder: { color: 'rgba(235, 235, 235, .6)' },
      })}
      size="md"
      name="number"
    />
    <Input
      placeholder="Your Email"
      styles={(theme) => ({
        input: { marginBottom: 10, border: '0px solid', backgroundColor: '#f9f9f9', color: 'rgba(60, 60, 60, .7)' },
        placeholder: { color: 'rgba(235, 235, 235, .6)' },
      })}
      size="md"
      name="email"
    />

    {/* Project info */}

    <Select
      label="Project type"
      placeholder="Project type"
      styles={(theme) => ({
        input: {  marginBottom: 10, border: '0px solid', backgroundColor: '#f9f9f9', color: 'rgba(60, 60, 60, .7)' },
        select: { backgroundColor: '#242424' },
        placeholder: { color: 'rgba(235, 235, 235, .6)' },
      })}
      data={[
        { value: 'Custom Web Development', label: 'Custom Web Development' },
        { value: 'Custom Desktop Development', label: 'Custom Desktop Development' },
        { value: 'Custom Mobile Development', label: 'Custom Mobile Development' },
        { value: 'Custom UI/UX Design', label: 'Custom UI/UX Design' },
        { value: 'Web Maintenance', label: 'Web Maintenance' },
        { value: 'Technology Audit & Consultanc', label: 'Technology Audit & Consultancy' },
      ]}
      size="md"
      name="project_type"
    />
    <Select
      label="Budget range"
      placeholder="Budget range"
      styles={(theme) => ({
        input: { marginBottom: 10, border: '0px solid', backgroundColor: '#f9f9f9', color: 'rgba(60, 60, 60, .7)' },
      })}
      data={[
        { value: 'From $2,500 to $5,000', label: 'From $2,500 to $5,000' },
        { value: 'From $5,000 to $10,000', label: 'From $5,000 to $10,000' },
        { value: 'From $10,000 to $20,000', label: 'From $10,000 to $20,000' },
        { value: 'From $20,000 to $50,000', label: 'From $20,000 to $50,000' },
        { value: 'From $50,000 to $100,000', label: 'From $50,000 to $100,000' },
        { value: 'From $100,000 to $500,000', label: 'From $100,000 to $500,000' },
        { value: 'More than $500,000', label: 'More than $500,000' },
      ]}
      size="md"
      name="budget"
    />
     <Textarea
      label="Project description"
      placeholder="Enter more information about your project"
      withAsterisk
      styles={(theme) => ({
        input: { marginBottom: 10, border: '0px solid', backgroundColor: '#f9f9f9', color: 'rgba(60, 60, 60, .7)' },
        label: {
          color: 'rgba(60, 60, 60, .7)',
        },
      })}
      size="md"
      minRows={4}
      name="description"
    />

    <div style={{ margin: 'auto', display: 'block'}}>
    <Button 
    type="submit"
        radius="xl" 
        size="md" 
        className={classes.control}
        styles={(theme) => ({
          root: {
            backgroundColor: '#3451fe',
            borderColor: '#3475fe',
  
            '&:hover': {
              backgroundColor: theme.fn.darken('#3475fe', 0.05),
            },
          },
  
          leftIcon: {
            marginRight: 15,
          },
        })}
        style={{ marginTop: 20, padding: '0px 20px' }}
        >
          Send Message
        </Button>
        </div>
        </form>

</div>
    </SimpleGrid>

    </Container>
  )
}

export default Contact