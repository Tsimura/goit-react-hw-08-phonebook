import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);
  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;
  return (
    <nav>
      <NavLink to="/" className={setActive}>
        HOME
      </NavLink>
      {isLoggetIn && (
        <NavLink to="/contacts" className={setActive}>
          PHONEBOOK
        </NavLink>
      )}
    </nav>
  );
}
