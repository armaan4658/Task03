// Function to right-rotate an array by one position 
let rightRotateByOne=  function (A)
{
    let last = A[A.length - 1];
    for (let i = A.length - 2; i >= 0; i--) {
        A[i + 1] = A[i];
    }
    A[0] = last;
}
let A = [ 1, 2, 3, 4, 5, 6, 7] ;
let k = 3;
//function to right rotate an array with k positions
(function(a,k){
    for (let i = 0; i < k; i++) {
        rightRotateByOne(a);
        
    }
})(A,k);
console.log(A);