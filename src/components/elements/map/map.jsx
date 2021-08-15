import React from 'react';
import styles from './map.module.scss';
import { YMaps, Placemark } from 'react-yandex-maps';
import {Map as YaMap} from 'react-yandex-maps';
import pin from '../../../icon/pin.svg';

const LOCATIONS = [59.96818547816917,30.32363844476806];
const PIN_LOCATIONS = [59.96833919234886,30.31668174927131];
const PIN_SIZE = [32, 40];
const PIN_OFFSET = [-16, -40];
const ZOOM = 15;


export default function Map() {
  return (
    <YMaps>
      <YaMap
        defaultState={{ center: LOCATIONS, zoom: ZOOM }}
        className={styles.map}
      >
        <Placemark
          geometry={PIN_LOCATIONS}
          options={{
            iconLayout: 'default#image',
            iconImageHref: pin,
            iconImageSize: PIN_SIZE,
            iconImageOffset: PIN_OFFSET,
          }}
        />
      </YaMap>
    </YMaps>
  );
}
