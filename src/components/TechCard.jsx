import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  marqueeItem: {
    width: '3rem',
    height: '3rem',
    marginRight: '2.5em',
    flex: '0 0 auto',
    [theme.fn.smallerThan('md')]: {
      marginRight: '1.25em',
      width: '1.75rem',
      height: '1.75rem',
		},
  },
  marqueeImgWrap: {
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingTop: '62%',
  },
  marqueeImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRadius: '1em',
    objectFit: 'cover',
  }
}));

export function TechCard(props) {
  const { classes } = useStyles();
  
  return (
    <div role="listitem" class={classes.marqueeItem}>
      <div class={classes.marqueeImgWrap}>
        <img 
        src={props.image}
        loading="eager" 
        alt={props.name}
        class={classes.marqueeImg}
        />
      </div>
    </div>
  );
}