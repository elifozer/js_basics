// Verify a prime number

// Asal sayi sadece 1'e ve kendine bolunur
// Sayi 1 ise, asal degil
// Sayiyi 2'ye bolerek baslariz
// Kalan 0 ise asal degil, kalan yoksa 2'yi bir artirir tekrar deneriz
// Bu sekilde sayinin kendisine kadar bolerek ilerleriz
// En son hep kalan olduysa, yani mod hic bir sayi icin 0 olmadiysa asaldir

function isPrime(num){
    let divisor = 2;

    if(num == 1)
        return false;

    while(divisor < num){
        if(num % divisor == 0)
            return false;
        else
            divisor++;
    }

    return true;
}

console.log(isPrime(1));
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(2));
console.log(isPrime(8));