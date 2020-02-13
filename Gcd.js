// How to find greatest common divisor of two numbers

// Genel Bilgi: Iki sayinin en buyuk ortak boleni, iki sayiyi da bolen ortak asal sayilarin carpimidir (cozumlerde gerekmedi)

// Iki sayidan biri 0'sa 0 don
// Iki sayidan biri 1'se 1 don
// Bolen sayi, iki sayidan da kucuk oldugu surece, ikisini de boluyorsa gcd olarak ata
// Her halukarda, divisor'i bir artir yine dene
function gcd1(num1, num2){
    let gcd = 1;
    let divisor = 2;

    if(num1 == 0 || num2 == 0)
        gcd = 0;

    if(num1 == 1 || num2 == 1)
        gcd = 1;

    while(divisor<=num1 && divisor<=num2)
    {
        if(num1%divisor==0 && num2%divisor==0)
            gcd = divisor;

        divisor++;
    }

    return gcd;
}

console.log(gcd1(33,11));


// Bu sekilde bir yontem var
// Anlamaya calis
function gcd2(num1, num2)
{
    if(num2 == 0)
      return num1;
    else 
      return gcd2(num2, num1%num2);
 }