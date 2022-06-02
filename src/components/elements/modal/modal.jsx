import React, {useState, useRef, useEffect} from 'react';
import styles from './modal.module.scss';
import PropTypes from 'prop-types';
import {InputName} from '../../../const';
import ReactModal from 'react-modal';
import ReactStars from 'react-rating-stars-component';


export default function Modal({onClose, onSubmit, isOpen}) {
  const nameRef = useRef();
  const storage = localStorage.getItem('form');
  const initState = storage ? JSON.parse(storage) : {
    [InputName.NAME]: '',
    [InputName.ADVANTAGES]: '',
    [InputName.DISADVANTAGES]: '',
    [InputName.RATING]: 0,
    [InputName.COMMENT]: '',
  };

  const [form, setForm] = useState(initState);
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);


  useEffect(() => localStorage.setItem('form', JSON.stringify(form)), [form]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'visible');
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = form[InputName.NAME];
    const advantages = form[InputName.ADVANTAGES];
    const disadvantages = form[InputName.DISADVANTAGES];
    const comment = form[InputName.COMMENT];
    const rating = +form[InputName.RATING] || 0;

    if (!name) {
      setNameError(true);
      return;
    }
    if (!comment) {
      setCommentError(true);
      return;
    }

    setNameError(false);

    setCommentError(false);

    onSubmit({
      name,
      advantages,
      disadvantages,
      comment,
      rating,
    });
    localStorage.setItem('form', '');
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRatingClick = (value) => {
    setForm({
      ...form,
      [InputName.RATING]: value,
    });
  };


  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      className={styles.container}
      onRequestClose={onClose}
      onAfterOpen={() => nameRef.current.focus()}
      style={{ overlay: { backgroundColor: 'rgba(88, 87, 87, 0.6)' } }}
      ariaHideApp={false}
    >
      <div className={styles.container} onClick={(evt) => evt.stopPropagation()}>
        <h2 className={styles.title}>Оставить отзыв</h2>
        <form
          className={styles.form}
          action=""
          method="Post"
          onSubmit={handleSubmit}
        >
          <label className={`${styles.label} ${styles.label_required}`}>
            <input
              className={`${styles.input} ${nameError === true ? styles.input_error : ''}`}
              ref={nameRef}
              type="text"
              name={InputName.NAME}
              placeholder='Имя'
              autoComplete='off'
              value={form[InputName.NAME]}
              onChange={handleChange}
              onFocus={() => {
                if (nameError) {
                  setNameError(false);
                }
              }}
            />
            {nameError && <span className={styles.error}>Пожалуйста, заполните поле</span>}
          </label>
          <label>
            <input
              className={styles.input}
              name={InputName.ADVANTAGES}
              type="text"
              placeholder='Достоинства'
              autoComplete='off'
              value={form[InputName.ADVANTAGES]}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              className={styles.input}
              type="text"
              name={InputName.DISADVANTAGES}
              placeholder='Недостатки'
              autoComplete='off'
              value={form[InputName.DISADVANTAGES]}
              onChange={handleChange}
            />
          </label>
          <div className={styles.rating_wrapper}>
            <span className={styles.rating_title}>Оцените товар:</span>
            <div className={styles.rating}>
              <ReactStars
                count={5}
                value={form[InputName.RATING]}
                onChange={(value) => handleRatingClick(value)}
                activeColor="rgb(209, 33, 54)"
                color="rgba(189, 190, 194, 0.7)"
                size={35}
                a11y
                classNames={styles.stars}
              />
            </div>
          </div>
          <label className={`${styles.review} ${styles.label_required}`}>
            {commentError && <span className={styles.error}>Пожалуйста, заполните поле</span>}
            <textarea
              className={`${styles.review_text} ${commentError === true ? styles.review_text_error : ''}`}
              name={InputName.COMMENT}
              placeholder='Комментарий'
              onFocus={() => {
                if (commentError) {
                  setCommentError(false);
                }
              }}
              value={form[InputName.COMMENT]}
              onChange={handleChange}
            />
          </label>
          <button
            className={`${styles.button} ${styles.submit}`}
            type="submit"
          >
            Оставить отзыв
          </button>
          <button
            className={styles.close}
            onClick={onClose}
            type="button"
            aria-label="Закрыть форму"
          />
        </form>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
