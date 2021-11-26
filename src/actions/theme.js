import { SET_THEME } from "./types"

export const setTheme = (dispatch, bool ) => {
  dispatch({
    type: SET_THEME,
    payload : bool
  })
}
