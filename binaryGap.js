/*
author: Mariana Baroni
Given N, the function should return the longest binary gap in the binary representation of N.
Example:
If N=9 (1001) function returns 2.
If N=1041 (10000010001) function returns 5

*/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var binaryGap = 0;
    var bString = N.toString(2);
    var j = 0;
    for (let i of bString) {
        if (i==='0') {
         j += 1;
        }
        if (i==='1') {
            if (j > binaryGap ){
                binaryGap = j;
            }  
            j = 0;
        }
    }
    return binaryGap;
}
