import React, { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { setActivePage , setProgress } from '../../actions/progress';
import { pages } from '../../helpers/pages';
import Anim from '../Anim';
import Page from './Page';

const PageViewer = ({ isDragBarOpen }) => {
  const params = useParams();
  const swipe = params?.swipe;
  const animeTime = 3000;

  const { defIsActive , frogIsActive } = useSelector((state) => state.settingsReducer);

  const [page, setPage] = useState(0);
  const [scrollTop , setScrollTop] = useState(0);
  const [ anim , setAnim ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setActivePage(dispatch , page);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    setAnim();
    if (defIsActive) setAnim('def');
    const timer = setTimeout(() => {
      setAnim();
    }, animeTime);
    return () => clearTimeout(timer);
  },[defIsActive]);

  useEffect(() => {
    setAnim();
    if (frogIsActive && swipe === 'vertical' && page === 1) setAnim('sound');
    const timer = setTimeout(() => {
      setAnim();
    }, animeTime);
    return () => clearTimeout(timer);
  },[frogIsActive , page , swipe]);

  useEffect(() => {
    setAnim();
    if (isDragBarOpen) setAnim('dragBar');
    const timer = setTimeout(() => {
      setAnim();
    }, animeTime);
    return () => clearTimeout(timer);
  },[isDragBarOpen]);

  // changement de page
  const handleScroll = (e) => {
    const winScroll = e.target.scrollTop;
    const height = e.target.scrollHeight - e.target.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(winScroll);
    setProgress(dispatch, scrolled);
  };

  function handleChangePage(dir) {
    if (dir === 'next' && page + 1 < pages.length) {
      setPage((state) => state + 1);
    } else if (dir === 'prev' && page - 1 >= 0) {
      setPage((state) => state - 1);
    }
  }

  return (
    <div className={`container-pages ${swipe ? 'no-scroll' : ''}`}
      onScroll={handleScroll}
      >
      {pages.map((d, i) => (
        <Page
          key={d.id}
          pageCount={pages.length}
          activePage={page}
          setPage={setPage}
          handleChangePage={handleChangePage}
          scrollTop={scrollTop}
          isDragBarOpen={isDragBarOpen}
          indexPage={i}
          text={d.text}
          cover={d?.cover}
          swipe={swipe}
          isAnim={anim}
          id={'page' + i}
          hide={page < i} // hide = true si page précédente
          focus={page === i} // focus = true si page courante
        />
      ))}
      <Anim activeAnim={anim}/>
    </div>
  );
};

export default PageViewer;
