import { useDispatch , useSelector } from 'react-redux';
import font1 from '../../../assets/images/font/font1.svg';
import font2 from '../../../assets/images/font/font2.svg';
import font3 from '../../../assets/images/font/font3.svg';
import motus from '../../../assets/images/menu_coloration/motus.svg';
import non_actif from '../../../assets/images/menu_coloration/non_actif.svg';
import non_actif_dark from '../../../assets/images/menu_coloration/non_actif_dark.svg';
import son from '../../../assets/images/menu_coloration/son.svg';
import verb from '../../../assets/images/menu_coloration/verb.svg';
import lignes from '../../../assets/images/menu_trame/lignes.svg';
import trame from '../../../assets/images/menu_trame/trame.svg';
import non_actif_trame_dark from '../../../assets/images/menu_trame/non_actif_trame_dark.svg';
import non_actif_masque_dark from '../../../assets/menu_masque/non_actif_masque_dark.svg';
import non_actif_trame from '../../../assets/images/menu_trame/non_actif_trame.svg';
import non_actif_masque from '../../../assets/menu_masque/non_actif_masque.svg';
import paragraphe from '../../../assets/menu_masque/paragraphe.svg';
import phrase from '../../../assets/menu_masque/phrase.svg';
import rhese from '../../../assets/menu_masque/rhese.svg';
import ButtonMenu from '../../ButtonMenu';
import { setFont } from '../../../actions/font';
import { setColoration } from '../../../actions/coloration';
import { setTrame } from '../../../actions/trame';
import { setMask } from '../../../actions/mask';

import styles from './EyeMenu.module.scss';

function EyeMenu({ isEyeOpen }) {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state) => state.settingsReducer);
  return (
    <>
      <div
        className={isEyeOpen ? `${styles.eye} ${styles.open}` : `${styles.eye}`}
      >
        <div className={styles["btns-container"]}>
        <ButtonMenu
          buttons={[
            {
              img: font1,
              action: () => setFont(dispatch, 'arial'),
            },
            {
              img: font2,
              action: () => setFont(dispatch, 'times'),
            },
            {
              img: font3,
              action: () => setFont(dispatch, 'dyslexic'),
            },
          ]}
        />
        <ButtonMenu
          buttons={[
            {
              img: darkmode ? non_actif_dark :  non_actif,
              action: () => setColoration(dispatch, ''),
            },
            {
              img: motus,
              action: () => setColoration(dispatch, 'syllable'),
            },
            {
              img: son,
              action: () => setColoration(dispatch, 'sounds'),
            },
            {
              img: verb,
              action: () => setColoration(dispatch, 'verbs'),
            },
          ]}
        />
        <ButtonMenu
          buttons={[
            {
              img: darkmode ? non_actif_trame_dark : non_actif_trame,
              action: () => setTrame(dispatch, ''),
            },
            {
              img: trame,
              action: () => setTrame(dispatch, 'coma'),
            },
            {
              img: lignes,
              action: () => setTrame(dispatch, 'line'),
            },
          ]}
        />
        <ButtonMenu
          buttons={[
            {
              img: darkmode ? non_actif_masque_dark : non_actif_masque,
              action: () => setMask(dispatch, 'white'),
            },
            {
              img: rhese,
              action: () => setMask(dispatch, 'rheses'),
            },
            {
              img: phrase,
              action: () => setMask(dispatch, 'sentences'),
            },
            {
              img: paragraphe,
              action: () => setMask(dispatch, 'paragraphs'),
            },
          ]}
        />
        </div>
        <div className={styles.line}>
        </div>
      </div>
    </>
  );}

export default EyeMenu;
