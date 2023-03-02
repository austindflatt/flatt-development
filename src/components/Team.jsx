import React from 'react';
import { Container, Title, Text, SimpleGrid, Button, Image, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '14rem',
    paddingBottom: 80,
  },
  h1: {
    marginTop: 0,
    marginBottom: '1.25rem',
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
  name: {
    fontSize: '1rem',
    color: '#fff',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontWeight: 600,
    marginTop: '1rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '150px',
  },
  position: {
    fontSize: '.85rem',
    color: '#fff',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontWeight: 400,
    marginTop: '.50rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '150px',
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
  list: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: 20,
    },
  },
  listItem: {
    color: '#FFF',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '18px',
    margin: 'auto'
  },
  smallHeading: {
    fontFamily: `Outfit, ${theme.fontFamily}`,
    color: '#ebebeb',
    fontSize: '2rem',
    lineHeight: '1.28125',
    textAlign: 'center',
    marginBottom: '1.25rem',
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
  control: {
		paddingLeft: 50,
		paddingRight: 50,
		fontFamily: `Outfit, ${theme.fontFamily}`,
		fontSize: '1.125rem',
		fontWeight: 600,
		transition: 'color .25s,border-color .25s,background-color .25s',
		justifyContent: 'center',
		alignItems: 'center',
	
		[theme.fn.smallerThan('md')]: {
		  width: '100%',
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
}));

const Team = () => {
  const { classes } = useStyles();

  const teamMembers = [
    {
      name: 'Austin Flatt',
      position: 'Founder, Engineer & Designer',
      image: 'images/team/austin.png'
    },
    {
      name: 'Aaron Russell',
      position: 'Co-Founder, Engineer, & Designer',
      image: 'images/team/aaron.png'
    },
    {
      name: 'Jerome Tardy',
      position: 'Engineer',
      image: 'images/team/jerome.png'
    },
]
  
  return (
	<>
  <Title className={classes.h1}>Meet the Team</Title>
  <SimpleGrid
  cols={3}
  spacing="sm"
  breakpoints={[
    { maxWidth: 755, cols: 3, spacing: 'lg' },
    { maxWidth: 600, cols: 3, spacing: 'lg' },
  ]}
  >
    {teamMembers.map((team, key) => {
      return (
        <div>
          <Image maw={150} mx="auto" radius="md" src={team.image} alt={team.name} />
          <Title className={classes.name}>{team.name}</Title>
          <Text className={classes.position}>{team.position}</Text>
        </div>
      )
    })}
  </SimpleGrid>
  </>
  )
}

export default Team;