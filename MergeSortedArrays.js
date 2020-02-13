// Merge two sorted arrays

// MergeSort'un merge algoritmasinin aynisi
function mergeSortedArrays(arr1, arr2){
    merged = [];

    len1 = arr1.length;
    len2 = arr2.length;
    mergedLen = 0; // length of the merged array

    let i = 0;
    let j = 0;

    while(i<len1 || j<len2){
        if(arr1[i] <= arr2[j]){
            merged.push(arr1[i]);
            i++;
        }
        else{
            merged.push(arr2[j])
            j++
        }

        mergedLen++;      
    }

    if(i<len1){
        merged[mergedLen] = arr1[i];
        i++;
        mergedLen++;
    }

    if(j<len2){
        merged[mergedLen] = arr2[j];
        j++;
        mergedLen++;
    }

    return merged;
}

console.log(mergeSortedArrays([2,5,6,9], [1,2,3,29]));