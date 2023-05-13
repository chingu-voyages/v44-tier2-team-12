import { useContext, useReducer, useEffect, createContext } from "react";

const initialState = {
  bots: [],
  boolean_operation: "AND",
  speed: 0,
  isBattleStarted: false,
  isBattleStopped: false,
  animationFrame: null,
};

const BotContext = createContext();

export const BotsProvider = ({ children }) => {
  const sample = "testing...";
  return (
    <BotContext.Provider value={{ sample }}>{children}</BotContext.Provider>
  );
};

export const useBotsContext = () => {
  return useContext(BotContext);
};
