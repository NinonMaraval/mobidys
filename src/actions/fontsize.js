import { SET_FONTSIZE } from "./types";

export const setFontSize = (dispatch, number) => {
  dispatch({
    type: SET_FONTSIZE,
    payload : number
  })
}