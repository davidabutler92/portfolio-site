import React, { useState } from 'react';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import PortfolioRadioGroup from '../PortfolioRadioGroup/PortfolioRadioGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    border: '4px solid blue',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  radioGroupContainer: {
    justifyContent: 'center',
  },
  paper: {
    height: '300px',
    backgroundColor: 'pink',
    margin: '10px',
  },
  gridItem: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}));

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    console.log('clicked');
    console.log(target.value);
    setValue(target.value);
  };

  const classes = useStyles();

  return (
    <Container
      fixed
      component='section'
      id='section-portfolio'
      className={classes.root}
    >
      <Grid style={{ border: 'solid 4px black' }} container>
        <Grid style={{ border: 'solid 4px pink' }} item xs={12}>
          <Typography style={{ fontWeight: 100 }} variant='h3'>
            Featured <span style={{ fontWeight: 600 }}>Projects</span>
          </Typography>
        </Grid>
        <Grid
          className={classes.radioGroupContainer}
          style={{ border: 'solid 4px blue' }}
          item
          container
          xs={12}
        >
          <PortfolioRadioGroup handleChange={handleChange} value={value} />
        </Grid>
        <Grid
          style={{ border: 'solid 3px green' }}
          className={classes.gridItem}
          item
          container
          xs={12}
        >
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>Paper</Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>Paper</Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>Paper</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
