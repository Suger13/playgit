let studentsScore = {
    James: 40,
    Ann: 80,
    Joe: 52,
    Ball: 67,
    Mick: 89,
    Ole: 10,
  };
  
// Start coding here
// let maxScore;
let highestScore = 0;
let highestScoreName;

for(let i in studentsScore){

    if(highestScore <= studentsScore[i]){
        highestScore = studentsScore[i];
        highestScoreName = Object.keys(studentsScore)
    }
}  

console.log(highestScoreName + highestScore)