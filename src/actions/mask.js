import {SET_MASK} from "./types";

export const setMask = (dispatch, text) => {
  dispatch({
    type: SET_MASK,
    payload : text
  })
}