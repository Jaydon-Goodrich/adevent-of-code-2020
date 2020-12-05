

let testArr = ["FBFBBBBLRR",
"BFBBBBBLRR",
"FBBFFFBLLR",
"FFBBFBBLLR",
"FBFFFBBLRL",
"FBFFFFBRRL",
"FBBBBBFLLR",
"BFFFBBFLRR",
"FFBBFBFRLL",
"BFFFBFBLRL",
"BFBBBFBLLL",
"FFFBFBBLLR",
"FFBBBFBRLR",
"FFFBBBBLRR",
"BFFFFBFRRL",
"FBFFBBBRLR",
"BFFFFBFRLR",
"BFBFBFBRLR",
"FFBFBFFLLR",
"BBFBBFFRLL",
"BFFBBFFRRR",
"BBFBBFFRLR",
"FFBBBBFLRR",
"FFFFBBBLLR",
"FBBBBBBRRR"]

// ****************** END PART ONE **********************

let finalArr = [];


for (let k = 0; k < newArr.length; k++) {

    let low = 0;
    let high = 127;


    for (let i = 0; i < 7; i++) {
        if (newArr[k][i] === "F") {
            high = Math.floor((high + low) / 2);
        }
        else {
            low = Math.ceil((high + low) / 2)
        }
    }

    let ColH = 7;
    let ColL = 0;

    for (let i = 7; i < 10; i++) {
        if (newArr[k][i] === "L") {
            ColH = Math.floor((ColH + ColL) / 2);
        }
        else {
            ColL = Math.ceil((ColH + ColL) / 2)
        }
    }

    let result = high * 8 + ColH;

    finalArr.push(result);

}


console.log(Math.max(...finalArr));

// ****************** END PART ONE **********************



// ****************** START PART TWO **********************

let sortedArr = finalArr.sort();

let filtered = sortedArr.filter(item => item > 99);
let num = 100
for(let i = 0; i < filtered.length; i++){
    if(num != filtered[i]){
        // console.log(filtered[i]);
    }
    else{
        num++
    }
}

filtered.forEach(item => console.log(item));

// ****************** END PART TWO **********************
