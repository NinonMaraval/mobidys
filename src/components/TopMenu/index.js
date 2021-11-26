import React, { useState , useEffect } from 'react';
import { DEF_IS_ACTIVE, FORG_IS_ACTIVE, RESET_SETTINGS, SOUND_IS_ACTIVE } from '../../actions/types' ;
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../actions/theme';

import frog from '../../assets/images/menu_haut/frog.svg';
import green_frog from '../../assets/images/menu_haut/green_frog.svg';

import definition from '../../assets/images/menu_haut/definition.svg';
import definition_actif from '../../assets/images/menu_haut/definition_actif.svg';
import definition_white from '../../assets/images/menu_haut/definition_white.svg';

import nuit from '../../assets/images/menu_haut/nuit.svg';
import nuit_actif from '../../assets/images/menu_haut/nuit_actif.svg';

import son_white from '../../assets/images/menu_haut/son_white.svg';
import son_actif from '../../assets/images/menu_haut/son_actif.svg';
import son from '../../assets/images/menu_haut/son.svg';

import drag_white from '../../assets/images/menu_haut/drag_white.svg';
import drag from '../../assets/images/menu_haut/drag.svg';
import drag_actif from '../../assets/images/menu_haut/drag_actif.svg';

import styles from './TopMenu.module.scss';

function TopMenu({ setDragBarStatus, isDragBarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const { soundIsActive  , defIsActive , activePage , darkmode } = useSelector((state) => state.settingsReducer)
  const dispatch = useDispatch();

  function toggleTheme() {
    setTheme(dispatch, !darkmode);
  }

  function getClassName() {
    let className = isOpen ? `${styles.frog} ${styles.open}` : styles.frog;
    return className;
  }

  useEffect(() => {
    dispatch({
      type: FORG_IS_ACTIVE,
      payload: isOpen
    });
    if (!isOpen) {
      const app = document.getElementsByClassName('App')[0];
      app.style.setProperty('--fontSize', `19px`);
      setDragBarStatus(false);
      dispatch({
        type: RESET_SETTINGS,
      });
    }
    // eslint-disable-next-line
  },[isOpen]);

  const dispatchSetting = (type , payload ) => {
    dispatch({
      type,
      payload
    });
  }

  return (
    <div>
      <div className={`${styles['page']} ${activePage > 0 ? styles['open'] : ''}`}>
        <p>
          <span>p.</span>{activePage}
        </p>
      </div>
      <div className={getClassName()}>
        <button
          className='logo-frog'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen === true ? (
            <img src={green_frog} alt='green-frog-logo' />
          ) : (
            <img src={frog} alt='green-frog-logo' />
          )}
        </button>
        <button type='button' onClick={() => dispatchSetting(DEF_IS_ACTIVE , !defIsActive)}>
          {defIsActive
            ? (<img src={definition_actif} alt='def-nonactif1' />)
            : (<img src={darkmode ? definition_white : definition } alt='def-nonactif1' />)
          }
        </button>
        <button type='button' onClick={() => toggleTheme()}>
          {darkmode === true ? (
            <img src={nuit_actif} alt='green-moon' />
          ) : (
            <img src={nuit} alt='moon-nonactif3' />
          )}
        </button>

        <button type='button' onClick={() => dispatchSetting(SOUND_IS_ACTIVE , !soundIsActive )}>
          {soundIsActive
            ? (<img src={son_actif} alt='sound-nonactif4' />)
            : (<img src={darkmode ? son_white : son }  alt='sound-nonactif4' />)
          }
        </button>

        <button
          type='button'
          onClick={() => {
            setDragBarStatus((state) => !state);
          }}
        >
          {isDragBarOpen === true ? (
            <img src={drag_actif} alt='logo-drag-bar' />
          ) : (
            <img src={darkmode ? drag_white : drag } alt='logo-drag-bar' />
          )}
        </button>
      </div>
    </div>
  );
}

export default TopMenu;
