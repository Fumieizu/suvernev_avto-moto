import React from 'react';
import PropTypes from 'prop-types';
import styles from './control.module.scss';
import {ControlType} from '../../../const';

export default function Control({type, onClick, isDisabled}) {
  return (
    <button
      className={`${styles.control} ${type === ControlType.NEXT ? styles.control_next : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
      aria-label={type === ControlType.NEXT ? 'переключить на следующий слайдер' : 'переключить на предыидущий слайдер'}
    />
  );
}

Control.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
