import React from "react";
import styled from "styled-components";
import { useBotsContext } from "../context/bots_context";

const Arena = () => {
  const { isBattleStarted, setBattleStart, setBattleStop } = useBotsContext();
  console.log(isBattleStarted);
  return (
    //   <Wrapper>
    //     <canvas></canvas>
    //   </Wrapper>
    <button onClick={setBattleStart}>start battle</button>
  );
};

export default Arena;

const Wrapper = styled.canvas`
  background-image: url("/boole-bot-arena.png");
  background-size: cover;
`;
