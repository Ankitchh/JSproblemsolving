// 1. Given a string, reverse each word in the sentence.
var str = "saree jaha seh achha hindusthan hamara"
var saved = str.split(" ").map(function(word){
    return word.split("").reverse().join("");
})
console.log(saved.join(" "));

// 2. How to cheak if an object is an array or not?

function cheakarr(elem){
    return Array.isArray(elem);
}

console.log(cheakarr([]));
console.log(cheakarr({}));

// 3. How to empty an array in java script? and do not reset it to a new array, and do not loop through to pop each value.

var arr=[1,2,3,4,5];
console.log(arr);
arr.length = 0;
console.log(arr);

// 4. How would you cheak if a number is an integer? without using Number.isInteger()
var a = 12;
// console.log(Number.isInteger(a));

if (a%1===0){
    console.log("Is an Integer");
}
else{
    console.log("Not an Integer")
}

//5. Make this work : Duplicate ([1,2,3,4,5]); to ([1,2,3,4,5,1,2,3,4,5])

function duplicate(arr){
    return arr.concat(arr);
    // here arr.concat(arr) mean add val of arr in the arr. 
}
console.log(duplicate([1,2,3,4,5]));

// 6. write a java script function that reverse a number

function reverseNum(num){
    return Number(num.toString().split("").reverse().join(""));
    
}

console.log(reverseNum(89));
console.log(reverseNum(562398));

// or
function reverseNum2 (num2){
    var rev =0;
    while(num2>0){
        var rem = num2%10;
        rev = rev*10+rem;
        // .floor remove the decimal part
        num2 = Math.floor(num2/10);
    }
    return rev;
}
console.log(reverseNum2 (5483215))

// 7.Write a javascript function that checks wether a passed string is palindrome or not.

function strPalCheaker(pal){
    var reversed = pal.split("").reverse().join("");
    if(reversed === pal){
        return "The word "+pal+" is a palindrome";
    }
    else{
        return "The word "+pal+" is not a palindrome";
    }

    // or
    // return reversed === pal; //(it will give true or false)
}

console.log(strPalCheaker("poop"));
console.log(strPalCheaker("loop"));


// 8. Write a Javascript function that returns a passed string with letters in alphabetical order.

function sringAlphabrticalOrder(str){
    return str.split('').sort().join("");
}

console.log(sringAlphabrticalOrder("ankit"))

// 9. Write a Javascript function that accepts a string as a parameter and converts the first letter of each string in upper case

function strCapitalize(str){
   var caps = str.split(" ").map(function (word){
        return word.charAt(0).toUpperCase()+word.substring(1);
    })
    return caps.join(" ");
}

console.log(strCapitalize("my name is ankit chhetri"));

// 10. Write a Jawascript function to get the number of occurences of each letter in specified string

function occ (str){
    var occurences = {};
    str.split("").forEach(function (elem){
        if(occurences.hasOwnProperty(elem)===false){
            occurences[elem]= 1;
        }
        else{
            occurences[elem]++;
        }
    })
    return occurences;
}
console.log(occ("ankita chhetri"));

// 11. Loop an array and add all member of it 

var arr = [1,2,3,4,5,6,7,8,9];
var sum = 0;
arr.forEach(function (elem) {
    sum += elem;
}) 
console.log(sum);

// 12. In an array of numbers and strings, only add those members which are not strings

var arr = [1,"something",55,"anything","add",77,"ankit",5];
var add = 0;
arr.forEach(function (elem){
    if(typeof elem === "number"){
        add += elem;
    }

})

console.log(add);