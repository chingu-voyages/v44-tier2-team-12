import { SET_BATTLE_START, SET_BATTLE_STOP } from "../actions";

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
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default bots_reducer;
