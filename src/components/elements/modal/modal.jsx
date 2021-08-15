import React, {useState, useRef, useEffect} from 'react';
import styles from './modal.module.scss';
import PropTypes from 'prop-types';
import {ReactComponent as Star} from '../../../icon/Star.svg';
import {InputName, STARS_COUNT} from '../../../const';

export default function Modal({onClose, onSubmit}) {
  const nameRef = useRef();
  const storage = localStorage.getItem('form');
  const initState = storage ? JSON.parse(storage) : {
    [InputName.NAME]: '',
    [InputName.ADVANTAGES]: '',
    [InputName.DISADVANTAGES]: '',
    [InputName.RATING]: null,
    [InputName.COMMENT]: '',
  };

  const [form, setForm] = useState(initState);
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
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
  const handleKeyDown = (evt) => {
    if (evt.code === 'Escape' || evt.code === 'Esc') {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}  onKeyDown={handleKeyDown}>
      <div className={styles.container} onClick={(evt) => evt.stopPropagation()}>
        <h2 className={styles.title}>Оставить отзыв</h2>
        <form
          className={styles.form}
          action=""
          method="Post"
          onSubmit={handleSubmit}
        >
          <label className={`${styles.label} ${styles.label__required}`}>
            <input
              className={`${styles.input} ${nameError === true ? styles.input__error : ''}`}
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
              {
                new Array(STARS_COUNT).fill('').map((_, id) => {
                  const starsCounter = STARS_COUNT - id;
                  return (
                    <React.Fragment key={starsCounter}>
                      <input
                        className={`${styles.radio} visually-hidden`}
                        id={`${starsCounter}-stars`}
                        value={starsCounter}
                        checked={starsCounter === +form[InputName.RATING]}
                        onChange={handleChange}
                        name={InputName.RATING}
                        type='radio'
                      />
                      <label
                        className={styles.rating_label}
                        htmlFor={`${starsCounter}-stars`}
                      >
                        <Star
                          className={styles.star}
                          width={27}
                          height={28}
                        />
                      </label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>
          <label className={`${styles.review} ${styles.label__required}`}>
            {commentError && <span className={styles.error}>Пожалуйста, заполните поле</span>}
            <textarea
              className={`${styles.review_text} ${commentError === true ? styles.review_text__error : ''}`}
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
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
