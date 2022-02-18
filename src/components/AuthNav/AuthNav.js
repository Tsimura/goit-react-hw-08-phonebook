import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;
  return (
    <div>
      <NavLink to="/register" className={setActive}>
        Registration
      </NavLink>
      <NavLink to="/login" className={setActive}>
        Login
      </NavLink>
    </div>
  );
}
