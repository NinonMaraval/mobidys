import {
  SET_FONT,
  SET_COLORATION,
  SET_TRAME,
  SET_MASK,
  SET_FONTSIZE ,
  FORG_IS_ACTIVE ,
  SOUND_IS_ACTIVE,
  DEF_IS_ACTIVE,
  SET_ACTIVE_PAGE,
  RESET_SETTINGS,
  SET_PROGRESS,
  SET_THEME,
} from '../actions/types.js';

const DEFAULT = {
  font: 'arial',
  coloration: 'black',
  trame: 'white',
  mask: 'white',
  fontsize: 19,
  frogIsActive: false,
  defIsActive: false,
  soundIsActive: true,
  activePage: 0,
  progress: 0,
  darkmode : false
};

const settingsReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case RESET_SETTINGS:
      return {
        ...DEFAULT
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case SET_THEME:
      return {
          ...state,
          darkmode: action.payload
      }
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    case SOUND_IS_ACTIVE:
      return {
        ...state,
        soundIsActive: action.payload,
      };
    case DEF_IS_ACTIVE:
      return {
        ...state,
        defIsActive: action.payload,
      };
    case FORG_IS_ACTIVE:
      return {
        ...state,
        frogIsActive: action.payload,
      };
    case SET_FONT:
      return {
        ...state,
        font: action.payload,
      };
    case SET_COLORATION:
      return {
        ...state,
        coloration: action.payload,
      };
      case SET_TRAME:
      return {
        ...state,
        trame: action.payload,
      };
      case SET_MASK:
      return {
        ...state,
        mask: action.payload,
      };
      case SET_FONTSIZE:
      return {
        ...state,
        fontsize: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
