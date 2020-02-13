// How to get nth Fibonacci number

// Fibonacci sayilari kendinden bir ve iki onceki Fibonacci sayisinin toplamina esittir
// Yani, n = (n-1) + (n-2)
// Base, 1. ve 2. Fibonacci sayilari 1

function getFibRec(num){
    while(num > 2){
        return getFibRec(num-1) + getFibRec(num-2)
    }

    return 1;
}

console.log(getFibRec(1));
console.log(getFibRec(2));
console.log(getFibRec(5));
console.log(getFibRec(6));

// Recursive olmadan nasil yaparim

function getFib(num){
    let myFib = [1, 1];

    if(num < 3)
        return myFib[num-1];
    
    for(let i=3; i<=num; i++)
    {
        myFib[i-1] = myFib[i-2] + myFib[i-3];
    }

    return myFib[num-1];
}

console.log(getFib(1));
console.log(getFib(2));
console.log(getFib(5));
console.log(getFib(6));