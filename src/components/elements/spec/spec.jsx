import React from 'react';
import styles from './spec.module.scss';
import {SpecItemMap} from '../../../const';

export default function Spec() {
  return (
    <div>
      <table className={styles.list}>
        <tbody>
          {
            SpecItemMap.map(({title, text}) => (
              <tr key={text}>
                <td className={styles.title}>{title}</td>
                <td className={styles.value}>{text}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
