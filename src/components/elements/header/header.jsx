import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../img/logo.svg';
import styles from './header.module.scss';
import Menu from '../menu/menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/">
            <img src={Logo} alt="Логотип AUTO-MOTO"/>
          </Link>
          <Menu />
        </nav>
      </div>
    </header>
  );
}
