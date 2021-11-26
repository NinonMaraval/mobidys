import React , { useEffect } from 'react';
import dragImg from '../../assets/images/drag_bar.svg';
import cursor from '../../assets/images/cursor.svg'
import sound from '../../assets/images/menu_haut/son_actif.svg';
import styles from './Anim.module.scss';
import { useSelector } from 'react-redux';

export default function Anim({activeAnim}) {
  const { fontsize } = useSelector((state) => state.settingsReducer)
 
  useEffect(() => {
    if (activeAnim === 'def'|| activeAnim === 'sound') {
      document.getElementById("cursor").animate([
        { transform: 'translate(0px , 50px)' },
        { transform: 'translate(0px , 15px)' }
      ], {
        duration: 2000,
        direction: 'alternate',
        iterations: Infinity
      });
    }
    if (activeAnim === 'dragBar') {
      document.getElementById("bar").animate([
        { transform: 'translateY(0px)' },
        { transform: `translateY(${fontsize * 2}px)` }
      ], {
        duration: 1000,
        direction: 'alternate',
        iterations: Infinity
      });
    }
    // eslint-disable-next-line
  }, [activeAnim]);

  return (
    <div className={`${styles.container} ${activeAnim ? styles['is-active'] : ''}`}>
      {activeAnim === 'def' && <div className={`${styles.anim} def-is-active`}>
          <p className={styles['def']}></p>
          <div id="cursor" className={styles.cursor}>
            <img src={cursor} alt='cursor'/>
          </div>
        </div>
      }
      {activeAnim === 'sound' &&
        <div className={`${styles.anim} ${styles.sound}`}>
          <img className={styles.icon} src={sound} alt='sound'/>
          <p className={styles['def']}></p>
          <div id="cursor" className={styles.cursor}>
            <img src={cursor} alt='cursor'/>
          </div>
        </div>
      }
      {activeAnim === 'dragBar' && <div className={`${styles.anim}`}>
          <p>
            Alice commençait<br/>
            à se sentir très lasse<br/>
            de rester assise<br/>
            à côté de sa sœur,<br/>
            sur le talus,<br/>
            et de n’avoir rien à faire : </p>
          <div id="bar" className={styles.drag}>
            <img src={dragImg} className={styles.bar}  alt='cursor'/>
            <img src={cursor} className={styles.cursor} alt='cursor'/>
          </div>
        </div>
      }
    </div>
  )
}
