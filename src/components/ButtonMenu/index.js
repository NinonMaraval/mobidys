import React, { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';

function ButtonMenu({buttons}) {
  const { frogIsActive } = useSelector((state) => state.settingsReducer);
  let [currentPosition, setCurrentPosition] = useState(0);
  useEffect(() => {
    if(!frogIsActive) {
      setCurrentPosition(0);
    }
  },[frogIsActive])

  function handleClick() {
    let nextPosition = currentPosition
    if (nextPosition < buttons.length -1) {
      nextPosition +=1
    } else {
      nextPosition = 0
    }
    buttons[nextPosition].action()
    setCurrentPosition(nextPosition)
  }

  return (
      <button
        className='font1-button'
        alt='font-icons'
        onClick={()=>handleClick()}
      ><img src={buttons[currentPosition].img} alt='button'/></button>
  );
}

export default ButtonMenu;
