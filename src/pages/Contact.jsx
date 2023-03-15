import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Container, Button, SimpleGrid, List, Input, Select, TextInput, Textarea, Title, createStyles } from '@mantine/core';
import { Upload } from 'tabler-icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from '../data/why.json';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 80,
    position: 'relative',
  },
  h1: {
    marginTop: 0,
    marginBottom: '.5rem',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    textAlign: 'center',
    color: '#fff',
    fontSize: '3.13rem',
    lineHeight: 1.2,
    fontWeight: 800,
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
    fontFamily: `Outfit, ${theme.fontFamily}`,
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
    fontFamily: `Outfit, ${theme.fontFamily}`,
    display: 'flex',
    padding: '1.5rem 2rem',
    alignItems: 'center',
    gridColumnGap: '0.75rem',
    border: '1px solid rgba(156,175,223,.11)',
    borderRadius: '10.375rem',
    backgroundImage: 'linear-gradient(180deg,rgba(50,60,131,.16),rgba(50,60,131,.16))',
    fontSize: '1.25rem',
    lineHeight: 1,
    color: '#FFF',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '18px',
    margin: 'auto'
  },
  detailWrap: {
    display: 'flex',
    margin: '3.75rem auto 5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumnGap: '1rem',
    gridRowGap: '1rem',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '2rem',
      marginBottom: '3rem',
      gridColumnGap: '0.7rem',
      gridRowGap: '0.7rem'
    },
  },
  whyUs: {
    display: 'flex',
    padding: '2rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gridRowGap: '1.25rem',
    border: '1px solid rgba(202,204,255,.1)',
    borderRadius: '1.25rem',
    backgroundColor: 'rgba(50,60,131,.16)',
  },
  whyDetailInner: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumnGap: '0.75rem',
    fontSize: '1.25rem',
    lineHeight: 1,
    [theme.fn.smallerThan('sm')]: {
      padding: '0.8rem 1rem',
      gridColumnGap: '0.5rem',
      fontSize: '.9rem',
    },
  },
  heroTopRight: {
    position: 'absolute',
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 'auto',
    width: '100%',
    maxWidth: '50.25rem',
  },
  video: {
    borderRadius: '0.75rem',
    width: '100%',
    height: '300px',
    [theme.fn.smallerThan('sm')]: {
      height: '250px',
    },
    [theme.fn.smallerThan('md')]: {
      height: '250px',
    },
  },
  form: {
    marginBottom: 0,
    padding: '2rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(171,179,255,.08)',
  },
  formTitle: {
    marginBottom: '0.25rem',
    color: '#ebebeb',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.44rem',
    fontWeight: 700,
    paddingBottom: '1.25rem',
  },
  heroTopRight: {
    position: 'absolute',
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 'auto',
    width: '100%',
    maxWidth: '50.25rem',
  },
}));

const Contact = () => {
  const { classes } = useStyles();
  const form = useRef();
  const navigate = useNavigate();

  const notify = () => toast.success('We’ll get back to you within 1 business day.', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const error = () => toast.error('There was an error.', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID_KEY}`, `${process.env.REACT_APP_TEMPLATE_ID_KEY}`, form.current, `${process.env.REACT_APP_PUBLIC_ID_KEY}`)
      .then((result) => {
        notify();
      }, (error) => {
        error();
      });
  };

  return (
    <>
    <img
    src="images/glow_hero_right.svg" 
    loading="eager" 
    alt="" 
    class={classes.heroTopRight}>
    </img>
    <Container size="lg">
      <div className={classes.wrapper}>
        <Title className={classes.h1}>Start a project with us</Title>
        <div className={classes.desc}>
          We will get back to you within 1 business day!
        </div>
        <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'md' },
          { maxWidth: 755, cols: 1, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        >
          <div>
            <iframe 
            className={classes.video} 
            src="https://www.youtube.com/embed/8aosxBJQVc" 
            style={{ marginBottom: 25 }} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            <div className={classes.whyUs}>
            {data.map((why, key) => {
              return (
                <div className={classes.whyDetailInner} key={key}>
                <img 
                src="images/check-v2.svg" 
                loading="lazy" 
                alt={why.title}
                class={classes.whyIcon}
                style={{ width: '30px', marginRight: '5px' }} 
                />
                <div>{why.title}</div>
              </div>
            )})}
            </div>
          </div>
          <div className={classes.form}>
            <Title className={classes.formTitle}>Tell us about your project</Title>
            <form ref={form} onSubmit={sendEmail}>
              <TextInput
              required
              label="Your name"
              placeholder="Enter your name"
              styles={(theme) => ({ 
                input: { 
                  marginBottom: 10, 
                  border: '1px solid rgba(202,204,255,.1)', 
                  backgroundColor: 'rgba(36,53,91,.05)', 
                  color: '#dedede', 
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  '&:hover': {
                    backgroundColor: '#0c101b',
                  },
                },
                placeholder: { color: 'rgba(235, 235, 235, .6)' },
                inputFocus: { backgroundColor: '#42b883', border: '1px solid #3444da' },
                label: { 
                  marginBottom: 10,
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`
                },
              })}
              size="lg"
              radius="lg"
              name="from_name"
              type="text"
              pattern="^(\w\w+)\s(\w+)$"
              title="Please enter your first and last name"
              />
              <TextInput
              required
              label="Your number"
              styles={(theme) => ({
                input: { 
                  marginBottom: 10, 
                  border: '1px solid rgba(202,204,255,.1)', 
                  backgroundColor: 'rgba(36,53,91,.05)', 
                  color: '#dedede', 
                  fontFamily: `Outfit, ${theme.fontFamily}`, 
                  '&:hover': {
                    backgroundColor: '#0c101b',
                  },
                },
                placeholder: { color: 'rgba(235, 235, 235, .6)' },
                inputFocus: { backgroundColor: '#42b883', border: '1px solid #3444da' },
                label: {
                  marginBottom: 10,
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`
                },
              })}
              size="lg"
              radius="lg"
              name="number"
              type="number"
              placeholder="888 888 8888" 
              maxlength="10"
              title="Please enter your 10 digit phone number"
              />

              <TextInput
              required
              label="Your email"
              placeholder="Enter your email"
              styles={(theme) => ({
                input: { 
                  marginBottom: 10, 
                  border: '1px solid rgba(202,204,255,.1)',
                  backgroundColor: 'rgba(36,53,91,.05)', 
                  color: '#dedede', 
                  fontFamily: `Outfit, ${theme.fontFamily}`, 
                  '&:hover': {
                    backgroundColor: '#0c101b',
                  },
                },
                placeholder: { color: 'rgba(235, 235, 235, .6)', },
                inputFocus: { backgroundColor: '#42b883', border: '1px solid #3444da' },
                label: { 
                  marginBottom: 10,
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`
                },
              })}
              size="lg"
              radius="lg"
              name="email"
              type="email"
              title="Please enter a valid email address"
              />
              {/* Project info */}
              <Select
              required
              label="Project type"
              placeholder="Select"
              styles={(theme) => ({
                dropdown: {
                  backgroundColor: '#050505',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(202,204,255,.1)',
                  borderRadius: '16px',
                },
                item: {
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  // applies styles to selected item
                  '&[data-selected]': {
                    backgroundImage: 'linear-gradient(180deg,rgba(50,60,131,.16),rgba(50,60,131,.16))',
                    border: '1px solid #3444da',
                    borderRadius: '16px',
                    marginBottom: '5px',
                    marginTop: '5px',
                    '&, &:hover': {
                      backgroundColor: '#0c101b',
                      borderRadius: '16px',
                    },
                    '&, &:focus-within': {
                      border: '1px solid #3444da',
                    }
                  },
        
                  // applies styles to hovered item (with mouse or keyboard)
                  '&[data-hovered]': {
                    backgroundColor: '#0c101b',
                    borderRadius: '16px',
                  },
                },
                input: { 
                  marginBottom: 10, 
                  border: '1px solid rgba(202,204,255,.1)',
                  backgroundColor: 'rgba(36,53,91,.05)', 
                  color: '#dedede', 
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  '&:hover': {
                    backgroundColor: '#0c101b',
                  },
                  '&[data-selected]': {
                    border: '1px solid #3444da',
                    backgroundColor: '#0c101b',
                  },
                },
                placeholder: { color: 'rgba(235, 235, 235, .6)' },
                inputFocus: { backgroundColor: '#42b883', border: '1px solid #3444da' },
                label: {
                  marginBottom: 10,
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`
                },
              })}
              data={[
                { value: 'Web Development', label: 'Web Development' },
                { value: 'Mobile Development', label: 'Mobile Development' },
                { value: 'Desktop Development', label: 'Desktop Development' },
                { value: 'UI/UX', label: 'UI/UX' },
                { value: 'Staff Augmentation', label: 'Staff Augmentation' },
              ]}
              size="lg"
              radius="lg"
              name="project_type"
              />
              <Select
              variant='default'
              required
              label="Budget range"
              placeholder="Select"
              styles={(theme) => ({
                dropdown: {
                  backgroundColor: '#000',
                  border: '1px solid rgba(202,204,255,.1)',
                  borderRadius: '16px',
                },
                item: {
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  // applies styles to selected item
                  '&[data-selected]': {
                    backgroundImage: 'linear-gradient(180deg,rgba(50,60,131,.16),rgba(50,60,131,.16))',
                    border: '1px solid #3444da',
                    borderRadius: '16px',
                    marginBottom: '5px',
                    marginTop: '5px',
                    '&, &:hover': {
                      backgroundColor: '#0c101b',
                      borderRadius: '16px',
                    },
                    '&, &:focus-within': {
                      border: '1px solid #3444da',
                    }
                  },
        
                  // applies styles to hovered item (with mouse or keyboard)
                  '&[data-hovered]': {
                    backgroundColor: '#0c101b',
                    borderRadius: '16px',
                  },
                },
                input: { 
                  marginBottom: 10, 
                  border: '1px solid rgba(202,204,255,.1)',
                  backgroundColor: 'rgba(36,53,91,.05)', 
                  color: '#dedede', 
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  '&:hover': {
                    backgroundColor: '#0c101b',
                  },
                  '&[data-selected]': {
                    border: '1px solid #3444da',
                    backgroundColor: '#0c101b',
                  },
                },
                placeholder: { color: 'rgba(235, 235, 235, .6)' },
                inputFocus: { backgroundColor: '#42b883', border: '1px solid #3444da' },
                label: {
                  marginBottom: 10,
                  color: '#FFF',
                  fontFamily: `Outfit, ${theme.fontFamily}`
                },
              })}
              data={[
                { value: '$12k-50k', label: '$12k-50k' },
                { value: '$50k-200k', label: '$50k-200k' },
                { value: '$200k-500k', label: '$200k-500k' },
                { value: '$500k+', label: '$500k+' },
              ]}
              size="lg"
              radius="lg"
              name="budget"
              />
              <Textarea
              label="Describe Your Project"
              placeholder="2-3 sentence high level summary"
              withAsterisk
              styles={(theme) => ({
                input: { 
                  marginBottom: 10, 
                  border: '1px solid rgba(202,204,255,.1)',
                  backgroundColor: 'rgba(36,53,91,.05)', 
                  color: '#dedede', 
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  '&:hover': {
                    backgroundColor: '#0c101b',
                  },
                },
                placeholder: { color: '#585959' },
                inputFocus: { backgroundColor: '#42b883', border: '1px solid #3444da' },
                label: {
                  marginBottom: 10,
                  fontFamily: `Outfit, ${theme.fontFamily}`,
                  color: '#FFF',
                },
              })}
              size="lg"
              radius="lg"
              minRows={4}
              name="description"
              />
              <div style={{ margin: 'auto', display: 'block', float: 'right' }}>
                <Button 
                type="submit"
                radius="xl" 
                size="lg" 
                className={classes.control}
                styles={(theme) => ({
                  root: {
                    backgroundColor: '#3444da',
                    border: '2px solid #3444da',
                    '&:hover': {
                      backgroundColor: '#050505',
                      boxShadow: '0 0 4px 0 #3444da',
                    },
                  },
                  leftIcon: {
                    marginRight: 15,
                  },
                })}
                style={{ marginTop: 20, padding: '0px 20px' }}
                >
                  Send Request
                </Button>
              </div>
            </form>
          </div>
        </SimpleGrid>
      </div>
    </Container>
    <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </>
  )
}

export default Contact;