const dataArr = require('./daySixData');

let testArr = [
    [
        "abc"
    ],
    [
        "a",
        "b",
        "c"
    ],
    [
        "ab",
        "ac"
    ],
    [
        "a",
        "a",
        "a",
        "a"
    ],
    [
        "b"
    ]
]

// **************** START PART ONE ******************

// let sumArr = [];

// for (let i = 0; i < dataArr.length; i++) {
//     let answerArr = [];
//     for (let j = 0; j < dataArr[i].length; j++) {
//         for (let k = 0; k < dataArr[i][j].length; k++) {
//             if (answerArr.includes(dataArr[i][j][k])) {

//             }
//             else {
//                 answerArr.push(dataArr[i][j][k]);
//             }
//         }
//     }
//     sumArr.push(answerArr.length);
// }


// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(sumArr.reduce(reducer));

// **************** END PART ONE ******************

// **************** START PART TWO ******************
let sumArr = [];

for(let i = 0; i < testArr.length; i++){
    if(testArr[i].length === 1){
        sumArr.push(testArr[i][0].length);
    }
    // else{
    //     let answerArr = [];
    //     for(let j = 0; j < testArr[i].length; j++){
    //         for(let k = 0; k < testArr[i][j].length; k++){
    //             if(answerArr.length === 0 ){
    //                 answerArr.push(testArr[i][j][k]);
    //             }
    //             else{
    //                 for(let l = 0; l < answerArr.length; l++){
    //                     if(testArr[i][j][k] === answerArr[l]){
                            
    //                     }
    //                 }
    //             }
    //             // if(!answerArr.includes(testArr[i][j][k])){
    //             //     answerArr.push(testArr[i][j][k]);
    //             //     break;
    //             // }
    //         }
    //     }
    // }
}


for(let i = 0; i < testArr.length; i++){
    for(let j = 0; j < testArr[i].length; j++){
        //console.log(testArr[i][j]);
    }
}

console.log(testArr[1]);
// **************** END PART TWO ******************




