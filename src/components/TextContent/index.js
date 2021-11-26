import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { definitions } from '../../helpers/pages';
import DragBar from '../DragBar';
import styles from './TextContent.module.scss';

function TextContent({ isDragBarOpen, text ,  id }) {
  const params = useParams();
  const swipe = params?.swipe;
  const { font , trame , coloration , mask , fontsize , frogIsActive , defIsActive } = useSelector((state) => state.settingsReducer);
  
  function setDefContent( id , action ) {
    let tooltip = document.getElementById(`${id}-tooltip`);
    if (action === 'add' && definitions[id]) {
      tooltip.innerHTML = definitions[id];
    } else {
      tooltip.innerHTML = ''
    }
  }

  useEffect(() => {
    const rheses = document.getElementsByClassName('rhese');
    Array.from(rheses).forEach((el) => {
      el.className = 'rhese';
    });
    const sentences = document.getElementsByClassName('sentence');
    Array.from(sentences).forEach((el) => {
      el.onclick = null; 
      el.className = 'sentence'
    });
    const paragraphs = document.getElementsByClassName('paragraph');
    Array.from(paragraphs).forEach((el) => {
      el.onclick = null; 
      el.className = 'paragraph'
    })

    if (text && mask === 'rheses' && rheses) {
      rheses[0].className = 'rhese active' 
    }

    if (text && mask === 'sentences' && sentences) {
      sentences[0].className = 'sentence active' 
      Array.from(sentences).forEach((el , i ) => {
        el.onclick = function(e) {
          Array.from(sentences).forEach((other) => {
            other.className = 'sentence'
          });
          el.className = 'sentence active'
        }
      });
    }
    if (text && mask === 'paragraphs' && paragraphs) {
      paragraphs[0].className = 'paragraph active' 
      Array.from(paragraphs).forEach((el , i ) => {
        el.onclick = function(e) {
          Array.from(paragraphs).forEach((other) => {
            other.className = 'paragraph'
          });
          el.className = 'paragraph active'
        }
      });
    }
  },[mask , text]);

  useEffect(() => {
    if (text && defIsActive) {
      if (defIsActive) {
        const defs = document.getElementsByClassName('def');
        Array.from(defs).forEach((el) => {
          el.onmouseover = () => setDefContent( el.id , 'add');
          el.onmouseout = () => setDefContent( el.id , 'remove');
        });
      }
    }

    const syl = document.getElementsByClassName('syl');
    if (coloration === 'sounds') {
      Array.from(syl).forEach((el) => {
        el.innerHTML = el.innerText
          .split('')
          .map((l) => {
            if (isVowel(l)) {
              return `<span class='voy'>${l}</span>`
            } else {
              return `<span class='cons'>${l}</span>`
            }
          })
          .join('');
      });
    } else {
      Array.from(syl).forEach((el) => {
        el.innerHTML = el.innerText
      });
    }
  }, [text , defIsActive , coloration]);

  function isVowel(c) {
    return ["a","á","à","ã","â","é","è","ê","e","i","í","ì","î", "o","õ","ó","ò","ô", "u","ú","ù","û","y"].indexOf(c.toLowerCase()) !== -1
  }

  return (
    <div
      style={{ fontSize: fontsize }}
      className={`${styles['general-container']} ${styles[font]} 
      text ${coloration} ${trame} ${frogIsActive ? 'frog ' : ''} ${defIsActive ? "def-is-active" : ""} ${swipe ? swipe : ""} ${mask} ${frogIsActive ? styles['frog-is-active']: ''}`}>
      <div className={`${styles['text-content']}`}>
        <div className='drag-bar'>
          <DragBar isDragBarOpen={isDragBarOpen} />
        </div>
        <div id={id} className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
}

export default TextContent;
