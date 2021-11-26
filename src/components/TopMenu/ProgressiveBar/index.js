import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProgressiveBar.module.scss';

const ProgressiveBar = () => {
  const { activePage , progress } = useSelector((state) => state.settingsReducer);
  return (
    <div className={`${styles['container']} ${activePage > 0 ? styles['active'] : ''}`}>
      <div className={styles['progress-bar']}>
        <div
          className={styles['progress']}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressiveBar;
