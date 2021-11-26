import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import drag_bar from '../../assets/images/drag_bar.svg';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styles from './DragBar.module.scss';

function DragBar({ isDragBarOpen }) {
  const { fontsize } = useSelector((state) => state.settingsReducer);
  const [ posY , setPosY ] = useState({ y: fontsize * 2 })
  const barPos = useSpring(posY);
  const bindBar = useDrag(
    (params) => {
      let round = Math.round(params.movement[1] / (fontsize * 2));
      setPosY(round * (fontsize * 2))
      barPos.y.set(round * (fontsize * 2));
    },
    {
      initial: () => {
        return [0, barPos.y.get()];
      },
    }
  );
  return (
    <animated.div
      {...bindBar()}
      className={
        isDragBarOpen
          ? `${styles['drag-bar']} ${styles.open}`
          : `${styles['drag-bar']}`
      }
      style={{ y: barPos.y, touchAction: 'none' }}
    >
      <img
        className={styles['drag-img']}
        src={drag_bar}
        alt='drag-bar'
        style={{ width: '100%'}}
      />
    </animated.div>
  );
}

export default DragBar;
