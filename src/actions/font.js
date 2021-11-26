import {SET_FONT} from "./types";

export const setFont = (dispatch, text) => {
  dispatch({
    type: SET_FONT,
    payload : text
  })
}
