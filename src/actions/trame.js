import {SET_TRAME} from "./types";

export const setTrame = (dispatch, text) => {
  dispatch({
    type: SET_TRAME,
    payload : text
  })
}