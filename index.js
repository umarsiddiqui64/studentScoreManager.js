let studentScores = [35, 50, 78, 25, 93, 88, 42, 67, 39, 91];
console.log("Original Scores:", studentScores);

for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] < 40) {
    studentScores[i] += 20; 
  } else if (studentScores[i] > 90) {
    studentScores[i] = 90; 
  }
}
console.log("Adjusted Scores:", studentScores);

let passCount = 0;
for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] >= 50) {
    passCount++;
  }
}
console.log("Number of students who passed:", passCount);

console.log("Final Adjusted Scores:", studentScores);
