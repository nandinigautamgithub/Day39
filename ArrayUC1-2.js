//uc1

const ARRAY_LENGTH = 10
const randArray10 = []
for (i = 0; i < 10; i++) {
    randArray10.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}
console.log(randArray10);

//sorted
var sorted = randArray10.slice().sort(function(a, b) {
  return a - b;
});

randArray10.sort(function(a, b) {
    return a - b;
});

console.log(randArray10);

//smallest, 2nd smallest, largest, 2nd largest
//uc2
var smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Second Smallest: ' + secondSmallest);
console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);


//uc3 (prime factorization)

function primeFactors(n)
{
     
    // Print the number of 2s that divide n
    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n / 2);
    }
 
    // n must be odd at this point.
    // So we can skip one element
    // (Note i = i +2)
    for(let i = 3;
            i <= Math.floor(Math.sqrt(n));
            i = i + 2)
    {
         
        // While i divides n, print i
        // and divide n
        while (n % i == 0)
        {
            console.log(i + " ");
            n = Math.floor(n / i);
        }
    }
 
    // This condition is to handle the
    // case when n is a prime number
    // greater than 2
    if (n > 2)
        console.log(n + " ");
}
 
// Driver code
let n = 315;
 
primeFactors(" primefactor of " + n +" are:");
 


//uc4(add 3number with 0)
arr = [0, -1, 2, -3, 1];
        
    function findTriplets(arr) {
        let found = false;
        for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log(arr[i]);
                    console.log(" ");
                    console.log(arr[j]);
                    console.log(" ");
                    console.log(arr[k]);
                    console.log("<br>");
                    found = true;
                    
                }
            }
        }
        // If no triplet with 0 sum found in array
        if(found === false) {
            console.log(" not exist ");
        }
    }
   }
    findTriplets(arr);

