import React from 'react';
import styles from './contacts.module.scss';
import Map from '../map/map';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Адрес</span>
          <address>
            Санкт-Петербург,<br/>
            набережная реки Карповки, дом 5
          </address>
        </li>
        <li className={styles.item}>
          <span>Режим работы</span>
          <p>Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className={styles.item}>
          <span>Телефон</span>
          <a href='tel:88003335599'>8 (800) 333-55-99</a>
        </li>
        <li className={styles.item}>
          <span>E-mail</span>
          <a href='mailto:info@avto-moto.ru'>info@avto-moto.ru</a>
        </li>
      </ul>
      <div className={styles.map_container}>
        <Map/>
      </div>
    </div>
  );
}
