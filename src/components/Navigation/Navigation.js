import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;
  return (
    <div>
      <NavLink to="/" className={setActive}>
        HOME
      </NavLink>
      <NavLink to="/contacts" className={setActive}>
        PHONEBOOK
      </NavLink>
    </div>
  );
}
