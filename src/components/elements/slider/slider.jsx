import React, {useState } from 'react';
import styles from './slider.module.scss';
import Control from '../control/control';
import {ControlType} from '../../../const';

const SLIDE_COUNT = 3;
const STEP = 1;

const slides = Array.from({ length: SLIDE_COUNT }, (v, i) =>  i + 1);

export default function Slider() {
  const [slideNumber, setSlideNumber] = useState(1);

  const handlePrev = () => setSlideNumber(((prevState) => prevState - STEP));
  const handleNext = () => setSlideNumber(((prevState) => prevState + STEP));

  return (
    <div className={styles.container}>
      <ul className={styles.list} onSubmit={setSlideNumber}>
        {
          slides.map((index) => (
            <li
              key={index}
              className={`${styles.slide} ${slideNumber === index ? styles.active : ''}`}
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={`images/slide${index}.webp 1x, images/slide${index}@2x.webp 2x`}
                />
                <img
                  src={`images/slide${index}.jpg`}
                  srcSet={`images/slide${index}@2x.jpg 2x`}
                  alt={`slide-${index}`}
                  width="600"
                  height="375"
                />
              </picture>
            </li>
          ))
        }
      </ul>
      <div className={styles.preview_container}>
        <Control
          onClick={handlePrev}
          type={ControlType.PREV}
          isDisabled={slideNumber === STEP}
        />
        <ul className={styles.preview_list}>
          {
            slides.map((index) => (
              <li key={index} className={styles.preview_item}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`images/slide${index}.webp 1x, images/slide${index}@2x.webp 2x`}
                  />
                  <img
                    src={`images/slide${index}.jpg`}
                    srcSet={`images/slide${index}@2x.jpg 2x`}
                    width="128"
                    height="80"
                    alt={`slide-${index}`}
                  />
                </picture>
              </li>
            ))
          }
        </ul>
        <Control
          onClick={handleNext}
          type={ControlType.NEXT}
          isDisabled={slideNumber === SLIDE_COUNT}
        />
      </div>
    </div>
  );
}
