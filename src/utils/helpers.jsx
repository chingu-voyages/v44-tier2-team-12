export const getRandomDirection = () => {
  const directions = [
    "north",
    "north-west",
    "north-east",
    "south",
    "south-west",
    "west",
    "east",
  ];
  const randomIndex = Math.floor(Math.random() * directions.length);

  return directions[randomIndex];
};

export const getRandomPlacements = (canvasWidth, canvasHeight, botsLength) => {
  const tileWidth = canvasWidth / 8;
  const tileHeight = canvasHeight / 8;

  const placements = [];

  let x1 = randomCoordinates();
  let y1 = randomCoordinates();

  placements.push({ x: x1, y: y1 });

  let x2, y2;

  for (let i = 0; i < botsLength; i++) {
    for (let j = i + 1; j < botsLength; j++) {
      do {
        x2 = randomCoordinates();
        y2 = randomCoordinates();

        placements.push({ x: x2, y: y2 });
      } while (
        (placements[j].x === placements[i].x &&
          placements[j].y === placements[i].y) ||
        (Math.abs(placements[j].x - placements[i].x) < 2 &&
          Math.abs(placements[j].y - placements[i].y) < 2)
      );
    }
  }

  for (let i = 0; i < botsLength; i++) {
    placements[i].x = placements[i].x * tileWidth + tileWidth / 2;
    placements[i].y = placements[i].y * tileHeight + tileHeight / 2;
  }

  return placements;
};

const randomCoordinates = () => {
  return Math.floor(Math.random() * 8);
};

export const checkResult = (operator, bot1, bot2) => {
  if (operator === "AND") {
    if (bot1 === 1 && bot2 === 1) {
      return "Win";
    } else {
      return "Tie";
    }
  } else if (operator === "OR") {
    if (bot1 === 0 && bot2 === 0) {
      return "Tie";
    } else {
      return "Win";
    }
  } else if (operator === "XOR") {
    if ((bot1 === 0 && bot2 === 0) || (bot1 === 1 && bot2 === 1)) {
      return "Tie";
    } else {
      return "Win";
    }
  } else if (operator === "NOR") {
    if (bot1 === 0 && bot2 === 0) {
      return "Win";
    } else {
      return "Tie";
    }
  }
};

export const getDistance = (xPosition1, yPosition1, xPosition2, yPosition2) => {
  var result = Math.sqrt(
    Math.pow(xPosition2 - xPosition1, 2) + Math.pow(yPosition2 - yPosition1, 2)
  );
  return result;
};

export const checkCollision = (
  bot1,
  bot2,
  bots,
  animationFrame,
  animateBots
) => {
  if (
    getDistance(
      bot1.xPosition,
      bot1.yPosition,
      bot2.xPosition,
      bot2.yPosition
    ) >=
    bot1.radius + bot2.radius
  ) {
    bot1.invincible = false;
    bot2.invincible = false;
  }

  if (bot1.invincible === true && bot2.invincible === true) {
    return;
  }

  if (
    getDistance(
      bot1.xPosition,
      bot1.yPosition,
      bot2.xPosition,
      bot2.yPosition
    ) <
    bot1.radius + bot2.radius
  ) {
    /* TODO: when collision occurs you must save the previous direction so that when it win you will know it's previous direction */
    const bot1PrevDirection = bot1.direction;
    const bot2PrevDirection = bot2.direction;

    const result = checkResult("AND", bot1.booleanValue, bot2.booleanValue);

    // wait for 1second(1000) before checking results
    cancelAnimationFrame(animationFrame);
    setTimeout(() => {
      requestAnimationFrame(animateBots);
    }, 3000);

    if (result == "Tie") {
      bot1.dx = 5; // 5 should be changed to speed variable
      bot1.dy = 5;
      bot1.direction = bot1PrevDirection;

      bot2.dx = 5;
      bot2.dy = 5;
      bot2.direction = bot2PrevDirection;
      bot1.invincible = true;
      bot2.invincible = true;

      console.log(`${bot1.text} vs ${bot2.text} it's a TIE!`);
    } else {
      const randomNumber = Math.round(Math.random());
      let newBots = bots.filter((_, index) => index != randomNumber);
      console.log(newBots[0].text + " is the winner!");
      bots.splice(0, bots.length, ...newBots);
    }
  }
};
