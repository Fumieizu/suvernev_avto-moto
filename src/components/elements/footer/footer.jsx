import React from 'react';
import styles from './footer.module.scss';
import Menu from '../menu/menu';
import {MenuType} from '../../../const';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Menu type={MenuType.FOOTER}/>
      </div>
    </footer>
  );
}
