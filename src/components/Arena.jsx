import React from "react";
import styled from "styled-components";
import { useBotsContext } from "../context/bot_context";

const Arena = () => {
  const { sample } = useBotsContext();
  console.log(sample);
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
