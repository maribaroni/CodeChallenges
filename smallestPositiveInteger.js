/*
Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
*/

function solution(A) {

    A = A.filter(x => x >= 1).sort((i, j) => i - j);

    var number = 1;

    for(let i = 0; i < A.length; i++) {

        if(number < A[i]) {
            return number;
        }
        
        number = A[i] + 1;
    }

    return number;
    
}
