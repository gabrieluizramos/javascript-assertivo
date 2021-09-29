const getRandomNumber = (max) => parseInt(Math.random() * max);

export const generateRandomWinner = (candidates) => {
  const number = getRandomNumber(candidates.length);
  const winner = candidates[number];

  return { winner, number };
}
