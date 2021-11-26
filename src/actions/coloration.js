import {SET_COLORATION} from "./types";

export const setColoration = (dispatch, text) => {
  dispatch({
    type: SET_COLORATION,
    payload : text
  })
}