//Exercise #2: At Least Five Function

function atLeastFive (array, operation) { //(array ที่เราต้องการจะตรวจสอบ *studentScoresRoom1,  เครื่องมือที่เราจะใช้ตรวจสอบ)
	// Start coding here

    let studentScoresResult = operation(array); //callback result
	console.log(studentScoresResult)
    if(studentScoresResult.length >= 5){
        return true;
    } else{
        return false;
    }

    
}

function isFive(array){ //callback
    let newArray = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] > 70){
            newArray.push(array[i]);
        }
    }
    return newArray;

}

const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 12, 40, 67]
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100]
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67]

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isFive)
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isFive)
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isFive)

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)