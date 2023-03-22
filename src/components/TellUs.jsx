import { Container, Button, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
	hireUs: {
    overflow: 'hidden',
    paddingTop: '7.81rem',
    paddingBottom: '3.75rem',
	},
	hireUsWrapper: {
		position: 'relative',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.fn.smallerThan('md')]: {
		  width: '100%',
		},
	},
	hireUsInner: {
		position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    padding: '4.25rem 2rem',
    border: '1px solid rgba(141,165,252,.14)',
    borderRadius: '2rem',
    backgroundColor: 'rgba(33,37,122,.22)',
	},
	content: {
		position: 'relative',
		zIndex: 1,
		display: 'flex',
		width: '100%',
		maxWidth: '56.81rem',
		marginRight: 'auto',
		marginLeft: 'auto',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
	},
	heading: {
		color: '#ebebeb',
		fontFamily: `Outfit, ${theme.fontFamily}`,
		fontSize: '2.75rem',
		lineHeight: 1.2,
		fontWeight: 800,
    [theme.fn.smallerThan('md')]: {
      fontSize: '1.7rem',
		  width: '100%',
		},
	},
	descWrap: {
		marginTop: '1rem',
    marginBottom: '2.25rem',
    color: '#ababab',
    fontFamily: `Outfit, ${theme.fontFamily}`,
    fontSize: '1.25rem',
    lineHeight: 1.7,
    fontWeight: 500,
    [theme.fn.smallerThan('md')]: {
		  width: '100%',
      fontSize: '1rem',
		},
	},
	desc: {
		marginTop: 0,
    marginBottom: 0,
    lineHeight: 1.5,
    [theme.fn.smallerThan('md')]: {
		  width: '100%',
		},
	},
	control: {
		paddingLeft: 50,
		paddingRight: 50,
		fontFamily: `Outfit, ${theme.fontFamily}`,
		fontSize: '1.125rem',
		fontWeight: 400,
		transition: 'color .25s,border-color .25s,background-color .25s',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.fn.smallerThan('md')]: {
		  width: '100%',
      fontSize: '1rem',
		},
  },
}));

export default function TellUs() {
  const { classes } = useStyles();

  return (
    <>
    <Container size="lg">
      <div className={classes.hireUs}>
        <div className={classes.hireUsWrapper}>
          <div className={classes.hireUsInner}>
            <div className={classes.content}>
              <h2 className={classes.heading}>Tell us about your amazing project</h2>
              <div className={classes.descWrap}>
                <p class="cta-desc">We're excited to hear about it.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/start-project" style={{ textDecoration: 'none' }}>
                  <Button
                  color="dark"
                  radius="xl"
                  size="xl"
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
                  >
                    Tell Us About Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}