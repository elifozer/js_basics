// Swap numbers without using temp

// Diyelim x=10, y=7
// yeni sayilar soyle olmali:
// x = 10 - (aradaki fark)
// y = 7 + (aradaki fark)
function swapNoTemp(num1, num2){
    let difference = Math.abs(num1 - num2);

    if (num1 > num2){
        num1 = num1 - difference;
        num2 = num2 + difference;
    }
    else{
        num1 = num1 + difference;
        num2 = num2 - difference;
    }

    console.log(num1);
    console.log(num2);
}

swapNoTemp(65, 9);

// Daha temiz cozumu
// Diyelim sayilar 10 ve 7
// num2 = 7 - 10 = -3
// num1 = 10 + (-3) = 7
// num2 = 7 - (-3) = 10
function swapNoTemp2(num1, num2){
    num2 = num2 - num1;
    num1 = num1 + num2;
    num2 = num1 - num2;

    console.log(num1);
    console.log(num2);
}

swapNoTemp2(65, 9);