import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  icon: {
    width: '35px',
    height: '35px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '8px',
  },
});

function DrawerIcons({ lightOrDark, setLightOrDark }) {
  const classes = useStyles();
  return (
    <Box className={classes.iconContainer}>
      <IconButton className={classes.iconButton}>
        <DehazeIcon className={classes.icon} />
      </IconButton>

      <LightDarkButton
        lightOrDark={lightOrDark}
        setLightOrDark={setLightOrDark}
      />
    </Box>
  );
}

DrawerIcons.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default DrawerIcons;