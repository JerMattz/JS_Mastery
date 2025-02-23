function getTopNScores(scores, N) {
  const sortedScores = scores.sort((a, b) => b - a);

  return sortedScores.slice(0, N);
}

console.log(getTopNScores([100, 90, 85, 95, 80], 3));
console.log(getTopNScores([50, 30, 40], 2));
console.log(getTopNScores([70, 60, 80, 90], 1));
console.log(getTopNScores([10, 20, 30], 5));
