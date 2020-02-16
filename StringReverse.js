// Reverse a string

// Bu array'i reverse ediyor
function reverse(arr){
    len = arr.length;
    let temp = [];

    for(let i=0; len>0; i++)
    {
        temp[i] = arr[len-1];
        len--; // len'i burada azaltarak gidiyorum, o yuzden for'daki kosul len>0 (unutma)
    }

    return temp;
}

arr = [1, 3, 4, 5, 2];

console.log(reverse(arr));


// String icin yazalim
function reverseStr(str){
    let temp = '';
    len = str.length;

    for(let i=len-1; i>=0; i--){ // Kosul bu sekilde de yazilabilir
        temp += str[i];
    }

    return temp;
}

str = 'username';

console.log(reverseStr(str));


// String icin kisa yontem
function reverse_secondWay(str){
    return str.split("").reverse().join("");
}

str = 'username';

console.log(reverse_secondWay(str));


// String icin farkli bir yontem
// temp kullanarak, ilk elemanla son elemanı swap yapiyoruz
// Verilen string'in boyutunun yarisi kadar for donmek yeterli olacaktir
// Henuz calismiyor
function reverse_thirdWay(str){
    let temp = 0;
    const len = str.length;
    const halfLength = Math.floor(len / 2);
  
    for(let i=0; i<halfLength; ++i)
    {
        temp = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = temp;
    }

    return str;
}

str = 'username';

//console.log(reverse_thirdWay(str));