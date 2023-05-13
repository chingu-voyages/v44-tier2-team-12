import React from "react";
import styled from "styled-components";

const Arena = () => {
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
