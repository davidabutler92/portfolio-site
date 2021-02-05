import React from 'react';
import { Grid, Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import imageOfMe from '../../assets/me.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    border: '4px solid pink',
    padding: '80px 10px 80px 10px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '80px',
      paddingRight: '80px',
    },
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  gridContainer: {
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  textContainer: {
    justifyContent: 'space--around',
    height: '100%',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container
      fixed
      component='section'
      id='section-about'
      className={classes.root}
    >
      <Grid container className={classes.gridContainer}>
        <Grid item md={6} className={classes.gridItem}>
          <img className={classes.image} src={imageOfMe} />
        </Grid>
        <Grid
          item
          container
          direction='column'
          md={6}
          className={classes.textContainer}
        >
          <Grid item className={classes.gridItem}>
            <Typography variant='h2'>About me</Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant='subtitle1'>
              Some stuff about me blah blahSome stuff about me blah blahSome
              stuff about me blah blahSome stuff about me blah blahSome stuff
              about me blah blahSome stuff about me blah blahSome stuff about me
              blah blah
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant='subtitle1'>About me</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
