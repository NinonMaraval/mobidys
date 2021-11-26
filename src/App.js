import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import TopMenu from './components/TopMenu';
import { useSelector } from 'react-redux';
import BottomBar from './components/BottomBar';
import PageViewer from './components/PageViewer';
import ProgressiveBar from './components/TopMenu/ProgressiveBar';

import './App.scss';

function App() {
  const [isDragBarOpen, setIsDragBarOpen] = useState(false);
  const { darkmode } = useSelector((state) => state.settingsReducer);
 
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []); 

  return (
    <div
      className={`App ${darkmode ? 'dark' : ''}`}
      >
      <ProgressiveBar />
      <TopMenu
        setDragBarStatus={setIsDragBarOpen}
        isDragBarOpen={isDragBarOpen}
      />
      <Router>
        <Switch>
          <Route exact path='/'>
            <PageViewer isDragBarOpen={isDragBarOpen} />
          </Route>
          <Route path='/:swipe'>
            <PageViewer isDragBarOpen={isDragBarOpen} />
          </Route>
        </Switch>
      </Router>
      <BottomBar />
    </div>
  );
}

export default App;
