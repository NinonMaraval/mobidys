import React, { useEffect , useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useGesture } from 'react-use-gesture';
import Lottie from 'react-lottie';

import animationData from '../../../assets/lotties/swipeup.json';
import animationDark from '../../../assets/lotties/swipeupDark.json';
import { setProgress } from '../../../actions/progress';

import TextContent from '../../../components/TextContent';

import teacup from '../../../assets/images/teacup.svg';
import teacupDark from '../../../assets/images/teacup-dark.svg';

import styles from './Page.module.scss';

function Page({
  id,
  isDragBarOpen,
  setPage,
  indexPage = null,
  text,
  cover,
  activePage,
  pageCount,
  handleChangePage,
  scrollTop,
  swipe,
  isAnim,
}) {
  const dispatch = useDispatch();
  const { mask , darkmode } = useSelector((state) => state.settingsReducer);

  const bind = useGesture(
    {
      onDragEnd: state => handleDrag(state),
    },
  )

  function handleDrag(state)  {
    const posX = state.movement[0];
    if (swipe !== 'horizontal') return null;
    if (posX < -6) {
      handleChangePage('next');
    }
    if (posX > 6) {
      handleChangePage('prev');
    }
    if (indexPage !== pageCount) setProgress(dispatch, 0);
  }


  const pageRef = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderedSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  const darkOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDark,
    renderedSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  const handleScroll = (e) => {
    // const pageSize = 500;
    // const totalPageSize = pageSize * pageCount;
    const top = e.target.scrollTop === 0;
    const winScroll = e.target.scrollTop;
    const height = e.target.scrollHeight - e.target.clientHeight;
    let result = (winScroll / height) * 100;
    // // taille de la fenêtre
    // const pageProgress = (result * pageSize) / 100;
    // const prevPage = activePage * pageSize;
    // result = ((pageProgress + prevPage) / totalPageSize) * 100;
    if (indexPage > 0) setProgress(dispatch, result);
    if (swipe && swipe !== 'horizontal') {
      if (result > 99 ) {
        handleChangePage('next');
      } else if (top) {
        handleChangePage('prev');
      }
    }
  };

  // détermine la className en fonction des props hide et focus
  function getClassName() {
    let className = styles['page-container'];
    if (isAnim) {
      className += ` ${styles['blur']}`;
    }
    if (mask !== 'white' ) {
      className += ` mask`;
    }
    if (swipe) {
      className += ` ${styles['swipe-container']}`;
      if (swipe !== 'horizontal' && indexPage < activePage) {
        className += ` ${styles['prev-vertical']}`;
      }
      if (swipe === 'horizontal') {
        if(indexPage < activePage) {
          className += ` ${styles['prev-horizontal']}`;
        }
      }
      if (swipe === 'horizontal') {
        if(indexPage > activePage) {
          className += ` ${styles['next-horizontal']}`;
        }
      }
    }
    if (cover) {
      className += ` ${styles['cover']}`;
    }
    // if (activePage > indexPage ) {
    //   className += ` ${styles.hide}`;
    // }
    return className;
  }

  useEffect(() => {
    if (swipe) return null
    if (scrollTop + 300 > (pageRef?.current?.offsetTop)) {
      setPage(indexPage);
    }
    // eslint-disable-next-line
  },[pageRef?.current , scrollTop])

  return (
    <div
      className={getClassName()}
      ref={pageRef}
      style={{ zIndex: pageCount - indexPage }}
      {...bind()}
      onScroll={handleScroll}
    >
    {text && 
      <div className={`${styles['container']} ${swipe === 'vertical' ? styles['swipe'] : ''}`}>
        {!swipe && <div className={styles.footer}>
            <img src={darkmode ? teacupDark : teacup} alt={'teacup-logo'} />
            <p>Page {indexPage}</p>
          </div>
        }
        {swipe === 'horizontal' && indexPage === 1
          && <div className={`${styles['lottie-horizontal']}`}>
            <Lottie
              options={darkmode ? defaultOptions : darkOptions}
              height={380}
              width={'100%'}
            />
          </div>
        }
        <TextContent  id={id} text={text} isDragBarOpen={isDragBarOpen} />
        {swipe && <div className={styles.footer}>
            <img src={darkmode ? teacupDark : teacup} alt={'teacup-logo'} />
            <p>Page {indexPage}</p>
          </div>
        }
        {swipe === 'horizontal' && <div className={`${styles['lottie-down']}`}>
          <Lottie
            options={darkmode ? defaultOptions : darkOptions}
            height={380}
            width={'100%'}
          />
        </div>
        }
      </div>
    }
    {cover && 
      <div className={`${styles['cover-content']} ${swipe !== 'horizontal' ? styles['swipe'] : ''}`}>
        <div className={`${styles['image']}`}>
          <img src={cover} alt={'cover'} />
          <div className={`${styles.lottie} ${swipe === 'horizontal' ? styles['horizontal'] : ''}`}>
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    }

    </div>
  );
}

export default Page;
