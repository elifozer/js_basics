// Remove duplicate members from an array

// exists arrayi ornegin 1 sayisini 1. gozde, 7 sayisini 7. gozde tutuyor
// sayilari gozlere ekliyorum (goz null ise)
// daha sonra gereksiz alanlari almamak adina, degerleri removed arrayine atiyorum
function removeDup(arr){
    exists = [];
    removed = [];

    for(let i=0; i<arr.length; i++){
        if(exists[arr[i]]==null){
            exists[arr[i]]=arr[i];
        }
    }

    for(let j=0; j<exists.length; j++){
        if(exists[j] != null)
            removed.push(exists[j]);
    }

    return removed;
}

arr=[1, 1, 2, 2, 2, 3, 1, 3, 5, 4, 0];

console.log(removeDup(arr));