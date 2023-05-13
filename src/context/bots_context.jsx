import { useContext, useReducer, useEffect, createContext } from "react";
import botsReducer from "../reducers/bots_reducer";
import { SET_BATTLE_START, SET_BATTLE_STOP } from "../actions";

const initialState = {
  bots: [],
  boolean_operation: "AND",
  speed: 0,
  isBattleStarted: false,
  isBattleEnded: false,
  animationFrame: null,
};

const BotContext = createContext();

export const BotsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(botsReducer, initialState);

  const setBattleStart = () => {
    dispatch({ type: SET_BATTLE_START });
  };
  const setBattleStop = () => {
    dispatch({ type: SET_BATTLE_STOP });
  };
  return (
    <BotContext.Provider value={{ ...state, setBattleStart, setBattleStop }}>
      {children}
    </BotContext.Provider>
  );
};

export const useBotsContext = () => {
  return useContext(BotContext);
};
