import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" style={styles.link} activestyle={styles.activeLink}>
      HOME
    </NavLink>

    <NavLink to="/contacts" style={styles.link} activestyle={styles.activeLink}>
      PHONEBOOK
    </NavLink>
  </nav>
);

export default Navigation;
