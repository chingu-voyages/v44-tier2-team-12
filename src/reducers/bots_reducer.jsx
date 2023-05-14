import {
  SET_BATTLE_START,
  SET_BATTLE_STOP,
  SET_CANVAS,
  SET_CANVAS_CONTEXT,
} from "../actions";

const bots_reducer = (state, action) => {
  if (action.type === SET_BATTLE_START) {
    return {
      ...state,
      isBattleStarted: true,
    };
  }

  if (action.type === SET_BATTLE_STOP) {
    return {
      ...state,
      isBattleStarted: false,
    };
  }

  if (action.type == SET_CANVAS) {
    return {
      ...state,
      canvas: action.payload,
    };
  }

  if (action.type == SET_CANVAS_CONTEXT) {
    return {
      ...state,
      canvasContext: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default bots_reducer;
