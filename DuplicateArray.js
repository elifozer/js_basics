// [1,2,3,4,5].duplicate();
// [1,2,3,4,5,1,2,3,4,5] seklinde calisacak kodu yazalim

// Dot notation kullandigi icin, array'e duplicate adinda prototip eklemek gerekiyor
Array.prototype.duplicate = function(){
    const len = this.length;

    if(len == 0)
        return 0;

    for(let i=0; i<len; i++){
        this.push(this[i]);
    }

    return this;
}

let arr = [1,2,3,4,5];

console.log(arr.duplicate());

