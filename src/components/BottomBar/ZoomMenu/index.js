import React from 'react';
import styles from "./ZoomMenu.module.scss";
import FontSizeSlider from '../../BottomBar/FontSizeSlider/index';

function ZoomMenu(props) {
    const {isZoomOpen} = props;
    return (
        <>
        <div className={isZoomOpen ? `${styles.zoom} ${styles.open}` :`${styles.zoom}` }>
            <FontSizeSlider />  
            <div className={styles.line}></div>
        </div>
           

    </>
    )
}

export default ZoomMenu;
