import { Text, Paper, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  serviceCard: {
    position: 'relative',
    padding: '0.75rem 4rem 0.75rem 0.75rem',
    border: '1px solid rgba(202,204,255,.1)',
    borderRadius: '12rem',
    backgroundColor: 'rgba(50,60,131,.16)',
    backdropFilter: 'blur(50px)',
    [theme.fn.smallerThan('md')]: {
      padding: '1.1rem',
      borderRadius: '0.8rem',
		},
  },
  cardWrap: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    gridColumnGap: '1.5rem',
    gridRowGap: '1.5rem',
    [theme.fn.smallerThan('md')]: {
      alignItems: 'flex-start',
      gridColumnGap: '0.8rem',
		},
  },
  serviceCircle: {
    display: 'flex',
    width: '9.06rem',
    height: '9.06rem',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 auto',
    borderRadius: '100%',
    backgroundColor: 'hsla(0,0%,100%,.05)',
    [theme.fn.smallerThan('md')]: {
      width: '3rem',
      height: '3rem',
		},
  },
  serviceIcon: {
    width: '3.44rem',
    height: '3.44rem',
    objectFit: 'contain',
    [theme.fn.smallerThan('md')]: {
      width: '1.44rem',
      height: '1.44rem',
		},
  },
  detailWrap: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gridRowGap: '1rem',
    [theme.fn.smallerThan('md')]: {
      gridRowGap: '0.3rem',
		},
  },
  serviceTitle: {
    opacity: .8,
    color: 'hsla(0,0%,92.2%,.8)',
    fontSize: '1.38rem',
    fontWeight: 700,
    [theme.fn.smallerThan('md')]: {
      fontSize: '1.125rem',
      fontWeight: 600,
		},
  },
  serviceDesc: {
    opacity: .8,
    color: 'hsla(0,0%,67.1%,.8)',
    fontSize: '1rem',
    lineHeight: 1.5555555555555556,
    [theme.fn.smallerThan('md')]: {
      fontSize: '1rem',
		},
  },
}));

export function ServiceCard(props) {
  const { classes } = useStyles();
  
  return (
    <div
    data-aos="fade-up"
    >
    <div 
    className={classes.serviceCard}
    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
      <div className={classes.cardWrap}>
        <div class={classes.serviceCircle}>
          <img 
          src={props.image}
          loading="lazy" 
          alt="" 
          class={classes.serviceIcon}
          />
          </div>
          <div class={classes.detailWrap}>
            <div class={classes.serviceTitle}>{props.title}</div>
            <p class={classes.serviceDesc}>{props.description}</p>
          </div>
        </div>
      </div>
      </div>
  );
}