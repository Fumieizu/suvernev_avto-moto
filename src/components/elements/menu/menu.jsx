import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './menu.module.scss';
import {HeaderItemMap, FooterItemMap, MenuType} from '../../../const';

const getMenuItemByType = (type) => (
  type === MenuType.HEADER
    ? HeaderItemMap
    : FooterItemMap
);

export default function Menu({type = MenuType.HEADER}) {
  return (
    <ul className={`${styles.list} ${type === MenuType.FOOTER ? styles.list_footer : ''}`}>
      {getMenuItemByType(type).map(({text, route}) => (
        <li key={text} className={styles.item}>
          <Link to={route} className={styles.link}>{text}</Link>
        </li>
      ))}
    </ul>
  );
}

Menu.propTypes = {
  type: PropTypes.string,
};
