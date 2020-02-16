// Find prime factors of a number

// Bir sayinin asal bolenlerini bulmak

// bir sayiyi surekli 2'ye bolerek baslariz
// kalan yoksa 2 bir asal carpan
// else edilen sonucu (n/2) 2/ye bolerek devam ederiz
// kalan varsa 2'yi 1 artirip sayiyi bu sefer en bastan, 3'e bolerek ilerleriz
// bu sekilde en son asal carpanlari bulmus oluruz
function findPrimeFactors(num){
    let factors = [];
    let divisor = 2;

    while(num > 2){
        if(num % divisor == 0){
            factors.push(divisor);
            num = num/divisor;
        }
        else
        {
            divisor++;
        }   
    }

    console.log(factors);
}

findPrimeFactors(45);
findPrimeFactors(30);