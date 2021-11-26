import React from 'react';
import { useSelector } from 'react-redux';

import eye from '../../../assets/images/menu_bas/jour/eye.svg';
import white_eye from '../../../assets/images/menu_bas/jour/white_eye.svg';
import orange_eye from '../../../assets/images/menu_bas/jour/orange_eye.svg';
import play from '../../../assets/images/menu_bas/jour/play.svg';
import orange_play from '../../../assets/images/menu_bas/jour/orange_play.svg';
import white_play from '../../../assets/images/menu_bas/jour/white_play.svg';
import listen from '../../../assets/images/menu_bas/jour/listen.svg';
import orange_listen from '../../../assets/images/menu_bas/jour/orange_listen.svg';
import white_listen from '../../../assets/images/menu_bas/jour/white_listen.svg';
import zoom from '../../../assets/images/menu_bas/jour/zoom.svg';
import orange_AA from '../../../assets/images/menu_bas/jour/orange_AA.svg';
import white_AA from '../../../assets/images/menu_bas/jour/white_AA.svg';
import styles from './BottomMenu.module.scss';

function BottomMenu({ menusState, setMenuState , swipe }) {
  const { darkmode } = useSelector((state) => state.settingsReducer);
  return (
    <div className={`${styles['bottom-menu']}`}>
      <button
        className='logo-menu-bas-jour'
        type='button'
        onClick={() =>
          setMenuState((state) => (state === 'eye' ? null : 'eye'))
        }
      >
        {menusState === 'eye' ? (
          <img src={orange_eye} alt='orange-eye' />
        ) : (
          <img src={darkmode ? white_eye : eye } alt='eye-logo' />
        )}
      </button>
      {swipe === "horizontal"
        ? <button
          className='logo-menu-bas-jour'
          type='button'
          onClick={() => {
            setMenuState((state) => (state === 'play' ? null : 'play'));
          }}
        >
        {menusState === 'play' ? (
          <img src={orange_listen} alt='orange-listen-logo' />
        ) : (
          <img src={darkmode ? white_listen : listen } alt='play-logo' />
        )}
      </button>
      : <button
          className='logo-menu-bas-jour'
          type='button'
          onClick={() => {
            setMenuState((state) => (state === 'play' ? null : 'play'));
          }}
        >
        {menusState === 'play' ? (
          <img src={orange_play} alt='orange-play-logo' />
        ) : (
          <img src={darkmode ? white_play : play } alt='play-logo' />
        )}
      </button>
      }
      <button
        className='logo-menu-bas-jour'
        type='button'
        onClick={() => {
          setMenuState((state) => (state === 'zoom' ? null : 'zoom'));
        }}
      >
        {menusState === 'zoom' ? (
          <img src={orange_AA} alt='zoom-logo' />
        ) : (
          <img src={darkmode ? white_AA : zoom} alt='zoom-logo' />
        )}
      </button>
    </div>
  );
}

export default BottomMenu;
