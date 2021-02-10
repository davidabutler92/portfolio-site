import React from 'react';
import { Toolbar, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

import HeaderLinks from '../HeaderLinks/HeaderLinks';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import AppDrawer from '../AppDrawer/AppDrawer';
import useStyles from './HeaderContents.styles';

function HeaderContents({ lightOrDark, setLightOrDark, isScreenSizeMedium }) {
  const classes = useStyles();
  return (
    <>
      {isScreenSizeMedium ? (
        <Toolbar className={classes.toolbar}>
          <Box style={{ width: '50px' }} />
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
