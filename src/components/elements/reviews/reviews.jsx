import React, {useState, useEffect} from 'react';
import styles from './reviews.module.scss';
import {ReviewsInitialState} from '../../../const';
import {STARS_COUNT} from '../../../const';
import Modal from '../modal/modal';

export default function Reviews() {
  const [reviews, setReviews] = useState(ReviewsInitialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reviews')) || ReviewsInitialState;
    setReviews(saved);
  },[]);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleSubmit = (data) => {
    toggleModal(false);
    setReviews(((prevState) => (
      [
        ...prevState,
        {
          ...data,
          id: prevState.length + 1,
          time: 'только что',
        },
      ]
    )));
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {
            reviews.map(({
              id,
              name,
              advantages,
              disadvantages,
              comment,
              rating,
              time,
            }) => (
              <li key={id} className={styles.item}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.item_content}>
                  <p className={`${styles.title} ${styles.plus}`}>Достоинства</p>
                  <p className={styles.text}>{advantages}</p>
                </div>
                <div>
                  <p className={`${styles.title} ${styles.minus}`}>Недостатки</p>
                  <p className={styles.text}>{disadvantages}</p>
                </div>
                <div className={styles.comment_block}>
                  <p className={`${styles.title} ${styles.comment_title}`}>Комментарий</p>
                  <p className={`${styles.text} ${styles.comment_text}`}>{comment}</p>
                </div>
                <div className={styles.rating_block}>
                  <div className={styles.rating}>
                    <span
                      className={styles.rating_stars}
                      style={{width: `${100 * rating / STARS_COUNT}%`}}
                      aria-label={`Рейтинг ${rating} из ${STARS_COUNT}`}
                    />
                  </div>
                  <p className={styles.recommend}>Советует</p>
                </div>
                <div className={styles.date_container}>
                  <time className={styles.date_time} dateTime={new Date()}>{time}</time>
                  <button className={styles.date_button}>Ответить</button>
                </div>
              </li>
            ))
          }
        </ul>
        <div className={styles.button_container}>
          <button onClick={toggleModal} className={styles.button}>Оставить отзыв</button>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={toggleModal} onSubmit={handleSubmit}/>}
    </>
  );
}
