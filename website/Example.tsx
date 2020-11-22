import React from 'react';
import ReactClock from '../';
import styles from './exmaple.module.less';

export default () => {
  return (
    <div className={styles.clock}>
      <ReactClock />
    </div>
  );
}