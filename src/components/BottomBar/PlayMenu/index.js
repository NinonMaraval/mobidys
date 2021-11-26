import React, { useEffect , useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Range , getTrackBackground } from 'react-range';
import Speech from 'react-speech';

import { setMask } from '../../../actions/mask';

import play from '../../../assets/images/menu_bas 3/play.svg';
import pause from '../../../assets/images/menu_bas 3/pause.svg';
import leftarrow from '../../../assets/images/menu_bas 3/leftarrow.svg';
import rightarrow from '../../../assets/images/menu_bas 3/rightarrow.svg';
import counter from '../../../assets/images/menu_bas 3/counter.svg';
import snail from '../../../assets/images/menu_bas 3/snail.svg';
import guepard from '../../../assets/images/menu_bas 3/guepard.svg';

import styles from './PlayMenu.module.scss';


function PlayMenu({ isPlayOpen , swipe }) {
  const dispatch = useDispatch();
  const { soundIsActive , darkmode , mask } = useSelector((state) => state.settingsReducer)
  const [ rheseIndex , setRheseIndex ] = useState(0);
  const [ isPlaying , setIsPlaying ] = useState(false);
  const [ text , setText ] = useState();
  const [values, setValues] = useState([3000]);
  const min = 2000;
  const max = 8000;

  function readRhese(dir) {
    let index = rheseIndex;
    const rheses = document.getElementsByClassName('rhese');
    Array.from(rheses).forEach((el , i ) => {
      el.onclick = () => readRhese(i);
      el.className = 'rhese';
    });
    if (dir === 'next' && rheseIndex + 1 < rheses.length) {
      index = rheseIndex + 1;
    } else if (dir === 'prev' && rheseIndex - 1 >= 0) {
      index = rheseIndex - 1;
    } else if (typeof dir === 'number') {
      index = dir
    }
    if (index  === rheses.length) {
      index = 0;
    }
    setRheseIndex(index);
    if (rheses[index]) {
      rheses[index].className = 'rhese active'
      setText(rheses[index].textContent)
    }
  }

  useEffect(() => {
    if (soundIsActive && mask === 'rheses') {
      const rheses = document.getElementsByClassName('rhese');
      Array.from(rheses).forEach((el , i ) => {
        el.onclick = () => readRhese(i);
      });
    }
    if(isPlayOpen) {
      setMask(dispatch, 'rheses');
      const rhese = document.getElementsByClassName('rhese');
      if (rhese?.textContent) {
        setText(rhese?.textContent)
        setRheseIndex(0);
      }
    } else {
      setIsPlaying(false);
      setText();
      setRheseIndex(0);
      setMask(dispatch, 'white');
    }
    // eslint-disable-next-line
  }, [isPlayOpen]);

  useEffect(() => {
    if (soundIsActive && mask === 'rheses') {
      const rheses = document.getElementsByClassName('rhese');
      Array.from(rheses).forEach((el , i ) => {
        el.onclick = () => readRhese(i);
      });
    }
    // eslint-disable-next-line
  }, [mask , soundIsActive]);

  useEffect(() => {
    if (!isPlaying) return null;
    const timer = setTimeout(() => {
      readRhese("next")
    }, values[0]);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  },[isPlaying , rheseIndex]);

  useEffect(() => {
    if (text && soundIsActive) {
      const timerPlay = setTimeout(() => {
        const playBtn = document.getElementsByClassName('rs-play')[0];
        playBtn.click();
      }, 200);
      return () => clearTimeout(timerPlay);
    }
    // eslint-disable-next-line
  },[text]);

  return (
    <div
      className={
        isPlayOpen ? `${styles.play} ${styles.open}` : `${styles.play}`
      }
    >
      <div className={styles['play-btns-container']}>
        <button type='button'
          onClick={() => readRhese("prev")}
          >
          <img src={leftarrow} alt='logo-left-arrow' />
        </button>
        <button type='button'
          onClick={() => setIsPlaying(!isPlaying)}
          >
          <img src={isPlaying ? pause : play} alt='play' />
        </button>
        <button
          onClick={() => readRhese("next")}
          type='button'>
          <img src={rightarrow} alt='logo-right-arrow' />
        </button>
      </div>

      <div className={`${styles['speed']} ${swipe !== "" ? styles[swipe] : styles['infinit']}`}>
        <div className={styles['range-label']}>
          {swipe === 'vertical' 
            ? <>
                <div className={styles.img}>
                  <img src={snail} alt={'counter'}/>
                </div>
                <p className={`${darkmode ? styles['dark'] : ''}`}>{(values[0] / 1000).toFixed(1)} .s</p>
                <div className={styles.img}>
                  <img src={guepard} alt={'counter'}/>
                </div>
            </>
            : <>
              <p className={`${darkmode ? styles['dark'] : ''}`}>{(values[0] / 1000).toFixed(1)} .s</p><img src={counter} alt={'counter'}/>
            </>
          }
        </div>
        <Range
          min={min}
          max={max}
          values={values}
          onChange={(val) => setValues(val)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "40px",
                display: "flex",
                width: "92%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#EB6223", darkmode ? "#52526F": "#F9D0BD"],
                    min: min,
                    max: max
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "25px",
                width: "25px",
                borderRadius: "25px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)"
              }}
            >
            </div>
          )}
        />
      </div>
      <div className={styles.line}>
      </div>
      <div className={styles.speech}>
        {soundIsActive && <Speech text={text} />}
      </div>
    </div>
  );
}

export default PlayMenu;
