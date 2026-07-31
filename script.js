        }
const arr = [1, 2, 3, 4, 1, 0, 2, 2];

let arr = [4,3,2,1];
let n = 3;
let chunk =[];
let sum = 0;
let result = [];
for(let i =0;i<arr.length;i++){
    if(sum + arr[i]<= n){
        chunk.push(arr[i])
        sum= sum + arr[i];
    } else{
        result.push(chunk);
        chunk = [arr[i]];
        sum = arr[i];
    }
  
}
result.push(chunk);

console.log(result);

const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));