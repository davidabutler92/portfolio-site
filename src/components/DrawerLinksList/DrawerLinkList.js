import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { NavHashLink as RouterLink } from 'react-router-hash-link';

import { APP_LINKS } from '../../constants';

export default function DrawerLinkList() {
  return (
    <>
      {APP_LINKS.map(({ path, title }, index) => (
        <ListItem
          button
          key={index}
          to={path}
          smooth
          activeClassName='selected'
          activeStyle={{ color: '#4caf50' }}
          component={RouterLink}
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </>
  );
}