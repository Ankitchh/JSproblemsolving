// uncomment the code to cheak(command = ctri+/)

//1. Write js function to cheak whether the input is array or not.

// method 1

// function cheak(inp){
//     return inp instanceof Array;
// }

// console.log(cheak(12));
// console.log(cheak([12]));
// console.log("Array");

// method 2

// function cheak(inp){
//     return Array.isArray(inp);
// }

// console.log(cheak(12));
// console.log(cheak([12]));
// console.log("Array");



// 2. Write a js function to clone an array.

// function cloneing (inp){
//     var cloned = [...inp];
//     return cloned;
// }

// console.log(cloneing([1,2,[3],4,5]));



//3. Write a js function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// function getter(inp , get=1){
//     var cloned = [];
//     for(i=0; i<get; i++){
//         cloned.push(inp[i]);
//     }
//     return cloned;
// }

// console.log(getter([9,8,7,6,1,2,3]));
// console.log(getter([9,8,7,6,1,2,3],3));
// console.log(getter([9,8,7,6,1,2,3],-3));
// console.log(getter([9,8,7,6,1,2,3],'4'));



// 4. Write a simple js program to join all elements of the following array into a string.

// function joiner(inp){
//     return inp.join("+")
// }

// console.log(joiner(["apple","banana","cherry","mango","doge"]));