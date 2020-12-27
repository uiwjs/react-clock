import React from 'react';
import ReactClock from '../';
import styles from './exmaple.module.less';

const Example = () => {
  return (
    <div className={styles.clock}>
      <ReactClock />
    </div>
  );
}

export default Example;