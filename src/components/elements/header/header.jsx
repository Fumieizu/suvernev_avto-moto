import React from 'react';
import Logo from '../../../icon/logo.svg';
import styles from './header.module.scss';
import Menu from '../menu/menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <img src={Logo} alt="Логотип AUTO-MOTO" width="134" height="55"/>
          <Menu />
        </nav>
      </div>
    </header>
  );
}
