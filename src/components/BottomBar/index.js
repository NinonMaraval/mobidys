import { useState } from 'react';
import { useSelector } from 'react-redux';
import BottomMenu from './BottomMenu';
import EyeMenu from './EyeMenu';
import PlayMenu from './PlayMenu';
import ZoomMenu from './ZoomMenu';
import styles from './BottomBar.module.scss';

function BottomBar() {
  const [ menuState, setMenuState ] = useState();
  const { frogIsActive } = useSelector((state) => state.settingsReducer);
  const swipe = window.location.pathname.replace('/',''); 
  return (
    <div className={`${styles['bottom-bar']} ${frogIsActive ? styles['is-active'] : ''}`}>
      <BottomMenu
        setMenuState={setMenuState}
        menusState={menuState}
        swipe={swipe}
      />
      <EyeMenu
        isEyeOpen={menuState === 'eye'}
      />
      <PlayMenu isPlayOpen={menuState === 'play'} swipe={swipe}/>
      <ZoomMenu isZoomOpen={menuState === 'zoom'} />
    </div>
  );
}

export default BottomBar;
