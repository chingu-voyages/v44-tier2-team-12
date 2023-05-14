import React from "react";
import styled from "styled-components";
import { useBotsContext } from "../context/bots_context";
import { getRandomDirection } from "../utils/helpers";
const Arena = () => {
  const { isBattleStarted, setBattleStart, setBattleStop } = useBotsContext();
  return (
    <Wrapper>
      <canvas></canvas>
    </Wrapper>
  );
};

export default Arena;

const Wrapper = styled.canvas`
  background-image: url("/boole-bot-arena.png");
  background-size: cover;
`;
