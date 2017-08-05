export default function createMastermindArray () {
  const rowLength= 4;
  const mastermindAnswers = [];
  const colorCircles = ["red", "orange", "yellow", "green", "blue", "indigo"];

  for (let i=0; i < rowLength; i++) {
    let color = colorCircles[Math.floor(Math.random() * 6)];
    mastermindAnswers.push(color)
  }
  return mastermindAnswers;
}
