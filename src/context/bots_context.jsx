import { useContext, useReducer, useEffect, createContext } from "react";
import botsReducer from "../reducers/bots_reducer";
import {
  SET_BATTLE_START,
  SET_BATTLE_STOP,
  SET_CANVAS,
  SET_CANVAS_CONTEXT,
} from "../actions";
import { bots } from "../data";

const initialState = {
  bots: bots,
  boolean_operation: "AND",
  speed: 0,
  isBattleStarted: false,
  isBattleEnded: false,
  animationFrame: null,
  canvas: null,
  canvasContext: null,
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

  const setCanvas = (canvas) => {
    dispatch({ type: SET_CANVAS, payload: canvas });
  };

  const setCanvasContext = (context) => {
    dispatch({ type: SET_CANVAS_CONTEXT, payload: context });
  };

  return (
    <BotContext.Provider
      value={{
        ...state,
        setBattleStart,
        setBattleStop,
        setCanvas,
        setCanvasContext,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};

export const useBotsContext = () => {
  return useContext(BotContext);
};
