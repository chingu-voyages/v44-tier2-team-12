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
