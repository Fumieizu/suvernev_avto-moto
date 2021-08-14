import React, { useState } from 'react';
import styles from './tabs.module.scss';
import Spec from '../spec/spec';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import {TabsItemMap} from '../../../const';

export default function Tabs() {
  const [activeTab,setActiveTab] = useState(TabsItemMap.SPEC);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          Object.values(TabsItemMap).map((item) => (
            <li key={item}>
              <button
                type="button"
                className={`${styles.item} ${item === activeTab ? styles.active : ''}`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))
        }
      </ul>
      {activeTab === TabsItemMap.SPEC && <Spec/>}
      {activeTab === TabsItemMap.REVIEWS && <Reviews/>}
      {activeTab === TabsItemMap.CONTACTS && <Contacts/>}
    </div>
  );
}
