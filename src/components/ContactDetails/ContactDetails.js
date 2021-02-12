import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './ContactDetails.styles';

export default function ContactDetails() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        className={classes.subHeaderText}
        variant='h5'
        compoenent='h2'
      >
        My Contact Details
      </Typography>
      <Box className={classes.topBox}>
        <Typography variant='body1' className={classes.bodyOne}>
          email
        </Typography>
        <Typography variant='body2' className={classes.bodyTwo}>
          davidabutler92@gmail.com
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1' className={classes.bodyOne}>
          phone
        </Typography>
        <Typography variant='body2' className={classes.bodyTwo}>
          503 413 9065
        </Typography>
      </Box>
    </Box>
  );
}
