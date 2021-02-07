import React, { useState } from 'react';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checked: {
    '&, & + $label': {
      color: theme.palette.success.main,
    },
  },
  label: {
    width: '100px',
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.success.main,
      transition: '250ms ease-in-out',
    },
  },
  radioGroup: {
    width: '100%',
    justifyContent: 'center',
  },
}));

export default function PortfolioRadioGroup({ handleChange, value }) {
  const classes = useStyles();

  return (
    <RadioGroup
      row
      name='projects'
      value={value}
      onChange={handleChange}
      className={classes.radioGroup}
    >
      <FormControlLabel
        classes={{ label: classes.label }}
        value='all'
        label={<Typography variant='body1'>All</Typography>}
        control={
          <Radio
            style={{ display: 'none' }}
            classes={{ checked: classes.checked }}
          />
        }
      />

      <FormControlLabel
        classes={{ label: classes.label }}
        value='api'
        label={<Typography variant='body1'>API&apos;s</Typography>}
        control={
          <Radio
            style={{ display: 'none' }}
            classes={{ checked: classes.checked }}
          />
        }
      />

      <FormControlLabel
        classes={{ label: classes.label }}
        value='fullStack'
        label={<Typography variant='body1'>Full Stack</Typography>}
        control={
          <Radio
            style={{ display: 'none' }}
            classes={{ checked: classes.checked }}
          />
        }
      />
    </RadioGroup>
  );
}
