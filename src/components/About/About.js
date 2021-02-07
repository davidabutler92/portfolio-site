import React from 'react';
import {
  Container,
  Link,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import pictureOfMe from '../../assets/headshot.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  icon: {
    width: '35px',
    height: '35px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  textContainer: {
    width: '100%',
    minHeight: '100%',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3.5),
      marginRight: theme.spacing(3.5),
    },
  },
  textItem: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  textColor: {
    color: theme.palette.text.secondary,
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Container
      fixed
      component='section'
      id='section-about'
      className={classes.root}
    >
      <Grid container spacing={4}>
        <Grid
          style={{ display: 'flex', justifyContent: 'center' }}
          item
          md={6}
          className={classes.gridItem}
        >
          <img className={classes.image} src={pictureOfMe} />
        </Grid>
        <Grid
          item
          container
          md={6}
          className={classes.textContainer}
          direction='column'
        >
          <Grid item className={classes.textItem}>
            <Typography style={{ fontWeight: 100 }} variant='h3'>
              About <span style={{ fontWeight: 600 }}>Me</span>
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Typography variant='body1'>
              Primarily working with Javascript, but am always curious about
              learning new technologies and looking for ways to grow in tech.
              I&apos;m looking forward too and very excited about working
              collaboratively on a motivated team and solve real world problems.
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Typography variant='body2'>
              When not coding, you will find me playing an online-multiplayer
              game or making music but what I enjoy the most is snowboarding
              blue bird days at our crowning jewel of Oregon, Mt. Hood.
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Link href='https://github.com/davidabutler92'>
              <IconButton
                className={classes.iconButton}
                aria-label='github link'
              >
                <GitHubIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link href='https://www.linkedin.com/in/david-arron-butler/'>
              <IconButton
                style={{ color: '#2867B2' }}
                className={classes.iconButton}
                aria-label='Linkedin link'
              >
                <LinkedInIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link href='https://twitter.com/DavidDoesDevs'>
              <IconButton
                style={{ color: '#1DA1F2' }}
                className={classes.iconButton}
                aria-label='Twitter link'
              >
                <TwitterIcon className={classes.icon} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
