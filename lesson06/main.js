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

console.log(output1)
console.log(output2)

//////////////////////////////////////////////
/*                  BÀI 2                   */
//////////////////////////////////////////////

