//////////////////////////////////////////////
/*                  BÀI 1                   */
//////////////////////////////////////////////
const members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];

function filterOutFemales(arr){
    var output = [];
    for (let x in arr){
        if(arr[x].gender != 'female'){
            output.push(arr[x]);
        }
    }
    return output;
}

output1 = members.filter(element => element.gender != 'female');
output2 = filterOutFemales(members)

console.log('//BÀI 1//')
console.log(output1)
console.log(output2)

//////////////////////////////////////////////
/*                  BÀI 2                   */
//////////////////////////////////////////////

work2Arr = [1, 2, 3, 4, 7];
work2Arr1 = [1, 2, 3, 4, 5, 6, 7];

function diffArr(arr1, arr2){
    var output = [];
    //hack in order to use the longer array 
    if (arr1.length >= arr2.length){
        arr1.forEach(element => {
            if(!arr2.includes(element)){
                output.push(element);
            }
        })
        return output;
    } else {
        arr2.forEach(element => {
            if(!arr1.includes(element)){
                output.push(element);
            }
        })
        return output;
    }   
}


outputWork2 = diffArr(work2Arr, work2Arr1);
console.log('//BÀI 2//')
console.log(outputWork2);


//////////////////////////////////////////////
/*                  BÀI 3                   */
//////////////////////////////////////////////

work3Arr = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
];

console.log('//BÀI 3//')
work3Arr.forEach(element => console.log(element))
