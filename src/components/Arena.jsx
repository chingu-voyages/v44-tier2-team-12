import React, { useEffect } from "react";
import styled from "styled-components";
import { useBotsContext } from "../context/bots_context";
import { getRandomPlacements } from "../utils/helpers";
const Arena = () => {
  const { setCanvas, setCanvasContext, bots } = useBotsContext();

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    setCanvas(canvas);
    const context = canvas.getContext("2d");
    setCanvasContext(context);

    var canvas_height = "448";
    var canvas_width = "448";

    canvas.width = canvas_width;
    canvas.height = canvas_height;

    const result = getRandomPlacements(
      canvas_width,
      canvas_height,
      bots.length
    );
    console.log(result);
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
