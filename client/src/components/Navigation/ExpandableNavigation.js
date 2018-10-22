import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/';
import './navigation.scss';

export default function ExpandableNavigation() {
  return (
    <Menu right width={200}>
      {NAV_LINKS.map(link => <Link key={link.url} to={link.url}>{link.display}</Link>)}
    </Menu>
  );
}
