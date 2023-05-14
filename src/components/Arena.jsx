import React, { useEffect } from "react";
import styled from "styled-components";
import { useBotsContext } from "../context/bots_context";
const Arena = () => {
  const { setCanvas, setCanvasContext } = useBotsContext();

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    setCanvas(canvas);
    const context = canvas.getContext("2d");
    setCanvasContext(context);
  }, []);

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
