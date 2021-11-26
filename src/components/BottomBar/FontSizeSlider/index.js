import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Range , getTrackBackground } from 'react-range';
import { setFontSize } from '../../../actions/fontsize';
import { useDispatch } from 'react-redux';
import A1 from '../../../assets/images/menu_font/A1.svg';
import A from '../../../assets/images/menu_font/A.svg';
import white_A1 from '../../../assets/images/menu_font/white_A1.svg';
import white_A from '../../../assets/images/menu_font/white_A.svg';

function FontSizeSlider() {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state) => state.settingsReducer);
  const [values, setValues] = useState([20]);
  const min = 20;
  const max = 30;

  function handleChange(val) {
    setValues(val);
    setFontSize(dispatch, val[0]);
    const app = document.getElementsByClassName('App')[0];
    app.style.setProperty('--fontSize', `${val[0]}px`);
  }

  return (
    <>
      <div>
        <img
          src={darkmode ? white_A : A}
          alt='font1'
          style={{ paddingRight: '15px', paddingTop: '28px' }}
        />
      </div>
      <Range
        min={min}
        max={max}
        values={values}
        onChange={(val) => handleChange(val)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              marginTop: 13,
              width: "80%"
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
      <div>
        <img
          src={darkmode ? white_A1 : A1}
          alt='font1'
          style={{ paddingLeft: '15px', paddingTop: '24px' }}
        />{' '}
      </div>
    </>
  );
}

export default FontSizeSlider;
