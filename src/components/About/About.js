import React from 'react';
import {
  Container,
  Link,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import pictureOfMe from '../../assets/headshot.jpeg';
import useStyles from './About.styles';

const About = () => {
  const classes = useStyles();
  return (
    <Container
      fixed
      component='section'
      id='section-about'
      className={classes.root}
    >
      <Grid container spacing={4}>
        <Grid item md={6}>
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
            <Typography style={{ fontWeight: 100 }} variant='h3' component='h1'>
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
          <Grid item className={classes.textItem}>
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
};

export default About;
