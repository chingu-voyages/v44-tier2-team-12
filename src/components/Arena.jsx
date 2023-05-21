import React, { useEffect } from "react";
import styled from "styled-components";
import { useBotsContext } from "../context/bots_context";
import { getRandomPlacements, checkCollision } from "../utils/helpers";
const Arena = () => {
  const { setCanvas, setCanvasContext, bots, canvasContext } = useBotsContext();

  var canvas_height = "448";
  var canvas_width = "448";

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    setCanvas(canvas);
    const context = canvas.getContext("2d");
    setCanvasContext(context);

    canvas.width = canvas_width;
    canvas.height = canvas_height;

    const randomPlacementResults = getRandomPlacements(
      canvas_width,
      canvas_height,
      bots.length
    );

    for (let i = 0; i < randomPlacementResults.length; i++) {
      bots[i].xPosition = randomPlacementResults[i].x;
      bots[i].yPosition = randomPlacementResults[i].y;
      bots[i].draw(context);
    }
  }, []);

  const animateBots = function () {
    let animationFrame = requestAnimationFrame(animateBots);

    if (bots.length === 1) {
      cancelAnimationFrame(animationFrame);
    }

    canvasContext.clearRect(0, 0, canvas_width, canvas_height);

    bots.forEach((bot) => {
      bot.update(canvasContext, canvas_width, canvas_height);
    });

    for (let i = 0; i < bots.length; i++) {
      for (let j = i + 1; j < bots.length; j++) {
        checkCollision(bots[i], bots[j], bots, animationFrame, animateBots);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <canvas></canvas>
      </Wrapper>
      <button onClick={animateBots} className="btn start-btn">
        Start Battle
      </button>
      <button onClick={animateBots} className="btn start-btn">
        Stop Battle
      </button>
    </>
  );
};

export default Arena;

const Wrapper = styled.canvas`
  background-image: url("/boole-bot-arena.png");
  background-size: cover;
`;
