/*
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
    
    Missing to include NULL case and A.length=1
*/

function solution(A, K) {

    let i = 0;
    
    var B=[];
    while (i < K)
    {
        var temp = [];
        for (let j = 0; j < A.length; j++)
        {
            if (j == A.length-1)
            {
                temp[0] = A[j];
            }
            else 
            {
                temp[j+1] = A[j];
            }
        }
        i++;
        A=temp;
    }
    return temp;
}
