import React from 'react';
import styles from './main-content.module.scss';
import Promo from '../promo/promo';
import Tabs from '../tabs/tabs';

export default function MainContent() {
  return (
    <main>
      <h1 className="visually-hidden">AVTO-MOTO - Салон новых автомобилей!</h1>
      <section className={styles.promo_wrapper}>
        <h2 className="visually-hidden">Автомобиль - Марпех 11</h2>
        <div className={styles.container}>
          <Promo/>
        </div>
      </section>
      <section className={styles.tabs_wrapper}>
        <h2 className="visually-hidden">О автомобиле</h2>
        <div className={styles.container}>
          <Tabs />
        </div>
      </section>
    </main>
  );
}
