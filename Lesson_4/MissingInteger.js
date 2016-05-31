/*
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

*/
function solution(A) {
    var arr = A.sort();
    var map = {};
    var counter = 0;
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] <= A.length){
            map[arr[i]] = true; 
        }
    }   

    for(var key in map){
        var current = parseInt(key);
        
        if(!map[current + 1]){            
            if(counter > 0)
                return current + 1;
            else return current - 1 === 0 ? current + 1 : current - 1;
        }  
        
        counter++;
    }
    
    return 1;
}