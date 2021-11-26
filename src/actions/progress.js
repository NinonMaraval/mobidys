import { SET_PROGRESS , SET_ACTIVE_PAGE } from './types';

export const setProgress = (dispatch, number) => {
  dispatch({
    type: SET_PROGRESS,
    payload: number,
  });
};

export const setActivePage = (dispatch, number) => {
  dispatch({
    type: SET_ACTIVE_PAGE,
    payload: number,
  });
};

