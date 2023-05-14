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
