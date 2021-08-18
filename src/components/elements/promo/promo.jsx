import React from 'react';
import {Link} from 'react-router-dom';
import styles from './promo.module.scss';
import {PromoItemMap} from '../../../const';
import Slider from '../slider/slider';

export default function Promo() {
  return (
    <article className={styles.article}>
      <Slider/>
      <div>
        <h3 className={styles.title}>Марпех 11</h3>
        <ul className={styles.list}>
          {
            PromoItemMap.map(({text}) => (
              <li key={text} className={styles.item}>
                {text}
              </li>
            ))
          }
        </ul>
        <div className={styles.price}>
          <div className={styles.new_price}>
            <span>2 300 000 ₽</span>
          </div>
          <div className={styles.old_price}>
            <span>2 400 000 ₽</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to='/request' className={styles.request_button}>оставить заявку</Link>
          <Link to='/credit' className={styles.credit_button}>В КРЕДИТ ОТ 11 000 ₽</Link>
        </div>
      </div>
    </article>
  );
}
