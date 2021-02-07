import React from 'react';
import { Toolbar, Box, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import HeaderLinks from '../HeaderLinks/HeaderLinks';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import AppDrawer from '../AppDrawer/AppDrawer';

const useStyles = makeStyles({
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
  },
  toolbar: {
    height: '100%',
    justifyContent: 'space-between',
  },
});

function HeaderContents({ lightOrDark, setLightOrDark, isScreenSizeMedium }) {
  const classes = useStyles();
  return (
    <>
      {isScreenSizeMedium ? (
        <Toolbar className={classes.toolbar}>
          <Box />
          <Box className={classes.linksContainer}>
            <HeaderLinks />
          </Box>
          <LightDarkButton
            lightOrDark={lightOrDark}
            setLightOrDark={setLightOrDark}
          />
        </Toolbar>
      ) : (
        <Toolbar>
          <AppDrawer
            setLightOrDark={setLightOrDark}
            lightOrDark={lightOrDark}
          />
        </Toolbar>
      )}
    </>
  );
}

HeaderContents.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
  isScreenSizeMedium: PropTypes.bool,
};

export default HeaderContents;
